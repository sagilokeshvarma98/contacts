import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { NoContactsComponent } from './components/no-contacts/no-contacts.component';
import { DisplayContactsComponent } from './components/display-contacts/display-contacts.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddContactComponent,
    NoContactsComponent,
    DisplayContactsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
