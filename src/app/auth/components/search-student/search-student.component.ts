import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountantService } from 'src/app/services/accountant.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {
  student:any
  noresultsfound: boolean=false
  constructor(private service:AccountantService) { }

  ngOnInit(): void {
  }
  search(f: NgForm) {

    this.service.searchstudent(f.value.studentId).subscribe(response => {
      if(response!=null){
        this.noresultsfound=false
        this.student=response
      }
      else{
        this.noresultsfound=true
        this.student=[]
      }
    }, error => {
      console.log(error)
    })
  }


}
