import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipControlsComponent } from './flip-controls.component';

describe('FlipControlsComponent', () => {
  let component: FlipControlsComponent;
  let fixture: ComponentFixture<FlipControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
