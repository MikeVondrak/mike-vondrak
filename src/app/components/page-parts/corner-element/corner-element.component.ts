import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corner-element',
  standalone: true,
  imports: [],
  templateUrl: './corner-element.component.html',
  styleUrl: './corner-element.component.scss'
})
export class CornerElementComponent implements OnInit {
  @Input() offsetVertical: string = '';

  @HostBinding('style.--offsetVerticalVar') offsetVerticalProp = this.offsetVertical;
  
  ngOnInit(): void {
    this.offsetVerticalProp = this.offsetVertical;
    console.log('CORNER',  this.offsetVerticalProp);
  }
}
