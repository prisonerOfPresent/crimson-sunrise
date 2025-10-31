import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortressComponent } from './fortress.component';

describe('FortressComponent', () => {
  let component: FortressComponent;
  let fixture: ComponentFixture<FortressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
