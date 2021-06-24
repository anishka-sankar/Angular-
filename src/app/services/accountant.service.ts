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

  addStudent(student:any){
    return this.http.post(this.apiUrl + '/accountantlogin/addStudent', student);
   
  }

  updatestudent(student: any){
    return this.http.put(this.apiUrl + '/accountantlogin/update/'+student.studentId, student);
  }

  deletestudent(studentId: number){
    console.log(studentId)
    return this.http.delete(this.apiUrl + '/accountantlogin/delete/' + studentId,  {responseType: 'text'});
  }

  searchstudent(studentId: number){
    return this.http.get(this.apiUrl + '/accountantlogin/' + studentId);
  }
}
