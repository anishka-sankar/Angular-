import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountantService } from 'src/app/services/accountant.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  [x: string]: any;

  constructor(private accountantService:AccountantService) { }
  onDelete(student: any){
    if(confirm("Do you really want to delete this? ")) {
      this.accountantService.deletestudent(student.id)
        .subscribe((response: any) => {
          alert("Deleted Successfully")
          this.students = this.students.filter((eachStudents: { id: any; }) => eachStudents.id != student.id)
        }, (error: any) => {
          alert("Some error occured")
          console.log(error)
        })
    }
  }

  ngOnInit(): void {
  }

}
 

