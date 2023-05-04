import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeModel } from '../model/employee';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Page } from '../model/common';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { filter } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})

export class EmployeeComponent{

  // displayedColumns: string[] = Object.keys(new EmployeeModel);
  displayedColumns: string[] = ["username","firstName","email","status","action"];
  dataSource = new MatTableDataSource<EmployeeModel>();

  pageSizeOptions = [5, 10, 25, 100]
  page = new Page();
  // currentPage = 0;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public employeeService: EmployeeService, private _liveAnnouncer: LiveAnnouncer) {
    this.dataSource = new MatTableDataSource(this.employeeService.dataSource);
  }
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.page.totalElements = this.employeeService.dataSource.length;

    this.refresh()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  refresh() {
    // const end = (this.page.pageNumber + 1) * this.page.pageSize;
    // const start = this.page.pageNumber * this.page.pageSize;
    // const part = this.employeeService.dataSource.slice(start, end);
    // this.dataSource.data = part;
    this.dataSource.data = this.employeeService.dataSource;
  }

  pagination(paginator: PageEvent) {
    console.log(paginator)
    // this.currentPage = paginator.pageIndex;
    this.page.pageNumber = paginator.pageIndex;
    this.page.pageSize = paginator.pageSize;
    this.refresh();
  }

  applyFilter(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLTextAreaElement).value ?? "";
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
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
    this.page.totalElements = this.employeeService.dataSource.length;
    this.refresh()
  }


  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
