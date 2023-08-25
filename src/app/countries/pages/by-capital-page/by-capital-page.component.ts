import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  public textInput: string = "Buscar por capital";
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital(busqueda: string): void {
    this.countriesService.searchCapital(busqueda)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
