// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/subpagecontrols/base.js",
        "js/libraries/jquery.min.js",
//        "js/libraries/underscore-min.js"
	"js/libraries/dust-core.min.js"
], function(Base){
        underpin.subpagecontrols.orange = function(parameters){
                Base.call(this);
                this.init = function(){
                        this.parameters = parameters;
                }
                this.init();
        }

        underpin.subpagecontrols.orange.prototype = Object.create(Base.prototype);
        underpin.subpagecontrols.orange.prototype.load = function(){
		var _this = this;
                this.getContainer();
//                this.require_template('orange-template');

//                var template = _.template($('#orange-template').html());
//                this.container.html(template);

		this.require_template('orange-tpl');
		dust.render('orange-tpl.tl', {}, function(err, out){
                        _this.container.html(out);
                });
        }

        underpin.subpagecontrols.orange.prototype.unload = function(){
                this.destroyControl();
        }

	return underpin.subpagecontrols.orange;
});


