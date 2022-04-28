import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcakeComponent } from './addnewcake.component';

describe('AddnewcakeComponent', () => {
  let component: AddnewcakeComponent;
  let fixture: ComponentFixture<AddnewcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewcakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
