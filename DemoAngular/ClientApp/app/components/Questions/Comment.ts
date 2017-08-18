import {IOwner} from "./Owner"

export interface IComment
{
    id: number;
    questionId: number;
    creationDate: string;
    body: string;
    owner: IOwner;
    replyer: IOwner;

}