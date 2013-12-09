// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/base.js",
	"js/libraries/jquery.min.js"
], function(Base){
	underpin.subpagecontrols.base = function(parameters){
		Base.call(this);
		this.init = function(){
			this.parameters = parameters;			
		}
		this.init();
	}

	underpin.subpagecontrols.base.prototype = Object.create(Base.prototype);
	underpin.subpagecontrols.base.prototype.getContainer = function(){
		// this creates a container for each subpagecontrol
		this.container = $('<div>').appendTo(this.parameters.container);
	}

	underpin.subpagecontrols.base.prototype.destroyControl = function(){
		this.container.remove();
	}

	underpin.subpagecontrols.base.prototype.hidePage = function(){
		this.container.hide();
	}

	underpin.subpagecontrols.base.prototype.showPage = function(){
		this.container.show();
	}

	return underpin.subpagecontrols.base;
});


