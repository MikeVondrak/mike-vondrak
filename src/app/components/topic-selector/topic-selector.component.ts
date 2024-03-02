import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTopics } from '../../models/enums';

@Component({
  selector: 'app-topic-selector',
  standalone: true,
  imports: [],
  templateUrl: './topic-selector.component.html',
  styleUrl: './topic-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // on push so template function doesn't run every CD cycle
})
export class TopicSelectorComponent {

  public PageTopicsEnum = PageTopics;
  public currentTopic = PageTopics.History;

  public selectTopic(topic: PageTopics) {
    this.currentTopic = topic;
  }

  public onTopic(testTopic: PageTopics): boolean {
    return (testTopic === this.currentTopic);
  }  
}
