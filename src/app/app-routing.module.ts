import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'about', component: AboutComponent},
  { path: 'item/:id', component: ItemComponent},
  { path: 'search/:termino', component: SearchComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  // El useHash para que sepa el navegador que lo que sigue despues del # es
  //parte de la ruta del index.html, y no otra carpeta o sitio web.
  exports: [RouterModule]
  //para que pueda ser usado fuera del componente
})
export class AppRoutingModule { }
