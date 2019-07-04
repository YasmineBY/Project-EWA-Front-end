import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { EventInvitesComponent } from './event-invites/event-invites.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { EventCreatedComponent } from './event-created/event-created.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    EventOverviewComponent,
    NavBarComponent,
    EventDetailsComponent,
    FoodAndDrinkComponent,
    EventInvitesComponent,
    CreateEventComponent,
    CompareValidatorDirective,
    EventCreatedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
