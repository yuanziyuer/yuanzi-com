var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Apply Model
 * ==========
 */
var Apply = new keystone.List('Apply', {
	label: '达人申请',
	autokey: {from: 'name', path: 'key', unique: true}
});

Apply.add({
	name: {
		type: String,
		label: '姓名',
		initial: true
	},
	mobile: {
		type: String,
		label: '手机号码',
		initial: true
	},
	weixin: {
		type: String,
		label: '微信账号',
		initial: true
	},
	email: {
		type: String,
		label: '邮箱地址',
		initial: true
	},
	city: {
		type: String,
		label: '所在城市',
		initial: true
	},
	neighborhood: {
		type: String,
		label: '社区名称',
		initial: true
	},
	isFullTime: {
		type: String,
		default: '是',
		label: '全职在家看孩子',
		initial: true
	},
	idea: {
		type: String,
		label: '育儿理念',
		initial: true
	},
	selfIntroduction: {
		type: String,
		label: '自我介绍',
		initial: true
	},
	gender: { 
		type: String, 
		options: 'f, m', 
		default: 'm',
		label: '性别'
	},
	babyGender: {
		type: String,
		options: 'f, m',
		default: 'm',
		label: '宝宝性别'
	},
	babyBirthday: {
		type: String,
		label: '宝宝年龄',
		initial: true
	}
});

/**
 * Registration
 */

Apply.defaultColumns = 'name, mobile, weixin, email, location, neighborhood, isFullTime, idea, selfIntroduction, gender, baby.babyGender, baby.birthday';
Apply.register();
