import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Version16Component } from './version-16.component';

describe('Version16Component', () => {
  let component: Version16Component;
  let fixture: ComponentFixture<Version16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Version16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Version16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
