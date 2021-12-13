import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartsuiteComponent } from './smartsuite/smartsuite.component';

export const appRoutes: Routes = [
    { path: '', component: SmartsuiteComponent},
    {path: '**', pathMatch: 'full', component: SmartsuiteComponent}

];