import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './site-sidebar.component.html',
  styleUrl: './site-sidebar.component.scss'
})
export class SiteSidebarComponent implements OnInit {
  /**
   * Layout property passed from App, specifies overlap of title element and "corner" section
   */
  @Input() offsetVertical: string = '';
  /**
   * CSS variable that maps to headerInternalVerticalOffset input
   */
  @HostBinding('style.--offsetVerticalVar') offsetVerticalProp = this.offsetVertical;

  constructor() {}

  ngOnInit(): void {
    this.offsetVerticalProp = this.offsetVertical;
    console.log('SIDEBAR', this.offsetVerticalProp, this.offsetVertical);
  }
}
