import { Directive, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[hideForPrint]',
  standalone: true,
})
export class HideForPrintDirective {
  private window: Window | null;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.window = this.document.defaultView;
    if (!this.window) {
      console.error('Failed getting window for hideForPrint');
      return;
    }

    // TODO: this does not work
    const mediaQuery = '(print)';
    const isPrint = this.window.matchMedia(mediaQuery).matches;
    console.log({ elementRef }, {isPrint});

    if (isPrint) {
      const el = this.elementRef.nativeElement;
      this.renderer.setStyle(el, 'display', 'none');
    }
  }
}
