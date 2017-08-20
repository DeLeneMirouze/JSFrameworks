
import { IQuota } from "../Domain/Quota";
import { IAnswer } from "../Domain/Answer";
import { IQuestion } from "../Domain/Question";

export interface IDetailViewModel {
    quota: IQuota;
    question: IQuestion;
    answers?: IAnswer[];
}