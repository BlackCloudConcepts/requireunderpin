// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/pagecontrols/base.js",
	"js/libraries/jquery.min.js",
//        "js/libraries/underscore-min.js",
	"js/subpagecontrols/blue.js",
        "js/subpagecontrols/yellow.js",
        "js/subpagecontrols/red.js",
        "js/subpagecontrols/orange.js",
        "js/subpagecontrols/green.js"	
], function(Base){
	underpin.pagecontrols.sectionone = function(parameters){
		Base.call(this);
		this.init = function(){
			this.parameters = parameters;
	                this.parameters.container.addClass('pagecontrolhighlight');
		}
		this.init();
	}

	underpin.pagecontrols.sectionone.prototype = Object.create(Base.prototype);
	underpin.pagecontrols.sectionone.prototype.load = function(){
		this.getContainer();
                new underpin.subpagecontrols.red({
                        'container' : this.container
                }).load();
                new underpin.subpagecontrols.yellow({
                        'container' : this.container
                }).load();
                new underpin.subpagecontrols.orange({
                        'container' : this.container
                }).load();
                new underpin.subpagecontrols.blue({
                        'container' : this.container
                }).load();
                new underpin.subpagecontrols.green({
                        'container' : this.container
                }).load();
	}

	underpin.pagecontrols.sectionone.prototype.unload = function(){
		this.destroyControl();
	}

	return underpin.pagecontrols.sectionone;
});


