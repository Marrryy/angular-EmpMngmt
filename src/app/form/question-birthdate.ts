import { QuestionBase } from "../model/question-base";

export class BirthDateQuestion extends QuestionBase<string> {
  override controlType = 'birthdate';
}
