import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortressDoorComponent } from './fortress-door.component';

describe('FortressDoorComponent', () => {
  let component: FortressDoorComponent;
  let fixture: ComponentFixture<FortressDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortressDoorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortressDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
