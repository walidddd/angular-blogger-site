import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  api: any = [
    { inner: "<p>dsaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaaaaa</p> ", title: "programing languagsae", like: false, totalLikes: 1, dateAdd: 'Mon Sep 06 2021 09:56:43', category: "programing", description: "Morbi imperdiet placerat mi in volutpat. Donec lobortis sagittis nisl, et nullam. Etiam placerat sodales tortor fringilla sed" },
    { inner: "<p>dsaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaaaaa</p> ", title: "programing languagsae", commentsUsers: [{ name: "Hassen Mohamed", date: "October 29, 2020 at 1:20 p ", comment: "Phasellus quis quam sed laoreet iaculis dignissim non, dictum est, et malesuada fames ac elit sed condimentum faucibus eros. Vestibulum non ante. Vivamus euismod. Nulla facilisi. Nam ut lobort" }], like: false, totalLikes: 0, dateAdd: 'Mon Sep 06 2021 09:56:43', category: "programing", description: "Morbi imperdiet placerat mi in volutpat. Donec lobortis sagittis nisl, et nullam. Etiam placerat sodales tortor fringilla sed" },
    { inner: "<p>dsaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaaaaa</p>", title: "programing languagsae", like: false, totalLikes: 0, dateAdd: 'Mon Sep 06 2021 09:56:43', category: "programing", commentsUsers: [], description: "Morbi imperdiet placerat mi in volutpat. Donec lobortis sagittis nisl, et nullam. Etiam placerat sodales tortor fringilla sed" },
    { inner: "<p>dsaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaaaaa</p>", title: "programing languagsae", like: false, totalLikes: 0, dateAdd: 'Mon Sep 06 2021 09:56:43', category: "programing", commentsUsers: [], description: "Morbi imperdiet placerat mi in volutpat. Donec lobortis sagittis nisl, et nullam. Etiam placerat sodales tortor fringilla sed" },
    { inner: "<p>dsaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaaaaa</p>", title: "programing languagsae", like: false, totalLikes: 0, dateAdd: 'Mon Sep 06 2021 09:56:43', category: "programing", commentsUsers: [], description: "Morbi imperdiet placerat mi in volutpat. Donec lobortis sagittis nisl, et nullam. Etiam placerat sodales tortor fringilla sed" },
    { inner: "<p>dsaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaaaaa</p>", title: "programing languagsae", like: false, totalLikes: 0, dateAdd: 'Mon Sep 06 2021 09:56:43', category: "programing", commentsUsers: [], description: "Morbi imperdiet placerat mi in volutpat. Donec lobortis sagittis nisl, et nullam. Etiam placerat sodales tortor fringilla sed" },
    { inner: "<p>dsaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaaaaa</p>", title: "programing languagsae", like: false, totalLikes: 0, dateAdd: 'Mon Sep 06 2021 09:56:43', category: "programing", commentsUsers: [], description: "Morbi imperdiet placerat mi in volutpat. Donec lobortis sagittis nisl, et nullam. Etiam placerat sodales tortor fringilla sed" },
    { inner: "<p>dsaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaaaaa</p>", title: "programing languagsae", like: false, totalLikes: 0, dateAdd: 'Mon Sep 06 2021 09:56:43', category: "programing", commentsUsers: [], description: "Morbi imperdiet placerat mi in volutpat. Donec lobortis sagittis nisl, et nullam. Etiam placerat sodales tortor fringilla sed" },
    { inner: "<p>dsaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaaaaa</p>", title: "programing languagsae", like: false, totalLikes: 0, dateAdd: 'Mon Sep 06 2021 09:56:43', category: "programing", commentsUsers: [], description: "Morbi imperdiet placerat mi in volutpat. Donec lobortis sagittis nisl, et nullam. Etiam placerat sodales tortor fringilla sed" },
  ];
  index!: number;
  dataTo!: object;


  constructor() { };


  /*****functions for api**** */
  deleteItem(index: number) {
    ///this action deleteItem function
    console.log(this.api[index]);
  }
  editeItem(id: number, data: object) {
    console.log(id, data);
    this.index = id;
    this.dataTo = data;
  }
  actionE(x: any) {
    // this action edite function
    this.api[this.index] = x;
  }
  /*****end functions for api*****/



}
