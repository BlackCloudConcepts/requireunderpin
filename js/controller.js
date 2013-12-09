// License: (MIT) Copyright (C) 2013 Scott Gay
define([
	"js/base.js",
	"js/libraries/backbone-min.js", 
	"js/libraries/jquery.min.js", 
	"js/pagecontrols/header.js",
	"js/pagecontrols/main.js",
	"js/pagecontrols/info.js",
	"js/pagecontrols/sectionone.js",
	"js/pagecontrols/sectiontwo.js",
	"js/pagecontrols/sectiondata.js",
	"js/pagecontrols/footer.js"
], function(Base){
	underpin.controller = function(parameters){
		Base.call(this);
		this.init = function(){
			this.parameters = parameters;
			this.load();
		}
		this.init();
	}

	underpin.controller.prototype = Object.create(Base.prototype);
	underpin.controller.prototype.load = function(){
		var _this = this;

                // define sections
                this.pcHeader = new underpin.pagecontrols.header({
                        'container' : this.parameters.divHeader,
                        'switchMain' : function(page){ _this.switchMain(page); }
                });
                this.pcMain = new underpin.pagecontrols.main({
                        'container' : this.parameters.divMain
                });
                this.pcSectionOne = new underpin.pagecontrols.sectionone({
                        'container' : this.parameters.divMain
                });
                this.pcSectionTwo = new underpin.pagecontrols.sectiontwo({
                        'container' : this.parameters.divMain
                });
                this.pcInfo = new underpin.pagecontrols.info({
                        'container' : this.parameters.divMain
                });
                this.pcSectionData = new underpin.pagecontrols.sectiondata({
                        'container' : this.parameters.divMain
                });
                this.pcFooter = new underpin.pagecontrols.footer({
                        'container' : this.parameters.divFooter
                });

		// load initial sections
                this.pcHeader.load();
                this.pcFooter.load();
                this.liveMain = undefined;

                // backbone routes
                var Router = Backbone.Router.extend({
                        routes: {
                                ''              : 'sectionmain',
                                'sectionmain'   : 'sectionmain',
                                'sectionone'    : 'sectionone',
                                'sectiontwo'    : 'sectiontwo',
                                'sectioninfo'   : 'sectioninfo',
                                'sectiondata'   : 'sectiondata'
                        }
                });
                this.router = new Router();
                this.router.on('route:sectionmain', function(){
                        if (_this.liveMain != undefined)
                                _this.liveMain.unload();
                        _this.pcMain.load();
                        _this.liveMain = _this.pcMain;
                });
                this.router.on('route:sectionone', function(){
                        if (_this.liveMain != undefined)
                                _this.liveMain.unload();
                        _this.pcSectionOne.load();
                        _this.liveMain = _this.pcSectionOne;
                });
                this.router.on('route:sectiontwo', function(){
                        if (_this.liveMain != undefined)
                                _this.liveMain.unload();
                        _this.pcSectionTwo.load();
                        _this.liveMain = _this.pcSectionTwo;
                });
		this.router.on('route:sectioninfo', function(){
                        if (_this.liveMain != undefined)
                                _this.liveMain.unload();
                        _this.pcInfo.load();
                        _this.liveMain = _this.pcInfo;
                });
                this.router.on('route:sectiondata', function(){
                        if (_this.liveMain != undefined)
                                _this.liveMain.unload();
                        _this.pcSectionData.load();
                        _this.liveMain = _this.pcSectionData;
                });
                Backbone.history.start();				
	}

	underpin.controller.prototype.switchMain = function(page){
		switch (page) {
                        case 'main' :
                                this.router.navigate('sectionmain', {trigger:true});
                                break;
                        case 'sectionone' :
                                this.router.navigate('sectionone', {trigger:true});
                                break;
                        case 'sectiontwo' :
                                this.router.navigate('sectiontwo', {trigger:true});
                                break;
                        case 'info' :
                                this.router.navigate('sectioninfo', {trigger:true});
                                break;
                        case 'sectiondata' :
                                this.router.navigate('sectiondata', {trigger:true});
                                break;
                }
	}

	underpin.controller.prototype.unload = function(){

	}

	return underpin.controller;
});


