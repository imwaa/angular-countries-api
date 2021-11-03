import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-region',
  templateUrl: './dropdown-region.component.html',
  styleUrls: ['./dropdown-region.component.scss'],
})
export class DropdownRegionComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  listOfRegions: string[] = [
    'Europe',
    'Americas',
    'Asia',
    'Africa',
    'Oceania',
    'Antartic',
  ];

  selectedRegion: string;

  constructor() {}

  ngOnInit(): void {}

  sendSelectedRegion(e) {
    this.messageEvent.emit(e.target.value);
  }
}
