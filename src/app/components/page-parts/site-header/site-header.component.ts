import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { SkillMeterComponent } from '../../skill-meter/skill-meter.component';
import { CornerElementComponent } from "../corner-element/corner-element.component";

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [CornerElementComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent implements OnInit {
  /**
   * Layout property passed from App, specifies overlap of title element and "corner" section
   */
  @Input() internalOffsetVertical: string = '';
  /**
   * CSS variable that maps to headerInternalVerticalOffset input
   */
  @HostBinding('style.--internalOffsetVertical') internalOffsetVerticalProp = this.internalOffsetVertical;

  constructor() {}  

  ngOnInit(): void {
    this.internalOffsetVerticalProp = this.internalOffsetVertical;
    console.log('SITE HEADER', this.internalOffsetVertical, this.internalOffsetVerticalProp);
  }
}
