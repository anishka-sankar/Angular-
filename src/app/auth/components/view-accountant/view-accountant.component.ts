import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-accountant',
  templateUrl: './view-accountant.component.html',
  styleUrls: ['./view-accountant.component.css']
})
export class ViewAccountantComponent implements OnInit {
title = 'datatables';
  dtOptions: DataTables.Settings = {};
  accountants: any;
  constructor(private http: HttpClient, private adminService: AdminService , private router:Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
  };
  this.http.get('http://localhost:8081/admin/viewaccountant')

      .subscribe(accountants => {
        this.accountants = accountants;
    });
  }
    onEdit(accountant:any){
      this.router.navigate(['/edit-accountant',accountant])
    }
    
    onDelete(accountantId: number){
      console.log(accountantId)
      if(confirm("Do you really want to delete this? ")) {
    
        this.adminService.deleteaccountant(accountantId)
          .subscribe(response => {
            alert("Deleted Successfully")
            this.accountants = this.accountants.filter(eachAccountants => eachAccountants.accountantId != accountantId)
          }, error => {
            alert("Some error occured")
            console.log(error)
          })
      }
    }





}


