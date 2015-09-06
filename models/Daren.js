var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Daren Model
 * =============
 */

var Daren = new keystone.List('Daren', {
	label: '达人',
	defaultSort: 'index',
	sortable: true
});

Daren.add({
	name: {type: String, required: true, label: '名称'},
	createdAt: {type: Date, default: Date.now, label: '创建时间', noedit: true},
	index: {type: Types.Number, label: '排序', default: 0, required: true},
	url: {
		type: Types.Url,
		label: '链接',
		default: '#',
		required: true,
		format: function (item) {
			return item;
		}
	},
	cover: {
		type: Types.CloudinaryImage,
		publicID: 'Daren',
		folder: 'Darens',
		label: '图片',
		width: 1280,
		height: 725,
		format: 'jpg'
	}
});
Daren.defaultColumns = 'index|2%, url|10%, cover';

Daren.register();
