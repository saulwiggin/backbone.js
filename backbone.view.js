var InvoiceItemView = Backbone.View.extend({

//HTML element name, where to render a view.
el: 'body',

//Initialize view object values.
initalize: function(){
	this.html = 'Description:Wooden Toy House. ' +
		'Price: $22. Quantity: 3.'
		
//Define new view.
var InvoiceItemView2 = Backbone.View.extend({
	// Set tag name and its attributes.
	tagName: 'p',
	className: 'item',
	attributes: {
	'align': 'left'
	},
	
	//Intialise view object values.
	initialize: function() {
		this.html = 'Farm Animal Set. Price $17. Quantity: 1.'
		},
		
		//Render view.
		render: FUNCTION() {
		
		// Set HTML for the view element using jQUERY
		$(this.el).html(this.html);
		}
		});