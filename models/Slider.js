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
		height: 650,
		format: 'jpg'
	},
	cover2x: {
		type: Types.CloudinaryImage,
		publicID: 'slider',
		folder: 'sliders',
		label: 'retina高清2倍图',
		width: 1280,
		height: 650,
		format: 'jpg'
	},
	isPublished: {
		type: Boolean, default: false, label: '是否发布'
	}
});
Slider.defaultColumns = 'name|10%, isPublished|10%, index|5%, url|10%, cover';

Slider.register();
