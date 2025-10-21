import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipPaneComponent } from './flip-pane.component';

describe('FlipPaneComponent', () => {
  let component: FlipPaneComponent;
  let fixture: ComponentFixture<FlipPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipPaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
