import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeModel } from '../model/employee';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Page } from '../model/common';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { filter } from 'rxjs';
import { DataSourceService } from '../services/data-source.service';

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

  constructor(public employeeService: EmployeeService, private _liveAnnouncer: LiveAnnouncer, public dataSourceService: DataSourceService) {
    this.dataSource = new MatTableDataSource(this.employeeService.dataSource);
  }
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.page.totalElements = this.employeeService.dataSource.length;

    if(this.dataSourceService.dataSource.data.length>0){
      this.dataSource =this.dataSourceService.dataSource;
    }else{
      this.refresh()
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSourceService.dataSource = this.dataSource;
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


    this.dataSource.paginator = this.paginator;
    this.dataSourceService.dataSource = this.dataSource;
  }

  applyFilter(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLTextAreaElement).value ?? "";
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSourceService.dataSource = this.dataSource;

  }

  mockData100() {
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
    this.dataSource.sort = this.sort;
    this.dataSourceService.dataSource = this.dataSource;
    // if (sortState.direction) {
    //   this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    // } else {
    //   this._liveAnnouncer.announce('Sorting cleared');
    // }
  }

}
