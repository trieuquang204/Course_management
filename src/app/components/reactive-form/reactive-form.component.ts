import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public formUser : FormGroup

  constructor(
    public formBuilder : FormBuilder,
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formUser = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]],
      password: ['', Validators.required],
      fullname: [''],
      email: ['', Validators.pattern("[^@\s]+@[^@\s]+\.[^@\s]+")],
      phone: []
    });

    this.formUser.valueChanges.subscribe(data => {
      console.log('data', this.formUser)
    })
  }

  onSubmitForm() {
    console.log(this.formUser.value)
  }

  onResetForm() {
    this.formUser.reset();
  }
}
