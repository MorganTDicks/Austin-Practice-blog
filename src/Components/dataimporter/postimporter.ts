import type { Post } from "@/Declarations/PostTypes";

function PostImporter(): Array<Post>{
    let arrPosts: Array<Post> = [
        {id: 'hello-world', 
        topic: 'Misc',
        postdate: '2022-03-25',
        suggester: 'AA000000',
        header: 'Hello World!',
        body: `This is my first post, Hello World! 
        I would love for you guys to comment down below with some suggestions as to what to post next! I will have several topics in which I post, but if it doesn't quite fit in, suggest a new topic as well!`,
        bannerpath: '../../Images/Banner.jpg'},
        
        {id: 'my-first-project-car', 
        topic: 'Cars',
        postdate: '2022-10-02',
        suggester: 'AA000000',
        header: 'My First Project Car',
        body: `Ah Yes, my first project car. I remember it like it was yesterday... probably because it was.  
        I have this old RV i am working on. Got it from my grandfather. It was subject to a bit of neglect over the years, but now that i will have it in my name soon, it is up to me to fix it up. Post down below any tips or comments you may have, this will be quite the journey for all of us. `,
        bannerpath: '../../Images/Banner.jpg'},
        
        {id: 'getting-a-bike-drivers-worth-it', 
        topic: 'Cars',
        postdate: '2021-12-05',
        suggester: 'AA000000',
        header: 'Getting a Bike Driver`s: Worth it?',
        body: `After thinking i was finally done with the trudge of getting a driver's licence, it was now suggested to me that a Biker's licence is just as essential? I would love to hear your thoughts and experience on this. `,
        bannerpath: '../../Images/Banner.jpg'}    
    ];
        
    return(arrPosts);  
}
export default PostImporter;