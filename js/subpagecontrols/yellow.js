// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/subpagecontrols/base.js",
        "js/libraries/jquery.min.js",
        "js/libraries/underscore-min.js"
], function(Base){
        underpin.subpagecontrols.yellow = function(parameters){
                Base.call(this);
                this.init = function(){
                        this.parameters = parameters;
                }
                this.init();
        }

        underpin.subpagecontrols.yellow.prototype = Object.create(Base.prototype);
        underpin.subpagecontrols.yellow.prototype.load = function(){
                this.getContainer();
                this.require_template('yellow-template');

                var template = _.template($('#yellow-template').html());
                this.container.html(template);
        }

        underpin.subpagecontrols.yellow.prototype.unload = function(){
                this.destroyControl();
        }

	return underpin.subpagecontrols.yellow;
});


