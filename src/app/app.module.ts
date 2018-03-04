import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
//
import { AppComponent } from './app.component';
//
import { MaterialComponentsModule } from "./material-components-module/material-components-module.module";
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
//

//
@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //material components
    MaterialComponentsModule
    //

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
