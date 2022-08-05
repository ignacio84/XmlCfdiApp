import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import { ParseService } from './parse.service';

const KEY = environment.KEY_CRYPT;

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  constructor(private parseService:ParseService) { }

  public encrypt(item: string):string {
    //let text = this.isJsonStringify(item);
    return CryptoJS.AES.encrypt(item, KEY).toString();
  }

  public decrypt(item: string):string {
    // if (item===null) return null;
    // let text = this.isJsonParse(item);
    return CryptoJS.AES.decrypt(item, KEY).toString(CryptoJS.enc.Utf8);
  }

}
