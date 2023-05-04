import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/model/employee';
import { QuestionBase } from 'src/app/model/question-base';
import { EmployeeService } from 'src/app/services/employee.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
  providers:  [QuestionService]
})
export class AddEmployeeComponent  {
  questions$: Observable<QuestionBase<any>[]>;


  constructor(service: QuestionService, public router: Router,public employeeService: EmployeeService) {
    this.questions$ = service.EmployeeForm();
  }

  SubmitEmployee = (args: any): void => {
    //callback code here
    // console.log("args ", args as EmployeeModel)
      let newEmp = args as EmployeeModel;
      newEmp.birthDate = new Date(newEmp.birthDate);
      if(this.employeeService.postEmployee(args as EmployeeModel)){
        this.router.navigate(['/employee']);
      }
  }
}
