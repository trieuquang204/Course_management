import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';

// service
import { CourseService } from './services/course.service';
import { TemplateFormComponent } from './components/template-form/template-form.component';

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
      path: ':id/edit',
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
    TemplateFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    CourseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
