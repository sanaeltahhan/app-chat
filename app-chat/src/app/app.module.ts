import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Route, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';


const ROUTES: Routes = [
   { path: 'accueil', component: AccueilComponent},
   { path: 'donner', component: AccueilComponent},
   { path: 'contact', component: ContactComponent},
   { path: 'adopter', component: AccueilComponent},
   { path: 'forum', component: AccueilComponent},

  { path: '', pathMatch: 'full', redirectTo: '/accueil' },
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AccueilComponent,
    NavbarComponent
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
