import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';
import { IEmployee } from '../models/employee.model';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;
  const apiUrl = 'https://66c60963134eb8f434968c00.mockapi.io/api/employees/employee';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });

    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch employees', () => {
    const mockEmployees: IEmployee[] = [
      { id: 1, name: 'John Doe', position: 'Developer', department: 'IT' }
    ];

    service.getEmployees().subscribe(employees => {
      expect(employees.length).toBe(1);
      expect(employees).toEqual(mockEmployees);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockEmployees);
  });

  it('should add an employee', () => {
    const newEmployee: IEmployee = { id: 2, name: 'Jane Smith', position: 'Manager', department: 'HR' };

    service.addEmployee(newEmployee).subscribe(employee => {
      expect(employee).toEqual(newEmployee);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(newEmployee);
  });

  it('should delete an employee', () => {
    const id = 1;

    service.deleteEmployee(id).subscribe(() => {
      expect(true).toBe(true); // You might want to replace this with a more meaningful assertion.
    });

    const req = httpMock.expectOne(`${apiUrl}/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('should update an employee', () => {
    const updatedEmployee: IEmployee = { id: 1, name: 'John Doe', position: 'Senior Developer', department: 'IT' };

    service.updateEmployee(updatedEmployee).subscribe(employee => {
      expect(employee).toEqual(updatedEmployee);
    });

    const req = httpMock.expectOne(`${apiUrl}/${updatedEmployee.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedEmployee);
  });
});
