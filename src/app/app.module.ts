import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { ChronologyComponent } from './chronology/chronology.component';
import { BrandComponent } from './brand/brand.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { UuidGenComponent, UuidShowComponent } from './uuid-gen/uuid-gen.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ChronologyComponent,
    HomeComponent,
    NavComponent,
    QuickLinksComponent,
    UuidGenComponent,
    UuidShowComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ClipboardModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ScrollingModule,
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
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/angular.svg'
      )
    );
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
    this.matIconRegistry.addSvgIcon(
      'material',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/material.svg'
      )
    );
  }
}
