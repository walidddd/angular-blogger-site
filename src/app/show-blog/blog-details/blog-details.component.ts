import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogDetailsComponent implements OnInit {
  p: any = 1;

  /** */
  page: any;
  dataArticle: any;
  comments: any;
  // This is the comment groups for this article
  constructor(private apiSer: ApisService, private rouite: ActivatedRoute, private addRouit: Router) {
    this.rouite.paramMap.subscribe(f => {
      const idPage = f.get("index");
      this.page = idPage;
    })
  }

  ngOnInit(): void {

    this.dataArticle = this.apiSer.api[this.page];
    this.comments = this.dataArticle.commentsUsers


  }

  // hide and show more blog
  more(div: any, button: any) {
    div.classList.add("more");
    button.classList.add("d-none")
    document.getElementById("hide")?.classList.remove("d-none");
  }
  hide(div: any, button_hide: any) {
    div.classList.remove("more");
    button_hide.classList.remove("d-none")
    document.getElementById("hide")?.classList.add("d-none");
    document.getElementById("load")?.classList.remove("d-none");

  }

  //comments function
  cancel(textarea: any) {
    textarea.value = "";
  }
  // addComment
  addComment(input: any, name: any) {
    if (input.value === "") {
      input.focus()
    } else {
      let objectUserComment = {
        name: name.textContent,
        date: new Date().toString().split("GMT+0200 (Eastern European Standard Time)"),
        comment: input.value
      }
      this.comments.unshift(objectUserComment);
      input.value = "";

      console.log(this.dataArticle)
    }
  }
  /*add like */
  addLike() {
    this.dataArticle.like = !this.dataArticle.like;
    if (this.dataArticle.like == true) {
      let newLike = this.dataArticle.totalLikes + 1;
      this.dataArticle.totalLikes = newLike;
    } else {
      let newLike = this.dataArticle.totalLikes - 1;
      this.dataArticle.totalLikes = newLike;
    }
    console.log(this.dataArticle)
  }
}
