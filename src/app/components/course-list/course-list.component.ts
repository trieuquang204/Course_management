import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

  public subscription? : Subscription;
  public courses : any = [];

  constructor(
    public courseService : CourseService
  ) {}

  ngOnInit() {
    this.subscription = this.courseService.getAllCourses().subscribe((data : any) => {
      this.courses = data;
    })
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onDeleteCourse(id: any) {
    this.subscription = this.courseService.deleteCourse(id).subscribe((data : any) => {
      this.updateDataAfterDelete(id)
    })
  }

  updateDataAfterDelete(id: number) {
    for(let i = 0; i < this.courses.length; i++) {
      if(this.courses[i].id == id) {
        this.courses.splice(i, 1);
        break;
      }
    }
  }
}
