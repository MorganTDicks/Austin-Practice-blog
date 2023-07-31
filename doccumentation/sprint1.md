# Sprint 1
## Sprint Goals: 
Creating home page, initialising git & git flow, initialising the next.ts app. 

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
