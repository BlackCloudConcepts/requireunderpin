// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/subpagecontrols/base.js",
        "js/libraries/jquery.min.js",
        "js/libraries/underscore-min.js"
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
                this.getContainer();
                this.require_template('red-template');

                var template = _.template($('#red-template').html());
                this.container.html(template);
        }

        underpin.subpagecontrols.red.prototype.unload = function(){
                this.destroyControl();
        }

	return underpin.subpagecontrols.red;
});


