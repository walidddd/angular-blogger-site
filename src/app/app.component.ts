import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blogger1';
  @ViewChild('myDiv')
  el!: ElementRef;
  constructor() {

  }

  ngOnInit() {


  }
  //scroll
  ngAfterViewInit() {
    window.onscroll = () => {
      if (window.pageYOffset >= 200) {
        this.el.nativeElement.classList.add("fixed-nav");
      } else {
        this.el.nativeElement.classList.remove("fixed-nav");
      }
      console.log()
    }


  }
  done() {
    document.getElementById("navbarNav")?.classList.remove("show")
  }

}
