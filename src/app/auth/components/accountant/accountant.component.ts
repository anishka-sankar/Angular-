import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountantService } from 'src/app/services/accountant.service';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {
  data:any={};
  errorMsg : boolean =false;
  constructor(private router: Router, private accountantService: AccountantService) { }

  

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.accountantService.getAccountantId(f.value.emailId, f.value.password).subscribe(response => {
      console.log(response)
      //console.log(this.data.accountantId)
      if(response != null){
        this.data =response;
        this.errorMsg=false
        this.router.navigateByUrl("/accountant-home")
       
      }
      else{
        this.errorMsg=true
      }
    }, error => {
      this.errorMsg=true
    })
  }
}
