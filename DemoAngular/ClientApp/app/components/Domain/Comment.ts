import {IOwner} from "./Owner"

export interface IComment
{
    comment_id: number;
    post_id: number;
    creation_date: string;
    body: string;
    owner: IOwner;
    reply_to_user: IOwner;

}