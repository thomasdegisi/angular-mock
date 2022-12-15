import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrandComponent } from './brand/brand.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    BrandComponent,
    AnnouncementsComponent,
    QuickLinksComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/github.svg'
      )
    );  
    this.matIconRegistry.addSvgIcon(
      'linked-in',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/linked-in.svg'
      )
    );  
  }
}
