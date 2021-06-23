import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllStudentsOfAAccountant(accountantname: string){
    return this.http.get(this.apiUrl + '/students/accountant/' + accountantname);
  }

  postStudent(post: any){
    return this.http.post(this.apiUrl + '/students/student', post);
  }
}