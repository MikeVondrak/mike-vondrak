import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSectionComponent } from '../../content-section/content-section.component';
import { TopicSelectorComponent } from '../../topic-selector/topic-selector.component';
import { PageTopics } from '../../../models/enums';
import { sitePageAnimation } from './site-page.animations';

@Component({
  selector: 'app-site-page',
  standalone: true,
  imports: [CommonModule, TopicSelectorComponent, ContentSectionComponent],
  templateUrl: './site-page.component.html',
  styleUrl: './site-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [sitePageAnimation]
})
export class SitePageComponent implements OnInit {
  /**
     * Layout property passed from App, specifies overlap of title element and "corner" section
     */
  @Input() offsetVertical: string = '';
  /**
   * CSS variable that maps to headerInternalVerticalOffset input
   */
  @HostBinding('style.--offsetVerticalVar') offsetVerticalProp = this.offsetVertical;

  public PageTopicsEnum = PageTopics;
  public currentTopic: PageTopics = PageTopics.History;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.offsetVerticalProp = this.offsetVertical;
    console.log('PAGE: ', this.offsetVertical, this.offsetVerticalProp);
  }

  public selectTopic(currentTopic: PageTopics) {
    this.currentTopic = currentTopic;
    this.cdr.detectChanges();
  }

  public onTopic(checkTopic: PageTopics): boolean {
    return checkTopic === this.currentTopic;
  }
}
