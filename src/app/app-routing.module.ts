import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CheckGuard } from './guards/check.guard';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SubmitContactComponent } from './submit-contact/submit-contact.component';



const routes: Routes = [ 
  {
    path:'',
    component:LoginpageComponent
  },
  {
    path:'header',
    component: HeaderComponent
  },
  {
  path:'home',
  component: HomeComponent
},
{
  path:'contact',
  component: ContactComponent,
  canActivate:[CheckGuard],
  data: ['admin']
},
{
  path: 'footer',
  component: FooterComponent,
  canActivate:[CheckGuard],
  data: ['admin', 'user']
},
{
  path: 'details/:id',
  component: EmployeeDetailComponent,
},
{
  path:'submit-contact',
  component: SubmitContactComponent,
},
{
  path:'users',
  loadChildren:'app/users/users.module#usersModule'
},
{
  path: 'pagenotfound',
  component: PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
