import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeaderMenuComponent } from './Components/header-menu/header-menu.component';
import { HeaderSearchInputComponent } from './Components/header-search-input/header-search-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesTopdownComponent } from './Components/pages-topdown/pages-topdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderSocialcontactsComponent } from './Components/header-socialcontacts/header-socialcontacts.component';
import { PictureHomeComponent } from './Components/picture-home/picture-home.component';
import { PromoPostComponent } from './Components/promo-post/promo-post.component';
import { PromoTextComponent } from './Components/promo-text/promo-text.component';
import { PromoButtonReadmoreComponent } from './Components/promo-button-readmore/promo-button-readmore.component';
import { PromoButtonSlideComponent } from './Components/promo-button-slide/promo-button-slide.component';
import { MainThumbnailComponent } from './Components/main-thumbnail/main-thumbnail.component';
import { LastThumnailComponent } from './Components/last-thumbnail/last-thumnail.component';
import { LatestPostThumbnailComponent } from './Components/latest-post-thumbnail/latest-post-thumbnail.component';
import { LatestButtonsThumbnailComponent } from './Components/latest-buttons-thumbnail/latest-buttons-thumbnail.component';
import { EnderComponent } from './Components/ender/ender.component';
import { EnderImagesComponent } from './Components/ender-images/ender-images.component';
import { SidebarAllComponent } from './Components/sidebar-all/sidebar-all.component';
import { SidebarDivAboutComponent } from './Components/sidebar-div-about/sidebar-div-about.component';
import { SidebarFollowComponent } from './Components/sidebar-follow/sidebar-follow.component';
import { SidebarLatestPostsComponent } from './Components/sidebar-latest-posts/sidebar-latest-posts.component';
import { SidebarLatestPostPostsComponent } from './Components/sidebar-latest-post-posts/sidebar-latest-post-posts.component';
import { SidebarAddsComponent } from './Components/sidebar-adds/sidebar-adds.component';
import { SidebarNewsletterComponent } from './Components/sidebar-newsletter/sidebar-newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    HeaderSearchInputComponent,
    PagesTopdownComponent,
    HeaderSocialcontactsComponent,
    PictureHomeComponent,
    PromoPostComponent,
    PromoTextComponent,
    PromoButtonReadmoreComponent,
    PromoButtonSlideComponent,
    MainThumbnailComponent,
    LastThumnailComponent,
    LatestPostThumbnailComponent,
    LatestButtonsThumbnailComponent,
    EnderComponent,
    EnderImagesComponent,
    SidebarAllComponent,
    SidebarDivAboutComponent,
    SidebarFollowComponent,
    SidebarLatestPostsComponent,
    SidebarLatestPostPostsComponent,
    SidebarAddsComponent,
    SidebarNewsletterComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FontAwesomeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
