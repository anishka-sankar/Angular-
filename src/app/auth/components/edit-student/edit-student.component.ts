import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
//  onSubmit(f: NgForm) {
//    console.log(f.value);  // { first: '', last: '' }
//    console.log(f.valid);  // false
//  }
updateForm(update:NgForm){
    console.log(update.value,update.valid)

  }

}
