// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { EmployeeListComponent } from './employee-list.component';
// import { EmployeeService } from '../services/employee.service';

// describe('EmployeeListComponent', () => {
//   let component: EmployeeListComponent;
//   let fixture: ComponentFixture<EmployeeListComponent>;
//   let employeeService: EmployeeService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [EmployeeListComponent],
//       providers: [
//         { provide: EmployeeService, useClass: MockEmployeeService },
//         { provide: MatDialog, useClass: MockMatDialog }
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(EmployeeListComponent);
//     component = fixture.componentInstance;
//     employeeService = TestBed.inject(EmployeeService);
//     dialog = TestBed.inject(MatDialog);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call deleteEmployee and refreshEmployees when deleteEmployee is called', () => {
//     spyOn(employeeService, 'deleteEmployee').and.callThrough();
//     spyOn(component, 'refreshEmployees').and.callThrough();
    
//     component.deleteEmployee(1);
    
//     expect(employeeService.deleteEmployee).toHaveBeenCalledWith(1);
//     expect(component.refreshEmployees).toHaveBeenCalled();
//   });
// });
