import { Component, OnInit, OnDestroy } from '@angular/core';

import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
public courses : any = [];

  constructor(
    public courseService : CourseService
  ) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe((data : any) => {
      this.courses = data;
    })
  }

  ngOnDestroy(): void {

  }
}
