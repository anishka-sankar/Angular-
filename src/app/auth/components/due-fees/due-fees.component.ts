import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-due-fees',
  templateUrl: './due-fees.component.html',
  styleUrls: ['./due-fees.component.css']
})
export class DueFeesComponent implements OnInit {

  accountantStudents: any[] = [];
 currentAccountant : string = '';
 constructor(private service: StudentService, private router: ActivatedRoute) { }

 ngOnInit(): void {
  this.currentAccountant = this.router.snapshot.params.accountantname;
  this.service.getAllStudentsOfAAccountant(this.currentAccountant)
    .subscribe(response => {
      this.accountantStudents = response as any[];
    }, error => {
      console.log(error);
    })}

  

}
