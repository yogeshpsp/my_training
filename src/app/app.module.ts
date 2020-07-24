import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CheckGuard} from './guards/check.guard'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {EmployeeService} from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { SubmitContactComponent } from './submit-contact/submit-contact.component';
import { FormLoginComponent } from './form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    LoginpageComponent,
    HeaderComponent,
    PagenotfoundComponent,
    FormContactComponent,
    SubmitContactComponent,
    FormLoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CheckGuard, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
