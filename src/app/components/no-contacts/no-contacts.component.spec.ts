import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoContactsComponent } from './no-contacts.component';

describe('NoContactsComponent', () => {
  let component: NoContactsComponent;
  let fixture: ComponentFixture<NoContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
