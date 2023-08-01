export type PostData = {
    postID: string, 
    Header: string,
    Body: string, 
    Topic: string,
    Suggester?: string, 
    PostDate: string, 
    Status: string
}

export type CommentsData = {
    pID: string, 
    uID: string, 
    ActivityDate: string, // Can't seem to get date to work
    Body: string, 
    Likes: number
}

export type UserData = {
    userID: string, 
    Username: string, 
    Name?: string,
    Surname?: string, 
    Email: string, 
    Password?: string, // Confirm Password type
    Level?: number
}