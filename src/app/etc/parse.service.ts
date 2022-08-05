import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParseService {

  constructor() { }

  //JSON.stringify() toma un objeto de JavaScript y lo transforma en una cadena JSON.
  public objetToJson(item: object): string | null{
    try {
      return JSON.stringify(item);
    } catch (e) {
      return null;
    }
  }
  //JSON.parse() toma una cadena JSON y la transforma en un objeto de JavaScript
  public jsonToObject(item: string): Object | null {
    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  }
}
