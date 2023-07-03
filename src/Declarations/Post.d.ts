// TODO: make a User object

type Post = {
    // Data
    id: string, 
    topic:string, 
    // postdate: Date,
    // activitydate: Date,
    // suggester: User, 

    // Content
    //string in typescript has maximum character length of well over 255, so it is fine for posts
    header: string, // 20 Character limit on title, otherwise overlaps the rest of the page. 
    body: string

    // Decor
    // bannerpath: path
};
