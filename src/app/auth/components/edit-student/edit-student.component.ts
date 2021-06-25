import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountantService } from 'src/app/services/accountant.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student : any={
    studentId:null, 
    contactno:null, 
    course:null, 
    duefees:null, 
    emailId:null,
    fee:null,
    gender:null, 
    paid:null, 
    student_name:null, 
    address:null
  }
  constructor(private service: AccountantService, private router: ActivatedRoute, private routeTo: Router) { }

  ngOnInit(): void {
   
    this.router.paramMap.subscribe(params => {
      this.student.studentId = params.get('studentId')
      this.student.studentName = params.get('studentName')
      this.student.emailId = params.get('emailId')
      this.student.address = params.get('address')
      this.student.contactno = params.get('contactno')
      this.student.fee = params.get('fee')
      this.student.paid = params.get('paid')
      this.student.duefees = params.get('duefees')
      
      console.log(params)
      console.log(params.get('student'))
     // this.student = JSON.parse(this.classified)
      //this.classified.postedDate = new Date()
      //console.log(this.classified)
    })
  }

  onUpdate(update:NgForm){
    console.log(update)
    this.service.updatestudent(update.value)
      .subscribe(response => {
        alert("Updated Successfully")
        this.routeTo.navigateByUrl('/view-student/');
      }, error => {
        alert("Some error occured")
        console.log(error)
      })
  }


}
