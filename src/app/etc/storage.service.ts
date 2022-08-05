import { Injectable } from '@angular/core';
import { CryptService } from './crypt.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private crypt: CryptService) { }


  public saveInSession(name: string, item: any) {
    sessionStorage.setItem(name, this.crypt.encrypt(item));
  }

  public saveInLoca(name: string, item: any) {
    localStorage.setItem(name, this.crypt.encrypt(item));
  }

  public getInSession(name: string) {
    console.log('sessionStorage :',sessionStorage.getItem(name));
    return this.crypt.decrypt(sessionStorage.getItem(name)!);
  }

  public getInLoca(name: string) {
    return this.crypt.decrypt(localStorage.getItem(name)!);
  }


  public removeInLocal(name: string) {
    localStorage.removeItem(name);
  }

  public removeInSession(name: string) {
    localStorage.removeItem(name);
  }

  public clearLocal() {
    localStorage.clear();
  }

  public clearSession() {
    sessionStorage.clear();
  }

}
