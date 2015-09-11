var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Card = new keystone.List('Card', {
	label: '卡片',
	autokey: {from: 'name', path: 'key', unique: true},
	defaultSort: 'index',
	sortable: true
});

Card.add({
	name: {
		type: String, 
		default: '不超过20个汉字', 
		required: true, 
		label: '标题', 
		initial: true,
		validate: function (title) {
			return title.length <= 20;
		}

	},
	description: {
		type: Types.Textarea, 
		default: '字数在50~80', 
		label: '描述',
		initial: true
	},
	content: {
		type: Types.Html,
		wysiwyg: true,
		height: 300,
		label: '内容'
	},
	cover: {
		type: Types.CloudinaryImage,
		label: '封面',
		publicID: 'news',
		folder: 'news',
		format: function (item, file) {
			return '<img src="' + file.filename + '" style="max-width: 300px">'
		}
	},
	index: {type: Types.Number, label: '排序', default: 0, required: true},
	owner: {
		nickname: {type: String, default: '元子', required: true, label: '作者昵称'},
		avatar: {
			type: Types.CloudinaryImage,
			label: '作者头像',
			format: function (item, file) {
				return '<img src="' + file.filename + '" style="max-width: 50px">'
			}

		}
	},
	isPublished: {
		type: Boolean, default: false, label: '是否发布'
	}
});

// Provide access to Keystone
Card.schema.virtual('cardId').get(function () {
	return this._id;
});


/**
 * Registration
 */

Card.defaultColumns = 'name, index, isPublished, description, cover, owner.nickname';
Card.register();
