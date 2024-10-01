import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { AboutuseComponent } from './app/aboutuse/aboutuse.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CategorieComponent } from './app/categorie/categorie.component';
import { AcceuilComponent } from './app/acceuil/acceuil.component';
import { MenuComponent } from './app/acceuil/menu/menu.component';
import { BoireComponent } from './app/acceuil/boire/boire.component';


const routes: Routes = [
  { path: 'aboutuse', component: AboutuseComponent },  // Assurez-vous que cela est défini ici aussi
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'categorie', component: CategorieComponent},
  {path: 'acceuil', component: AcceuilComponent},
{path: 'menu', component: MenuComponent},
{path: 'boire', component: BoireComponent},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()  // Assurez-vous d'utiliser provideRouter
  ]
}).catch((err) => console.error(err));
