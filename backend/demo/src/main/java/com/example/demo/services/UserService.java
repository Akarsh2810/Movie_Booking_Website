package com.example.demo.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;
import java.util.regex.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.models.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {
	
	private String emailIdPattern = "^(.+)@(\\S+)$";
	
	@Autowired
	UserRepository userRepository;
	
	public User createUser(String userMailId, String password) throws Exception {
		if (!patternMatches(userMailId, emailIdPattern))
			throw new Exception("Not a valid mailId, please enter a valid mailId!");
		String sessionId = UUID.randomUUID().toString();
		User user = new User();
		user.setUserMailId(userMailId);
		user.setPassword(password);
		user.setSessionId(sessionId);
		return userRepository.save(user);
	}
	
	public Boolean validateUser(String sessionId) {
		List<User> users = userRepository.findBySessionId(sessionId);
		if (!users.isEmpty())
			return true;
		return false;
	}
	
	public User logoutUser(String sessionId) throws NoSuchElementException {
		List<User> users = userRepository.findBySessionId(sessionId);
		if (users.isEmpty()) throw new NoSuchElementException("User not found");
		User user = users.get(0);
		user.setSessionId(null);
		return userRepository.save(user);
	}
	
	public User loginUser(User user) throws NoSuchElementException {
		List<User> users = userRepository.findByUserMailId(user.getUserMailId());
		if (users.isEmpty())
			throw new NoSuchElementException("User not found");
		User savedUser = users.get(0);
		if (!savedUser.getPassword().equals(user.getPassword()))
			throw new NoSuchElementException("Password Incorrect");
		String sessionId = UUID.randomUUID().toString();
		savedUser.setSessionId(sessionId);
		return userRepository.save(savedUser);
	}
	
	public Boolean findUserByMailId(String emailId) {
		List<User> users = userRepository.findByUserMailId(emailId);
		if (!users.isEmpty())
			return true;
		return false;
	}
	
	public void deleteUser(String sessionid) throws Exception {
		List<User> users = userRepository.findBySessionId(sessionid);
		if(users.size() == 0) throw new Exception("No User Found");
		else userRepository.delete(users.get(0));
	}
	
	private boolean patternMatches(String emailAddress, String regexPattern) {
		return Pattern.compile(regexPattern).matcher(emailAddress).matches();
	}
	
}