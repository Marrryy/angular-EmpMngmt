
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/model/question-base';
import { QuestionControlService } from 'src/app/services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.sass'],
  providers: [ QuestionControlService ]

})

export class DynamicFormComponent implements OnInit  {
  @Input() callbackFunction: (args: any) => void;

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    // this.payLoad = JSON.stringify(this.form.getRawValue());
    this.callbackFunction(this.form.getRawValue());
  }
}
