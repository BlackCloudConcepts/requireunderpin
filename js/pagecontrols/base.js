// License: (MIT) Copyright (C) 2013 Scott Gay
define([
	"js/base.js",
	"js/libraries/dust-core.min.js",
	"js/libraries/jquery.min.js"
], function(Base){
	underpin.pagecontrols.base = function(parameters){
		Base.call(this);
		this.init = function(){
			this.parameters = parameters;
		}
		this.init();
	}

	underpin.pagecontrols.base.prototype = Object.create(Base.prototype);
	underpin.pagecontrols.base.prototype.getContainer = function(){
		// this creates a container for each page control
		this.container = $('<div>').appendTo(this.parameters.container);
	}

	underpin.pagecontrols.base.prototype.destroyControl = function(){
		this.container.remove();
	}

	underpin.pagecontrols.base.prototype.hidePage = function(){
		this.container.hide();
	}

	underpin.pagecontrols.base.prototype.showPage = function(){
		this.container.show();
	}

	return underpin.pagecontrols.base;
});


