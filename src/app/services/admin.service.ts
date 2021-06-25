

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl: string = environment.apiBaseUrl;
  name: string="";

  constructor(private http: HttpClient) { }
   getAdminPassword(adminname: string, password: string){
    return this.http.get(this.apiUrl + '/admin/' + adminname+'/'+password);
  }

  addAccountant(accountant:any){
    return this.http.post(this.apiUrl + '/admin/addaccountant',accountant);
   
  }

  updateaccountant(accountant: any){
    return this.http.put(this.apiUrl + '/adminlogin/update/'+accountant.accountantId, accountant);
  }

  deleteaccountant(accountantId: number){
    console.log(accountantId)
    return this.http.delete(this.apiUrl + '/adminlogin/delete/' + accountantId,  {responseType: 'text'});
  }

}
