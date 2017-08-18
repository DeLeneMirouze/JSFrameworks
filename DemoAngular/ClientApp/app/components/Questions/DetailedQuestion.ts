import { IQuestion } from "./Question";

export interface IDetailedQuestion extends IQuestion
{
    body: string;
    score: number;
}