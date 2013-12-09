// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/pagecontrols/base.js",
	"js/libraries/jquery.min.js",
        "js/libraries/underscore-min.js",
	"js/subpagecontrols/blue.js",
        "js/subpagecontrols/yellow.js",
        "js/subpagecontrols/red.js",
        "js/subpagecontrols/orange.js",
        "js/subpagecontrols/green.js"
], function(Base){
	underpin.pagecontrols.info = function(parameters){
		Base.call(this);
		this.init = function(){
			this.parameters = parameters;
			this.parameters.container.addClass('pagecontrolhighlight');
		}	
		this.init();
	}

	underpin.pagecontrols.info.prototype = Object.create(Base.prototype);
	underpin.pagecontrols.info.prototype.load = function(){
		this.getContainer();
                this.require_template('info-template');

                var template = _.template($('#info-template').html());
                this.container.html(template);
	}

	underpin.pagecontrols.info.prototype.unload = function(){
		this.destroyControl();
	}

	return underpin.pagecontrols.info;
});


