var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var About = new keystone.List('About',{
	label: '关于我们'
});

About.add({
	title: { type: String, default: '关于我们', label: '标题', initial: true },
	content: {
		type: Types.Html,
		wysiwyg: true,
		'wysiwyg images': true,
		'wysiwyg menubar': true,
		height: 600,
		label: '内容'
	}
});


/**
 * Registration
 */

About.defaultColumns = 'name, content';
About.register();
