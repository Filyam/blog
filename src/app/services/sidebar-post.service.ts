import { Injectable } from '@angular/core';

export interface SidebarPost {
  img: string;
  logotype: string;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarPostService {

  // @ts-ignore
  constructor() {
    const sidebarPosts: SidebarPost[] = [{
        img: '.assets/img/lp1.jpg',
        logotype: '10 Books to Read This Summer If You Want to Improve Yourself',
    },
      {
        img: '.assets/img/lp2.jpg',
        logotype: 'Why I Decided to Give up My Favorite Foods and Go Vegan',
      },
      {
        img: '.assets/img/lp3.jpg',
        logotype: 'The 10 Most Instagrammable Spots in San Diego',
      },
      {
        img: '.assets/img/lp4.jpg',
        logotype: '5 Things to Know About Dating a Bisexual',
      },
      {
        img: '.assets/img/lp5.jpg',
        logotype: 'How to Take Critical Feedback at Work (Like a Boss)',
      }
    ];
    localStorage.setItem('sidebar_posts', JSON.stringify(sidebarPosts));
  }
  public getSidebarPosts(): SidebarPost[] {
    return (JSON.parse(localStorage.getItem('posts')));
  }
}
