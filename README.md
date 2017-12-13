# Assignment 2 - ReactJS app/ WEB API/ MONGO.

Name: Kacper Woloszyn

## Overview.
 The app was made to inform everyone about Poland and myself. User can search football players
and learn the vast information that I have provided on the web App. The App has a header that links the various different pages, and also pictures that show a brief overview of what the topic was about. Routing was added in the header to make the design look presentable. Use Gulp and Sass. Sass is a css library and gulp is used to compile it to a minimalistic css. This is done to increase the efficiency and decrease the time it takes for the webpage to load. Used a json server to link players to the web app, and when any user typed in a string that would decrease the list of Polish players, this is done to find out what club they play at and what number jearsey they have.  All the routes in the header work and the user can navigate the web-app. Players have all links that is taken from the webAPi and the database, a user can insert and delete entries to the Database. Players are sorted and also have working links

 . . . . . List of user features . . . . 
 
 + Look for players
 + Navigate using headers
 + Working Links
 + All 25 Players have links
 + WebAPI
 + MONGODB Usage

## Installation requirements.
. . . .  List of software used to develop the app . . . . . . . 

+ ReactJS v15.3.0
+ React-dom
+ React-router
+ React-router-dom
+ React-scripts
+ Bootstrap 3
+ create-react-app tool
+ superagent
+ eslint
+ gulp ( changed, clean-css, rename, sass, uglify)
+ babel
+ json server
+ mongo (if needed to insert)
+ lodash
+ StubApi

When pulling the repo, user types in npm install, this will install all the things that are included in my package.json
To run the app, firstly user needs to run a command " gulp " that is used to minimalise the CSS and to make sure the sight is running sufficiently by compressing SCSS into minimised CSS. Whilst this is running the user opens up another terminal. In that she/he types in "node bin/www" to make the wweb api running, where all the information about players is stored and which is linked to the main app. The user can add and remove entries using the site and also using the Mongo db database. User has working links to all 25 players to see what they are about


## Data Model Design.

![][image1]

## App Component Design.

![][image2]

## UI Design.

![][image3]
![][image4]

## Routing.

+ / - displays home page
+ /team - displays team page
+ /history - displayes history page
+ /facts -displays facts page
+ /origin - displays origin page
+ /food - displays food page
+ /players - displays players page where user can look up players.
+ /sights - displays sights around Poland
+ /players/id - displays specific player

## Extra features
I added a header, that was not implemented in any labs. Also used Gulp as I read up it improves efficiency and that was part of the specifications of the assignment. This minimilises SCSS files, which is a Sass library CSS file and outputs it to a new file that takes up less space and is way more efficient in loading. Also added a design feature in SASS, that when any link on the header is dragged on a transition occurs that changes thhe colour of the item and underlines it to highlight the part the user will navigate to next.


## Independent learning.
As mentioned before, I searched a quick and efficient way of loading a Cascadi ng Style Sheet (CSS) onto a web app, so that the user gets everything quicker. Gulp and Sass were main ones used. Sass was 
a Casscading Style Sheet library, like semantic but as I learned it may be more used in industry, rather than in college projects. Gulp is Needed for SASS,as SCSS files are not readable in current version browsers, meaning we can write in SCSS then process it using Gulp and then write neater code as the CSS compiled with a tree structure and allow code to be cleaner and more efficient. Needs to be compiled and minified for efficiency as previously said no browser supports the SCSS library.

Also learned how to make a header that links to other pages of the web app, which is like having a main page with links to others, but in a way nicer and neater method.

Learned that gulp.js is an open-source JavaScript toolkit by Fractal Innovations and the open source community at GitHub, used as a streaming build system in front-end web development, and I should have probobly just stuck with semantic and implemented comments and login/register pages, which was do-able as I've completed the labs.

[image1]: ./model.png
[image2]: ./design.png
[image3]: ./screen.png
[image4]: ./screen2.png
