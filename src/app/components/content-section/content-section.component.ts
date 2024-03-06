import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentSectionComponent {
  @Input() titleTexts?: string[];
  @Input() subtitleTexts?: string[];

  public isLink(text: string) {
    const prefix = text.substring(0, 5);
    return prefix === 'link:';
  }
  public getLinkName(text: string) {
    return text.substring(5);
  }
  public getLink(text: string) {
    const site = text.substring(5);
    const url = `https://${site}`;
    return url;
  }
}
