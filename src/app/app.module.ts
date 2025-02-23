import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResidencesComponent } from './Residences/residences.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Ajoutez ici le composant app-header
    ResidencesComponent, // Ajoutez ici le composant app-residences
    FooterComponent // Ajoutez ici le composant app-footer
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
