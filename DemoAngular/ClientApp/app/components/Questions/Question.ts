import { IOwner } from "./Owner"
import { IComment } from "./Comment"

export interface IQuestion {
    id: number;
    title: string;
    isAnswered: boolean;
    views: number;
    answers: number;
    creationDate: number;
    lastActivity: number;
    tags: string[]

    owner: IOwner;
    //comments: IComment[];
}