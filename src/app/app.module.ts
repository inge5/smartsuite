import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { SmartsuiteComponent } from './smartsuite/smartsuite.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SmartsalesComponent } from './smartsales/smartsales.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateContactoComponent } from './animate-contacto/animate-contacto.component';
import { OntimeComponent } from './ontime/ontime.component';
import { PreciosSmartsalesComponent } from './precios-smartsales/precios-smartsales.component';
import { HeaderSmartsalesComponent } from './header-smartsales/header-smartsales.component';
import { PreciosOntimeComponent } from './precios-ontime/precios-ontime.component';
import { MobileformsComponent } from './mobileforms/mobileforms.component';
import { CaretaskComponent } from './caretask/caretask.component';
import { PreciosMobileformsComponent } from './precios-mobileforms/precios-mobileforms.component';
import { PreciosCaretaskComponent } from './precios-caretask/precios-caretask.component';
import { IntrackComponent } from './intrack/intrack.component';
import { PreciosIntrackComponent } from './precios-intrack/precios-intrack.component';
import { OnecheckComponent } from './onecheck/onecheck.component';
import { PreciosOnecheckComponent } from './precios-onecheck/precios-onecheck.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartsuiteComponent,
    HeaderComponent,
    FooterComponent,
    SmartsalesComponent,
    AnimateContactoComponent,
    OntimeComponent,
    PreciosSmartsalesComponent,
    HeaderSmartsalesComponent,
    PreciosOntimeComponent,
    MobileformsComponent,
    CaretaskComponent,
    PreciosMobileformsComponent,
    PreciosCaretaskComponent,
    IntrackComponent,
    PreciosIntrackComponent,
    OnecheckComponent,
    PreciosOnecheckComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
