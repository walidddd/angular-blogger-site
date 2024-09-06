import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.scss']
})
export class MyArticlesComponent implements OnInit {



  rows: Array<object>;
  columns = [{ prop: 'title' }, { name: 'category' }, { name: 'dateAdd' }];

  constructor(private router: Router, private apiSer: ApisService) {
    this.rows = this.apiSer.api; //  get data myArticles 

  }

  ngOnInit(): void {
  }
  addNew() {
    this.router.navigateByUrl("/add-article")
  }


  edite(index: number) {
    this.apiSer.editeItem(index, this.rows[index]);
    this.router.navigate(["/article-edite"])
  }
  delete(indexDelete: number) {
    this.apiSer.deleteItem(indexDelete);
  }

}
