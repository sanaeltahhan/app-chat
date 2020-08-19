import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerUnChatComponent } from './donner-un-chat.component';

describe('DonnerUnChatComponent', () => {
  let component: DonnerUnChatComponent;
  let fixture: ComponentFixture<DonnerUnChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonnerUnChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnerUnChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
