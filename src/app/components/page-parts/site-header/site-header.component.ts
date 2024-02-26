import { Component } from '@angular/core';
import { SkillMeterComponent } from '../../skill-meter/skill-meter.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [SkillMeterComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {

}
