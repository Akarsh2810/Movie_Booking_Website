package com.example.demo.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.Booking;
import com.example.demo.services.BookingService;
import com.example.demo.services.UserService;
@RestController
public class BookingController {
	@Autowired
	BookingService bookingService;
	@Autowired
	UserService userService;
	@CrossOrigin(value = "http://localhost:3000")
	@PostMapping("/booking")
	ResponseEntity<Object> createBooking(@RequestHeader(value = "session_id") String sessionId,
			@RequestBody Booking booking) {

		if (sessionId == null)
			return ResponseEntity.status(HttpStatusCode.valueOf(400)).body("Bad Request");
		if (userService.validateUser(sessionId))
			return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(bookingService.createBooking(booking));
		else
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body("User not found");
	}
	@CrossOrigin(value = "http://localhost:3000")
	@GetMapping("/bookings")
	ResponseEntity<Object> getAllBookings(@RequestHeader(value = "session_id") String sessionId) {
		if (sessionId == null)
			return ResponseEntity.status(HttpStatusCode.valueOf(400)).body("Bad Request");
		if (userService.validateUser(sessionId))
			return ResponseEntity.status(HttpStatusCode.valueOf(200))
					.body(bookingService.getAllBookings());
		else
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body("User not found");
	}
	@CrossOrigin(value = "http://localhost:3000")
	@GetMapping("/bookings/{booking_id}")
	ResponseEntity<Object> getBookingByBookingId(@RequestHeader(value = "session_id") String sessionId, @PathVariable String booking_id) {
		if (sessionId == null)
			return ResponseEntity.status(HttpStatusCode.valueOf(400)).body("Bad Request");
		if (userService.validateUser(sessionId))
			return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(bookingService.getBookingByBookingId(booking_id));
		else
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body("User not found");
	}
	@CrossOrigin(value = "http://localhost:3000")
	@PutMapping("/bookings/{booking_id}")
	ResponseEntity<Object> updateBookingByBookingId(@RequestHeader(value = "session_id") String sessionId, @PathVariable String booking_id, @RequestBody Booking booking) throws Exception {
		if (sessionId == null)
			return ResponseEntity.status(HttpStatusCode.valueOf(400)).body("Bad Request");
		if (userService.validateUser(sessionId))
			return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(bookingService.updateBookingByBookingId(booking_id, booking));
		else
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body("User not found");
	}
	@CrossOrigin(value = "http://localhost:3000")
	@DeleteMapping("/bookings/{booking_id}")
	ResponseEntity<Object> deleteBookingByBookingId(@RequestHeader(value = "session_id") String sessionId, @PathVariable String booking_id) throws Exception {
		if (sessionId == null)
			return ResponseEntity.status(HttpStatusCode.valueOf(400)).body("Bad Request");
		if (userService.validateUser(sessionId)) {
			bookingService.deleteBookingByBookingId(booking_id);
			return ResponseEntity.status(HttpStatusCode.valueOf(200)).body("Booking with booking_id " + booking_id + " deleted");
		}
		else
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body("User not found");
	}
}