# Doccumentation: 

# Sprint 1
Focus: Creating home page, initialising git & git flow, initialising the next.ts app. 

## Initialised the repository using the following git commands: 
Navigated to the project folder
git init
git remote add origin https://github.com/Austin-ALIT/Austin-Practice-blog.git
git flow init (Replied yes to everything)
Git flow created a few extra branches that may not be used. If unused, will delete them at the end. 

## Creating the base next app
renamed the project folder to all lower case
npx create-next-app --typescript .
Selected no to all addons -- THIS MAKES THE PROGRAM SHOW A BLANK PAGE WHEN RUNNING
Instead, i said yes to everything except using the app router, and I left the import alias default. 

## Sprint 1 - Commit 0 (develop)
Changed to branch: Develop
Added: 
Basic Home Page layout
Basic Styling & Banner Image
Navigation bar Component
Header Banner Component
Comments about future plans (Will move these to doccumentation at a later stage)

## Feature Commits: 

### Sprint 1 - Commit 1 (feature/post): 
Added posts page, listing all the posts.
Added dynamic posts page, listing post content.  
Added data importer, which will be used to fetch data from the database. 
Currently just returns the posts array, this will change in future

For the main page: 
Made the navigation Bar sticky
Added Basic footer
Adjusted header banner dimentions slightly. 
Put in plan a toolbar which will be on the top banner, with icons for home on the left and user info on the right. 

### Sprint 1 - Commit 2 (feature/post): 
Create User Type declaration
Applied basic CSS styling to the view posts page
Sending link to Morgan to investigate how to combine dataimporters. 

### Sprint 1 - Commit 3 (feature/post): 
Fixed DataImporter using a dictionary (thanks to Morgan)
Changed post list from unordered list to table.
Fixed Styling on Table
Changed layout of table to show more info on Commenter
Added comments type
Added comments module to posts page

### Sprint 1 - Commit 4 (feature/post): 
Added next & previous post navigation to dynamic post page
Experimented with CSS variables to get dynamic backgrounds working. 
- Descovered how to pass variables in jsx to css. 
- Descovered that url() element in CSS does not allow internal variables. Will need an alternative.
Added Housing module around each component to contain the header, nav bar and footer. 
Fleshed out the home page flavour text a bit
Fleshed out the Post suggestion page a bit

### Sprint 1 - Commit 5 (feature/post): 
Dexcovered how to use optional props. 
Added Comments to Dynamic Pages
Added Basic toolbar (Home, settings). Will replace the text with icons later. 
Adjusted homepage text order. 

### Sprint 1 - Commit 6 (feature/post):
descovered the basics of states
Adjusted Home Page Layout Slightly
Finished Post carousel
Finished Home-page Styling. 


# Sprint 2: 
Focus: Loging in, profile dashboard, Context & Cross-page states (Reaction)

## Commits

### Stash 1 (filtersearch): 
Changes stashed. 
Searchfilter component must fetch user input and filter, then use context to compile & display in another module. 

### Sprint 2 - Commit 0 (Develop): 
Changed Type Declarations to no longer be global (Thanks to Morgan)
Allowed previewContent & fetchUser functions to be exported and therefore globally accessible.
Cleaned up a bit of messy comments here and there.  

### Sprint 2 - Commit 1 (feature/user): 
Created skeleton for login, dashboard & create account. 
Created navigation between login, dashboard & create account. 
Investigated why it shows errors when initially starting.
Fixed. Is an issue with Nextjs and tables when table does not contain <p> `<tbody> </tbody>` </p>. credit: https://stackoverflow.com/questions/73890509/why-is-using-a-table-in-next-js-throwing-a-hydration-error

### Sprint 2 - Commit 2 (feature/user): 
Implimented basic Login functionality. 
Implimented basic create account functionality 
Added intitialisePost & ~user to make future changes to types easier to impliment
Tried to store posts in states in dataimporter, but states need to be in a react component. 

### Sprint 2 - Commit 3 (feature/user instead of develop): 
-- NOTE TO SELF: Change branches before making your changes for said branch. --
implimented some dynamic styling in the header banner module to make the css cleaner. 
Got dynamic background images working by using public folder url rather than internal pathing. 
- Now** Allows each page to have its own banner image (dynamic css background images)
- allows each post to have a unique banner via prop 'backgroundpath', or just default if no banner is present. (Set default bannerpath and default topic)
Added Morgans suggestions to doccumentation
Changed doccumentation to doccumentation.md
Edited readme.md to correctly reflect the readme. 

### Sprint 2 - Commit 4 (feature/user instead of develop):
Adjusted text and markdown in doccumentation & readme. 
Moved dataimporter to Utilities folder (thanks to Morgan)
Moved housing module into its own layouts folder, and changed its name to mainlayout. 
Moved a lot of stuff from userinfo to datatools.

### Sprint 2 - Commit 5 (feature/user)
created generic input module, making future inputs easier. This also included creating a generic input type declaration. 
fleshed out the login logic
created the checklogin component
added input validation on login page with useEffect
implimented page not found (404) to now actually work when navigating to a non-existent page. 

### Sprint 2 - Commit 6 (feature/user)
created context for login
finished checkLogin component

### Sprint 2 - Commit 7 (feature/user)
logging in succesfully now stores uid in context
login page successfuly redirects upon logging in sucessfully (used to just redirect to home).

### Sprint 2 - Commit 8 (feature/user)
Adjused context folder structure slightly.
added refContext, for redirecting on successful login. Currently globally scoped, hope to change that if it becomes a problem. 
successful login now redirects the user to the appropriate location if successful.

### Sprint 2 - Commit 9 (feature/user)
moved toolbar into its own component. 
Created alternate layout for when in a post or on dashboard.
investigated why toolbar displays behind navbar. Results inconclusive. 
Created basic dashboard skeleton.
Created userSummary module for dashboard
Styled userSummary
Created useractivity module
styled useractivity module

### Sprint 2 - Commit 10 (feature/user)
created settings page for adjusting user information
users, posts & comments are now stored in context states. This means that the content can now be updated during runtime (adding / editing) 

### Sprint 2 - Commit 11 (feature/user)
implimented id generation when creating a user
implimented input checking for user creation
Finished create account functionality

### Sprint 2 - Commit 12 (feature/user)
Added Create account, login & edit user CSS 
Moved create functionality to its own modular component, which is then reused in edit account 
Finished tweaks to get the above working correctly. 

### Sprint 2 - Commit 13 (feature/user)
Fixed error where account creation would create an object instead of an array. 
auth now fetches users context, as opposed to using dataimporter. 


## Currently working on: 
  
Logging in - done
  and creating an account functionality
Creating Profile Dashboard
Linking home page to !(logged in)? Login : User dashboard; - done
Investigating context usage to keep user info across pages. - done


### ToDO: 

Logins: 
Apply styling to login page
creating a module for adding / editing user information (optional parameter to preload a user, otherwise save to a new user)

Editing User type to allow for followed users, followed posts, followed topics?  
Allowing users to upload an image when creating an account / post. 
dashboard, replace image with generic image if not found.

fix Home & User going behind navbar (started once checkLogin component was implimented)
Clean up repetitive CSS by using dynamic styling. 
investigate why refreshing pages breaks Links

Change findrecentcomment in datatools so that it is able to find the recent post as well, and possibly return an array of ordered results?
Hide postcarousel buttons when at end. 
Fix post title overlapping (see post: bike driver's in the dev preview to understand)
Replace toolbar text with icons. 
adding styling to dynamic post page

#### Suggestions from Morgan 17/07/2023

styling: SCSS styling (look into it. ALso, tailwind.css)
(material.ui?) - don't use yet.  
userinfo -- bulky. Use conditional rendering & Layouts
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
Order Posts page by recent activity
making 'show topics' and 'contact me' collapsable side bars instead of their own pages
Search comparing input to all existing posts as the user types. Search just takes in the theme and what they types, then returns it (as a prop for a master module, maybe?)
Adding a Star / Subscribe system for posts the user follows. 
Adding tags
Counting number of page views
Making page browser when above 10 pages.
make login a pop-up as opposed to a page of its own.

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
