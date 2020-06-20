import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";

const firebaseConfig = {
  apiKey: "AIzaSyAS7JS1pZvxYG-hkQB5K04GvMbP6HyUyGU",
  authDomain: "filiam-blog.firebaseapp.com",
  databaseURL: "https://filiam-blog.firebaseio.com",
  projectId: "filiam-blog",
  storageBucket: "filiam-blog.appspot.com",
  messagingSenderId: "556878071358",
  appId: "1:556878071358:web:558e5748b35ecd8c85736f",
  measurementId: "G-LFGK8C5WSL"
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ]
})
export class FirebaseModule { }
