import { Component, OnInit } from '@angular/core';
import { BookOverview } from '../../shared/book-overview.model';

@Component({
  selector: 'app-index-new-arrival-list',
  templateUrl: './index-new-arrival-list.component.html',
  styleUrls: ['./index-new-arrival-list.component.css']
})
export class IndexNewArrivalListComponent implements OnInit {

  newArrivalBooks: BookOverview[] = [
    new BookOverview('Advanced C++', 'Gourav Singh', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/Journey%20of%20an%20Introvert%206.jpg'),
    new BookOverview('Advanced Java', 'Gourav Singh', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/HipHop6.jpg'),
    new BookOverview('Advanced Docker', 'Gourav Singh', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/Dystrumpia7.jpg'),
    new BookOverview('Advanced Kubernetes', 'Gourav Singh', 
    'https://damonza.com/wp-content/uploads/portfolio/nonfiction/Devil4.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
