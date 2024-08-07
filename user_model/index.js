
var keystone = require('keystone');
var types= keystone.Field.Types;


//admin models
var serveradmin = 'server admin';

var server_admin_model = new keystone.List(serveradmin);

server_admin_model.add({
    name : {type : String, required : true, initial : true, default : 'admin', label : 'Name'},
	email : {type : types.Email, required : true, initial : true, unique : true, default : 'user@abcd.co.za', label : 'Email'},
	password : {type : types.Password, required : true, initial : false, default : 'qwerty', label : 'Password', unique:true},
    idnumber : {type : Number, required:true, default:1111111111111, unique:true, label :'ID Number'},
    contact : {type : types.TextArray, required:true, default:['1111111111'], unique:true, label :'Contact Number(s)'},
    
});



server_admin_model.schema.virtual('canAccessKeystone').get(function(){return true});

server_admin_model.register();
//===================================================
//seller model//distributor model
//==================================================
var seller_distributor = 'seller distributor';

var seller_distributor_model = new keystone.List(seller_distributor);

seller_distributor_model.add({
    name: {type :String, initial:true, required:true },
    surname : {type :String, initial:true, required:true },
    //idnumber : {type : Number, initial:true, required:true, label :'ID Number'},
    idnumber : {type : Number, label :'ID Number'},
   // contact : {type : types.TextArray, initial:true, required:true, label :'Contact Number(s)'},
    contact : {type : types.TextArray, label :'Contact Number(s)'},
   // address :{type :types.Textarea, initial:true, required:true, label :'Living address' },
    address :{type :types.Textarea, label :'Living address' },
    //city :{type :String, initial:true, required:true, label :'City' },
    city :{type :String, label :'City' },
    //province :{type :String, initial:true, required:true, label :'Province' },
    province :{type :String, label :'Province' },
    //password : {type: String, required:true, initial:true, label :'Password'},
    password : {type: String, label :'Password'},
    email : {type : types.Email, label :'Email (optional)'},
    //credits : {type : Number, initial:true, required:true, default:0, label :'Credit Amount'},
    credits : {type : Number, default:0, label :'Credit Amount'},
    //usertype : {type :types.Select, options :'Seller, Distributor, Server admin, Buyer', initial:true, required:true, default :'Seller', label :'Type of User' }
    usertype : {type :types.Select, options :'Seller, Distributor, Server Admin, Buyer', default :'Seller', label :'Type of User' },
	added_customers_partners : {type : types.TextArray, label :'My Customers/Partners',},//customers invited to system//{'name':'tsehla','type_of_user':'seller','id_no':'1111111111111'}
	
	manage_router : {type : types.Boolean, default:false, label :'Allow Managed Router'}, //allow menu for user to configure routers they own
	manage_router_printable_vouchers : {type : types.Boolean, default:true, label :'Allow Printable voucher on managed routers'}, //allow seller/admin printable vouchers for hotspot managed
	manage_router_printable_vouchers_templates :  {type :types.Select, options :'Primary, All', default :'Primary', label :'Printable voucher templates' },//printable voucher design templates
	manage_router_no_charge_voucher_sell : {type : types.Boolean, default:true, label :'Allow Managed Router no-charge voucher sell'}, 
	manage_router_hotspots : {type : types.TextArray, label :'Routers hotspots managed', default : []},//location names of hotspot managed

	account_recharge_bonus : {type : types.TextArray, label :'Account recharge bonus', default : ["{'Router Manager':'75%'}","{Seller:'25%'}", "{Distributor:'12%'}", "{'Server Admin':'0%'}", "{Buyer:'0%'}"]},//will add auto bonus on account recharge depending on [ usertype ] selected above, if [ manage_router ] is set to true, then 'Router Manager" recharge value will be used.//for streetwifiy router managers are those who only use out wifiy transact software and provide their own internet connection to router we provided

	transactionhistory : {type : types.TextArray, label :'Transactions'},//keep record of all transactions on account

	allow_account_hotspots_ads : {type :types.Boolean, default:true, label :'Allow account to show ads on hotspots' },
	max_ads_slots_per_hotspots_allowed : {type : Number, default:3, label :'Total ads slots per hotspot for account allowed'},
	hotspots_managed : {type : types.TextArray, label :'Hotspots assigned', default : []},//{hotspot_name : '',hotspot_db_id : '', limited_ads_spots: true,total_ads_spots : 1, data_added_by_user_id : '',data_added_by_user_name : '',ads_dont_randomize :false},hotspots managed
	ads_slots_hotspot_wallpaper : {type : types.TextArray, default:['{"image_link" :"/default_slide_images/1.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/1.jpg", "ads_sponsored" : true, "hidden" : false, expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : ""}','{"image_link" :"/default_slide_images/2.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/2.jpg", "ads_sponsored ": true, "hidden" : false, expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : "",ads_dont_randomize :true ,this_ads_unsuitable_report_count : 0}'], label :'Wallpaper history data' },//[ ads_dont_randomize :true ], if link should be given position randomly if hotspot is set to random give ads position, if not, the link will display of be pushed first of the line. [,this_ads_unsuitable_report_count : 0 ] if ads has been tagged 100  or 50 times as unsuitable, the ads will nolonger be shown, 


});


seller_distributor_model.register();

//---------------------------------------------------------
    
//vouchers model
//----------------------------------------------------------
var voucher_code = 'Voucher Codes';
var voucher_model = new keystone.List(voucher_code);

voucher_model.add(
    
    {
		vouchercode : {type:String, unique:false, initial:true, required:true, default:'N/A', label :'Voucher Code'},
		voucher_username : {type: String, default:'N/A', label :'Voucher User Name'},
		voucher_password : {type: String, default:'N/A', label :'Voucher User Password'},
		voucheramount : {type:Number, initial:true, required:true, default:0.00, label :'Voucher Cost'},
		voucher_complimentary : {type : types.Boolean, default:false, label :'Voucher Complimentary'},
		voucher_hospitality_menu : {type : types.Boolean, default:false, label :'Sold by resturant/similar'},
		voucherprofile : {type:String, initial:true, required:true, default:'N/A', label :'Voucher Data'},
		voucherprofile_time : {type:String, initial:true, required:true, default:'N/A', label :'Voucher Time'},
		voucherexpiry : {type:String, initial:true, required:true, default:'N/A', label :'Voucher Expiery Date'},
		voucherstate : {type : types.Select, options: "used, new", default:'new', label :'Voucher State'},
		voucher_created : {type : types.Select, options: "manual, automatic", default:'manual', label :'Voucher creation method'},
		soldby : {type : String, label :'Sold By'},
		soldto : {type: String, default:'', label :'Sold To'},
		voucher_soldto_device_mac : {type: String, default:'', label :'Sold To Device Mac'},
		loadedby : {type: String, default:'', label :'Added by'},
		voucherprinted : {type : types.Boolean, default:false, label :'Voucher Printed'},
		voucherproducedday : {type: String, default:'', label :'Voucher Produced Day'},
	}

);

voucher_model.register();

//---------------------------------------------------------
    
//Complemenatry voucher tracker

//----------------------------------------------------------
//complementary vouchers are voucher which radius limit the device onnected using the user account per day by device Mac 
//unlike disposable vouchers they use same account username and or password for every device that conects, so for this system i needed to track them mainly for accounting pourpose as the radius is used then  [ 'RadiusDesk' ] would track the usage and reject users that have used their slot for the day or time
//Think of it as keeping record of trial like users, but unlike trials the vouchers are charged on seller account as some resturant wanted to give out complementary ticket once per day to whom ever bought item xyz,
//The complementary of main voucher [ checkbox ] only mark to differentitate the voucher as complimentary voucher and not single use or disposable voucher

var complementary_voucher_track = 'Complementary Voucher';
var complementary_voucher_track_model = new keystone.List(complementary_voucher_track);

//time or date
var date = new Date();


complementary_voucher_track_model.add(
    
    {	
		vouchercode : {type:String, unique:false, initial:true, required:true, default:'N/A', label :'Voucher Code'},
		voucher_username : {type: String, default:'N/A', label :'Voucher User Name'},
		voucher_password : {type: String, default:'N/A', label :'Voucher User Password'},
		voucheramount : {type:Number, initial:true, required:true, default:0.00, label :'Voucher Cost'},
		voucherprofile : {type:String, initial:true, required:true, default:'N/A', label :'Voucher Data'},
		voucherprofile_time : {type:String, initial:true, required:true, default:'N/A', label :'Voucher Time'},
		voucherexpiry : {type:String, initial:true, required:true, default:'N/A', label :'Voucher Expiery Date'},
		soldby : {type : String, label :'Sold By'},
		soldto : {type: String, default:'', label :'Sold To'},
		loadedby : {type: String, default:'System', label :'Added by'},
		voucherprinted : {type : types.Boolean, default:false, label :'Voucher Printed'},
		voucherproducedday : {type: String, default:'', label :'Voucher Produced Day'},
		voucherproducedmonth : {type: String, default:date.getMonth(), label :'Voucher Produced Month'},
		voucherproducedyear : {type: String, default:date.getFullYear(), label :'Voucher Produced Year'},
		voucherproducedhour : {type: String, default:date.getHours(), label :'Voucher Produced Hour'},
		voucherproducedminute: {type: String, default:date.getMinutes(), label :'Voucher Produced Minute'},
		complementary_voucher_reject : {type : types.Boolean, default:false, label :'Voucher Complimentary rejected'},
		complementary_soldto_device_mac : {type: String, default:'', label :'Device Mac'},
		
	} 
);

complementary_voucher_track_model.register();



//---------------------------------------------------------
    
//Router monitoring

//----------------------------------------------------------

var router_monitoring = 'Router Monitoring';
var router_model = new keystone.List(router_monitoring);

router_model.add(
    
    {
		routername: {type :String ,label :'Router name'},
		routerlocation: {type :types.Textarea, label :'Router location',default:'N/A' },
		routerdetails: {type :types.Textarea, label :'Router details',default:'N/A' },
		routermute: {type :types.Boolean, default:false, label :'Router mute' },
		routermute_by: {type :String, label :'Router muted by' },
		
		//used to log details to be used for up/down conclusion
		// hour will be subtracted from stored by last contact current from current node schedule function and it should retun zero;
		//stored minutes as above will be deducted from from schedule function current minutes and it should return 30 min or less;
		//from twelve mignight to one morning there wont be checks//kinda resset time thingy
		
		//if issuer alert will sent to all user with [super-admin] status
		
		router_last_contact_hour :{type : types.Number, label :'Last contact hour'}, 
		router_last_contact_minute :{type : types.Number, label :'Last contact minute'}, 
		router_last_contact_day :{type : types.Number, label :'Last contact day'},
		
		router_last_ip :{type : String, label :'Last contact IP addresses'}, 
		
		router_last_contact_date_time_history :{type : types.TextArray, label :'Router contact history'}, //add date as array for 30 addings//lol
    
       
});





router_model.register();

//---------------------------------------------------------
    
//Router hotspot page contents

//----------------------------------------------------------

var router_hotspot_page = 'Router hotspot page';
var router_hotspot_page_model = new keystone.List(router_hotspot_page);

router_hotspot_page_model .add({

	//mikrotik router details
	router_location : {type :String, initial:true, required:true, default:'default', label : 'Router location' },
	router_id : {type :String, default:'Happy surfing !!! ;-)', label : 'Router hotspot identification name' },

	//voucher data creation config for sellers and voucher templates
	hotspot_voucher_template_link : {type :String, default:'images/uploads/ads/16-5-53PM,%203-8-2020%20streetwifiy_ticket_template.jpg', label : 'Hotspot voucher image template link' },
	allow_hotspot_all_location_marked_vouchers : {type :types.Boolean, default:true, label :'Show location unrestricted vouchers' },
	
	//ads wallpapers and advertisements
	hotspot_wallpaper : {type : types.TextArray, default:['{"image_link" :"/default_slide_images/1.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/1.jpg", "ads_sponsored" : true, "hidden" : false, expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : ""}','{"image_link" :"/default_slide_images/2.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/2.jpg", "ads_sponsored ": true, "hidden" : false, expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : ""}','{"image_link" :"/default_slide_images/3.jpg" , "image_status_text" : "Image 3", "image_status_link": "/default_slide_images/3.jpg", "ads_sponsored" : false, "hidden" : false, expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : ""}','{"image_link" :"/default_slide_images/4.jpg" , "image_status_text" : "Image 4", "image_status_link": "/default_slide_images/4.jpg", "ads_sponsored" : false, "hidden" : false, expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : ""}','{"image_link" :"/default_slide_images/5.jpg" , "image_status_text" : "Image 5", "image_status_link": "/default_slide_images/5.jpg", "ads_sponsored" : false, "hidden" : false, expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : ""}','{"image_link" :"/default_slide_images/6.jpg" , "image_status_text" : "Image 6", "image_status_link": "/default_slide_images/6.jpg", "ads_sponsored" : false, "hidden" : true, expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : ""}','{"image_link" :"/default_slide_images/7.jpg" , "image_status_text" : "Image 7", "image_status_link": "/default_slide_images/7.jpg", "ads_sponsored" : false, "hidden" : true,expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : ""}','{"image_link" :"/default_slide_images/8.jpg" , "image_status_text" : "Image 8", "image_status_link": "/default_slide_images/8.jpg", "ads_sponsored" : false, "hidden" : true, expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : ""}','{"image_link" :"/default_slide_images/9.jpg" , "image_status_text" : "Image 9", "image_status_link": "/default_slide_images/9.jpg", "ads_sponsored" : false, "hidden" : true, expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : ""}','{"image_link" :"/default_slide_images/10.jpg" , "image_status_text" : "Image 10", "image_status_link": "/default_slide_images/10.jpg", "ads_sponsored" : true, "hidden" : true, expire : false, expire_day : 1,expire_month : 1,expire_year : 2020,created_by_account_id : ""}'], label :'Wallpaper data' },
	hotspots_max_ads_spots  : {type : Number, label :'Hotspot max advertisements slots', default: 30,},//total adverments slots allowed on hotspot//new ads wont be allowed if this filled
	allow_forced_advertisement_scrolling : {type :types.Boolean, default:false, label :'Force advertisement scrolling' },
	forced_advertisement_scrolling_exit_number  : {type : String, label :'Advertisement show skip on scroll number', default: 10,},
	forced_advertisement_skip_to_login : {type :types.Boolean, default:true, label :'Forced advertisement skip to login menu button' },
	forced_ads_continious_scroll_on : {type :types.Boolean, default:false, label :'Forced advertisement continious ads scrolling' },
	ads_position_randomization  : {type : String, label :'allow ads randomization', default :'{ads_randomization : false, not_to_randomize_ads_give_position : front}'}, //[ not_to_randomize_ads_give_position : front ]/ not_to_randomize_ads_give_position : back ]//if front, the ads will be un-shifted() to front of row after randomization of link display position, if back then push() will be used, front ensures ads will be seen allways due to ability to skip forced ads at certain point unless disabled


	//wallpapers en login ui
	ads_ui_type : {type : types.Select, options: "appearance_1,appearance_2,dark_neumorph_skin", default:'appearance_1', label :'Ads Menu layout'},
	ads_ui_layout_wallpaper : {type : String, label :'Layout menu advertisement wallpaper number', default: 0,},
	ads_download_watermark : {type :types.Boolean, default:true, label :'Ads download watermark' },
	ads_download_watermark_text : {type :String, default:'StreeWifiy : Advertisement, Paid & Free WiFi', label : 'Ads watermark text' },
	menu_fallback_wallpaper : {type :types.Select, options:"images/ads_layout_default_wallpaper.jpg,images/HD-wallpaper-wifi-technology.jpg", default: "images/ads_layout_default_wallpaper.jpg",label : 'Menu fallback wallpaper' },
	menu_fallback_wallpaper_text : {type :String, default:'View image', label : 'Menu fallback wallpaper text' },
	status_ads_ui_type : {type : types.Select, options: "classic,dark_neumorph_status_skin", default:'classic', label :'Status Ads layout'},
	
	//extra stuff
	free_education_sites : {type : types.TextArray, label :'Free Education sites', default:['{"link":"https://scholar.google.co.za/", "text":"Google scholar"}','{"link":"https://www.google.com","text":"Search on google"}']},
	free_jobs_sites : {type : types.TextArray, label :'Free Jobs Sites',default:['{"link":"https://www.google.com","text":"Search on google"}'],},
	hotspot_announcements : {type : types.TextArray, label :'Hotspot Announcements', default: ['Dare to be different','Dare to write your destiny.',"<a href='http://www.google.com'>Click to go to Google</a>","To search the internet click <a href='http://www.google.com'>google</a> then type your query","<a href='http://www.google.com'>Google search</a>, <a href='http://scholar.google.com'>Google scholar</a>"],},
	
	//free login and free login vouchers configs
	free_data_allow: {type :types.Boolean, default:false, label :'Allow radius authenticated free data login' },
	mikrotik_allow_trial_login : {type :types.Boolean, default:false, label :'Allow mikrotik authenticated trial user login' },
	mikrotik_trial_user_data_limit : {type :String, default:'5 MB', label : 'Mikrotik trial user data limit' },
	mikrotik_trial_user_data_expiery : {type : types.Select, options: "1 Minutes,5 Minutes,10 Minutes,15 Minutes,20 Minutes,30 Minutes,45 Minutes,50 Minutes,1 Hour,1:30 Hours,2 Hours,3 Hours,4 Hours,5 Hours,6 Hours,7 Hours,8 Hours,9 Hours,10 Hours,11 Hours,12 Hours,24 Hours,2 Days,3 Days,4 Days,5 Days,6 Days,7 Days,2 Weeks,3 Weeks,1 Month,2 Month,3 Months,4 Months,5 Months", default:'24 Hours', label :'Mikrotik trial user data expiery'},
	
	//inspiration text and notigication
	hotspot_how_to_bottom_text : {type : String, label :'Hotspot Howto bottom text', default: 'Help yourself, To be helped.',},
	hotspot_free_sites_bottom_text : {type : String, label :'Hotspot Free sites bottom text', default: 'Pass it on, unconditionally help a stranger, a friend, a family member.',},
	notification_bottom_text : {type : String, label :'Hotspot notification bottom text', default: 'If it was easy, no one would care. If it was impossible, no one would dare.',},
	
	//help and help media
	hotspot_how_to_buy : {type : String, label :'Hotspot How to buy image', default: '/default_slide_images/1.jpg',},
	hotspot_how_to_sell : {type : String, label :'Hotspot How to sell image', default: '/default_slide_images/2.jpg',},
	hotspot_how_to_recharge_seller : {type : String, label :'Hotspot How to recharge-seller image', default: '/default_slide_images/3.jpg',},
	hotspot_how_to_super_admin: {type : String, label :'Hotspot How to Super-admin image', default: '/default_slide_images/4.jpg',},

	//auto voucher creation wifi radius //works with only ::: https://github.com/Tsehla/nodejs_radius_server
	use_external_radius_user_creation: {type :types.Boolean, default:false, label :'Enable Wifi-Radius auto user creation?' },
	external_radius_user_creation_link: {type : String, label :'Link to Wifi-radius server.', default: 'Works only with wifi-radius see (https://github.com/Tsehla/nodejs_radius_server) example : http://127.0.0.1:8080'},

	//system maintenance alerts to user
	system_maintenace : {type : types.Select, options: "functional, maintenance, repair, upgrade", default:'functional', label :'System state'},
	
	//hotspots logo en hotspot managers
	hotspot_logo : {type : String, label :'Hotspot Logo', default: '/images/logo.png',},
	hotspot_manager : {type : types.TextArray, label :'hotspot Managers', default : ['8905135800000']},

	hotspot_allow_user_ads : {type :types.Boolean, default:false, label :'allow user made ads' },
	ads_create_edit_costs : {type : String, label :'Hotspot How to buy image', default: '{"ads_edit_cost" : 50, "ads_create_costs" : 100}',},//to edit its half price of creating new ads
	
	//show contact details button
	contact_details_button : {type :types.Boolean, default:true, label :'Login/logout/status menu - Show contact details button' },

});

router_hotspot_page_model.register();


//---------------------------------------------------------
    
// expired ads removed history
//----------------------------------------------------------
var ads_removed = 'expired ads history';
var ads_removed_model = new keystone.List(ads_removed);

ads_removed_model.add(
    
    {
		hotspot_location : {type: String, default:'', label :'hotspot location'}, //hotspot location
		hotspot_location_id : {type: String, default:'', label :'hotspot location ID'}, //hotspot location db id
		removed_ads : { type: types.TextArray, label :'Removed Advertisments' }, //removed ads array
		time_stamp : { type: String, default:'', label :'Advertisment removal time' }//time ads removed
	}

);

ads_removed_model.register();


//---------------------------------------------------------
    
//messages model
//----------------------------------------------------------
var messages = 'Messaging';
var messages_model = new keystone.List(messages);

messages_model.add(
    
    {
	message_initiator_id : {type:String, initial:true, default:'', label :'Message From ID no'},
	message_initiator_names : {type:String, initial:true, default:'', label :'Message From Name'},
	message_initiator_usertype : {type :types.Select, options :'Seller, Distributor, Server Admin, Buyer', label :'Message From userType' },
	message_parcitipant_id : {type:String, initial:true, default:'', label :'Message To ID'},
	message_parcitipant_names : {type:String, initial:true, default:'', label :'Message To Name'},
	message_parcitipant_usertype : {type :types.Select, options :'Seller, Distributor, Server Admin, Buyer', label :'Message To userType' },
	from_delete : {type :types.Boolean, default:false, label :'From delete requested?' },//if true, message will no appear when creater check inbox messages 
	to_delete : {type :types.Boolean, default:false, label :'To delete requested?' },//if true, message will no appear when participant check inbox messages 
	new_message_initiator : {type :types.Boolean, default:false, label :'New message for initiator!' },//new message for initiator//if true alert will appear
	new_message_participator : {type :types.Boolean, default:false, label :'New message for participator!' },//new message for participator//if true alert will appear
	last_updated_month :{type:String, default:'', label :'Last updated Month'},//last time this doc was updated//on third month message will be deleted//or when both [from_delete & to delete are true]
	last_updated_date :{type:String, default:'', label :'Last content updated Date'},//last time content was edited//used for sorting and fron end
	messages_array: {type : types.TextArray, label :'Messages', default:['{"from":"Tsehla:,"message":"Hello, Welcome, Please read Help , to know how the system works!.","date":"13:20am Tuesday 09 May 2019"}','{"from":"Tsehla:,"message":"Hello, Enjoy !!!","date":"01:20am Monday 08 May 2019"}']},
 
       
	}

);

messages_model.register();

//---------------------------------------------------------
    
//vouchers on sale model/voucher tracker
//----------------------------------------------------------
var voucher_track = 'Voucher Types';
var voucher_track_model = new keystone.List(voucher_track);

voucher_track_model.add(
    
    {
		voucher_type : {type : types.Select, options: "time, data", default:'data', label :'Voucher Type', initial:true},
		voucher_cost : {type:String, default:'', label :'Voucher cost'},
		voucher_profile : {type:String, default:'', label :'Voucher Time/Data'},
		radius_server_voucher_profile : {type:String, default:'N/A', label :'wifi Radius auto data profile'},
		wifi_radius_auto_voucher_details : {type:String, default:'N/A', label :'wifi Radius auto voucher details'},
		voucher_count: {type:String, default:'', label :'Available Vouchers'},
		voucher_creation_method : {type : types.Select, options: "manual, automatic", default:'manual', label :'For vouchers created'},
		voucher_active : {type :types.Boolean, default:true, label :'Active' },
		voucher_authorized_location : {type : types.TextArray, label :'Voucher Allow Location', default : ['All']},
		

	}

);

voucher_track_model.register();

//---------------------------------------------------------
    
// important system/code errors catchers
//----------------------------------------------------------
var error_catcher = 'system error catcher';
var error_catcher_model = new keystone.List(error_catcher);

error_catcher_model.add(
    
    {
		error_details : {type: String, default:'', label :'Error data'}, //error data
		time_stamp : { type: String, default:'', label :'Error data capture time' }
	}

);

error_catcher_model.register();


//---------------------------------------------------------
    
// email sent storage
//----------------------------------------------------------
var email_catcher = 'system email catcher';
var email_catcher_model = new keystone.List(email_catcher);

email_catcher_model.add(
    
    {
		email_type : {type :types.Select, options :'Generic,System', default :'Generic', label :'Message notifier' },
		email_details : {type: String, default:'', label :'Email message'}, //error data
		time_stamp : { type: String, default:'', label :'Message capture time' }
	}

);

email_catcher_model.register();



//---------------------------------------------------------
    
// general app details
//----------------------------------------------------------
var general_system_data = 'system general data';
var general_system_data_model = new keystone.List(general_system_data);

general_system_data_model.add(
    
    {

		//contacts data
		//---call number
		phone_call_numbers : {type : types.TextArray, label :'', default : ['N/a']},
		//whatsapp number
		whatsapp_numbers : {type : types.TextArray, label :'', default : ['N/a']},
		//facebook
		facebook_links : {type : types.TextArray, label :'', default : ['N/a']},
		//twitter
		twitter_links : {type : types.TextArray, label :'', default : ['N/a']},
		//instagram
		instagram_links : {type : types.TextArray, label :'', default : ['N/a']},
		//email
		contacts_emails : {type : types.TextArray, label :'', default : ['N/a']},

		//adress
		address_details : { type: types.TextArray, default:['01 sibeko street, Stretford Orange Farm, 1841'], label :'Address details' },

		//banking
		banking_details : { type: types.TextArray, default:['{bank_name:"Capitec",branch_name:"Orange Farm",account_type:"Savings",account_number:"N/a",payment_link:"",payment_qr_code:"",show_payment:true}'], label :'Banking details' },
		
		//banking referenace prefix
		banking_refrence_prefix: { type: String, default:'wifi-', label :'Banking referance prefix'},//this is to help autoamated account recharge checker program, i.e if message recived fro bank has a refereance with specif prefix meant to refer to certain program if many program checks same inbox for eft messages

		//new user password
		new_user_temporary_password : { type: String, default:'street wifiy', label :'New user temporary password' },

		//allow new user auto registration
		new_user_self_auto_regitrations : {type :types.Boolean, default:true, label :'New users accounts self registration' },

		//branding/website name
		website_name_branding: { type: String, default:'StreetWiFiy', label :'Site name/branding' },

		
		//show contact details button
		contact_details_button : {type :types.Boolean, default:true, label :'Transaction menu - Show contact details button' },


	}

);

general_system_data_model.register();










