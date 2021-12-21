import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartsuiteComponent } from './smartsuite/smartsuite.component';
import { SomosComponent } from './somos/somos.component';

export const appRoutes: Routes = [
    { path: '', component: SmartsuiteComponent},
    { path: 'somos', component: SomosComponent},
    {path: '**', pathMatch: 'full', component: SmartsuiteComponent}

];