import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Course } from '../models/course.model';

@Injectable()
export class CourseService {

  public API : string = 'https://dummyjson.com/carts'

  constructor(
    public http: HttpClient
  ) { }

  getAllCourses() : Observable<Course> {
    return this.http.get(this.API)
  }
}