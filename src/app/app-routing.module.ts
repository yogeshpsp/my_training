import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CheckGuard } from './guards/check.guard';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';



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
  path: 'details/:id ',
  component: EmployeeDetailComponent,
},
{
  path:'users',
  loadChildren:'app/users/users.module#usersModule'
},
{
  path:'logindetails/:username',
  component:LogindetailsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
