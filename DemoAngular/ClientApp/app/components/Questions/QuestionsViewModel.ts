import { IQuota } from './Quota';
import { IQuestion } from "./Question";

export interface IQuestionViewModel {
    quota: IQuota;

    questions: IQuestion[];
}