// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/subpagecontrols/base.js",
        "js/libraries/jquery.min.js",
//        "js/libraries/underscore-min.js"
	"js/libraries/dust-core.min.js"
], function(Base){
        underpin.subpagecontrols.red = function(parameters){
                Base.call(this);
                this.init = function(){
                        this.parameters = parameters;
                }
                this.init();
        }

        underpin.subpagecontrols.red.prototype = Object.create(Base.prototype);
        underpin.subpagecontrols.red.prototype.load = function(){
		var _this = this;
                this.getContainer();
//                this.require_template('red-template');

//                var template = _.template($('#red-template').html());
//                this.container.html(template);

		this.require_template('red-tpl');
		dust.render('red-tpl.tl', {}, function(err, out){
                        _this.container.html(out);
                });
        }

        underpin.subpagecontrols.red.prototype.unload = function(){
                this.destroyControl();
        }

	return underpin.subpagecontrols.red;
});


