// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/libraries/jquery.min.js"
], function(){
        underpin.models.base = function(parameters){
		// define constructor if necessary
        };

	// compare if the new params to be fetched are the same as the params that are stored
	underpin.models.base.prototype.checkParams = function(fParams, storedParams){
		var paramsMatch = true;
		$.each(fParams, function(fkey, fval){
			var matchFound = false;
			$.each(storedParams, function(skey, sval){
				if (fkey == skey && fval == sval)
					matchFound = true;
			});
			if (!matchFound)
				paramsMatch = false;
		});
		return paramsMatch;
	};

	// validate and return if modelData exists and is within dataTTL
	underpin.models.base.prototype.getModelStorage = function(modelStorageData, fParams){
		if (modelStorageData != undefined){
			var currTime = new Date().getTime();
                        if ((currTime - modelStorageData.time) > (this.parameters.dataTTL*1000)) // clear if outside TTL
                                modelStorageData = undefined;
			if (!this.checkParams(fParams, modelStorageData.params)) // clear if params differ
				modelStorageData = undefined;
                }
		return modelStorageData;
	};

	// sets model data
	underpin.models.base.prototype.setModelStorage = function(modelStorageData, fParams){
		this.modelData = {};
                this.modelData.time = new Date().getTime();
                this.modelData.data = modelStorageData;
		this.modelData.params = fParams;
	};

	// validate and return if localStorage is available in browser, exists, and is within dataTTL
	underpin.models.base.prototype.getLocalStorage = function(modelName, fParams){
		var localStorageData = undefined;
                if(typeof(Storage)!=="undefined"){ // check for browser support
                        if (localStorage.getItem(modelName) != undefined){ // check if model has been stored before
                                // check if data is still in TTL
				var currTime = new Date().getTime();
				var lsd = JSON.parse(localStorage.getItem(modelName));
                                if ((currTime - lsd.time) > (this.parameters.dataTTL*1000)){ // clear if outside TTL
                                        localStorageData = undefined;
				} else if (!this.checkParams(fParams, lsd.params)) { // clear if params differ
	                                localStorageData = undefined;
				} else {
					localStorageData = lsd;
				}
                        }
                }
		return localStorageData;
	};

	// sets localStorage value if availabel in browser
	underpin.models.base.prototype.setLocalStorage = function(modelName, localStorageData, fParams){
		if(typeof(Storage)!=="undefined"){
			var lsd = {};
			lsd.data = localStorageData;
			lsd.time = new Date().getTime();
			lsd.params = fParams;
			localStorage.setItem(modelName, JSON.stringify(lsd));
		}
	};

	underpin.models.base.prototype.sendRequest = function(request, loadingContainer){
		// the structure of this api call can obviously change based on your needs.
                // - action and collection might change to apiName and method for example
                // - change your apiURL
                // - adjust the jsonp call as necessary

                // http://www.ajaxload.info/ is a good resource for generating your own loading gif
                var ajaxLoader = undefined;
                if (loadingContainer != undefined)
                        ajaxLoader = $('<img>', {'src' : '/images/ajax-loader.gif'}).appendTo(loadingContainer);

                var action = request.action;
                var collection = request.collection;
                var callback = request.callback;
                var failcallback = request.failcallback;

                var apiURL = "http://96.126.120.64:8126";
                $.ajax({
                        type: "POST",
                        url: apiURL+"?random=" + this.getRandomNumber(),
                        data: "action=" + action + "&collection=" + collection,
                        dataType: "jsonp",
                        success: function(data, status){
                                if (ajaxLoader != undefined)
                                        ajaxLoader.remove();
                                if (callback != undefined)
                                        callback(data);
                        },
                        error: function(data, e1, e2)
                        {
                                if (ajaxLoader != undefined)
                                        ajaxLoader.remove();
                                var errorInfo = { 'data' : data, 'e1' : e1, 'e2' : e2 };
                                if (failcallback != undefined)
                                        failcallback(errorInfo);
                        }
                });	
	}

	underpin.models.base.prototype.getRandomNumber = function(){
		var randomnumber=Math.floor(Math.random()*10000);
                return randomnumber;
	}	

	return underpin.models.base;
});
