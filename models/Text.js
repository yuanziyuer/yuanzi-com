var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Text Model
 * =============
 */

var Text = new keystone.List('Text', {
	label: '达人描述'
});

Text.add({
	text1: { type: String, label: 'No1', initial: true},
	text2: { type: String, label: 'No2', initial: true},
	text3: { type: String, label: 'No3', initial: true},
	text4: { type: String, label: 'No4', initial: true},
	text5: { type: String, label: 'No5', initial: true}
});
Text.defaultColumns = 'text1, text2, text3, text4, text5';

Text.register();
