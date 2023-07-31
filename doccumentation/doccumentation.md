# Doccumentation: 
Welcome to doccumentation, doccumenting all the changes / adjustments to this project since its inception. 

For detailed sprint info, see below: 
- <a href="./doccumentation/sprint1.md"> Sprint 1</a>: Creating home page, initialising git & git flow, initialising the next.ts app. 
- <a href="./doccumentation/sprint1.md"> Sprint 2</a>: Loging in, profile dashboard, Context & Cross-page states (Reaction)
- <a href="./doccumentation/sprint1.md"> Sprint 3 (Current)</a>: Designing back-end data model, building API routes & implimenting mock authorisation


Regarding future plans and stuff still to be done that is not planned for the current sprint, see below: 

### ToDO: 

Functionality:
Edit types so that user is only calculated once per post / comment etc.
dashboard, replace image with generic image if not found.
Editing User type to allow for followed users, followed posts, followed topics?  

Style Changes:
Hide postcarousel buttons when at end. 
adding styling to dynamic post page
Replace toolbar text with icons. 
Clean up repetitive CSS by using dynamic styling. 

Bugfixes:
Fix post title overlapping (see post: bike driver's in the dev preview to understand)
fix Home & User going behind navbar (started once checkLogin component was implimented)


#### Suggestions from Morgan 17/07/2023

styling: SCSS styling (look into it. ALso, tailwind.css)
(material.ui?) - don't use yet.  
userinfo -- bulky. Use conditional rendering & Layouts
// Graph QL - appsynch 
https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern

#### Other Features:

Create Search Bar Component (Separate Feature Branch)?
Topics 
Suggesting & Adding Posts
Deleting Posts
Adding, editing and deleting comments. 

#### Skipped: 
Find out how to use props with React.FC type function - skipped as react cn ssume function types utomaticlly. 
Find out how to do justified passing on navbar? - skipped, found n lterntive.
Change DataImporter to have internal functions rather than just return posts. 
Could not get this to work. Mde sseprte dt importers for now.
merge dt importers.  
Fixed, using a dictionry 
Adding a smooth collapsing animation to the header banner when user scrolls down 
got it working to a point where i am satisfied with how it looks for now.


### Stuff that will bankrupt me: 

Users: 
Adding a Star / Subscribe system for posts the user follows. 

Posts: 
Order Posts page by recent activity
Adding tags
Counting number of page views
Making page browser when above 10 posts (10 posts per page).

Login: 
make login a pop-up as opposed to a page of its own.

Other: 
Allowing users to upload an image when creating an account / post. 
Search comparing input to all existing posts as the user types. Search just takes in the theme and what they types, then returns it (as a prop for a master module, maybe?)
making 'show topics' and 'contact me' collapsable side bars instead of their own pages


/* Figured out how to run the app to test it. - Seemed to be an issue with typescript and react.
Troubleshooting steps: 

ran npm run dev, got a blank page. 
// restarted the program
ran 'npm start' got an error saying .next is empty, run next build
ran next build, command not recodnised
ran npm next build, next not recodnised
ran npx next build, worked. installed build and built the project. 
ran 'npm start' finished with an error that some dependancies are missing
  ran npx tsc --watch, found zero errors
  ran npx next build, > Export encountered errors on following paths:
        /
        /_error: /404
        /_error: /500
  ran npm start, encountered same error as last time: 
        type: 'Error',
        code: 'MODULE_NOT_FOUND',
        requireStack: [
          'C:\\Users\\User\\Projects\\austin-practice-blog\\node_modules\\next\\dist\\server\\next-server.js',
          'C:\\Users\\User\\Projects\\austin-practice-blog\\node_modules\\next\\dist\\server\\next.js',
          'C:\\Users\\User\\Projects\\austin-practice-blog\\node_modules\\next\\dist\\server\\lib\\render-server.js',
          'C:\\Users\\User\\Projects\\austin-practice-blog\\node_modules\\next\\dist\\compiled\\jest-worker\\processChild.js'
  // FIXED: Use Src/ directory format for typescript when installing nextjs. 

*/
