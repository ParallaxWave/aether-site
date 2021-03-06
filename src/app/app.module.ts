import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from '../environments/environment';
import { WebdevComponent } from './webdev/webdev.component';
import { TestemonialsComponent } from './testemonials/testemonials.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NgxSlidesModule } from 'ngx-slides'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    OrderComponent,
    WebdevComponent,
    TestemonialsComponent,
    PortfoliosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, 
    MatSnackBarModule,
    MatTabsModule,
    AngularFireAnalyticsModule,
    ScullyLibModule,
    NgxSlidesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
