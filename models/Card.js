var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Card = new keystone.List('Card', {
	label: '卡片',
	autokey: {from: 'title', path: 'key'},
});

Card.add({
	title: { type: String, default: '精品卡片' ,required: true , label: '标题', initial: true},
	content: { 
		type: Types.Html, 
		wysiwyg: true, 
		height: 300, 
		label: '内容' 
	},
	description: { type: Types.Textarea, default: '元子育儿精品推荐' ,required: true, label: '描述'},
	cover: {
		type: Types.CloudinaryImage,
		label: '封面',
		format: function(item, file){
			return '<img src="'+file.filename+'" style="max-width: 300px">'
		}
	},
	owner: {
		nickname: {type: String, default: '元子',required: true, label: '作者昵称'},
		avatar: {
			type: Types.CloudinaryImage,
				label: '作者头像',
				format: function(item, file){
				return '<img src="'+file.filename+'" style="max-width: 50px">'
			}
			
		}
	},
	isPublisted: {
		type: Boolean, default: false , label: '是否发布'
	}
});

// Provide access to Keystone
Card.schema.virtual('cardId').get(function() {
	return this.id;
});

/**
 * Registration
 */

Card.defaultColumns = 'title, content, description, cover, owner';
Card.register();
