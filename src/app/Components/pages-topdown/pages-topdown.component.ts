import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pages-topdown',
  templateUrl: './pages-topdown.component.html',
  styleUrls: ['./pages-topdown.component.css']
})
export class PagesTopdownComponent implements OnInit {
  public faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

}
