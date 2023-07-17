# Doccumentation: 

# Sprint 1
// Focus: Creating home page, initialising git & git flow, initialising the next.ts app. 

## Initialised the repository using the following git commands: 
//  Navigated to the project folder
git init
git remote add origin https://github.com/Austin-ALIT/Austin-Practice-blog.git
git flow init (Replied yes to everything)
// Git flow created a few extra branches that may not be used. If unused, will delete them at the end. 

## Creating the base next app
// renamed the project folder to all lower case
npx create-next-app --typescript .
// Selected no to all addons -- THIS MAKES THE PROGRAM SHOW A BLANK PAGE WHEN RUNNING
// Instead, i said yes to everything except using the app router, and I left the import alias default. 

## First develop branch
// Changed to branch: Develop
// Added: 
	// Basic Home Page layout
	// Basic Styling & Banner Image
	// Navigation bar Component
	// Header Banner Component
	// Comments about future plans (Will move these to doccumentation at a later stage)


## Feature Commits: 

### Feature Commit 1: 
// Added posts page, listing all the posts.
// Added dynamic posts page, listing post content.  
// Added data importer, which will be used to fetch data from the database. 
	// Currently just returns the posts array, this will change in future

// For the main page: 
// Made the navigation Bar sticky
// Added Basic footer
// Adjusted header banner dimentions slightly. 
// Put in plan a toolbar which will be on the top banner, with icons for home on the left and user info on the right. 

### Feature Commit 2: 
// Create User Type declaration
// Applied basic CSS styling to the view posts page
// Sending link to Morgan to investigate how to combine dataimporters. 

###Feature Commit 3: 
// Fixed DataImporter using a dictionary (thanks to Morgan)
// Changed post list from unordered list to table.
// Fixed Styling on Table
// Changed layout of table to show more info on Commenter
// Added comments type
// Added comments module to posts page

### Feature Commit 4: 
// Added next & previous post navigation to dynamic post page
// Experimented with CSS variables to get dynamic backgrounds working. 
  // Descovered how to pass variables in jsx to css. 
  // Descovered that url() element in CSS does not allow internal variables. Will need an alternative.
// Added Housing module around each component to contain the header, nav bar and footer. 
// Fleshed out the home page flavour text a bit
// Fleshed out the Post suggestion page a bit

### Feature Commit 5: 
// Dexcovered how to use optional props. 
// Added Comments to Dynamic Pages
// Added Basic toolbar (Home, settings). Will replace the text with icons later. 
// Adjusted homepage text order. 

### Feature Commit 6:
// descovered the basics of states
// Adjusted Home Page Layout Slightly
// Finished Post carousel
// Finished Home-page Styling. 

# Sprint 2: 
Focus: Loging in, profile dashboard, Context & Cross-page states (Reaction)

## Commits

### Stash 1 (filtersearch): 
// Changes stashed. 
// Searchfilter component must fetch user input and filter, then use context to compile & display in another module. 

### S2 - Commit 0 (Develop): 
// Changed Type Declarations to no longer be global (Thanks to Morgan)
// Allowed previewContent & fetchUser functions to be exported and therefore globally accessible.
// Cleaned up a bit of messy comments here and there.  

### S2 - Commit 1 (feature/user): 
// Created skeleton for login, dashboard & create account. 
// Created navigation between login, dashboard & create account. 
// Investigated why it shows errors when initially starting.
  // Fixed. Is an issue with Nextjs and tables when table does not contain <p> `<tbody> </tbody>` </p>. credit: https://stackoverflow.com/questions/73890509/why-is-using-a-table-in-next-js-throwing-a-hydration-error

### S2 - Commit 2 (feature/user): 
// Implimented basic Login functionality. 
// Implimented basic create account functionality 
// Added intitialisePost & ~user to make future changes to types easier to impliment
// Tried to store posts in states in dataimporter, but states need to be in a react component. 

### S2 - Commit 3 (feature/user instead of develop): 
-- NOTE TO SELF: Change branches before making your changes for said branch. --
// implimented some dynamic styling in the header banner module to make the css cleaner. 
// Got dynamic background images working by using public folder url rather than internal pathing. 
  // Now** Allows each page to have its own banner image (dynamic css background images)
	// allows each post to have a unique banner via prop 'backgroundpath', or just default if no banner is present. (Set default bannerpath and default topic)
// Added Morgan's suggestions to doccumentation
// Changed doccumentation to doccumentation.md
// Edited readme.md to correctly reflect the readme. 

## Currently working on: 
// Investigating how to keep Posts & Users in states once initialised (Context?) 
  
// Logging in and creating an account functionality
// Linking home page to !(logged in)? Login : User dashboard;
// Creating Profile Dashboard
// Investigating context usage to keep user info across pages.

### ToDO: 

// Clean up repetitive CSS by using dynamic styling. 
// Editing User type to allow for followed users, followed posts, followed topics?  

// Hide postcarousel buttons when at end. 
// Fix post title overlapping (see post: bike driver's in the dev preview to understand)
// Replace toolbar text with icons. 
// adding styling to dynamic post page
// Replace the page-not-found page. 

** Suggestions from Morgan 17/07/2023

styling: SCSS styling (look into it. ALso, tailwind.css)
(material.ui?) - don't use yet. 
Page not found -- rename to 404 (refer to next.js doccumentation) https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern
move housing module into its own layouts folder, and change its name. 
user passwords -- instead store a jwt token in the future. for now, remove from user type, use an interface on the login page? 
userinfo -- bulky. Use conditional rendering.  
dataimporter - move to utilities. 
dataimporter is just to fetch data. store the context on the homepage? 
Change doccumentation to doccumentation.md 

Other Features:

// Create Search Bar Component (Separate Feature Branch)?
// Users profile Page
// Topics 
// Suggesting & Adding Posts
// Deleting Posts
// Adding, editing and deleting comments. 

Skipped: 
// Find out how to use props with React.FC type function - skipped as react cn ssume function types utomaticlly. 
// Find out how to do justified passing on navbar? - skipped, found n lterntive.
// Change DataImporter to have internal functions rather than just return posts. 
	// Could not get this to work. Mde sseprte dt importers for now.
	// merge dt importers.  
  // Fixed, using a dictionry 
// Adding a smooth collapsing animation to the header banner when user scrolls down 
  //got it working to a point where i am satisfied with how it looks for now.


### Stuff that will bankrupt me: 
// Order Posts page by recent activity
// making 'show topics' and 'contact me' collapsable side bars instead of their own pages
// Making an image carousel for the recent posts section
// Search comparing input to all existing posts as the user types. Search just takes in the theme and what they types, then returns it (as a prop for a master module, maybe?)
// Adding a Star / Subscribe system for posts the user follows. 
// Adding tags
// Counting number of page views
// Making page browser when above 10 pages.
// Allowing users to upload an image when creating an account / post. 


/* Figured out how to run the app to test it. - Seemed to be an issue with typescript and react.
  Troubleshooting steps: 

  ran npm run dev, got a blank page. 
  # restarted the program
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
