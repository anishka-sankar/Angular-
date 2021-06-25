import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-accountant',
  templateUrl: './edit-accountant.component.html',
  styleUrls: ['./edit-accountant.component.css']
})
export class EditAccountantComponent implements OnInit {

  accountant : any={
    accountantId:null, 
    name:null,
    password:null,
    contact:null, 
    emailId:null,
    address:null
  }
  constructor(private service: AdminService, private router: ActivatedRoute, private routeTo: Router) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.accountant.accountantId = params.get('accountantId')
      this.accountant.name = params.get('name')
      this.accountant.emailId = params.get('emailId')
      this.accountant.address = params.get('address')
      this.accountant.contact = params.get('contact')
      this.accountant.password = params.get('password')
      
      console.log(params)
      console.log(params.get('accountant'))
    })
  }
  onUpdate(update:NgForm){
    this.service.updateaccountant(update.value)
      .subscribe(response => {
        alert("Updated Successfully")
        this.routeTo.navigateByUrl('/view-accountant/');
      }, error => {
        alert("Some error occured")
        console.log(error)
      })
  }

}
