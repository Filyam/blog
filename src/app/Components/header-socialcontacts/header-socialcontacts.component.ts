import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-header-socialcontacts',
  templateUrl: './header-socialcontacts.component.html',
  styleUrls: ['./header-socialcontacts.component.css']
})
export class HeaderSocialcontactsComponent implements OnInit {

  public faFacebook = faFacebook;
  public faTwitter = faTwitter;
  public faInstagram = faInstagram;
  public faPinterest = faPinterest

  constructor() { }

  ngOnInit(): void {
  }

}
