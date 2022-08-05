import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptService } from 'src/app/etc/crypt.service';
import { LoginService } from '../../auth-services/login.service';
import { StorageService } from '../../../etc/storage.service';
import { environment } from 'src/environments/environment';
import { ParseService } from '../../../etc/parse.service';
import { Observable, Subscription } from 'rxjs';

const TOKEN = environment.TOKEN;
const USR = environment.USR;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login$?:Subscription

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
    private storageService: StorageService,
    private parseService:ParseService
  ) { }

  submit() {
    this.login$= this.loginService.login(this.loginForm.value)
      .subscribe(resp => {
        this.save(resp);
      }, err => console.log(err));
  }

  private save(resp: any) {
    console.log("resp.AccessToken : ", resp.AccessToken);
    this.storageService.saveInSession(TOKEN, resp.AccessToken);
    this.storageService.saveInSession(USR, this.loginForm.controls['username'].value);
    console.log("TOKEN : ", this.storageService.getInSession(TOKEN));
    console.log("USR : ", this.storageService.getInSession(USR));

  }



  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    this.loginForm.reset();
    this.login$?.unsubscribe();
  }

}
