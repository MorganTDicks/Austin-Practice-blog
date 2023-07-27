export type Post = {
    // Data
    id: string, 
    topic:string, 
    postdate: string,
    suggester?: string,

    // Content
    //string in typescript has maximum character length of well over 255, so it is fine for posts
    header: string, // 20 Character limit on title, otherwise overlaps the rest of the page. -- TODO
    body: string,

    // Decor
    bannerpath?: string; // Morgan suggests removing bannerpath if it will be optional (as part of the interface). 
        // Possible alternative is to keep it a string but make it an optional parameter when assigning it, though that will create unneccesary repetition. 
        // Check out https://www.geeksforgeeks.org/how-to-specify-optional-properties-in-typescript/
};

export type Comments = {
    pid: string, //ID of the post the comment belongs to
    uid: string, // Who Made the comment
    activitydate: string, // Date the comment was made
    body: string, // body of the comment
    likes: number
};

