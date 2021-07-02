package com.app.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entity.Accountant;
import com.app.entity.Admin;

@Repository
public interface AccountantRepository extends JpaRepository<Accountant, Integer>{
	
	@Query("Select a from Accountant a where email_id=?1 and password=?2")
	Accountant findByEmailIdAndPassword(String emailId,String password);
	
	
	
	


	


	
}