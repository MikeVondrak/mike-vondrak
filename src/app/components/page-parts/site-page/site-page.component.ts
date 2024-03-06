import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSectionComponent } from '../../content-section/content-section.component';
import { TopicSelectorComponent } from '../../topic-selector/topic-selector.component';
import { PageTopics } from '../../../models/enums';
import { sitePageAnimation } from './site-page.animations';
import { HideForPrintDirective } from '../../../directives/hide-for-print.directive';

@Component({
  selector: 'app-site-page',
  standalone: true,
  imports: [CommonModule, TopicSelectorComponent, ContentSectionComponent],
  templateUrl: './site-page.component.html',
  styleUrl: './site-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [sitePageAnimation]
})
export class SitePageComponent {

  public PageTopicsEnum = PageTopics;
  public currentTopic: PageTopics = PageTopics.History;

  constructor(private cdr: ChangeDetectorRef) {}

  public selectTopic(currentTopic: PageTopics) {
    this.currentTopic = currentTopic;
    this.cdr.detectChanges();
  }

  public onTopic(checkTopic: PageTopics): boolean {
    return checkTopic === this.currentTopic;
  }
}
