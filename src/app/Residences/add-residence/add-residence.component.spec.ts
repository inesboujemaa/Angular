import { ComponentFixture, TestBed } from '@angular/core/testing';

 import { AddResidencesComponent } from './add-residence.component';

describe('AddResidenceComponent', () => {
  let component: AddResidencesComponent;
  let fixture: ComponentFixture<AddResidencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddResidencesComponent]
    });
    fixture = TestBed.createComponent(AddResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
