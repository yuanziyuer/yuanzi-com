var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * News Model
 * ==========
 */

var News = new keystone.List('News', {
	label: '新闻',
	autokey: {from: 'title', path: 'key'},
});

News.add({
	title: { type: String, default: '新闻标题' ,required: true , label: '标题', initial: true},
	cover: {
		type: Types.CloudinaryImage,
		label: '封面',
		format: function(item, file){
			return '<img src="'+file.filename+'" style="max-width: 300px">'
		}
	},
	url: {
		type: Types.Url,
		label: '链接',
		default: '#',
		required: true,
		format: function (item) {
			return item;
		}
	},
	isPublisted: {
		type: Boolean, default: false , label: '是否发布'
	}
});

/**
 * Registration
 */

News.defaultColumns = 'title, content, description, cover, owner';
News.register();
