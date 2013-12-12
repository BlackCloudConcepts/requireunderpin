// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/pagecontrols/base.js",
	"js/libraries/jquery.min.js",
//        "js/libraries/underscore-min.js",
	"js/libraries/dust-core.min.js"
], function(Base){
	underpin.pagecontrols.footer = function(parameters){
		Base.call(this);
		this.init = function(){
			this.parameters = parameters;
			this.parameters.container.addClass('pagecontrolhighlight');
		}
		this.init();
	}

	underpin.pagecontrols.footer.prototype = Object.create(Base.prototype);
	underpin.pagecontrols.footer.prototype.load = function(){
		var _this = this;
		this.getContainer();
//                this.require_template('footer-template');

//                var template = _.template($('#footer-template').html());
//                this.container.html(template);

		this.require_template('footer-tpl');
		dust.render('footer-tpl.tl', {}, function(err, out){
                	_this.container.html(out);
                });

	}

	underpin.pagecontrols.footer.prototype.unload = function(){
		this.destroyControl();
	}

	return underpin.pagecontrols.footer;
});


