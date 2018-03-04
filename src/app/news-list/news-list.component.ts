import { Component, OnInit } from '@angular/core';
//
import { News } from "../news-detail/news";
//



@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList:News[] = [
    {
      id : '132s1d3f2sd32f1',
      author : 'John Doe',
      createdDate : '02-02-2015',
      title: 'News title',
      image: 'https://www.w3schools.com/w3css/img_fjords.jpg',
      text: 'string',
      updatedDate: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet commodi consequatur est, eum ex expedita illo laudantium minima nesciunt nisi nobis nulla placeat quae reiciendis sapiente veritatis vero voluptatem.'
    },
    {
      id : '132s1d3f2sd32f1',
      author : 'John Doe',
      createdDate : '02-02-2015',
      title: 'News title',
      image: 'https://www.w3schools.com/w3css/img_fjords.jpg',
      text: 'string',
      updatedDate: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet commodi consequatur est, eum ex expedita illo laudantium minima nesciunt nisi nobis nulla placeat quae reiciendis sapiente veritatis vero voluptatem.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
