import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService{
            
    constructor(private http:HttpClient){}
    public registration(Student: any) {
        return this.http.post("http://localhost:8080/createStudent", Student, { responseType: 'text' as 'json' });
      }
      
      public check(Student: any) {
        return this.http.post("http://localhost:8080/checkCredentials", Student, { responseType: 'text' as 'json' });
      }
}