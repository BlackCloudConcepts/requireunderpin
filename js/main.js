if (underpin == null){
	var underpin = {
		'pagecontrols' : {},
		'subpagecontrols' : {}
	};
}

requirejs.config({
	shim : {
		'js/libraries/jquery.min.js': {
           	 	exports: '$'
        	},
		'js/libraries/underscore-min.js': {
		    deps: [ 'js/libraries/jquery.min.js' ]
		    ,exports: '_'
		},
		'js/libraries/backbone-min.js': {
		    deps: [ 'js/libraries/underscore-min.js' ]
		    ,exports: 'Backbone'
		}
	}
});

require([
	"js/libraries/jquery.min.js",
	"js/controller.js"
], function(){
	new underpin.controller({
                'divHeader'     : $('#header'),
                'divMain'       : $('#main'),
                'divFooter'     : $('#footer')
        });

        // define outline button click actions
        $('#pagecontroloverlay').bind('click', function(){
                if ($('#parentcontainer').hasClass('pagecontroloverlay')){
                        $('#parentcontainer').removeClass('pagecontroloverlay');
                        $('#pagecontroloverlay').html('Show Page Controls Outline');
                }
                else{
                        $('#parentcontainer').addClass('pagecontroloverlay');
                        $('#pagecontroloverlay').html('Hide Page Controls Outline');
                }
        });
        $('#subpagecontroloverlay').bind('click', function(){
                if ($('#parentcontainer').hasClass('subpagecontroloverlay')){
                        $('#parentcontainer').removeClass('subpagecontroloverlay');
                        $('#subpagecontroloverlay').html('Show Subpage Controls Outline');
                }
                else{
                        $('#parentcontainer').addClass('subpagecontroloverlay');
                        $('#subpagecontroloverlay').html('Hide Subpage Controls Outline');
                }
        });
});
