import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AadhaarComponent} from './aadhaar/aadhaar.component';
import {PmkisanComponent} from './pmkisan/pmkisan.component';

const routes: Routes = [
{path: '', component: AadhaarComponent},
{path: 'pmkisan', component: PmkisanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
