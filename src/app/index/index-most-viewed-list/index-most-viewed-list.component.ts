import { Component, OnInit } from '@angular/core';
import { BookOverview } from '../../shared/book-overview.model';

@Component({
  selector: 'app-index-most-viewed-list',
  templateUrl: './index-most-viewed-list.component.html',
  styleUrls: ['./index-most-viewed-list.component.css']
})
export class IndexMostViewedListComponent implements OnInit {

  mostViewedBooks: BookOverview[] = [
    new BookOverview('Advanced C++', 'Gourav Singh', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/Rock%20Your%20Au%20Pair%20Year%201.8.jpg'),
    new BookOverview('Advanced Java', 'Gourav Singh', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/Love6.jpg'),
    new BookOverview('Advanced Docker', 'Gourav Singh', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/Persuaded%202.jpg'),
    new BookOverview('Advanced Kubernetes', 'Gourav Singh', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/IllegalD3.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
