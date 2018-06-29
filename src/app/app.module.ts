import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
//import { Ng4FilesModule } from './Ng4-files';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import '@angular/material/prebuilt-themes/indigo-pink.css';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { POCComponent } from './poc/poc.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ListComponent } from './list/list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DisplayComponent,
    POCComponent,
    SlideshowComponent,
    ListComponent    
  ],
  imports: [
  //  Ng4FilesModule,
  MatButtonModule,
  MatCardModule,
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:UploadComponent},
      {path:'upload', component:UploadComponent},
      {path:'display', component:DisplayComponent},
      {path:'**', component:UploadComponent},
      {path:'', redirectTo:'/home',pathMatch:'full'}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
