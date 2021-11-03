import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomesComponent } from './pages/homes/homes.component';
import { DetailsComponent } from './pages/details/details.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomesComponent,
    DetailsComponent,
    CountryCardComponent,
    FilterComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
