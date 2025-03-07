import { ChangeDetectionStrategy, Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { PageTopics } from '../../models/enums';
import { currentPageAnimation, topicSelectAnimation } from './topic-selector.animations';

@Component({
  selector: 'app-topic-selector',
  standalone: true,
  imports: [],
  templateUrl: './topic-selector.component.html',
  styleUrl: './topic-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // on push so template function doesn't run every CD cycle
  animations: [topicSelectAnimation, currentPageAnimation],
})
export class TopicSelectorComponent {
  @Output() currentTopic: EventEmitter<PageTopics> = new EventEmitter();

  public PageTopicsEnum = PageTopics;
  public topic = PageTopics.History;

  constructor() {
  }

  public selectTopic(newTopic: PageTopics) {
    console.log('TOPIC: ', newTopic, this.topic);
    if (this.topic === newTopic) {
      return;
    }
    this.topic = newTopic;
    this.currentTopic.emit(this.topic);
  }

  public onTopic(checkTopic: PageTopics): boolean {
    return checkTopic === this.topic;
  }
}
