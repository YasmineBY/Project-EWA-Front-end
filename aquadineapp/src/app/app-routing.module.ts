import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { EventInvitesComponent } from './event-invites/event-invites.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventCreatedComponent } from './event-created/event-created.component';

import { compileBaseDefFromMetadata } from '@angular/compiler';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'createAccount',
        component: CreateAccountComponent
      },
      {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
      },
      {
        path: 'eventOverview/:eventId',
        component: EventDetailsComponent
      },
      {
        path: 'eventOverview',
        component: EventOverviewComponent
      },
      {
        path: 'eventInvites',
        component: EventInvitesComponent
      },
      {
        path: 'createEvent',
        component: CreateEventComponent
      },
      {
        path: 'foodAndDrink',
        component: FoodAndDrinkComponent
      },
      {
        path: 'eventCreated',
        component: EventCreatedComponent
      }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
