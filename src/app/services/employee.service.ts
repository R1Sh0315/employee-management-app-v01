import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/employee.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class EmployeeService {
    private refreshSubject = new Subject<void>();
    refresh$ = this.refreshSubject.asObservable();

    apiUrl = 'https://66c60963134eb8f434968c00.mockapi.io/api/employees/employee'

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>(this.apiUrl);
    }

    addEmployee(employee: IEmployee): Observable<IEmployee> {
        return this.http.post<IEmployee>(this.apiUrl, employee);
    }

    deleteEmployee(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    updateEmployee(employee: IEmployee): Observable<IEmployee> {
        return this.http.put<IEmployee>(`${this.apiUrl}/${employee.id}`, employee);
    }


    triggerRefresh() {
        this.refreshSubject.next();
    }
}