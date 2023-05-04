import { Observable } from "rxjs";

export class LoginModel {
  username: string;
  userpwd: string;

  constructor(options: {
    username?: string;
    userpwd?: string;
  } = {}) {
  this.username = options.username || '';
  this.userpwd = options.userpwd || '';
}
}


export class UserModel {
  username?: string;
}



export class Page {
  pageSize: number;
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  query?: string;
  sortBy?: string;
  sortDirection?: string;
  matchPhrase: boolean;

  constructor() {
      this.pageSize = 10;
      this.totalElements = 0;
      this.totalPages = 0;
      this.pageNumber = 0;
      this.matchPhrase = false;
  }
}


export class filterDropdown {
  key: string;
  filteredOptions: Observable<any[]>;
}
