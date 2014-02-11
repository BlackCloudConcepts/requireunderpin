// License: (MIT) Copyright (C) 2013 Scott Gay
define([
        "js/libraries/jquery.min.js"
], function(){
        underpin.models.base = function(parameters){
/*
                this.init = function(){
                        this.parameters = parameters;
                }
                this.init();
*/
        };

	// validate if modelData exists and is within dataTTL
	underpin.models.base.prototype.checkModelStorage = function(modelStorageData){
		if (modelStorageData != undefined){
			var currTime = new Date().getTime();
                        if ((currTime - modelStorageData.time) > (this.parameters.dataTTL*1000))
                                modelStorageData = undefined;
                }
		return modelStorageData;
	};

	// validate if localStorage is available in browser, exists, and is within dataTTL
	underpin.models.base.prototype.checkLocalStorage = function(modelName){
		var local = false;
                if(typeof(Storage)!=="undefined"){ // check for browser support
                        if (localStorage.getItem(modelName) != undefined){ // check if model has been stored before
                                // check if data is still in TTL
				var currTime = new Date().getTime();
                                if ((currTime - JSON.parse(localStorage.getItem(modelName)).time) < (this.parameters.dataTTL*1000))
                                        local = true;
                        }
                }
		return local;
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
