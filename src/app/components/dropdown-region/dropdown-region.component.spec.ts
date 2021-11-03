import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownRegionComponent } from './dropdown-region.component';

describe('DropdownRegionComponent', () => {
  let component: DropdownRegionComponent;
  let fixture: ComponentFixture<DropdownRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
