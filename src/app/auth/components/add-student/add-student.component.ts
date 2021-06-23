import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountantService } from 'src/app/services/accountant.service';
// import { AccountantComponent } from '../accountant/accountant.component';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  errorMsg: boolean=false;
  @Input() id:any=[];
  constructor(private router: Router, private accountantService: AccountantService) { }

 
//  onSubmit(f: NgForm) {
 //   console.log(f.value);  // { first: '', last: '' }
 //   console.log(f.valid);  // false
 // }
add(student:NgForm){
    this.accountantService.addStudent(student,this.id).subscribe((response) => {
      console.log(response)
      alert("Posted successfully!!!")
      this.router.navigateByUrl("/add-student")
    }, error => {
      alert("error occured")
    })
  }
 ngOnInit(): void {
  console.log(this.id);
  }

 
  //onSubmit(f: NgForm) {
  //  console.log(f.value);  // { first: '', last: '' }
   // console.log(f.valid);  // false
  //}
  

  
}
