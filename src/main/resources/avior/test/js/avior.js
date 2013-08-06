define([
	"jquery",
	"underscore",
	"backbone",
	"router/router",
	"text!template/login.html",
], function($, _, Backbone, Router, loginTpl){
	return { 
		Router: Router,

		template: _.template(loginTpl),

		initialize: function(){
				$(document).bind('pageinit');
				$(function() { $("#some-div").show(); });
				$.mobile.linkBindingEnabled = false;
    			$.mobile.hashListeningEnabled = false;
    			
    			var self = this;
				$('#content').append(this.template).trigger('create');
				$('#userLogin').click(function() {self.validate();});
		},
		
		validate: function() {
			var self = this;
			if ( $("#Lusername").val() === "admin" && $("#Lpassword").val() === "admin" ){
				document.getElementById("rightpanel3").style.display='block';
				document.getElementById("leftpanel3").style.display='block';
				var router = new Router(); 
				Backbone.history.start();
			}
			else {
				$('#content').empty();
				$('#content').append(this.template).trigger('create');
				$('#userLogin').click(function() {self.validate();});
			}
		},
	};
});
