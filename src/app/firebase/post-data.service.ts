import { Injectable } from '@angular/core';
import {Post} from "../services/posts.service";
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private firestore: AngularFirestore) { }

  public getPostData(): Observable<Post[]> {
    return this.firestore.collection<Post>('Posts').valueChanges()
  }

  public addPost(post: Post): void {
    this.firestore.collection<Post>('Posts').add(post)
  }
}
