import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public textInput: string = "Buscar por país";
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry(busqueda: string): void {
    this.countriesService.searchCountry(busqueda)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
