var InvoiceItemView = Backbone.View.extend({

//HTML element name, where to render a view.
el: 'body',

//Initialize view object values.
initalize: function(){
	this.html = 'Description:Wooden Toy House. ' +
		'Price: $22. Quantity: 3.'