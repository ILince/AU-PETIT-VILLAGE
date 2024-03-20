import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component'; 
import { ProductComponent } from './Pages/product/product.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path:'Contact', component: ContactComponent},
  {path:'Product/:id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
