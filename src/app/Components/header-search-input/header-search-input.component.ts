import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header-search-input',
  templateUrl: './header-search-input.component.html',
  styleUrls: ['./header-search-input.component.css']
})
export class HeaderSearchInputComponent implements OnInit {
  faSearch = faSearch;


  constructor() {}

  ngOnInit(): void {
  }

}
