import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Route, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DonnerUnChatComponent } from './donner-un-chat/donner-un-chat.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AdopterComponent } from './adopter/adopter.component';
import { FormsModule } from '@angular/forms';


const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'donner', component: DonnerUnChatComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'adopter', component: AdopterComponent },
  { path: 'forum', component: AccueilComponent },
  { path: '', pathMatch: 'full', redirectTo: '/accueil' },
];


@NgModule({
  declarations: [
    AppComponent,
    DonnerUnChatComponent,
    ContactComponent,
    AccueilComponent,
    NavbarComponent,
    AdopterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
