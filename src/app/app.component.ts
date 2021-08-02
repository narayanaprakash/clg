import { Component,OnInit ,Input, Inject} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showMe:boolean=true;
  
  constructor(
    
    private modalService: NgbModal,
    public dialog: MatDialog
  ) {}
   
   ngOnInit() {
   

  }
 show(){
   
  // this.showMe=!this.showMe
 }
 contact(){
//   this.showMe=!this.showMe
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}
