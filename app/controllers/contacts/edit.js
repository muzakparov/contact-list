import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		editContact: function(id){
			var self = this;

			var firstName = this.get('firstName');
			var lastName = this.get('lastName');
			var mobile = this.get('mobile');
			var phone = this.get('phone');
			
			//Update Contact
			this.store.findRecord('contact', id,{ reload: true }).then(function(contact){
				contact.set('firstName', firstName);
				contact.set('lastName', lastName);
				contact.set('mobile', mobile);
				contact.set('phone', phone);
				
				// Save to Database
				contact.save();				

			}).then(function(){
				self.transitionToRoute('contacts');
			});
		}
	}
});
