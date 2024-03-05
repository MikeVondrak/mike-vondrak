import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { PageTopics } from '../../models/enums';
import { topicSelectAnimation } from './topic-selector.animations';

@Component({
  selector: 'app-topic-selector',
  standalone: true,
  imports: [],
  templateUrl: './topic-selector.component.html',
  styleUrl: './topic-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // on push so template function doesn't run every CD cycle
  animations: [topicSelectAnimation],
})
export class TopicSelectorComponent {
  @Output() currentTopic: EventEmitter<PageTopics> = new EventEmitter();

  public PageTopicsEnum = PageTopics;
  public topic = PageTopics.History;

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
