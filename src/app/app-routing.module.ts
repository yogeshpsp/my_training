import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CheckGuard } from './guards/check.guard';


const routes: Routes = [{
  path:'home',
  component: HomeComponent,
  canActivate:[CheckGuard],
  data:['YOGESH']
},
{
  path:'contact',
  component: ContactComponent
},
{
  path: 'footer',
  component: FooterComponent,
},
{
  path:'users',
  loadChildren:'app/users/users.module#usersModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
