import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  errorMsg : boolean =false;
  constructor(private router: Router, private adminService: AdminService) { }

  

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.adminService.getAdminPassword(f.value.username, f.value.password).subscribe(response => {
      console.log(response)
      if(response != null){
        this.errorMsg=false
        this.router.navigateByUrl("/admin-home")
       
      }
      else{
        this.errorMsg=true
      }
    })
  }
}
