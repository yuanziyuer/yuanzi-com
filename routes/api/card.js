var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		cards: [{
			title: 'card1',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description:'龙卷风地方的加哈卡士大夫很快恢复快圣诞节发货户籍卡货到付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27'
		},{
			title: 'card2',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description:'龙卷风地方的加哈卡回复看',
			createdAt: '2015.08.27'
		},{
			title: 'card3',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description:'龙卷风地方的付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27'
		},{
			title: 'card4',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description:'龙卷风地方的加哈卡士大夫很快恢复快圣诞节发货户籍卡货到付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27'
		}],
		sliders: [{
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			cover: '/images/slider2.png',
		},{
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			cover: '/images/slider2.png',
		},{
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			cover: '/images/slider2.png',
		},{
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			cover: '/images/slider2.png',
		}],
		users: [{
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			cover: '/images/slider2.png',
		},{
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			cover: '/images/slider2.png',
		},{
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			cover: '/images/slider2.png',
		},{
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			cover: '/images/slider2.png',
		}],
		texts:['撒的好伐科技','看是否可','沙发上课的恢复了恢复绝对是','思考的好机会金慧','凡事都好看就'],
		news: [{
			title: 'news1',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description:'龙卷风地方的加哈卡士大夫很快收到回复看',
		},{
			title: 'news2',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description:'龙卷风地方的加哈卡回复看',
		},{
			title: 'news3',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description:'恢复开机撒的好伐就库是否反馈货架上的房间地方好家伙',
		}]
	};
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.defaultImg = 'http://assets.iyuanzi.net/cardDescription/public/images/blank.gif';



	// Render the view
	view.render('com/pages/card');

};
