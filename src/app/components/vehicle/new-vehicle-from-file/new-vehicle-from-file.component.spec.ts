import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehicleFromFileComponent } from './new-vehicle-from-file.component';

describe('NewVehicleFromFileComponent', () => {
  let component: NewVehicleFromFileComponent;
  let fixture: ComponentFixture<NewVehicleFromFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVehicleFromFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVehicleFromFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
