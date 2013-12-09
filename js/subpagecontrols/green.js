// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/subpagecontrols/base.js",
        "js/libraries/jquery.min.js",
        "js/libraries/underscore-min.js"
], function(Base){
        underpin.subpagecontrols.green = function(parameters){
                Base.call(this);
                this.init = function(){
                        this.parameters = parameters;
                }
                this.init();
        }

        underpin.subpagecontrols.green.prototype = Object.create(Base.prototype);
        underpin.subpagecontrols.green.prototype.load = function(){
                this.getContainer();
                this.require_template('green-template');

                var template = _.template($('#green-template').html());
                this.container.html(template);
        }

        underpin.subpagecontrols.green.prototype.unload = function(){
                this.destroyControl();
        }

	return underpin.subpagecontrols.green;
});


