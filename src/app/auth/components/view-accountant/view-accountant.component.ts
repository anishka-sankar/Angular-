import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-accountant',
  templateUrl: './view-accountant.component.html',
  styleUrls: ['./view-accountant.component.css']
})
export class ViewAccountantComponent implements OnInit {
title = 'datatables';
  dtOptions: DataTables.Settings = {};
  accountants: any;
  constructor(private http: HttpClient) { }

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

}
