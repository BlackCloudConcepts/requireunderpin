// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/subpagecontrols/base.js",
	"js/libraries/jquery.min.js",
	"js/libraries/underscore-min.js"
], function(Base){
	underpin.subpagecontrols.blue = function(parameters){
		Base.call(this);
		this.init = function(){
			this.parameters = parameters;
		}
		this.init();
	}

	underpin.subpagecontrols.blue.prototype = Object.create(Base.prototype);
	underpin.subpagecontrols.blue.prototype.load = function(){
		this.getContainer();
                this.require_template('blue-template');

                var template = _.template($('#blue-template').html());
                this.container.html(template);
	}

	underpin.subpagecontrols.blue.prototype.unload = function(){
		this.destroyControl();
	}

	return underpin.subpagecontrols.blue;
});
	

