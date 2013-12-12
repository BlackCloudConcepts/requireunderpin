License: (MIT)
Copyright (C) 2013 Scott Gay

RequireUnderpin Javascript Structured Framework

RequireUnderpin is an modification of the Underpin Framework (https://github.com/BlackCloudConcepts/underpin)

Modifications Include:
- Require JS is added along with a more native javascript class implementation.  As part of this the lowpro dependency is removed.
- DustJS is introduced as a templating option with the advantage of having templates which can be precompiled and cached.

See Underpin project for a full explaination of the purpose of the framework.

Requires:
- jquery
- backbone.js
- underscore.js / dustjs
- 960 grid

Demo:
- http://requireunderpin.blackcloudconcepts.com/#sectionmain

GitHub:
- https://github.com/BlackCloudConcepts/requireunderpin

Compiling Dust Templates with NodeJS: 

Install node module
- npm install -g dustjs-linkedin

Usage
- dustc input_file.tl output_file.js

