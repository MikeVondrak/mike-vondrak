// https://www.bennadel.com/blog/3147-creating-an-event-driven-pre-bootstrap-loading-screen-in-angular-2-0-0.htm
// https://www.bennadel.com/blog/3151-revisited-creating-an-event-driven-pre-bootstrap-loading-screen-in-angular-2-0-0.htm

import { DOCUMENT } from '@angular/common';
import { Injectable, Renderer2, Inject, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppReadyEvent {
  private isAppReady: boolean = false;
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2,
  ) {
    // Renderer2 can't be injected (usually used in a Component), so create using factory
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  // ---
  // PUBLIC METHODS
  // ---

  /**
   * Fire the "appReady" event to remove the pre-bootstrap loading screen
   */
  public triggerAppReady(): void {
    // If the app-ready event has already been triggered, just ignore any subsequent calls to trigger it again.
    if (this.isAppReady) {
      console.error('AppReady event already triggered');
      return;
    }
    const bubbles = true;
    const cancelable = false;
    const event = this.createEvent('appReady', bubbles, cancelable);
    if (!event) {
      console.error('Could not create AppReady event');
      return;
    }
    this.document.dispatchEvent(event);
    this.isAppReady = true;
  }

  // ---
  // PRIVATE METHODS
  // ---

  /**
   * Create and return a custom event with the given configuration
   * @param eventType 
   * @param bubbles 
   * @param cancelable 
   * @returns 
   */
  private createEvent(
    eventType: string,
    bubbles: boolean,
    cancelable: boolean
  ): CustomEvent | undefined {
    let customEvent: CustomEvent | undefined;
    if (!eventType) {
      console.error('No eventType provided');
      return;
    }

    // Old IE uses some other kind of event initialization, this may no longer be necessary
    // - default to trying the "normal" event generation and then fallback to using the IE version
    try {
      customEvent = new CustomEvent(eventType, {
        bubbles: bubbles,
        cancelable: cancelable,
      });
    } catch (error) {
      const customEvent: any = this.document?.createEvent('CustomEvent');
      if (!customEvent) {
        console.error('Could not create CustomEvent');
        return undefined;
      }
      customEvent.initCustomEvent(eventType, bubbles, cancelable, null);
    }
    return customEvent;
  }
}
