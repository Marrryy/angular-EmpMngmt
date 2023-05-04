
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, find, map, startWith } from 'rxjs';
import { filterDropdown } from 'src/app/model/common';
import { QuestionBase } from 'src/app/model/question-base';

export interface User {
  name: string;
}
@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.sass']
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
  get isTouch() { return this.form.controls[this.question.key].invalid && (this.form.controls[this.question.key].dirty || this.form.controls[this.question.key].touched); }
  date = new Date;

  // filteredOptions: filterDropdown[];
  filteredOptions: Observable<any[]>;

  ngOnInit() {
    // let currentFilterOptions =this.filteredOptions.find(x=>x.key  ==  this.question.key);
    if(this.question?.controlType== "dropdown")
      this.filteredOptions = this.form.controls[this.question.key].valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.value;
          return name ? this._filter(name as string) : this.question.options.slice();
        }),
    );
  }

  private _filter(name: string) {
    const filterValue = name.toLowerCase();

    return this.question.options.filter(option => option.value.toLowerCase().includes(filterValue));
  }

}

