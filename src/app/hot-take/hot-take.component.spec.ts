import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTakeComponent } from './hot-take.component';

describe('HotTakeComponent', () => {
  let component: HotTakeComponent;
  let fixture: ComponentFixture<HotTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotTakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
