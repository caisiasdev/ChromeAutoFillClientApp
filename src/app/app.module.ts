import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AadhaarComponent } from './aadhaar/aadhaar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PmkisanComponent } from './pmkisan/pmkisan.component';
@NgModule({
  declarations: [
    AppComponent,
    AadhaarComponent,
    PmkisanComponent
  ],
  imports: [
      FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
