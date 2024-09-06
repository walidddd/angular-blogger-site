import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  isCollapsed1 = true;
  isCollapsed2 = true;
  //variables for ngx-pagination
  items = 6;
  totalLnegth: any;
  page: any = 1;
  //
  // select option  category
  category = [
    { abbrev: 'programing' },
    { abbrev: 'javascript' },
    { abbrev: 'sass' },
    { abbrev: 'nodeJS' },
    { abbrev: 'typescript' },
  ];
  dataBlog: any = []; // this a data for blog page
  tags = ["code", "code", "snap", "javascript", "bootstrap", "nodeJs", "elemnts", "code", "code", "snap", "javascript", "bootstrap", "nodeJs", "elemnts"]
  constructor(private apiSer: ApisService, private rouite: ActivatedRoute, private addRouit: Router) {
    this.rouite.paramMap.subscribe(f => {
      const i = f.get("id");
      this.page = i;
    });

  }

  ngOnInit(): void {
    this.dataBlog = this.apiSer.api; // get data for api service 
    this.totalLnegth = this.apiSer.api.length;
  }

  pageChange(x: any) {
    this.page = x;
    this.addRouit.navigateByUrl(`blog/${x}`)
  }

  /*click for Page Details */
  details(indexPageDetails: any) {
    let idPage = (this.page - 1) * this.items + indexPageDetails;
    let titlePage = this.apiSer.api[idPage].title;
    this.addRouit.navigateByUrl(`blog-details/${titlePage}/${idPage}`)

  }
}
