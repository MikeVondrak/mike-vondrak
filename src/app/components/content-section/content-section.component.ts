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

  // Link format === link;Title Text;https://url.com
  private linkDelimiter = ';';
  private linkPrefix = 'link';

  /**
   * Check for link format 
   * @param text 
   * @returns Whether link prefix exists
   */
  public isLink(text: string) {
    const prefix = text.substring(0, text.indexOf(this.linkDelimiter));
    return prefix === this.linkPrefix;
  }
  /**
   * Parse UI text from link format
   * @param text 
   * @returns Section between first and second delimiters
   */
  public getLinkName(text: string): string | null {
    return this.getLinkSection(text, 1);
  }
  /**
   * Parse URL from link format
   * @param text 
   * @returns Text after last delimiter
   */
  public getLink(text: string): string | null {
    const site = text.substring(text.lastIndexOf(this.linkDelimiter));
    return site;
  }
  /**
   * Parse data from delimited string
   * @param sectionNumber 
   */
  private getLinkSection(link: string, sectionNumber: number): string | null {
    const parts = link.split(';');
    if (sectionNumber < 0 || sectionNumber >= parts.length) {
      return null;
    }
    return parts[sectionNumber];
  }
}
