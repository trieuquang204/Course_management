import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.class';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  public user : User = new User;

  constructor() {}

  ngOnInit(): void {

  }

  onSubmitForm(value : any) {
    console.log('value', value)
  }

  onResetForm(form : any) {
    form.reset()
  }
}
