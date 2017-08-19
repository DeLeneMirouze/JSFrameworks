import { IOwner } from "./Owner"
import { IComment } from "./Comment"

export interface IAnswer
{
    answer_id: number;
    question_id: number;
    body: string;
    owner: IOwner;
    is_accepted: boolean;
    creation_date: number;
    score: number;

    comments: IComment[];
}
