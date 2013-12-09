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
	underpin.pagecontrols.sectiondata = function(parameters){
		Base.call(this);
		this.init = function(){
			this.parameters = parameters;
	                this.parameters.container.addClass('pagecontrolhighlight');
		}
		this.init();
	}

	underpin.pagecontrols.sectiondata.prototype = Object.create(Base.prototype);
	underpin.pagecontrols.sectiondata.prototype.load = function(){
		var _this = this;
                this.getContainer();
                this.require_template('data-template');

                var request = {};
                request.action = "find";
                request.collection = "info";
                request.callback = function(data){
                        var template = _.template($('#data-template').html(), {mydata: data.data});
                        _this.container.html(template);
                };
                request.failcallback = function(data){
                        $('<div>', {'class' : 'grid_16 error'}).appendTo(_this.container).html('An error occurred');
                        $('<div>', {'class' : 'grid_16 error'}).appendTo(_this.container).html(' - '+data.e1);
                };
                this.sendRequest(request, this.container);
	}

	underpin.pagecontrols.sectiondata.prototype.unload = function(){
		this.destroyControl();
	}

	return underpin.pagecontrols.sectiondata;
});


