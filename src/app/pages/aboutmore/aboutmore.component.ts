import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutmore',
  templateUrl: './aboutmore.component.html',
  styleUrls: ['./aboutmore.component.scss']
})
export class AboutmoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }


}
