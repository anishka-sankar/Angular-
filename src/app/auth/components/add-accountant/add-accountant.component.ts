import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-accountant',
  templateUrl: './add-accountant.component.html',
  styleUrls: ['./add-accountant.component.css']
})
export class AddAccountantComponent implements OnInit {
  errorMsg: boolean=false
 
  accountantObj={accountantId: null,
    address: null,
    contact: null,
    emailId: null,
    name: null,
    password: null
 }
  //adminService: any;
  constructor(private router: Router, private adminService: AdminService) { }

 
//  onSubmit(f: NgForm) {
 //   console.log(f.value);  // { first: '', last: '' }
 //   console.log(f.valid);  // false
 // }
add(accountant:NgForm){
  //  console.log(this.accountantObj)
    this.accountantObj=accountant.value
  
   console.log(this.accountantObj)
    this.adminService.addAccountant(this.accountantObj).subscribe((response) => {
      //console.log(response)
      alert("Posted successfully!!!")
      this.router.navigateByUrl("/add-accountant")
    }, error => {
      alert("error occured")
    })
  }
 ngOnInit(): void {
  }

 /* onSubmit(accountant: NgForm) {
    this.adminService.addAccountant(accountant.value.emailId).subscribe((response: null) => {
      console.log(response)
      if(response != null){
        this.errorMsg=false
       // this.router.navigateByUrl("/admin-home")
       
      }
      else{
        this.errorMsg=true
      }
    }, error => {

    })
  }

*/  
  

}
