import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailEmpComponent {
  employee:EmployeeModel;

  constructor(private router: Router, private route: ActivatedRoute,  public employeeService : EmployeeService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    let id =routeParams.get('id');

    if(id != null){
      let findEmployee = this.employeeService.getEmployee(id);
      if(findEmployee){
        this.employee = findEmployee;
      }else{
        this.router.navigate(['/employee']);
      }

    }
  }

  moneyDots(money : number){
    // Convert to String and add dots every 3 digits
    return "RP."+money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  }

  dateString(date : Date){
    // Convert to String and add dots every 3 digits
    return date.toLocaleDateString()
    ;
  }
}
