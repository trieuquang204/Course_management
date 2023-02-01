import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Course } from '../models/course.model';

@Injectable()
export class CourseService {

  public API : string = 'http://localhost:3000/courses'

  constructor(
    public http: HttpClient
  ) { }

  getAllCourses() : Observable<Course> {
    return this.http.get(this.API)
  }

  getCourseEdit(id: any) : Observable<Course> {
    return this.http.get(`${this.API}/${id}`)
  }

  addCourse(course : any) : Observable<Course> {
    return this.http.post(this.API, course)
  }

  deleteCourse(id: any) : Observable<Course> {
    return this.http.delete(`${this.API}/${id}`)
  }

  updateCourse(course : any) : Observable<Course> {
    return this.http.put(`${this.API}/${course.id}`, course)
  }
}
