import { User } from "./UserTypes";

export type Post = {
    // Data
    id: string, 
    topic: string, 
    postdate: string,
    suggester?: User,

    // Content
    //string in typescript has maximum character length of well over 255, so it is fine for posts
    header: string, // 20 Character limit on title, otherwise overlaps the rest of the page. -- TODO
    body: string,
};

export type Comments = {
    pid: string, //ID of the post the comment belongs to
    uid: string, // Who Made the comment
    activitydate: string, // Date the comment was made
    body: string, // body of the comment
    likes: number
};

