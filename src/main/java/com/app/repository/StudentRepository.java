package com.app.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{
	
	
	@Query("Select s from Student s where duefees >0")
	List<Student> findByDueFee();
	
	@Query("Select s from Student s ")
	List<Student> findAllStudentDeatils();

	

	Optional<Student> findByStudentId(Integer studentId);



	

	
}