var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Slider Model
 * =============
 */

var Slider = new keystone.List('Slider', {
	label: '轮播图',
	autokey: {from: 'name', path: 'key', unique: true},
	defaultSort: 'index',
	sortable: true
});

Slider.add({
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
		publicID: 'slider',
		folder: 'sliders',
		label: '图片',
		width: 1280,
		height: 725,
		format: 'jpg'
	}
});
Slider.defaultColumns = 'name|5%, createdAt|10%, index|2%, url|10%, cover';

Slider.register();
