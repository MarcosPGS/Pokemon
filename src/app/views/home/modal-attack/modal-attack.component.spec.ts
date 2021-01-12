import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAttackComponent } from './modal-attack.component';

describe('ModalAttackComponent', () => {
  let component: ModalAttackComponent;
  let fixture: ComponentFixture<ModalAttackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAttackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
