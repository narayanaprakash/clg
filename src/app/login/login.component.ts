import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{Route,Router} from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { StudentRegistrationService } from '../student-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  public loginInvalid!: boolean;
  private formSubmitAttempt!: boolean;
  private returnUrl!: string;
  submiited= false;
  messages:any;
  msg:any;
  constructor(
    private fb: FormBuilder,
    private route:Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
    private service:StudentRegistrationService
    ) {
      
    }


   ngOnInit() {
   
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
   }
   onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    this.submiited= true;
    if(this.form.invalid) {
      return
    }
    let res = this.service.check(this.form.value);
    // console.log(this.form.controls.email.value);
    // console.log(this.form.controls.password.value);
    res.subscribe((data) => {
    
      this.messages= data
      console.log(this.messages);
      if(this.messages=="success")
      {
        
        this.route.navigate(['/']);
        this.dialogRef.close()
      }
      else{
       this. msg="invalid username password";
       this.route.navigate(['/login']);
      }
     
     
    });
    
  }
  openDialog(): void {

    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '516px',
      height: '590px'
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
    this.dialogRef.close();
 
  }}
