import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Country } from 'src/app/types/api';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss'],
})
export class HomesComponent implements OnInit {
  private source: Country[];
  searchedCountry?: string;
  selectedRegion?: string;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((countries) => {
      this.source = countries;
    });
  }

  receiveSelectedRegion($event) {
    this.selectedRegion = $event;
  }

  get countries() {
    return this.source
      ? this.source
          .filter((country) =>
            this.searchedCountry
              ? country.name.official
                  .toLowerCase()
                  .includes(this.searchedCountry.toLowerCase())
              : country
          )
          .filter((country) =>
            this.selectedRegion
              ? country.region.toLowerCase() ===
                this.selectedRegion.toLowerCase()
              : country
          )
      : this.source;
  }
}
