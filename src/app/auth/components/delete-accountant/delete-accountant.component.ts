import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-delete-accountant',
  templateUrl: './delete-accountant.component.html',
  styleUrls: ['./delete-accountant.component.css']
})
export class DeleteAccountantComponent implements OnInit {
  [x: string]: any;
  constructor(private adminService:AdminService) { }
  onDelete(accountant: any){
    if(confirm("Do you really want to delete this? ")) {
      this.adminService.deleteaccountant(accountant.id)
        .subscribe((response: any) => {
          alert("Deleted Successfully")
          this.accountants= this.accountants.filter((eachAccountants: { id: any; }) => eachAccountants.id != accountant.id)
        }, (error: any) => {
          alert("Some error occured")
          console.log(error)
        })
    }
  }

  ngOnInit(): void {
  }

}
