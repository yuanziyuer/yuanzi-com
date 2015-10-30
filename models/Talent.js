var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Talent Model
 * =============
 */

var Talent = new keystone.List('Talent', {
	label: '达人',
	autokey: {from: 'name', path: 'key', unique: true},
	defaultSort: 'index',
	sortable: true
});

Talent.add({
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
		publicID: 'talents',
		folder: 'talents',
		label: '图片',
		
	},
	cover2x: {
		type: Types.CloudinaryImage,
		publicID: 'talents',
		folder: 'talents',
		label: 'retina高清2倍图',
	},
	isPublished: {
		type: Boolean, default: false, label: '是否发布'
	}
});
Talent.defaultColumns = 'name|5%, index|2%, isPublished|2%, url|10%, cover';

Talent.register();
