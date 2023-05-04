import { Injectable } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../model/question-base'

@Injectable({
  providedIn: 'root'
})

export class QuestionControlService {
  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');


      if(question.max != undefined){
        group[question.key].setValidators([Validators.max(question.max)]);
      }

      if(question.min != undefined){
        group[question.key].setValidators([Validators.min(question.min)]);
      }


      if(question.type == "email"){
        group[question.key].setValidators([Validators.email]);
      }
    });
    return new FormGroup(group);
  }
}
