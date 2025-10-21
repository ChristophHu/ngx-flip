import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlip } from './ngx-flip';

describe('NgxFlip', () => {
  let component: NgxFlip;
  let fixture: ComponentFixture<NgxFlip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxFlip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFlip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
