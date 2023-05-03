import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeModel } from '../model/employee';
import { MatPaginator } from '@angular/material/paginator';
import { Page } from '../model/common';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})

export class EmployeeComponent implements OnInit{

  // displayedColumns: string[] = Object.keys(new EmployeeModel);
  displayedColumns: string[] = ["username","firstName","email","status","action"];
  dataSource = new MatTableDataSource<EmployeeModel>();

  pageSizeOptions = [5, 10, 25, 100]
  page = new Page();
  // currentPage = 0;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.page.totalElements = this.employeeService.dataSource.length;
    this.refresh()
  }


  refresh() {
    const end = (this.page.pageNumber + 1) * this.page.pageSize;
    const start = this.page.pageNumber * this.page.pageSize;
    const part = this.employeeService.dataSource.slice(start, end);
    this.dataSource.data = part;
  }

  pagination(paginator: MatPaginator) {
    // this.currentPage = paginator.pageIndex;
    this.page.pageNumber = paginator.pageIndex;
    this.page.pageSize = paginator.pageSize;
    this.refresh();
  }

  mockData100() {
    console.log("Will be add")
    for(let i =0; i<100;i++){
      let newEmplo = new EmployeeModel(
        {
          username: "Marrryy"+i,
          firstName: "Mary ",
          lastName: "Franklin",
          email: "ling.310500@gmail.com",
          birthDate: new Date("2000-05-31"),
          basicSalary: 15000000,
          status: "Active",
          group: "IT"
        }
      );

      this.employeeService.dataSource.push(newEmplo);
    }
    console.log(this.employeeService.dataSource)
    this.refresh()
  }

}
