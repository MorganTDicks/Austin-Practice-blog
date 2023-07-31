# Sprint 2: 
## Sprint Goals: 
Loging in, profile dashboard, Context & Cross-page states (Reaction)

Scope: 
Logging in - done
  and creating an account functionality - done
Creating Profile Dashboard - done
Linking home page to !(logged in)? Login : User dashboard; - done
Investigating context usage to keep user info across pages. - done


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

