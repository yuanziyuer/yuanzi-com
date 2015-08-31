var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		cards: [{
			cardId: '538ead822af3f96327ab613a',
			title: 'card1',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡士大夫很快恢复快圣诞节发货户籍卡货到付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card2',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card3',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card4',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡士大夫很快恢复快圣诞节发货户籍卡货到付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		},{
			cardId: '538ead822af3f96327ab613a',

			title: 'card1',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡士大夫很快恢复快圣诞节发货户籍卡货到付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card2',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card3',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card4',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡士大夫很快恢复快圣诞节发货户籍卡货到付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		},{
			cardId: '538ead822af3f96327ab613a',

			title: 'card1',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡士大夫很快恢复快圣诞节发货户籍卡货到付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card2',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card3',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card4',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡士大夫很快恢复快圣诞节发货户籍卡货到付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		},{
			cardId: '538ead822af3f96327ab613a',

			title: 'card1',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡士大夫很快恢复快圣诞节发货户籍卡货到付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card2',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card3',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}, {
			cardId: '538ead822af3f96327ab613a',

			title: 'card4',
			cover: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			url: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c',
			description: '龙卷风地方的加哈卡士大夫很快恢复快圣诞节发货户籍卡货到付款吉安市福建省会计法哈克说接电话发顺丰阿斯顿回复接口撒谎都放假哈SD卡发哈SD卡交话费撒旦法很快就到会发生空间地方好家伙接收到回复看',
			createdAt: '2015.08.27',
			nickname: 'jeje哈',
			avatar: 'http://yuanzi-beijing.oss-cn-beijing.aliyuncs.com/cardImg/2014-07/00779288-5c64-41c0-b178-7075a22e1a2c'
		}]
		
	};
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.defaultImg = 'http://assets.iyuanzi.net/cardDescription/public/images/blank.gif';



	// Render the view
	view.render('com/pages/cards');

};
