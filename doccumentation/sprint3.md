# Sprint 3
## Sprint Goals: 
Designing back-end data model, building API routes & implimenting mock authorisation

Design a data model for api (what the structure of your data will look like)
 - relational data model - done
 - include users, posts & comments - done
Subasks:
- Set up modeling environment - done, using draw.io
- Draft table structure - done


Build api routes
 - build dummy data (import locally, don't worry about external for now)
 - build data models as types (look into GraphQL) 
 - impliment apis 
Subtasks: 
- Set up import types
- Set up dummy data
- Impliment User, Post & Comment APIs
- Edit DataImporter to use APIs


Mock authorisation with ApIs: 
- mark on the ApI 
When request is sent to api include extra user detail (like a userID)
- mock out authorisation (mock check the validity of the ID, and check authority)
Subtasks: 
- Draft permission levels - done, on data model
- Implinment resources needed by higher permission levels (such as: Editing a post, approving post)
- Create levelCheck component to validate permission when trying to access certain resources
  (This will link to levelCheck api, to validate server-side)


## Commits: 

### Sprint 3 - Commit 1 (feature/apiconnection)
Created new feature branch apiconnection
Added sprint 3 breakdown

### Sprint 3 - Commit 2 (feature/apiconnection)
Added Data Model v1, awaiting Morgan's approval. 
Fleshed out doccumentation & creating sprint subtasks. 

### Sprint 3 - Commit 3 (feature/apiconnection)
Set up Post API skeleton & adjusted dataimporter.postImporter

### Sprint 3 - Commit 4 (feature/apiconnection)
Added PostData type to DBTypes for posts imported from the database
Moved API fetching from dataimporter to postWrapper (rules of hooks)
Added postWrapper to contextWrapper
Updated db to local post conversion logic
Tested and it worked, until several rendering errors occured 
Added several missing '<tbody></tbody>' to tables that were missing them
Attempted to fix errors appearing on load, causing it to render client-side
Fixed an error in checklogin that resulted from changing state in an external component
Posts are still not reflecting on the posts page. Will investigate further in next commit. 

### Sprint 3 - Commit 5 (feature/apiconnection)
Fixed error resulting from whitespace in table (userinfo)
Fixed an error resulting from using states that rely on eachother in postWrapper
Now works as intended and results in no errors. 
removed the initial blank record during post conversion. 

### Sprint 3 - Commit 6 (feature/apiconnection)
Created usePostFetch hook, making the postwrapper component cleaner.
Changed usePostFetch state to store frontend format rather

### Sprint 3 - Commit 7 (feature/apiconnection)
<!-- Experimented with use useReducer in usePostFetch. slight adjustments to useState proved to be easier and better suited. 
updated changer in usepostfetch to allow editing & removing posts. Defaults to add if not specified. -->
Changed useState to useReducer in usePostFetch hook. This resulted in slightly more complex but overall cleaner code. 
Along with this, the edit and remove functionality was added. 
adjusted the changer function for usePostFetch to make type default to 'add'
added functions to utilities/datatools to convert db post format to fontend post format, and vice versa.
slightly adjusted code of datatools to a more organised structure. 

### Sprint 3 - Commit 8 (feature/apiconnection)
Changed Post type to include the entire User, as well as removd bannerpath property. 
Cleaned up some unused code here and there
removed dataimporter/importposts default export. Only initialisepost remains used. 
Changed genericinput to also have an ID proprty based off the displayname. This may result in errors with spaces, will need to investigate. 

### Sprint 3 - Commit 9 (feature/apiconnection)
Updated dataimporter to no longer reference non-existent postimporter. 
Fixed dynamic post page referring to importposts instead of post context. 
updated navbar to checklogin before allowing user to suggest a post. 
Created skeleton for submitting a new post

### Sprint 3 - Commit 10 (feature/apiconnection)
Restored searchfilter stash to retrieve work on searchbar, since that same logic will be used in suggesting a post. 
Updated searchfilter logic
Added states in searchfilter
passed searchfilter data up to suggest post. this resulted in an infinite loop (possibly due to states). 
separated datatools calculatedate from the calculate message function. 
Added add Post functionality to suggest post. 
Adjusted datatools to require post context as a parameter (this will cause an error, will fix it next commit.)

### Sprint 3 - Commit 11 (feature/apiconnection)
Experimented with using forwardRefs for easrchfilter & genericinput. Worked, but was clunky. 
commented out all forwardref code and reverted back to states. Will remove said comments next commit. 
Implimented a useEffect in searchfilter, fixing infinite refreshes. 
Implimented a redirect to login when accessing suggest post through means other than the navbar. Only happens if not logged in already. 
Fixed error in genericinput where key was based on value instead of label. Bug possibility above still stands. 
Added keys to searchfilter theme selector. Still causes key warning sometimes? 
Encountered an error when accessing User dashboard page. Possibly related to aforementioned datatools error. investigating next commit. 
Encountered an error on refresh when clicking 'login', redirects to suggest post instead of user dashboard. Investigating next commit. 

### Sprint 3 - Commit 12 (feature/apiconnection)
Removed all comments referencing useRef in SearchBar & genericinput
Moved getTheme functionality from searchFilter to dataTools. 
Added new functions to datatools to check for special characters, and to check if post is unique. 
Added input checking to newPost
Change code to fix error with datatools (as mentioned above)
Imrpved redirect to now update link to redirect to (refcontext). 
added redirect logic to user dashboard. 
Changed variable in checklogin from 'href' to 'redirectTo' as href is reserved. 
Moved href saving to a variable outside of useEffect. 
fixed the login only redirecting to newpost.

### Sprint 3 - Commit 13 (feature/apiconnection)
Adjusted doccumentation layout.


## Currently working on: 
adding 'suggest post' functionality

investigate the key warning. Looks to be regarding checklogin or useractivity.
investigate why homepage postcarousel is blank on intitial load (page is rendering before context is initialised fully)
investigate why postWrapper is running several times unneccecarily. (runs twice per page navigation, has something to do with the above)

add in redirects to pages that require the user to be logged in (as done on the suggest post page). 
fix styling on userinfo & impliment conditional rendering using '&&' (suggested by Morgan)
change user & comment types same as had been done with post type. 
impliment post saving (API changer).
adding 'edit post' functionality (for implimenting mock validation, task 3)
Edit suggester logic to not be a suggestion if user authentication level 3 (for task 3)

Implimenting APIs
Set up import types, as per the database data model
Set up dummy data
Finalise User, Post & Comment APIs
