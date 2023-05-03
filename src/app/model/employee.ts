export class EmployeeModel {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    basicSalary: number;
    status: string;
    group: string;
    description: any;


  constructor(options: {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    birthDate?: Date;
    basicSalary?: number;
    status?: string;
    group?: string;
  } = {}) {
  this.username = options.username || '';
  this.firstName = options.firstName || '' ;
  this.lastName = options.lastName || '' ;
  this.email = options.email || '' ;
  this.birthDate = options.birthDate || new Date() ;
  this.basicSalary = options.basicSalary || 0 ;
  this.status = options.status || '' ;
  this.group = options.group || '' ;
}
}
