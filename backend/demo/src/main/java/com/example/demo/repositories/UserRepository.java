package com.example.demo.repositories;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.models.User;
@Repository
public interface UserRepository extends MongoRepository<User, String> {
	public List<User> findBySessionId(String sessionId);
	public List<User> findByUserMailId(String userMailId);
}