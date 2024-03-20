import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Pages/about/about.component';

import { HomeComponent } from './Pages/home/home.component';
import { ProductComponent } from './Pages/product/product.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProductCardsComponent } from './Components/product-cards/product-cards.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { SortByPricePipe } from './Pipe/sort-by-price.pipe';
import { FilterByNamePipe } from './Pipe/filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    ProductCardsComponent,
    ContactComponent,
    SortByPricePipe,
    FilterByNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  isCollapsed = true;
}
