import { Component, OnInit } from '@angular/core';
import {Post, PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-latest-post-posts',
  templateUrl: './latest-post-post.component.html',
  styleUrls: ['./latest-post-post.component.css']
})
export class LatestPostPostComponent implements OnInit {
  public posts: Post[];
  private postService;
  constructor(postsService: PostsService) {
    this.postService = postsService;
  }

  ngOnInit() {
   this.posts = this.postService.getSidebarPosts();
   console.log(this.posts);
  }
}
