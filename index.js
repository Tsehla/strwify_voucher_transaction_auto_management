//ENV VARIABLES
require('dotenv').config();

var keyst = require('keystone');
var port = process.env.PORT || 4100;//for local and heroku compartible

keyst.init({
    'cookie secret' : 'gshdjhbdhdjsdhckwndioenw8739n873bd782wdhxbn7ydh7283hd7',
    'auth' : true,
    'auto update' : true,
    'static' : ['./static'],
    'user model' : 'server admin'
});

keyst.import('./routes');
keyst.import('./user_model');
keyst.set('port', port);

keyst.start();
