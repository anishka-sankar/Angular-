import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountantService {

  apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
   getAccountantId(accountantName:string, accountantPassword:string){
    return this.http.get(this.apiUrl + '/accountantlogin/' + '/'+accountantName+ '/' + accountantPassword );
  }

  addStudent(student:any, accountantId:any){
    return this.http.post(this.apiUrl + 'accountantlogin/' + accountantId+ '/' + 'addStudent', student);
   
  }
}
