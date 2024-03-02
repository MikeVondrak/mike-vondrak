import { Component } from '@angular/core';
import { ContentSectionComponent } from '../../content-section/content-section.component';

@Component({
  selector: 'app-site-page',
  standalone: true,
  imports: [ContentSectionComponent],
  templateUrl: './site-page.component.html',
  styleUrl: './site-page.component.scss'
})
export class SitePageComponent {

}
