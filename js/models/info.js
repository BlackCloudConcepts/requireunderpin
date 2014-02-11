// License: (MIT) Copyright (C) 2013 Scott Gay
define([
	"js/models/base.js",
	"js/libraries/jquery.min.js"
], function(Base){
	// PARAMETERS
	// - container --> container used for loading image
	// - dataTTL --> time to cache stored data for
	//
	// note : model data is saved to browser localStorage, and stored with the model.  
	// - dataTTL of 0 (default) will stop caching.  
	// - remove code as necessary to remove caching entirely or of a particular type.

	underpin.models.info = function(parameters){
		Base.call(this);
		this.init = function(){
			this.parameters = parameters;
			// set parameter defaults
			if (typeof(this.parameters.container) == 'undefined')
				this.parameters.container = $("body");
			if (typeof(this.parameters.dataTTL) == 'undefined')
				this.parameters.dataTTL = 0; // don't cache
			this.modelData = undefined;
		};
		this.init();
	};

	underpin.models.info.prototype = Object.create(Base.prototype);

	underpin.models.info.prototype.fetch = function(){
		var _this = this;
		var deferredObj = $.Deferred();
		var modelName = 'modelInfo';

		// validate if modelData exists and is within dataTTL		
		this.modelData = this.checkModelStorage(this.modelData);
		// validate if localStorage is available in browser, exists, and is within dataTTL	
		var useLocalStorage = this.checkLocalStorage(modelName);
		
		if (this.modelData != undefined){
			// return stored data
//			console.log('use model data'); 
			deferredObj.resolve(this.modelData.data);
		} else if (useLocalStorage == true){
			// return localStorage data
//			console.log('use localStorage data');
			this.modelData = JSON.parse(localStorage.getItem(modelName));
			deferredObj.resolve(JSON.parse(localStorage.getItem(modelName)).data);
		} else {
//			console.log('get new data');
			// get new data
			var request = {};
			request.action = "find";
			request.collection = "info";
			request.callback = function(data){
				// store in model
				_this.modelData = {};
				_this.modelData.time = new Date().getTime();
				_this.modelData.data = data;
				// store in browser
				if(typeof(Storage)!=="undefined"){
					localStorage.setItem(modelName, JSON.stringify(_this.modelData));
				}
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
