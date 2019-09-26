this folder contains html's,

Site non app part >
	folder [ home_page_html ] :: contains html page for site contents, 
 

Site app part >
	[ transaction.html ] :: main app menu contents\ buy | sell | transact : link http://www.mysite.co.za//transaction/ : site don't support [ https ]
	[ hotspot_login.html ] :: Login menu shown, when connected from hotspot : http://mysite.co.za/hotspot OR http://mysite.co.za/hotspot?login=true
	[ hotspot_logout.html ] :: Logout menu shown, when logout clicked : http://mysite.co.za/hotspot_status?status=true
	[ hotspot_status.html ] :: status menu shown, : http://mysite.co.za/hotspot_logout?logout=true

To have this hotspot feature working you have copy [ hotspot_login_page ] contents to mikrotik router and replace the default contents with copied.


Issues,
	this app doesnt support https in url so please use http for the moment, 
	also http-chap is not supported at the moment for log in, please use http-pap
	this app is built to use radiusdesk [ https://www.radiusdesk.com/ ] and voucher import is based on [ csv ] format produced by radiusdesk when exporting voucher 
	 
