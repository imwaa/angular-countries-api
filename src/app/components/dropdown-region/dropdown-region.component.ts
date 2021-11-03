import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-region',
  templateUrl: './dropdown-region.component.html',
  styleUrls: ['./dropdown-region.component.scss'],
})
export class DropdownRegionComponent implements OnInit {
  listOfRegions: string[] = [
    'Europe',
    'America',
    'Asia',
    'Africa',
    'Oceania',
    'Antartic',
  ];

  selectedRegion: string;

  constructor() {}

  ngOnInit(): void {}

  afficher(e) {
    alert(e.target.value);
  }
}
