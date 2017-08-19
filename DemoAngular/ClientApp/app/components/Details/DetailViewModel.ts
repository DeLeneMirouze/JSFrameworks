
import { IQuota } from "../Domain/Quota";
import { IAnswer } from "../Domain/Answer";
import { IDetailedQuestion } from "../Domain/DetailedQuestion";

export interface IDetailViewModel {
    quota: IQuota;
    detailedQuestion: IDetailedQuestion;
    questions: IAnswer[];
}