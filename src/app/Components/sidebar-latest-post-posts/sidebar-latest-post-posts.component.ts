import { Component, OnInit } from '@angular/core';
import {SidebarPost, SidebarPostService} from '../../services/sidebar-post.service';

@Component({
  selector: 'app-sidebar-latest-post-posts',
  templateUrl: './sidebar-latest-post-posts.component.html',
  styleUrls: ['./sidebar-latest-post-posts.component.css']
})
export class SidebarLatestPostPostsComponent implements OnInit {
  public sidebarPosts: SidebarPost[];
  private sidebarPostService;


  constructor(sidebarPostsService: SidebarPostService) {
    this.sidebarPostService = sidebarPostsService;
  }

  ngOnInit() {
    this.sidebarPosts = this.sidebarPostService.getPosts();
    console.log(this.sidebarPosts);
  }

}
