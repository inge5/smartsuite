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

export const appRoutes: Routes = [
    { path: '', component: SmartsuiteComponent},
    // { path: 'smartsuite', component: SmartsuiteComponent},
    { path: 'smartsales', component: SmartsalesComponent},
    { path: 'smartsales/precios', component: PreciosSmartsalesComponent},
    { path: 'mobileforms', component: MobileformsComponent},
    { path: 'mobileforms/precios', component: PreciosMobileformsComponent},
    { path: 'onecheck', component: OnecheckComponent},
    { path: 'onecheck/precios', component: PreciosOnecheckComponent},
    { path: 'caretask', component: CaretaskComponent},
    { path: 'caretask/precios', component: PreciosCaretaskComponent},
    { path: 'ontime', component: OntimeComponent},
    { path: 'ontime/precios', component: PreciosOntimeComponent},
    { path: 'intrack', component: IntrackComponent},
    { path: 'intrack/precios', component: PreciosIntrackComponent},
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
// export const appRoutingProviders: any[] = [];
// export const APP_ROUTING: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);