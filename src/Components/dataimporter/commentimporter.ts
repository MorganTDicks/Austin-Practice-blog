function CommentImporter(): Array<Comments>{
    let arrCommy: Array<Comments> = [
        {pid: 'my-first-project-car', 
            uid: "AA000000",
            activitydate: '2023-06-10',
            body: `Update: Got a leak in the roof, Working on sealing it before the rainy season gets too bad. `,
            likes: 3},
        {pid: 'my-first-project-car',
            uid: "AA000000",
            activitydate: '2023-07-04',
            body: `Update: regarding that leak in the roof, sealed it but now it looks like it got rained on and started melting away. Will need to repaint it by the looks of it :/`,
            likes: 1}
    ];
        
    return(arrCommy);  
}
export default CommentImporter;