import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/employee';

const ELEMENT_DATA: EmployeeModel[] = [
  { username: "Marrryy",
    firstName: "Mary",
    lastName: "Franklin",
    email: "ling.310500@gmail.com",
    birthDate: new Date("2000-05-31"),
    basicSalary: 15000000,
    status: "Active",
    group: "IT",
    description: "Happy"},
];

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  dataSource:any;
  constructor() {
    this.dataSource = ELEMENT_DATA;
  }
}
