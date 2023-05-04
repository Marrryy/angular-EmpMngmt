import { Injectable } from '@angular/core';
import { QuestionBase } from '../model/question-base';
import { DropdownQuestion } from '../form/question-dropdown';
import { TextboxQuestion } from '../form/question-textbox';
import { of } from 'rxjs';
import { BirthDateQuestion } from '../form/question-birthdate';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor() { }

  EmployeeForm() {

    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'username',
        label: 'User name',
        required: true,
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        required: true,
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        required: true,
      }),

      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
      }),

      new BirthDateQuestion({
        key: 'birthDate',
        label: 'birth Date',
        type: 'date',
        required: true,
      }),

      new TextboxQuestion({
        key: 'basicSalary',
        label: 'Basic Salary',
        type: 'number',
        min:0,
        required: true,
      }),
      new TextboxQuestion({
        key: 'status',
        label: 'Status',
        required: true,
      }),

      new DropdownQuestion({
        key: 'group',
        label: 'Group',
        options: [
          {key: 'accountant', value:'Accountant'},
          {key: 'administrator',  value:'Administrator'},
          {key: 'advisor',  value:'Advisor'},
          {key: 'ceo',  value:'Ceo'},
          {key: 'driver',  value:'Driver'},
          {key: 'hr admin',  value:'Hr Admin'},
          {key: 'it', value:'IT'},
          {key: 'manager',value:'Manager'},
          {key: 'payroll',  value:'Payroll'},
          {key: 'supervisor',  value:'Supervisor'},
          {key: 'security',  value:'Security'},
        ],
        required: true,
      }),

      new TextboxQuestion({
        key: 'description',
        label: 'Description',
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
