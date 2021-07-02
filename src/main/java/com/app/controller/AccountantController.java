package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Accountant;
import com.app.entity.Admin;
import com.app.entity.Student;
import com.app.repository.AccountantRepository;
import com.app.repository.StudentRepository;


@RestController
public class AccountantController {
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private AccountantRepository accountantRepo;
	
	@GetMapping("/accountantlogin/{emailId}/{password}")
	public Accountant getAccountantByEmailIdAndPassword(@PathVariable String emailId, @PathVariable String password ) {
		return accountantRepo.findByEmailIdAndPassword(emailId,password);
	}

	
	@GetMapping("/accountantlogin/studentDetails")
	public List<Student> getAllStudentDetails() {
		return studentRepo.findAllStudentDeatils();
	}

	
	@GetMapping("/accountantlogin/{studentId}")
	public Optional<Student> getStudentById( @PathVariable Integer studentId) {
		return studentRepo.findByStudentId(studentId);
	}

	
	
	@PostMapping("/accountantlogin/addStudent")
	public Student addANewStudent(@RequestBody Student student) {
		studentRepo.save(student);
		return student;
	}
	
	
	
	@Modifying
	@PutMapping("/accountantlogin/update/{studentId}")
	public Student updateStudentDetails(@RequestBody Student student, @PathVariable Integer studentId) {
		student.setStudentId(studentId);
		studentRepo.save(student);
		return student;
	}
	
	
	@DeleteMapping("/accountantlogin/delete/{studentId}")
	public String deleteStudent( @PathVariable Integer studentId) {
		studentRepo.deleteById( studentId );
		return "DeletedSuccessfully";
	}
	


	
	@GetMapping("/accountantlogin/duefees")
	public List<Student> getStudentByDueFees() {
		return studentRepo.findByDueFee();
	}
	

}
