import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartsuiteComponent } from './smartsuite/smartsuite.component';
import { SmartsalesComponent } from './smartsales/smartsales.component';
import { PreciosSmartsalesComponent } from './smartsales/precios/precios-smartsales.component';
import { OntimeComponent } from './ontime/ontime.component';
import { PreciosOntimeComponent } from './precios-ontime/precios-ontime.component';
import { MobileformsComponent } from './mobileforms/mobileforms.component';
import { PreciosMobileformsComponent } from './mobileforms/precios/precios-mobileforms.component';
import { CaretaskComponent } from './caretask/caretask.component';
import { PreciosCaretaskComponent } from './precios-caretask/precios-caretask.component';
import { IntrackComponent } from './intrack/intrack.component';
import { PreciosIntrackComponent } from './precios-intrack/precios-intrack.component';
import { OnecheckComponent } from './onecheck/onecheck.component';
import { PreciosOnecheckComponent } from './precios-onecheck/precios-onecheck.component';

const appRoutes: Routes = [
    { path: '', component: SmartsuiteComponent},
    // { path: 'smartsuite', component: SmartsuiteComponent},
    { path: 'smartsales', component: SmartsalesComponent},
    { path: 'smartsales/precios', component: PreciosSmartsalesComponent},
    // { path: 'precios-ontime', component: PreciosOntimeComponent},
    { path: 'mobileforms', component: MobileformsComponent},
    { path: 'mobileforms/precios', component: PreciosMobileformsComponent},
    { path: 'onecheck', component: OnecheckComponent},
    { path: 'caretask', component: CaretaskComponent},
    { path: 'ontime', component: OntimeComponent},
    // { path: 'precios-caretask', component: PreciosCaretaskComponent},
    { path: 'intrack', component: IntrackComponent},
    // { path: 'precios-intrack', component: PreciosIntrackComponent},
    // { path: 'precios-onecheck', component: PreciosOnecheckComponent},
    {path: '**', pathMatch: 'full', component: SmartsuiteComponent}

];

// export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
// export const APP_ROUTING = RouterModule.forRoot(appRoutes, {
//     useHash: true,
//     onSameUrlNavigation: "ignore",
//     anchorScrolling: 'enabled',
//     scrollPositionRestoration: 'enabled'
// });
export const appRoutingProviders: any[] = [];
export const APP_ROUTING: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);