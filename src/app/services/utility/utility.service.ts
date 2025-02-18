import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public getPropertyOfElement(el: ElementRef, prop: string): string {
    return getComputedStyle(el.nativeElement).getPropertyValue(prop);
  }
}
