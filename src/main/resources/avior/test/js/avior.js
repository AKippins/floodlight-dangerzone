define([
	"jquery",
	"underscore",
	"backbone",
	"floodlight/memory",
	"floodlight/modules",
	"floodlight/status",
	"floodlight/uptime",
	"view/memoryview",
	"view/modulesview",
	"view/statusview",
	"view/uptimeview",
	"router/router",
], function($, _, Backbone, Memory, Modules, Status, Uptime, MemoryView, ModulesView, StatusView, UptimeView, Router){
	return {
		Memory: Memory,
		Modules: Modules,
		Status: Status, 
		Uptime: Uptime,
		MemoryView: MemoryView, 
		ModulesView: ModulesView,
		StatusView: StatusView,
		UptimeView: UptimeView,
		Router: Router,
		
		initialize: function(){
			$(document).ready(function(){
				var statusview = new StatusView({model: new Status});
				var uptimeview = new UptimeView({model: new Uptime});
				var memoryview = new MemoryView({model: new Memory});
				var modulesview = new ModulesView({model: new Modules});
				
				statusview.delegateEvents(statusview.events);
				uptimeview.delegateEvents(uptimeview.events);
				memoryview.delegateEvents(memoryview.events);
				modulesview.delegateEvents(modulesview.events);
				
				$('#uptimeview').append(uptimeview.render().el);
				$('#statusview').append(statusview.render().el);
				$('#memoryview').append(memoryview.render().el);
				$('#modulesview').append(modulesview.render().el);
				
				var router = new Router();
				Backbone.history.start();

				/*
				var flowview = new FlowView({model: new Flow});
				$(document.body).append(flowview.render().el);
				flowview.delegateEvents(flowview.events);
				*/
			});
		}
	};
});


