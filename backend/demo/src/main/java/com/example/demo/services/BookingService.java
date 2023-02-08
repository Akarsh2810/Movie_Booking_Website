package com.example.demo.services;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.models.Booking;
import com.example.demo.repositories.BookingRepository;
@Service
public class BookingService {
	@Autowired
	BookingRepository bookingRepository;
	public Booking createBooking(Booking booking) {
		booking.setBookingId(UUID.randomUUID().toString());
		return bookingRepository.save(booking);
	}
	public List<Booking> getAllBookings() {
		return bookingRepository.findAll();
	}
	public Booking getBookingByBookingId(String booking_id) {
		return bookingRepository.findByBookingId(booking_id);
	}
	public Booking updateBookingByBookingId(String booking_id, Booking booking) throws Exception {
		Booking savedBooking = bookingRepository.findByBookingId(booking_id);
		if(savedBooking == null)
			throw new NoSuchElementException("No Booking found with booking_id " + booking_id);
		else {
			if(booking.getMovieName() != null) {
				savedBooking.setMovieName(booking.getMovieName());
			}
			if(booking.getBookingId() != null) {
				throw new Exception("Booking Id is not updatable");
			}
			if(booking.getDate() != null) {
				savedBooking.setDate(booking.getDate());
			}
			if(booking.getTimeSlot() != null) {
				savedBooking.setTimeSlot(booking.getTimeSlot());
			}
			if(booking.getVenue() != null) {
				savedBooking.setVenue(booking.getVenue());
			}
		}
		return bookingRepository.save(savedBooking);
	}
	public void deleteBookingByBookingId(String booking_id) throws Exception {
		Booking booking = bookingRepository.findByBookingId(booking_id);
		if(booking == null) throw new Exception("No Booking Found");
		else {
			bookingRepository.delete(booking);
		}
	}
}