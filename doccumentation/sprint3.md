# Sprint 3
## Sprint Goals: 
Designing back-end data model, building API routes & implimenting mock authorisation


Design a data model for api (what the structure of your data will look like)
 - relational data model - done
 - include users, posts & comments - done
Subasks:
- Set up modeling environment - done, using draw.io
- Draft table structure - done
Link to data model: <a href="/Data_Model-Austin_Practice_Blog.png"> Data_Model </a>


Build api routes
 - build dummy data (import locally, don't worry about external for now) - 1/3
 - build data models as types (look into GraphQL)  - 4/6
 - impliment apis - 1/3
Subtasks: 
- Set up import types - 1/3
- Set up dummy data - 1/3
- Impliment User, Post & Comment APIs - 1/3
- Edit DataImporter to use APIs - 1/3


Mock authorisation with ApIs: 
- mark on the ApI when request is sent to api. include extra user detail (like a userID)
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

### Sprint 3 - Commit 14 (feature/apiconnection)
Updated links in doccumentation
Updated reference in navbar to 'redirectTo' for old ref element. 
Experimented with adding classes to global styling. Works well. 
Layed out the logic via comments for mock authentication, which requires user API to be completed. 
Added basic Comments & User API's

### Sprint 3 - Commit 15 (feature/apiconnection)
Migrated User context from using dataimporter to user API.
Created user db-locale conversion functions
Updated name and surname fields in type User to be optional. UserID must now be updated to use random characters if name or surname not provided. 
Note: UserIDs must never be updated, only created with the account. 
Updated UserData type field 'password' to be optional. This is to prevent bugs as passwords are handled separately from the rest of the data
changed references to dataimporter.importusers to userContext instead. 
updated getUser (and all references) to use userContext. 

### Sprint 3 - Commit 16 (feature/apiconnection)
Skipped updating local comments type, as it is fine as is.
Removed commented out dataimport users code
Added initialComment to dataporter, to generate blank comments
Updated comments context to use api instead of dataimporter
Created comments db-locale conversion functions
Added commentsprovider to contextwrapper
Commented out dataimporter.importcomments. 
Commentscontext was the only commentsimporter reference. it has been updated to use APi context instead. 
deleted commented out commentimporter code. 

### Sprint 3 - Commit 17 (feature/apiconnection)
Skipped changing datatools, not worth the effort
Created comments component folder
Move UserInfo to comments folder, and renamed file to 'CommentInfo' as that is more fitting to its functionality
Created Addcomment component 
Adjusted dynamic post page slightly
moved calcDate to datatools and renamed to calcDateString
renamed getDate in datatools to getDateObject
adjusted calcDateString in datatools to account for single months / days
Investigated checklogin refContext further, implimented a fix
Investigated why adding comments are blank, unless added twice. -- fixed by adding the rest of the info in a useEffect

### Sprint 3 - Commit 18 (feature/apiconnection)
NOTE: Prevnext buttons do not account for state. therefore login & comment.pid states break when using prevnext buttons.
  This is because of useRouter not updating states. 
Updated prevnext to use Links instead of redirects. Redirects after login account for states manually, and therefore do not need to be updated. 
Commented out old prevnext code. Will remove this next commit. 
Added function to datatools that generates a random letter
moved calcUserID to datatools
fixed user errors in userinput (optional name and surname fields).

### Sprint 3 - Commit 19 (feature/apiconnection)
Added comment ID to db backend in data model. One user can make multiple comments on the same post, therefore pid+uid cannot be the primary key for comments. 
This is only needed on the database backend, as it is not used on the frontend. 
Added calcMockToken to auth utility
Also added getUserID & getAuthLevel( currently returns level as an int. Thinking of changing this in the future for security reasons)
updated auth to return a token instead of userID. This token includes their ID and their authentication level. 
Updated logincontext to accomodate for the above change. 
Updated references to logincontext to reflect the above changes. 

### Sprint 3 - Commit 20 (feature/apiconnection)
changed newpost from /newpost to /Posts/new-Post
added Posts/edit-Post for editing a post. 
created auth function fetchUserLevel to fetch user level from the db via API
investigate why fetcUserLevel is returning blank. 

### Sprint 3 - Commit 21 (feature/apiconnection)
Added dynamic post api to return only a single post. 
Spent ages bugfixing, but eventually decided on duplicating the dummydata for the above API. 
renamed dataimporter to datainitialiser 
moved dataimporter functionality to datainitialiser, meaning it is only 1 file now. 
added initialisePostData() to datainitialiser. unused, for now. 
changed dynamic post API to to dynamic User API. Was only testing the posts. Now actually needed to get user auth level. 
Works, except the fetchuserlevel function is not waiting for the key to be generated, resulting in an infinite number of awaits. 
Will investigate the above on the next commit. 

### Sprint 3 - Commit 22 (feature/apiconnection)
Temporarily made fetchuserlevel return a dummy value until the above has been fixed
removed some old comments
removed getUserID as User ID should not be stored client-side, only the token
changed fetchUserID to getUserID, since it serves the same purpose
Removed userLevel from token. 
getUserID now retrieves the token as a parameter, then validates the token before returning the ID. 
updated dynamic posts page to reflect the above changes. 

### Sprint 3 - Commit 23 (feature/apiconnection)
Moved addpost logic to newly created PostChanger component, acting as a dynamic way to add or edit posts. 
fixed bug in navbar directing to old newpost page when not logged in.
Post drafts are no longer a feature planned for this sprint. There will still be approved and pending statuses. 
Note: 
Post status: Drafts can only be seen by the uploader. both edits and suggestions can be drafts. 
  pending: if a suggestion or a level 2 submits a post, it must be approved by a level 3 before it is finalized. 
Moved edit post & add post logic into hook: usePostChange, called in postChanger.
created function getNameStatusStarter to generate relevant fields based on level & whether the user is adding or editing a post.  
Updated usePostChange to work with editing a post as well. 
implimented links to edit posts if authorised
fixed a bug in searchfilter causing it to appear blank when editing a post. 


## Currently working on: 
Implimenting Mock authentication where required.
 
--
Change auth into an API & store/ log every request

--
Fixing the timing of the fetchUserLevel function and its references



--
Complete edit post functionality
Impliment authentication for edit posts
allow users with authentication level 2 or 3 to edit posts, authentication level 1 can suggest edits (id becomes the postid with their id appended).
allow users with authentication level 3 to view posts of all statuses, with a selector on the posts page (defaults to accepted only if auth 1 or 2)

--
Impliment selector for those with authority 2+ to see drafted, suggested & all posts. 

--
Impliment edit comment
Impliment authentication to check that it is the same user who posted the comment, when attempting to edit comment.
Moderators (auth level 2) should be able to edit and delete all comments. 

-- 
update dashboard to be a dynamic page, so that other users can see eachother's dashboards. 
impliment authentication so that users can edit their own profile when on their dashboard. 


--
Add styling to all new components
 
--
investigate the key warning. Looks to be regarding checklogin or useractivity. It is also an issue on the login page. 
investigate why homepage postcarousel is blank on intitial load (page is rendering before context is initialised fully)
investigate why postWrapper is running several times unneccecarily. (runs twice per page navigation, has something to do with the above)

--
fix styling on userinfo & impliment conditional rendering using '&&' (suggested by Morgan)
impliment post saving (API changer).


## Skipped 
Changing datatools structure to separate it into usertools, posttools & commentstools. -- The effort compared to the effect is not worth it. 
Updating Comments Context -- Found no need to update it
Add delete functionality to userContext. -- Skipped, users have no reason to be able to be deleted in the frontend. 
Impliment authentication into edit account -- technically already done. 