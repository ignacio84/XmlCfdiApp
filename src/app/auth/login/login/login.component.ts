import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptService } from 'src/app/etc/crypt.service';
import { LoginService } from '../../auth-services/login.service';
import { StorageService } from '../../../etc/storage.service';
import { environment } from 'src/environments/environment';
const TOKEN = environment.TOKEN;
const USR = environment.USR;

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
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required]],
  });

  constructor(private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private storageService: StorageService
  ) { }

  submit() {
    this.loginService.login(this.loginForm.value)
      .subscribe(resp => {
        console.log("resp.AccessToken : ", resp.AccessToken);
        this.storageService.saveInSession(TOKEN,resp.AccessToken);
        this.storageService.saveInSession(USR,this.loginForm.controls['username'].value);
        console.log("TOKEN : ",this.storageService.getInSession(TOKEN));
        console.log("USR : ",this.storageService.getInSession(USR));
      }, err => console.log(err));
  }

  ngOnInit(): void {
  }

}
