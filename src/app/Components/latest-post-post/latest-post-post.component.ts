import { Component, OnInit } from '@angular/core';
import {Post, PostsService} from '../../services/posts.service';
import {PostDataService} from "../../firebase/post-data.service";

@Component({
  selector: 'app-latest-post-posts',
  templateUrl: './latest-post-post.component.html',
  styleUrls: ['./latest-post-post.component.css']
})
export class LatestPostPostComponent implements OnInit {
  public posts: Post[];
  private postService;
  constructor(postsService: PostsService, private postDataService: PostDataService) {
    this.postService = postsService;
  }

  ngOnInit() {
   this.posts = this.postService.getPosts();

   this.postDataService.getPostData().subscribe(console.log)
  }
}
