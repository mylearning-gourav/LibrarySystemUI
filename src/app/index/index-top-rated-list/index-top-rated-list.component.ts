import { Component, OnInit } from '@angular/core';
import { BookOverview } from '../../shared/book-overview.model';

@Component({
  selector: 'app-index-top-rated-list',
  templateUrl: './index-top-rated-list.component.html',
  styleUrls: ['./index-top-rated-list.component.css']
})
export class IndexTopRatedListComponent implements OnInit {

  topRatedBooks: BookOverview[] = [
    new BookOverview('Advanced Python', 'Suryanarayan Panda', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/Sandy%207.jpg'),
    new BookOverview('Advanced Chef', 'Shekhar Suman Moanty', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/Writer11.jpg'),
    new BookOverview('Advanced VC++', 'Santun Panigrahi', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/TheKey6.jpg'),
    new BookOverview('Advanced Angular', 'Debasish Mohanty', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/Set%20For%20Life%202.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
