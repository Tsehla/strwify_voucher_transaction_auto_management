this are for hotspot and transaction app,

hotspot files 
	[ black-wood.jpg ] acts as wallpaper for voucher enter menu/popup
	[ logo small.png / logo.png ] logo images
	[ voucher template.png ] used for help


transaction app files
	[ buyer.svg ]
	[ distributor.svg ]
	[ seller.svg ]
	[ ticket.jpg ] used as template for ticket printing, to change printed contents edit find [  voucher_print(response) ] function in [ static/index.js ]
	
	[ voucher_csv_example ] show required field on csv that contain voucher code to be uploaded on the system, this are used when printing tickets
		[ vouchers default format.csv, vouchers radiusdesk format.csv ] in [ static/ ], those shows csv examples, the first contains minimum required fields, the other is a format produced by radiusdesk [ https://www.radiusdesk.com/ ] voucher export.
