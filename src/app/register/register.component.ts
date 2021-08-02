import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import{Route,Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { StudentRegistrationService } from '../student-registration.service';

interface Cities {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // City: Cities[] = [
  //   {value: 'chennai-0', viewValue: 'Chennai'},
  //   {value: 'Covai-1', viewValue: 'Covai'},
  //   {value: 'Madhurai-2', viewValue: 'Madhurai'},
  //   {value:'other-3',viewValue:'other'}
  // ];
  loginForm!:FormGroup;
  submitted = false;
  messages:any;
  value:any
 constructor(private fb:FormBuilder,private route:Router, private service:StudentRegistrationService,public dialog: MatDialog,
  public dialogRef: MatDialogRef<RegisterComponent>){
 }

 ngOnInit(): void {
   this.loginForm=this.fb.group({
     email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
     password:['',[Validators.required,Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
     name:['',[Validators.required]],
     address:['',[Validators.required]]
   });
  //  ,Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
 }
 
 public onsubmit(){
   console.log(this.loginForm.value.password);
   console.log("value:"+this.loginForm.value.city);
   this.submitted = true;
   if(this.loginForm.invalid) {
     return
   }
 
  let res = this.service.registration(this.loginForm.value);
       
  res.subscribe((data) => {
    console.log(data);
  
    this.messages= data,
    console.log(this.messages);
    this.dialogRef.close()
    const dialogRef = this.dialog.open(LoginComponent, {

      width: '516px',
     height: '371px'
   });
   
  });
  
 
}
 
}
