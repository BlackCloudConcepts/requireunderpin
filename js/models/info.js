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

	underpin.models.info.prototype.fetch = function(fParams){
		var _this = this;
		var deferredObj = $.Deferred();
		var modelName = 'modelInfo';

		this.modelData = this.getModelStorage(this.modelData, fParams);
		this.localData = this.getLocalStorage(modelName, fParams);
		
		if (this.modelData != undefined){
//			console.log('use model data'); 
			deferredObj.resolve(this.modelData.data);
		} else if (this.localData != undefined){
//			console.log('use localStorage data');
			this.modelData = this.localData;
			deferredObj.resolve(this.localData.data);
		} else {
//			console.log('get new data');
			var request = {};
			request.action = "find";
			request.collection = "info";
			request.parameters = JSON.stringify(fParams);
			request.callback = function(data){
				_this.setModelStorage(data, fParams);
				_this.setLocalStorage(modelName, data, fParams)
				deferredObj.resolve(data);
			};
			request.failcallback = function(data){
				deferredObj.reject(data);
			};
			this.sendRequest(request, this.container);
		}

		return deferredObj.promise();
	};

	return underpin.models.info;
});
