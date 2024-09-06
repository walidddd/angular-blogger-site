import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataPostService } from '../services/data-post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  allDataPosts: any;
  myProfile: any;

  //get data all POSTS and Myprofile 
  constructor(private dataPosts: DataPostService) {
    this.allDataPosts = this.dataPosts.allPosts;
    this.myProfile = dataPosts.myProfile;
  }

  ngOnInit(): void { }

  // addLike
  addLike(x: any, i: any) {
    this.allDataPosts[i].likeActive = !this.allDataPosts[i].likeActive;
    let active = this.allDataPosts[i].likeActive;

    if (active == true) {
      x.classList.add("active")
      let newLike = this.allDataPosts[i].totalLikes + 1;
      this.allDataPosts[i].totalLikes = newLike;
    } else {
      x.classList.remove("active")
      let newLike = this.allDataPosts[i].totalLikes - 1;
      this.allDataPosts[i].totalLikes = newLike;
    }
  }

  //addComment
  //addComment
  addComment(comment: any, i: any) {
    let objectCommentUser = { userName: this.myProfile.name, userImage: this.myProfile.image, parag: comment.value, dateComment: new Date().toString().split(" GMT+0200 (Eastern European Standard Time)") };
    this.dataPosts.allPosts[i].commentUsers?.unshift(objectCommentUser);
    comment.value = "";
    console.log(this.allDataPosts);

  }

  showAllComments(allcomments: any) {
    allcomments.classList.add("show");
    document.getElementById("show")?.classList.add("d-none");
  }
  ///show user Likes
  showUserLikes(userlikes: any) {
    userlikes.classList.remove("d-none");
  }
  hideUserLikes(userlikes: any) {
    userlikes.classList.add("d-none")
  }

}
