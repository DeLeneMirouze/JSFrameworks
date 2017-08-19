import { IQuota } from '../Domain/Quota';
import { IQuestion } from "../Domain/Question";

export interface IQuestionViewModel {
    quota: IQuota;

    questions: IQuestion[];
}