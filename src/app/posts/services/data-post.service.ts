import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPostService {
  arryLikes: Array<object> = [];
  myProfile: any = {
    name: "ahmed mohamed", idUser: "ahmed_mohamed1", image: "/assets/images/user.png", myPosts: [
      { userName: "ahmed mohamed", date: " Published: September,15 2020 19:PM", pragraph: "Nam Eget Dui. Etiam Rhoncus. Maecenas Tempus, Tellus Eget Condimentum Rhoncus, Sem Quam Semper x.", imageSrc: "/assets/images/1.jpg", totalLikes: 0, commentUsers: [], usersLikes: [] },
      { userName: "ahmed mohamed", date: " Published: September,15 2020 19:PM", pragraph: "Nam Eget Dui. Etiam Rhoncus. Maecenas Tempus, Tellus Eget Condimentum Rhoncus, Sem Quam Semper Libero.", imageSrc: "/assets/images/1.jpg", totalLikes: 0, commentUsers: [], usersLikes: [] },
      { userName: "ahmed mohamed", date: " Published: September,15 2020 19:PM", pragraph: "Nam Eget Dui. Etiam Rhoncus. Maecenas Tempus, Tellus Eget Condimentum Rhoncus, Sem Quam Semper Libero.", imageSrc: "", totalLikes: 0, videoSrc: "<video controls width='100%'> <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4'><source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/ogg'></video>", commentUsers: [], usersLikes: [] },
    ]
  };


  allPosts: any = this.myProfile.myPosts;
  constructor() { }
}
