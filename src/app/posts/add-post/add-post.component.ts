import { Component, OnInit } from '@angular/core';
import { DataPostService } from '../services/data-post.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  myProfile: any; // information profile user 
  addPosts: FormGroup;

  constructor(fb: FormBuilder, private dataPost: DataPostService) {
    this.myProfile = dataPost.myProfile // information profile user 
    this.addPosts = fb.group({
      pragraph: ["", [Validators.required]],
      image: [""],
      video: [""],
      userName: this.myProfile.name,
      date: new Date,
      totalLikes: 0
    });
  }

  //on submit
  submit(pragraph: any) {
    if (pragraph.value !== "") {
      this.addPosts.value.commentUsers = [];
      let newPost = this.addPosts.value;
      this.dataPost.allPosts.unshift(newPost);
      pragraph.value = "";
    }
    console.log(this.addPosts.value)
  }

  ngOnInit(): void {
  }


  addImage(image: any) {
    image.click();
    image.onchange = function (event: any) {
      /////upload image
    }
  }
  addVideo(video: any) {
    video.click();
    video.onchange = function () {
      /////upload video
    }
  }

}
