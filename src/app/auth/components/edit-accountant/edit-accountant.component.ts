import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-accountant',
  templateUrl: './edit-accountant.component.html',
  styleUrls: ['./edit-accountant.component.css']
})
export class EditAccountantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 // onSubmit(f: NgForm) {
 //   console.log(f.value);  // { first: '', last: '' }
 //   console.log(f.valid);  // false
 // }
updateForm(update:NgForm){
    console.log(update.value,update.valid)

  }


}
