import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLeadComponent } from './contact-lead.component';

describe('ContactLeadComponent', () => {
  let component: ContactLeadComponent;
  let fixture: ComponentFixture<ContactLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
