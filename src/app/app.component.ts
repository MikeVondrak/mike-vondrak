import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppReadyEvent } from './app-ready-event';
import { SiteHeaderComponent } from './components/page-parts/site-header/site-header.component';
import { SiteFooterComponent } from './components/page-parts/site-footer/site-footer.component';
import { SitePageComponent } from './components/page-parts/site-page/site-page.component';
import { SiteSidebarComponent } from './components/page-parts/site-sidebar/site-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent, SitePageComponent, SiteSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  public title = 'Mike Vondrak';
  private delayAppReadyEventForMs: number = 1800;

  constructor(private appReady: AppReadyEvent) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.appReady.triggerAppReady();
    }, this.delayAppReadyEventForMs);
  }
}
