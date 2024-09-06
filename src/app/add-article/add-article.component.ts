import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  html = "";
  titleblogg: string = "";
  articleObject = {}; //for api * - *
  // select option 
  category = [
    { abbrev: 'programing' },
    { abbrev: 'javascript' },
    { abbrev: 'sass' },
    { abbrev: 'nodeJS' },
    { abbrev: 'typescript' },
  ];
  descriptionUI: any;


  constructor(private apiSer: ApisService, private router: Router) { }
  ngOnInit() {
  }

  getEditorInstance(editorInstance: any) {
    this.descriptionUI = editorInstance;

  }


  /*photo upload */
  addImage(image: any, shiwImage: any) {
    image.click();
    image.onchange = function (event: any) {
      /////upload image
      const [file] = image.files
      if (file) {
        shiwImage.src = URL.createObjectURL(file)
      }
    }
  }
  cli(selected: any) {
    let date = new Date();
    date.toString();
    // data inter Object
    this.articleObject = {
      inner: this.html,
      title: this.titleblogg.substring(0, 18),
      dateAdd: date.toString().split("(Eastern European Standard Time)"),
      category: selected.value,
      description: this.descriptionUI.container.innerText.substring(0, 140),
      commentsUsers: [],
      totalLikes: 0
    }

    this.apiSer.api.push(this.articleObject);
    alert(" successfully");
    this.router.navigateByUrl("my-articles");
    console.log(this.apiSer.api);

  }



}
