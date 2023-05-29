import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDoctorComponent } from './eliminar-doctor.component';

describe('EliminarDoctorComponent', () => {
  let component: EliminarDoctorComponent;
  let fixture: ComponentFixture<EliminarDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarDoctorComponent]
    });
    fixture = TestBed.createComponent(EliminarDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
