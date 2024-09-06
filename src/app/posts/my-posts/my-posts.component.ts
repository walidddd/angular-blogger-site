import { Component, OnInit } from '@angular/core';
import { DataPostService } from '../services/data-post.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {
  userProfile: any;
  myDataPosts: any;
  numberLikes = 0;
  commentLength = 0;
  constructor(private dataPosts: DataPostService) { }

  ngOnInit(): void {
    this.userProfile = this.dataPosts.myProfile;
    this.myDataPosts = this.dataPosts.myProfile.myPosts; //this data posts for user


    for (const key in this.myDataPosts) {
      this.numberLikes += this.myDataPosts[key].totalLikes;
    }

  }


  // addLike
  ngOnDestroy() {
    for (const key in this.myDataPosts) {
      this.numberLikes += this.myDataPosts[key].totalLikes;
    }

  }
  addLike(x: any, i: any) {
    this.myDataPosts[i].likeActive = !this.myDataPosts[i].likeActive;
    let active = this.myDataPosts[i].likeActive;

    if (active == true) {
      let newLike = this.myDataPosts[i].totalLikes + 1;
      this.myDataPosts[i].totalLikes = newLike;
    } else {
      let newLike = this.myDataPosts[i].totalLikes - 1;
      this.myDataPosts[i].totalLikes = newLike;
    }

  }

  //addComment
  //addComment
  addComment(comment: any, i: any) {
    let objectCommentUser = { userName: "ahmed mohamed", userImage: "assets/images/user.png", parag: comment.value, dateComment: new Date().toString().split(" GMT+0200 (Eastern European Standard Time)") };
    this.dataPosts.allPosts[i].commentUsers?.unshift(objectCommentUser);
    console.log(this.myDataPosts);
    comment.value = "";

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
