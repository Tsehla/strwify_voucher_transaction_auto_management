files here are linked to their html in [ html/ ] folder, some are for the trabsaction app [ [ html/transation.html ] some are for the hotspot app [ html/hotspot_ ... ], its not necessary to touch them, but you may be interested in [ images/ ] and [home_page_contents ] folder here, and its html file in [ html/home_page_html/index.html ] as this you may not be able to customize them within the app.

>>>transaction app files

	[ index.js ] controls behaviour of [ html/transation.html ] and provide/handles navigation, everything you can do on the front end is handled by this app, the backend is handled by [ routes/index.js].
	[ index.css ] provide styling for  [ html/transation.html ]
	[ papaparse.min.js ] reads csv file contents for voucher codes to be uploaded
	[ vouchers default format.csv ] example voucher codes file with minimum required field for upload
	[ vouchers radiusdesk format.csv ] example voucher code file produced by radiusdesk [ https://www.radiusdesk.com/ ] when exporting codes 


>>>hotspot app files	
	[ md5.js , qs.js ] used by mikrotik to solve http-chap challenge, when http-chap login is enabled. currently login from app hotspot does not support http-chap as i have to use form and post method to point mikrotik to external hotspot and not use url like i do at the moment