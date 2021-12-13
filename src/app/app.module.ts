import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

// import { APP_ROUTING } from './app.routing';

import { AppComponent } from './app.component';

import { SmartsuiteComponent, SafeHtmlPipe } from './smartsuite/smartsuite.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateContactoComponent } from './animate-contacto/animate-contacto.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { SidebarContactComponent } from './sidebar-contact/sidebar-contact.component';
import { RouterModule } from '@angular/router';
import {  appRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SmartsuiteComponent,
    HeaderComponent,
    FooterComponent,
    AnimateContactoComponent,
    SafeHtmlPipe,
    SidebarContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    CarouselModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule.forRoot(),
    RouterModule.forRoot(appRoutes, { 
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      // scrollOffset: [0, 64],
      useHash: true,
      initialNavigation: 'enabled'
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
