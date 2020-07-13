import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CheckGuard} from './guards/check.guard'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CheckGuard, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
