export default function DataImporter(){
    
    // this.postImporter(){ // Need to get internal functions working, to allow separate post, theme & user imports. 
        // If data not imported, Import the backend data into the below array here
        // Else, return the already imported data (for efficiency :D)

        // For now, 3 example pages:

        // Defined Post type in Declarations/Post.d.ts
        // Will need to update this once confirmed working
        let arrPosts: Array<Post> = [
            {id: 'hello-world', 
            topic: 'Misc',
            header: 'Hello World!',
            body: `This is my first post, Hello World! 
            I would love for you guys to comment down below with some suggestions as to what to post next! I will have several topics in which I post, but if it doesn't quite fit in, suggest a new topic as well!`},
            
            {id: 'my-first-project-car', 
            topic: 'Cars',
            header: 'My First Project Car',
            body: `Ah Yes, my first project car. I remember it like it was yesturday... probably because it was.  
            I have this old RV i am working on. Got it from my grandfather. It was subject to a bit of neglect over the years, but now that i will have it in my name soon, it is up to me to fix it up. Post down below any tips or comments you may have, this will be quite the journey for all of us. `},
            
            {id: 'getting-a-bike-drivers-worth-it', 
            topic: 'Cars',
            header: 'Getting a Bike Driver`s: Worth it?',
            body: `After thinking i was finally done with the trudge of getting a driver's licence, it was now suggested to me that a Biker's licence is just as essential? I would love to hear your thoughts and experience on this. `}    
        ];
            
        return(arrPosts);
    // }
}