import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Version17Component } from './version-17.component';

describe('Version17Component', () => {
  let component: Version17Component;
  let fixture: ComponentFixture<Version17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Version17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Version17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
