feedbach
========

A student response system written in AngularJS and NodeJS. The goal of this project is to create an easy way to create surveys for use in the class room. Everything is available as a HTML5 app, with no need to download or install software. Need to ask a question? Just do it! No need for login or student registration, just plain simple.

Visit http://feedba.ch/ to see it in action.


Why?
====

I'm a teacher student, and was not satisfied with the solutions available as of spring 2013. First, I was introduced to HiST Student Response System, which needs a program installed. It got some nice features, but why all that fancy stuff? Why not keep it simple? I like it simple.

Then I heard about Kahoot, also a software originating from Trondheim(NTNU). Kahoot is simple and clean, and at the same time feature rich and fun. But Kahoot have limited beta access, and requires registration(only the teacher).

So why not create my own when learning AngularJS and NodeJS? :-)


Alternatives
============
* HiST Student Response System: http://www.histproject.no/node/263 - Requires to install software, not easily available.
* Kahoot: http://getkahoot.com - Simple, fun, free(as in beer), limited beta access.
* Mentimeter: https://www.mentimeter.com/ - This one is nice. Clean, simple, but limited or expensive.
* Plickers: https://www.plickers.com/ - Totaly awesome, without need for student hardware.
* Poll everywhere: http://www.polleverywhere.com/ - Supports SMS! Registration required?
* Socrative: http://www.socrative.com/ - Registration required.
* Top Hat: https://tophat.com/ - Students pay? Studens are poor, let the rich pay!
* ExitTicket: http://exitticket.org/ - Lots of features, login required.


My features
===========
* No login required
* Short URL
* Four letter ID (alphanumeric for now)
* Feedback is updated in real time


Status
======
The basic currently works, some rough edges.


Coding
======
* Scaffolded with http://yeoman.io/
* Indented with 2 spaces
* Client side code in app folder
* Server side code in server.js (for now)


TODO
====
- [x] Reset feedback
- [ ] About
- [x] IE vertical align
- [x] Buttons instead of radio in vote page
- [ ] Test voting on more mobile browsers
- [ ] Refactor code: survey-data as angular service
- [x] Refactor code: modal directives
- [ ] Passport login
- [ ] Review feedback(s) sent
- [ ] Remove debug messages
- [ ] Move server side code to module(s)


SEO: mentometer, live survey, live feedback, student response system (SRS), real time survey
