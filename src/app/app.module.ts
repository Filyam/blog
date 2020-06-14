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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    HeaderSearchInputComponent,
    PagesTopdownComponent,
    HeaderSocialcontactsComponent
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
