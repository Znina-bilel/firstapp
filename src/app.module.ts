import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; // Pour les listes dans la sidebar
import { RouterModule, Routes } from '@angular/router';
import { AboutuseComponent } from './app/aboutuse/aboutuse.component';
import { AppComponent } from './app/app.component';
import { CategorieComponent } from './app/categorie/categorie.component';
import { AcceuilComponent } from './app/acceuil/acceuil.component';
import { MenuComponent } from './app/acceuil/menu/menu.component';


const routes: Routes = [

  { path: 'aboutuse', component: AboutuseComponent },
  { path: '', redirectTo: '/aboutuse', pathMatch: 'full' },


];

@NgModule({
  declarations: [
    AppComponent,
    AboutuseComponent,
    CategorieComponent,
AcceuilComponent,
MenuComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Assurez-vous que cela est importé
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(routes) // Utilisez forRoot pour les routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
