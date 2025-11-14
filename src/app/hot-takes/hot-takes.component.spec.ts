import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTakesComponent } from './hot-takes.component';

describe('HotTakesComponent', () => {
  let component: HotTakesComponent;
  let fixture: ComponentFixture<HotTakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotTakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotTakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
