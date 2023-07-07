type Post = {
    // Data
    id: string, 
    topic:string, 
    postdate: string,
    suggester: string, //Just need the user ID, not the whole user object 

    // Content
    //string in typescript has maximum character length of well over 255, so it is fine for posts
    header: string, // 20 Character limit on title, otherwise overlaps the rest of the page. 
    body: string,

    // Decor
    bannerpath: path //TODO: Research how to set default vlues for typescript types (HINT: Interface?)
};

