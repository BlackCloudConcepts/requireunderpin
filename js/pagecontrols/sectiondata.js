// License: (MIT) Copyright (C) 2013 Scott Gay
// *** replaced underscore templating with dust templating
define([
        "js/pagecontrols/base.js",
	"js/libraries/jquery.min.js",
//        "js/libraries/underscore-min.js",
	"js/libraries/dust-core.min.js",
	"js/models/info.js",
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
			this.infoModel = new underpin.models.info({
				'container' : this.container,
				'dataTTL' : 20
			});
		}
		this.init();
	}

	underpin.pagecontrols.sectiondata.prototype = Object.create(Base.prototype);
	underpin.pagecontrols.sectiondata.prototype.load = function(){

		// WITH MODELS
		var _this = this;
		this.getContainer();
		this.require_template('data-tpl');
		// sample params (don't really exist for this api or limit data).  Just using to test model/localStorage caching
		var fParams = {
			'start' : 10,
			'limit' : 11
		};
		infoPromise = this.infoModel.fetch(fParams); 
		infoPromise.done(function(data){
			dust.render('data-tpl.tl', data, function(err, out){
                                _this.container.html(out);
                        });
		});

/*
		// WITHOUT MODELS
		var _this = this;
                this.getContainer();
//                this.require_template('data-template');
		this.require_template('data-tpl');

                var request = {};
                request.action = "find";
                request.collection = "info";
                request.callback = function(data){
//                        var template = _.template($('#data-template').html(), {mydata: data.data});
//                        _this.container.html(template);

			dust.render('data-tpl.tl', data, function(err, out){
				_this.container.html(out);
			});
                };
                request.failcallback = function(data){
                        $('<div>', {'class' : 'col-md-24 error'}).appendTo(_this.container).html('An error occurred');
                        $('<div>', {'class' : 'col-md-24 error'}).appendTo(_this.container).html(' - '+data.e1);
                };
                this.sendRequest(request, this.container);
*/
	};

	underpin.pagecontrols.sectiondata.prototype.unload = function(){
		this.destroyControl();
	};

	return underpin.pagecontrols.sectiondata;
});


