var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Apply = new keystone.List('Apply',{
	label: '达人申请'
});

Apply.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Apply.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
 * Relationships
 */

Apply.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */

Apply.defaultColumns = 'name, email, isAdmin';
Apply.register();
