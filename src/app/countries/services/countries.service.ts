import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  searchCountryAlphaCode( busqueda: string ): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${busqueda}`;
    return this.httpClient.get<Country[]>( url )
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(error => of(null))
      );
  }

  searchCapital( busqueda: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${busqueda}`;
    return this.httpClient.get<Country[]>( url )
      .pipe(
        catchError(error => of([]))
      );
  }

  searchCountry( busqueda: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${busqueda}`;
    return this.httpClient.get<Country[]>( url )
      .pipe(
        catchError(error => of([]))
      );
  }

  searchRegion( busqueda: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${busqueda}`;
    return this.httpClient.get<Country[]>( url )
      .pipe(
        catchError(error => of([]))
      );
  }

}
