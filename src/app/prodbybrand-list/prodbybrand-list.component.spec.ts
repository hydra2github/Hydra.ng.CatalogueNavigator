import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdbybrandListComponent } from './prodbybrand-list.component';

describe('ProdbybrandListComponent', () => {
  let component: ProdbybrandListComponent;
  let fixture: ComponentFixture<ProdbybrandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdbybrandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdbybrandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
