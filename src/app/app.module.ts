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
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrandComponent } from './brand/brand.component';
import { ChronologyComponent } from './chronology/chronology.component';
import { ChronologyEventComponent } from './chronology-event/chronology-event.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { UuidGenComponent, UuidShowComponent } from './uuid-gen/uuid-gen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { CustomersComponent } from './customers/customers.component';
import { GetPointsComponent } from './get-points/get-points.component';
import { SpendPointsComponent } from './spend-points/spend-points.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ChronologyComponent,
    ChronologyEventComponent,
    HomeComponent,
    NavComponent,
    QuickLinksComponent,
    UuidGenComponent,
    UuidShowComponent,
    PageNotFoundComponent,
    UnderConstructionComponent,
    CustomersComponent,
    GetPointsComponent,
    SpendPointsComponent,
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
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule,
    ScrollingModule,
    AppRoutingModule,
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
