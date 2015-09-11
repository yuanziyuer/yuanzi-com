// Simulate config options from your production environment by
// customising the .env file in your project's root folder.

require('dotenv').load();
var config = require('./useConfig');
var uuid = require('node-uuid');

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': '元子育儿',
	'brand': '元子',

	'port': config.port,
	
	'sass': 'public',
	'static': ['public', 'upload'],
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	
	'emails': 'templates/emails',

	'mongo': config.db,
		
	'auto update': true,
	'session': true,
	'session store': 'mongo',
	
	'auth': true,
	'user model': 'User',

	'wysiwyg cloudinary images': true,
	'wysiwyg override toolbar': false,
	'wysiwyg menubar': true,
	'wysiwyg skin': 'lightgray',
	'wysiwyg additional buttons': ' visualchars,'
	+ ' charmap ltr rtl pagebreak paste, forecolor backcolor,'
	+' emoticons media, preview print ',
	'wysiwyg additional plugins': 'preview, textcolor, wordcount',


});
/**
 * app.use(session({
    secret: config.sessionSecret,
    store: new MongoStore({
        url: config.db[0],
        autoReconnect: true

    }),
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: config.sessionMaxAge

    }

}));
 */
// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable

});

// Load your project's Routes

keystone.set('routes', require('./routes'));


// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7'
		}
	}
});

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

keystone.set('email rules', [{
	find: '/images/',
	replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/images/' : 'http://localhost:3000/images/'
}, {
	find: '/keystone/',
	replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/keystone/' : 'http://localhost:3000/keystone/'
}]);

// Load your project's email test routes

keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'轮播图': 'sliders',
	'卡片': 'cards',
	'达人': 'talents',
	'达人描述': 'texts',
	'新闻': 'news',
	'达人申请': 'applies'
});

// Configure cloudinary
keystone.set('cloudinary config', { cloud_name: 'iyuanzi', api_key: '631835838924633', api_secret: 'XgDOSWb4uKTZ5X_u5Mzu7biRer0' });

// 可选，会用'keystone_'作为所有内置标签的前缀
//keystone.set('cloudinary prefix', 'keystone');

// 可选，会用[{prefix}]/{list.path}/{field.path}/ 作为每个图片的public_id的前缀
keystone.set('cloudinary folders', true);

// Start Keystone to connect to your database and initialise the web server

keystone.start();
