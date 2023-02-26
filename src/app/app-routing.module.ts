import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {

  path:'', component:HomeComponent
  },
  {

  path:'home', component:HomeComponent
  },

  {
    path:'aboutus', component:AboutusComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'feedback',component:FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
