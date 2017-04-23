import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';



//components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorComponent } from './author/author.component';

//app routing
const appRoutes: Routes = [
  { path: 'author', component: AuthorComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
