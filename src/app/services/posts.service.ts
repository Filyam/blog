import { Injectable } from '@angular/core';

export interface Post {
  img: string;
  date: string;
  logotype: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() {
    const posts: Post[] = [{
      img: './assets/img/1.jpg',
      date: 'MAY 10, 2018 / LIFE',
      logotype: 'Travel Tuesday: Answering Your Most Frequent International Transportation Questions',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    },
      {
        img: './assets/img/2.jpg',
        date: 'MAY 17, 2018 / SPORT',
        logotype: 'A Closer Look At Our Front Porch Items From Lowe’s',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        img: './assets/img/3.jpg',
        date: 'MAY 22, 2018 / LIFESTYLE',
        logotype: 'Wedding Guest Style: From Beach Casual to Black-Tie Formal',
        text: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
      {
        img: './assets/img/4.jpg',
        date: ' MAY 25, 2018 / FASHION',
        logotype: '5 Things to Know About Dating a Bisexual',
        text: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
      {
        img: './assets/img/5.jpg',
        date: 'MAY 29, 2018 / FOOD',
        logotype: '7 Things Wealthy Women Do With Their Money That You Can Do Too',
        text: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
      {
        img: './assets/img/6.jpg',
        date: 'JUN 02, 2018 / SUMMERHOLIDAY',
        logotype: 'The 10 Most Instagrammable Spots in San Diego',
        text: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
       ];
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  public getPosts(): Post[] {
    return (JSON.parse(localStorage.getItem('posts')));
  }

}
