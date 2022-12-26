import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerInfoComponent } from './messenger-info.component';

describe('MessengerInfoComponent', () => {
  let component: MessengerInfoComponent;
  let fixture: ComponentFixture<MessengerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessengerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
