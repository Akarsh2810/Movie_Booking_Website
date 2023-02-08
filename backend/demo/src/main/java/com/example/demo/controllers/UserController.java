package com.example.demo.controllers;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.models.User;
import com.example.demo.services.UserService;
import com.example.demo.utils.DemoApplicationConstants;
@RestController
public class UserController {
	@Autowired
	UserService userService;
	@CrossOrigin(value = "http://localhost:3000")
	@PostMapping("/user")
	ResponseEntity<Object> createUser(@RequestParam String emailId, @RequestParam String password) throws Exception {
		if (userService.findUserByMailId(emailId))
			return ResponseEntity.status(HttpStatusCode.valueOf(403)).body(
					"User already exists with mail " + emailId);
		User user = null;
		try {
			user = userService.createUser(emailId, password);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(403)).body(e.getLocalizedMessage());
		}
		Map<String, String> session = new HashMap<>();
		session.put(DemoApplicationConstants.sessionIdKey, user.getSessionId());
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(session);
	}
	@CrossOrigin(value = "http://localhost:3000")
	@PostMapping("/user/login")
	ResponseEntity<Object> loginUser(@RequestBody User user) {
		User loggedInUser = null;
		try {
			loggedInUser = userService.loginUser(user);
		} catch (NoSuchElementException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(e.getLocalizedMessage());
		}

		Map<String, String> session = new HashMap<>();
		session.put(DemoApplicationConstants.sessionIdKey, loggedInUser.getSessionId());
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(session);
	}
	@CrossOrigin(value = "http://localhost:3000")
	@PostMapping("/user/logout")
	ResponseEntity<Object> logoutUser(@RequestHeader(value = "session_id") String sessionId) {
		if (sessionId == null)
			return ResponseEntity.status(HttpStatusCode.valueOf(400)).body("Bad Request");
		try {
			if (Boolean.TRUE.equals(userService.validateUser(sessionId))) {
				userService.logoutUser(sessionId);
				return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(true);
			}
			return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(false);
		} catch (NoSuchElementException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(e.getLocalizedMessage());
		}

	}
	@CrossOrigin(value = "http://localhost:3000")
	@DeleteMapping("/user/delete")
	ResponseEntity<Object> deleteUser(@RequestHeader(value = "session_id") String sessionId) throws Exception {
		if (sessionId == null)
			return ResponseEntity.status(HttpStatusCode.valueOf(400)).body("Bad Request");
		if (Boolean.TRUE.equals(userService.validateUser(sessionId))) {
			userService.deleteUser(sessionId);
			return ResponseEntity.status(HttpStatusCode.valueOf(200)).body("User with session_id " + sessionId + " deleted");
		}
		else
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body("User not found");
	}
}