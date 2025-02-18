import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppReadyEvent } from './app-ready-event';
import { SiteHeaderComponent } from './components/page-parts/site-header/site-header.component';
import { SiteFooterComponent } from './components/page-parts/site-footer/site-footer.component';
import { SitePageComponent } from './components/page-parts/site-page/site-page.component';
import { SiteSidebarComponent } from './components/page-parts/site-sidebar/site-sidebar.component';
import { UtilityService } from './services/utility/utility.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent, SitePageComponent, SiteSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'Mike Vondrak';
  /**
   * Specifies overlap of header title element over "corner" element (contact info)
   * - Negative "top" value for corner element and subsequent content containers
   * - Value initialized from component SCSS file
   */
  private readonly headerInternalOffsetVerticalProp: string = 'headerInternalOffsetVertical';
  @HostBinding('style.--headerInternalOffsetVertical') headerInternalOffsetVertical: string =
    this.utility.getPropertyOfElement(this.elRef, '--headerInternalOffsetVertical');
  /**
   * Postpone page loaded transition so gif can play
   */
  private delayAppReadyEventForMs: number = 180;//0;

  constructor(private appReady: AppReadyEvent, private elRef: ElementRef, private utility: UtilityService) { }

  ngOnInit(): void {
    console.log('headerInternalOffsetVertical init', this.headerInternalOffsetVertical);
  }
  ngAfterViewInit(): void {
    console.log('headerInternalOffsetVertical after', this.headerInternalOffsetVertical);

    // Timeout to artificially slow down loading
    setTimeout(() => {
      this.appReady.triggerAppReady();
    }, this.delayAppReadyEventForMs);
  }


}
