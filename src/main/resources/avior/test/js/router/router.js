define([
	"jquery",
	"underscore",
	"backbone",
	"marionette",
	"floodlight/switch",
	"view/switchDetail",
	"floodlight/memory",
	"floodlight/modules",
	"floodlight/status",
	"floodlight/uptime",
	"view/memoryview",
	"view/modulesview",
	"view/statusview",
	"view/uptimeview",
], function($, _, Backbone, Marionette, Switch, SwitchDetail, Memory, Modules, Status, Uptime, MemoryView, ModulesView, StatusView, UptimeView){
	/* Structure used to navigate through views */
	var Router = Marionette.AppRouter.extend({
		routes: {
			"": "home",
			"index": "home2",
			"switches": "switchRoute",
		},
		
		 home: function() {
			this.statusview = new StatusView({model: new Status});
			this.uptimeview = new UptimeView({model: new Uptime});
			this.memoryview = new MemoryView({model: new Memory});
			this.modulesview = new ModulesView({model: new Modules});
				
			//Delegate events for controller views
			this.statusview.delegateEvents(statusview.events);
			this.uptimeview.delegateEvents(uptimeview.events);
			this.memoryview.delegateEvents(memoryview.events);
			this.modulesview.delegateEvents(modulesview.events);
				
			//Link controller aspects to id tags
			$('#uptimeview').append(this.uptimeview.render().el);
			$('#statusview').append(this.statusview.render().el);
			$('#memoryview').append(this.memoryview.render().el);
			$('#modulesview').append(this.modulesview.render().el);
        },
        
        home2: function() {				
			//Link controller aspects to id tags
			$('#uptimeview').append(this.uptimeview.render().el).trigger('create');
			$('#statusview').append(this.statusview.render().el).trigger('create');
			$('#memoryview').append(this.memoryview.render().el).trigger('create');
			$('#modulesview').append(this.modulesview.render().el).trigger('create');
        },
        
		
		switchRoute: function() {
			console.log("router routing routers");
			var switchDetail = new SwitchDetail({model: new Switch});
			switchDetail.delegateEvents(switchDetail.events);
		},

	});
	return Router;
}); 