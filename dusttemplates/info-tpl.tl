<div class="col-md-24" style="font-size:10pt;">
Hello, Welcome to RequireUnderpin.
<br /><br />
RequireUnderpin is a structured framework for front-end development which accelerates the process of setting up a scalable architecture to support dynamic web applications.  Through the use of object oriented design a variety of site navigation styles can be implemented.  Using backbone.js navigation, custom models, dust templating, combined with dynamically designed page controllers and sub-page controllers allows for easy navigation and dom manipulation.
<br /><br />
RequireJS AMD + DustJS Templating + Bootstrap Grid System + Backbone Routing + RequireUnderpin Models, PageControls, & SubpageControls
<br /><br />
What RequireUnderpin really is, is a working example of a simple site using a few different commonly used libraries, along with a few more home grown constructs, that makes getting a site up and running quickly a snap. The key is that even though its fast to get going, there is a solid foundation in place for further advanced development down the road.
<br /><br />
From a layout perspective this site is broken into Page Controls and Subpage Controls. Page Controls (as you can visibly see by clicking the top left button) are the main parts of a site. The header, main area, and footer. Adjust this to your own needs. In this case the main section of the site is the only part effected by user input but this could be easily adjusted for other applications. As such the main section Page Control is also the section that coorelates to url hashes and the use of backbone.js for routing and history.
<br /><br />
Subpage Controls are the sections that exist within a Page Control. For example in this case there are 5 Subpage Controls, green, blue, yellow, red, and orange. They are seen in main, section one, and section two visually or by clicking the top right button on one of those pages. They are reusable sections which can be laid out in a variety of ways provided they are built to the right dimensions to fit together properly. For example, what if you had left nav on the main page, and then wanted to reuse that on section two without rebuilding it and this time wanted it on the right side of the page. With the use of a Subpage Control this is not an issue. In fact since the page is never refreshing, you could even clone or move the navigation to the other Page Control where it could maintain state if need be. You can also easily have Subpage Controls effect other Subpage Controls through the use of callbacks to the Page Controller in a similar way to how Page Controls effect each other in the use of a callback to the controller.
<br /><br />
Models are used in the Data Access Example page as a way of isolating the data from the controls.  The models are also setup to save state on a TTL both within the model and also using the browsers HTML5 localStorage when available.  Data requests can also still be made from the controls directly however models should be used whenever possible and certainly for commonly used data requests.
<br /><br />
The building and layout options are aided by the use of the Bootstrap grid system. I decided to modify Bootstrap to use 24 columns vs the default of 12.  Read more about it to find out its advanced uses, but know that it makes the layout and dimensional uniformity between all controls very easy.  Bootstrap 3 has the added advantage of being responsive by default allowing for customizable views on phone, tablet, or desktop.
<br /><br />
At the end of the day, RequireUnderpin makes it quick to get started and easy to scale in more advanced features later. Enjoy!
</div>
