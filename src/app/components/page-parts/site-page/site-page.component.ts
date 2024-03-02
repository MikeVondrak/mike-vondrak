import { Component } from '@angular/core';
import { ContentSectionComponent } from '../../content-section/content-section.component';
import { TopicSelectorComponent } from '../../topic-selector/topic-selector.component';

@Component({
  selector: 'app-site-page',
  standalone: true,
  imports: [TopicSelectorComponent, ContentSectionComponent],
  templateUrl: './site-page.component.html',
  styleUrl: './site-page.component.scss'
})
export class SitePageComponent {

}
