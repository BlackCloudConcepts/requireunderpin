// License: (MIT) Copyright (C) 2013 Scott Gay
define([
	"js/pagecontrols/base.js",
	"js/libraries/jquery.min.js",
	"js/libraries/underscore-min.js"
], function(Base){
	underpin.pagecontrols.header = function(parameters){
		Base.call(this);
		this.init = function(){
			this.parameters = parameters;
			this.parameters.container.addClass('pagecontrolhighlight');
		}
		this.init();
	}

	underpin.pagecontrols.header.prototype = Object.create(Base.prototype);
	underpin.pagecontrols.header.prototype.load = function(){
		var _this = this;
                this.getContainer();
                this.require_template('header-template');

                var template = _.template($('#header-template').html());
                this.container.html(template);

                $('#mainlink').bind('click', function(){ _this.parameters.switchMain('main'); });
                $('#sectiononelink').bind('click', function(){ _this.parameters.switchMain('sectionone'); });
                $('#sectiontwolink').bind('click', function(){ _this.parameters.switchMain('sectiontwo'); });
                $('#infolink').bind('click', function(){ _this.parameters.switchMain('info'); });
                $('#sectiondatalink').bind('click', function(){ _this.parameters.switchMain('sectiondata'); });	
	}

	underpin.pagecontrols.header.prototype.unload = function(){
		this.destroyControl();
	}

	return underpin.pagecontrols.header;
});


