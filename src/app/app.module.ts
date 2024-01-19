import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutModule } from './rout-routing.module';
import { SonComponent } from './son/son.component';
import { FormsModule } from '@angular/forms';
import { DecativateComponent } from './decativate/decativate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SonComponent,
    DecativateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
