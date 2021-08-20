import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
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
import { SmartsalesComponent } from './smartsales/smartsales.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateContactoComponent } from './animate-contacto/animate-contacto.component';
import { OntimeComponent } from './ontime/ontime.component';
import { PreciosSmartsalesComponent } from './smartsales/precios/precios-smartsales.component';
import { PreciosMobileformsComponent } from './mobileforms/precios/precios-mobileforms.component';
import { HeaderSmartsalesComponent } from './header-smartsales/header-smartsales.component';
import { PreciosOntimeComponent } from './precios-ontime/precios-ontime.component';
import { MobileformsComponent } from './mobileforms/mobileforms.component';
import { CaretaskComponent } from './caretask/caretask.component';
import { PreciosCaretaskComponent } from './precios-caretask/precios-caretask.component';
import { IntrackComponent } from './intrack/intrack.component';
import { PreciosIntrackComponent } from './precios-intrack/precios-intrack.component';
import { OnecheckComponent } from './onecheck/onecheck.component';
import { PreciosOnecheckComponent } from './precios-onecheck/precios-onecheck.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { SidebarComponent } from './smartsales/sidebar/sidebar.component';
import { SidebarOneCheckComponent } from './onecheck/sidebar/sidebar.component';
import { SidebarMobileFormsComponent } from './mobileforms/sidebar/sidebar.component';
import { SidebarOntimeComponent } from './ontime/sidebar/sidebar.component';
import { SidebarCareTaskComponent } from './caretask/sidebar/sidebar.component';
import { SidebarInTrackComponent } from './intrack/sidebar/sidebar.component';

import { SubmenuMobileformsComponent } from './mobileforms/submenu/submenu.component';
import { SubmenuSmartsalesComponent } from './smartsales/submenu/submenu.component';
import { SubmenuOnecheckComponent } from './onecheck/submenu/submenu.component';
import { SubmenuOntimeComponent } from './ontime/submenu/submenu.component';
import { SubmenuCareTaskComponent } from './caretask/submenu/submenu.component';
import { SubmenuInTrackComponent } from './intrack/submenu/submenu.component';
import { SidebarContactComponent } from './sidebar-contact/sidebar-contact.component';
import { RouterModule } from '@angular/router';
import {  appRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SmartsuiteComponent,
    HeaderComponent,
    FooterComponent,
    SmartsalesComponent,
    AnimateContactoComponent,
    OntimeComponent,
    HeaderSmartsalesComponent,
    MobileformsComponent,
    CaretaskComponent,
    IntrackComponent,
    OnecheckComponent,
    SafeHtmlPipe,
    
    PreciosSmartsalesComponent,
    PreciosOntimeComponent,
    PreciosMobileformsComponent,
    PreciosCaretaskComponent,
    PreciosIntrackComponent,
    PreciosOnecheckComponent,

    SidebarComponent,
    SidebarOneCheckComponent,
    SidebarMobileFormsComponent,
    SidebarOntimeComponent,
    SidebarCareTaskComponent,
    SidebarInTrackComponent,

    SubmenuMobileformsComponent,
    SubmenuSmartsalesComponent,
    SubmenuOnecheckComponent,
    SubmenuOntimeComponent,
    SubmenuCareTaskComponent,
    SubmenuInTrackComponent,
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
    NgxSkeletonLoaderModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true, initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
