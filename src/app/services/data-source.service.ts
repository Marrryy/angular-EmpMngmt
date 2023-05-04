import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  dataSource = new MatTableDataSource<any>();

  constructor() { }
}
