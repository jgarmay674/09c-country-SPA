import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public textInput: string = "Buscar por región";
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(busqueda: string): void {
    this.countriesService.searchRegion(busqueda)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
