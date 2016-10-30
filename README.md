GithubReader
This program aims to wipe off some rust when building a web application.

How to Run this application:
I partially followed a tutorial on plnkr.co to make this application. You could run it on a local server to see it's results. If you try and open it right now it'll throw you an error because it can't make http requests.

This web applciation does the following:
Makes automatic calls to Github every 5 seconds to search for an individual. If this individual is found, we move to the User Detail Page.

The User Detail Page contains the name of the user, their avatar image, the repositories they have under them, the number of people following them, and which language it's coded in. 

The Repository Detail Page contains the name of the repository as well as all of the users who are following this project, as well as their associated avatar imge.

All of these pages use basic routing and services in order to use the strengths of Angular. 

What I learned:
I learned the basic strengths of Angular. I saw dynamic updating for the DOM (data binding is nice!!!), which is nice.
These basic strengths also include anchor tags, strong adherence to MVC and NO POSTBACK.
It's also really complicated for simple tasks. If I'm making a quick and easy page, not going to use HTML. If I'm going to make a larger application with tons and tons of routes, DEFINITELY use AngularJS in this regard.

What I could do better:
I could use some new routing. Instead of ngRoute, I could use ui-Router. It's more modern.
Use more of AngularJS's other tools. This was simple practice.
Could use Bootstrap for UI, but I wasn't really concerned about that. 
