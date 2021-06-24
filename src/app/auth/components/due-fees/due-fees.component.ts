import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountantService } from 'src/app/services/accountant.service';

@Component({
  selector: 'app-due-fees',
  templateUrl: './due-fees.component.html',
  styleUrls: ['./due-fees.component.css']
})
export class DueFeesComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  students : any=[];
 constructor(private http: HttpClient, private accountantService:AccountantService, private router:Router) { }

 ngOnInit(): void {
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5,
    processing: true
}

this.http.get('http://localhost:8081/accountantlogin/duefees')

      .subscribe((students) => {
        this.students = students;
    });

}

  

}
