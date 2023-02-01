import { Component, OnInit } from '@angular/core';

import { CourseService } from 'src/app/services/course.service';
import { Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  // public courses : any = [];
  // public name : string = '';
  // public description : string = '';
  // public fee : any = null;
  public courseEdit? : any;

  public subscription? : Subscription;

  constructor(
    public courseService: CourseService,
    public routerService: Router,
    public activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    // this.subscription = this.courseService.getAllCourses().subscribe((data : any) => {
    //   this.courses = data;
    // })

    this.loadData();
  }

  loadData() {
    this.activatedRoute.params.subscribe(data => {
      let id = data['id'];
      this.courseService.getCourseEdit(id).subscribe(course => {
        // console.log('test', course)
        this.courseEdit = course
      })
    })
  }

  onEditSave() {
    this.courseService.updateCourse(this.courseEdit).subscribe((data) => {
      this.routerService.navigate(['/courses/list'])
    })
  }
}
