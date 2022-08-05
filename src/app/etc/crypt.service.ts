import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

const KEY = environment.KEY_CRYPT;

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  constructor() { }

  public encrypt(item: any) {
    let text = this.isJsonStringify(item);
    return CryptoJS.AES.encrypt(text, KEY).toString();
  }

  public decrypt(item: string) {
    // return CryptoJS.AES.encrypt(text, KEY); 
    if (item===null) return null;
    let text = this.isJsonParse(item);
    return CryptoJS.AES.decrypt(text, KEY).toString(CryptoJS.enc.Utf8);
  }


  private isJsonStringify(item: any) {
    try {
      return  JSON.stringify(item);
    } catch (e) {
      return item.toString();
    }
  }


  private isJsonParse(item: any) {
    try {
      return  JSON.parse(item);
    } catch (e) {
      return item.toString();
    }
  }
}
