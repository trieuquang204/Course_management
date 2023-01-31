import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';

const appRoutes : Routes = [
 {
  path: '',
  component: HomeComponent,
 },
 {
  path: 'courses',
  component: CoursesComponent,
 },
 {
  path: 'courses',
  component: CoursesComponent,
  children: [
    {
      path: 'list',
      component: CourseListComponent
    },
    {
      path: 'add',
      component: CourseAddComponent
    },
    {
      path: ':id',
      component: CourseEditComponent
    },
  ]
 },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CourseListComponent,
    CourseAddComponent,
    CourseEditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
