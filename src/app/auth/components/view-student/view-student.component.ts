import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  students: any;
 constructor(private http: HttpClient) { }

 ngOnInit(): void {
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5,
    processing: true
}

this.http.get('http://localhost:8081/accountantlogin/studentDetails')

      .subscribe((students) => {
        this.students = students;
    });

}

}
