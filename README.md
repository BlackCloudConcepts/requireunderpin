License: (MIT)
Copyright (C) 2013 Scott Gay

RequireUnderpin Javascript Structured Framework
- RequireUnderpin is a structured framework for front-end development which accelerates the process of setting up a scalable architecture to support dynamic web applications.  Through the use of object oriented design a variety of site navigation styles can be implemented.  Using backbone.js navigation, custom models, dust templating, combined with dynamically designed page controllers and sub-page controllers allows for easy navigation and dom manipulation.

RequireUnderpin is an modification of the Underpin Framework (https://github.com/BlackCloudConcepts/underpin)

Modifications Include:
- Require JS is added along with a more native javascript class implementation.  As part of this the lowpro dependency is removed.
- DustJS is introduced as a templating option with the advantage of having templates which can be precompiled and cached.
- Data models to further isolate data from controls and views.  Models also allow for data caching both at the model level and also using HTML5 localStorage.
- Bootstrap was added as a responsive grid system removing 960 grid implementation.

What RequireUnderpin really is, is a working example of a simple site using a few different commonly used libraries, along with a few more home grown constructs, that makes getting a site up and running quickly a snap. The key is that even though its fast to get going, there is a solid foundation in place for further advanced development down the road.

From a layout perspective this site is broken into Page Controls and Subpage Controls. Page Controls (as you can visibly see by clicking the top left button) are the main parts of a site. The header, main area, and footer. Adjust this to your own needs. In this case the main section of the site is the only part effected by user input but this could be easily adjusted for other applications. As such the main section Page Control is also the section that coorelates to url hashes and the use of backbone.js for routing and history.

Subpage Controls are the sections that exist within a Page Control. For example in this case there are 5 Subpage Controls, green, blue, yellow, red, and orange. They are seen in main, section one, and section two visually or by clicking the top right button on one of those pages. They are reusable sections which can be laid out in a variety of ways provided they are built to the right dimensions to fit together properly. For example, what if you had left nav on the main page, and then wanted to reuse that on section two without rebuilding it and this time wanted it on the right side of the page. With the use of a Subpage Control this is not an issue. In fact since the page is never refreshing, you could even clone or move the navigation to the other Page Control where it could maintain state if need be. You can also easily have Subpage Controls effect other Subpage Controls through the use of callbacks to the Page Controller in a similar way to how Page Controls effect each other in the use of a callback to the controller.

Models are used in the Data Access Example page as a way of isolating the data from the controls.  The models are also setup to save state on a TTL both within the model and also using the browsers HTML5 localStorage when available.  Data requests can also still be made from the controls directly however models should be used whenever possible and certainly for commonly used data requests.  

The building and layout options are aided by the use of the Bootstrap grid system. I decided to modify Bootstrap to use 24 columns vs the default of 12.  Read more about it to find out its advanced uses, but know that it makes the layout and dimensional uniformity between all controls very easy.  Bootstrap 3 has the added advantage of being responsive by default allowing for customizable views on phone, tablet, or desktop.

At the end of the day, RequireUnderpin makes it quick to get started and easy to scale in more advanced features later. Enjoy!

Requires:
- jquery
- require.js
- backbone.js
- underscore.js / dustjs
- bootstrap

Demo:
- http://requireunderpin.blackcloudconcepts.com/

GitHub:
- https://github.com/BlackCloudConcepts/requireunderpin

Compiling Dust Templates with NodeJS: 

Install node module
- npm install -g dustjs-linkedin

Usage
- dustc input_file.tl output_file.js

Bootstrap
- To modify the included css ...
- Download Source http://getbootstrap.com/getting-started/#download
- npm install (in directory, gets dependencies installed)
- gem install jekyll
- modify code (for example change something in valiables.less)
- grunt
- get your new file out of the dist folder


