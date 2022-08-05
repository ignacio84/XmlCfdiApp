import { Injectable } from '@angular/core';
import { CryptService } from './crypt.service';
import { ParseService } from './parse.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private crypt: CryptService,
    private parseService: ParseService) { }


  public saveInSession(name: string, item: any) {
    const item_ = this.parseService.objetToJson(item);
    item_===null?sessionStorage.setItem(name, item_!):sessionStorage.setItem(name, this.crypt.encrypt(item_));
  }

  public saveInLoca(name: string, item: any) {
    const item_ = this.parseService.objetToJson(item);
    item_===null?localStorage.setItem(name, item_!):localStorage.setItem(name, this.crypt.encrypt(item_));
  }

  public getInSession(name: string) {
    const item=sessionStorage.getItem(name);
    return (item===null?item! : this.parseService.jsonToObject(this.crypt.decrypt(item)));
  }

  public getInLocal(name: string) {
    const item=localStorage.getItem(name);
    return (item===null?item! : this.parseService.jsonToObject(this.crypt.decrypt(item)));
  }
  public removeInLocal(name: string) {
    localStorage.removeItem(name);
  }

  public removeInSession(name: string) {
    sessionStorage.removeItem(name);
  }

  public clearLocal() {
    localStorage.clear();
  }

  public clearSession() {
    sessionStorage.clear();
  }

}
