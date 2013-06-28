define([
	"jquery",
	"underscore",
	"backbone",
	"text!template/switchSumTemplate.html"
], function($, _, Backbone, swtchSumTpl){
	var SwitchSumView = Backbone.View.extend({
		tagName: "tbody",
		
		template: _.template(swtchSumTpl),
		
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}		
	});
	return SwitchSumView;
});