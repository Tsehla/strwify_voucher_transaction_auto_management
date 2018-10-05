var keyst = require('keystone');

keyst.init({
    'cookie secret' : 'gshdjhbdhdjsdhckwndioenw8739n873bd782wdhxbn7ydh7283hd7',
    'auth' : true,
    'auto update' : true,
    'static' : ['./static'],
    'user model' : 'server admin'
});

keyst.import('./routes');
keyst.import('./user_model');
keyst.set('port', 4100);

keyst.start();