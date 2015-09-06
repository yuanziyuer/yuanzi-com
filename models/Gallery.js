var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Gallery.add({
	name: { type: String, required: true, label: '名称'},
	publishedDate: { type: Date, default: Date.now, label: '名称'},
	images: { type: Types.CloudinaryImages, label: '名称' }
});

Gallery.register();
