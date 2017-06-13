import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventgallaryComponent } from './eventgallary.component';

describe('EventgallaryComponent', () => {
  let component: EventgallaryComponent;
  let fixture: ComponentFixture<EventgallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventgallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventgallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
