package com.app.controller;

import java.util.List;
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
import com.app.repository.AccountantRepository;
import com.app.repository.AdminRepository;



@Transactional 

@RestController
public class AdminController {

	@Autowired
	private AdminRepository adminRepo;

	@Autowired
	private AccountantRepository accountantRepo;

	
	@GetMapping("/admin/{emailId}/{password}")
	public Admin getAdminByEmailIdAndPassword(@PathVariable String emailId, @PathVariable String password ) {
		return adminRepo.findByEmailIdAndPassword(emailId,password);
	}

	
	@PostMapping("/admin/addaccountant")
	public Accountant addAccountant(@RequestBody Accountant accountant) {
		accountantRepo.save(accountant);
		return accountant;
	}

	
	@GetMapping("/admin/viewaccountant")
	public List<Accountant> viewAccountant() {
		return accountantRepo.findAll();
	}
	
	 @Modifying
	 @PutMapping("/adminlogin/update/{accountantId}")
		public Accountant updateAccountantDetails(@RequestBody Accountant accountant, @PathVariable Integer accountantId) {
			accountant.setAccountantId(accountantId);
			accountantRepo.save(accountant);
			return accountant;
		}
		
		
		@DeleteMapping("/adminlogin/delete/{accountantId}")
		public String deleteAccountant( @PathVariable Integer accountantId) {
			accountantRepo.deleteById(accountantId );
			return "DeletedSuccessfully";
		}
	

}
