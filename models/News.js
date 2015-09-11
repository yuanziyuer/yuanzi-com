var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * News Model
 * ==========
 */

var News = new keystone.List('News', {
	label: '新闻',
	autokey: {from: 'name', path: 'key', unique: true},
	defaultSort: 'index',
	sortable: true
});

News.add({
	name: { 
		type: String, 
		default: '新闻标题' ,
		required: true , 
		label: '标题', 
		initial: true
	},
	cover: {
		type: Types.CloudinaryImage,
		label: '封面',
		publicID: 'news',
		folder: 'news',
		format: function(item, file){
			return '<img src="'+file.filename+'" style="max-width: 300px">'
		}
	},
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
	content: {
		type: Types.Html,
		wysiwyg: true,
		height: 300,
		label: '内容'
	},
	isPublished: {
		type: Boolean, default: false , label: '是否发布'
	},
	isOurs: {
		type: Boolean, default: true , label: '是否内部新闻'
	}
});

/**
 * Registration
 */

News.defaultColumns = 'name, index, isPublished, isOurs, description, cover';
News.register();
