import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addContact: function(){
			var firstName = this.get('firstName');
			var lastName = this.get('lastName');
			var mobile = this.get('mobile');
			var phone = this.get('phone');
			
			//Create New Contact
			var newContact = this.store.createRecord('contact', {
				firstName: firstName,
				lastName: lastName,
				mobile: mobile,
				phone: phone,				
			});

			// Save to Database
			newContact.save();

			// Clear Form
			this.setProperties({
				firstName: "",
				lastName: "",
				mobile: "",
				phone: "",	
			});
		}
	}
});
