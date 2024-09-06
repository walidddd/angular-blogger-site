import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-article-edite',
  templateUrl: './article-edite.component.html',
  styleUrls: ['./article-edite.component.scss']
})
export class ArticleEditeComponent implements OnInit {

  oldObject: any = this.apiSer.api[this.apiSer.index]; // before edite
  selectx: any = this.oldObject.category;
  html: any = this.oldObject.inner;
  titleblogg: any = this.oldObject.title;
  articleObject = {}; //after edite * - *
  // select option 
  category = [
    { name: 'programing', abbrev: 'programing' },
    { name: 'javascript', abbrev: 'javascript' },
    { name: 'sass', abbrev: 'sass' },
    { name: 'nodeJS', abbrev: 'nodeJS' },
    { name: 'typescript', abbrev: 'typescript' },
  ];
  selec: any;
  descriptionUI: any;

  constructor(private router: Router, private apiSer: ApisService) {

  }
  getEditorInstance(editorInstance: any) {
    this.descriptionUI = editorInstance;

  }

  ngOnInit(): void {

  }

  //this a data enter //edite
  actionEdite(selected: any) {
    let date = new Date();
    date.toString();

    this.articleObject = {  /*this Oject after Edite*/
      inner: this.html,
      title: this.titleblogg.substring(0, 18),
      dateAdd: date.toString().split("(Eastern European Standard Time)"),
      category: selected.value,
      description: this.descriptionUI.container.innerText.substring(0, 140)
    }
    this.apiSer.actionE(this.articleObject); // this a new object after editer //send to services

    alert("Edited successfully");
    this.router.navigateByUrl("my-articles");
  }
}
