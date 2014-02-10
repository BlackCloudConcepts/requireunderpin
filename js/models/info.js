// License: (MIT) Copyright (C) 2013 Scott Gay
define([
	"js/models/base.js",
	"js/libraries/jquery.min.js"
], function(Base){
	// PARAMETERS
	// - container --> container used for loading image
	// - dataTTL --> time to cache stored data for

	underpin.models.info = function(parameters){
		Base.call(this);
		this.init = function(){
			this.parameters = parameters;
			if (this.parameters.container == typeof('undefined'))
				this.parameters.container = $("body");
			this.storedData = undefined;
		};
		this.init();
	};

	underpin.models.info.prototype = Object.create(Base.prototype);

	underpin.models.info.prototype.fetch = function(){
		var _this = this;
		var deferredObj = $.Deferred();

		// clear stored data if outside the set cache time
		if (this.storedData != undefined){ 
			var currTime = new Date().getTime();
			if ((currTime - this.storedData.time) > (this.parameters.dataTTL*1000))
				this.storedData = undefined;
		}
		
		if (this.storedData != undefined){
			// return stored data
			deferredObj.resolve(this.storedData.data);
		} else {
			// get new data
			var request = {};
			request.action = "find";
			request.collection = "info";
			request.callback = function(data){
				// store and return data
				_this.storedData = {};
				_this.storedData.time = new Date().getTime();
				_this.storedData.data = data;
				deferredObj.resolve(data);
			};
			request.failcallback = function(data){
				// handle error
				deferredObj.reject(data);
			};
			this.sendRequest(request, this.container);
		}

		return deferredObj.promise();
	};

	return underpin.models.info;
});
