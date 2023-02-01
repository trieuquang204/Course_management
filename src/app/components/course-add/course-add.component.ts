import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


import { Course } from 'src/app/models/course.model';


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  public course : any = [];
  public name : string = '';
  public description : string = '';
  public fee : any = null;

  public subscription? : Subscription;

  constructor(
    public courseService: CourseService,
    public routerService: Router,
  ) {}

  ngOnInit() {
    // console.log('dd', this.name)
  }

  onAddCourse() {
    const getCourse = {
      name: this.name,
      description: this.description,
      fee: this.fee
    }

    this.courseService.addCourse(getCourse).subscribe(data => {
      if(data && data.id) {
        this.routerService.navigate(['/courses/list']);
      }
    })

  }
}
