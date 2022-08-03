import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public loginForm: FormGroup = this.fb.group({
  //   usuario: [  this.authService.userLocalStorage?.usuario || '', [Validators.required, Validators.minLength(4)]],
  //   password: ['', [Validators.required]],
  //   recordar: [this.authService.userLocalStorage ? true : false, Validators.required]
  // });

  public loginForm: FormGroup = this.fb.group({
    usuario: [ '', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required]],
  });

  constructor(private router: Router,private fb: FormBuilder) { }

  submit() {
    console.log('scope is', this.loginForm.value)
  }

  ngOnInit(): void {
  }

}
