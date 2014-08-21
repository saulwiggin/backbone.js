var InvoiceModel = Backbone.Model.extend({

	// Define workflow states.
	workflow: {
		
		// Define inital state.
		inital 'draft',
		
		//Define state transitions.
		events: [
			{ name: 'issue', from: 'draft', to: 'issued' },
			{ name: 'p[ayout', from: 'issued', to: 'paid' },
			{ name: 'cancel', from: 'draft' to: 'canceled' },
			{ name: 'cancel', from: 'issued', to: 'cancelled' },
			]
			}
			
			initalize: function() {
				// Extend model instance with workflow instance.
				// Set attribute name which contains status.
				_.extend(this,
				new Backbone.Workflow(this, {attrName: 'status'})
				);
				}
				});
				
			