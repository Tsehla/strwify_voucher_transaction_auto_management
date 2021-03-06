
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
	router_location : {type :String, initial:true, required:true, default:'default', label : 'Router location' },
	router_id : {type :String, default:'Happy surfing !!! ;-)', label : 'Router hotspot identification name' },
	hotspot_voucher_template_link : {type :String, default:'images/uploads/ads/16-5-53PM,%203-8-2020%20streetwifiy_ticket_template.jpg', label : 'Hotspot voucher image template link' },
	allow_hotspot_all_location_marked_vouchers : {type :types.Boolean, default:true, label :'Show location unrestricted vouchers' },
	
	hotspot_wallpaper : {type : types.TextArray, default:['{"image_link" :"/default_slide_images/1.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/1.jpg", "ads_sponsored" : true, "hidden" : false}','{"image_link" :"/default_slide_images/2.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/2.jpg", "ads_sponsored ": true, "hidden" : false}','{"image_link" :"/default_slide_images/3.jpg" , "image_status_text" : "Image 3", "image_status_link": "/default_slide_images/3.jpg", "ads_sponsored" : false, "hidden" : false}','{"image_link" :"/default_slide_images/4.jpg" , "image_status_text" : "Image 4", "image_status_link": "/default_slide_images/4.jpg", "ads_sponsored" : false, "hidden" : false}','{"image_link" :"/default_slide_images/5.jpg" , "image_status_text" : "Image 5", "image_status_link": "/default_slide_images/5.jpg", "ads_sponsored" : false, "hidden" : false}','{"image_link" :"/default_slide_images/6.jpg" , "image_status_text" : "Image 6", "image_status_link": "/default_slide_images/6.jpg", "ads_sponsored" : false, "hidden" : true}','{"image_link" :"/default_slide_images/7.jpg" , "image_status_text" : "Image 7", "image_status_link": "/default_slide_images/7.jpg", "ads_sponsored" : false, "hidden" : true}','{"image_link" :"/default_slide_images/8.jpg" , "image_status_text" : "Image 8", "image_status_link": "/default_slide_images/8.jpg", "ads_sponsored" : false, "hidden" : true}','{"image_link" :"/default_slide_images/9.jpg" , "image_status_text" : "Image 9", "image_status_link": "/default_slide_images/9.jpg", "ads_sponsored" : false, "hidden" : true}','{"image_link" :"/default_slide_images/10.jpg" , "image_status_text" : "Image 10", "image_status_link": "/default_slide_images/10.jpg", "ads_sponsored" : true, "hidden" : true}'], label :'Wallpaper data' },
	allow_forced_advertisement_scrolling : {type :types.Boolean, default:false, label :'Force advertisement scrolling' },
	forced_advertisement_scrolling_exit_number  : {type : String, label :'Advertisement show skip on scroll number', default: 6,},
	forced_advertisement_skip_to_login : {type :types.Boolean, default:true, label :'Forced advertisement skip to login menu' },


	ads_ui_type : {type : types.Select, options: "appearance_1,appearance_2", default:'appearance_1', label :'Ads Menu layout'},
	ads_ui_layout_wallpaper : {type : String, label :'Layout menu advertisement wallpaper number', default: 0,},
	
	free_education_sites : {type : types.TextArray, label :'Free Education sites', default:['{"link":"https://scholar.google.co.za/", "text":"Google scholar"}','{"link":"https://www.google.com","text":"Search on google"}']},
	free_jobs_sites : {type : types.TextArray, label :'Free Jobs Sites',default:['{"link":"https://www.google.com","text":"Search on google"}'],},
	hotspot_announcements : {type : types.TextArray, label :'Hotspot Announcements', default: ['Dare to be different','Dare to write your destiny.',"<a href='http://www.google.com'>Click to go to Google</a>","To search the internet click <a href='http://www.google.com'>google</a> then type your query","<a href='http://www.google.com'>Google search</a>, <a href='http://scholar.google.com'>Google scholar</a>"],},
	
	free_data_allow: {type :types.Boolean, default:false, label :'Allow radius authenticated free data login' },
	mikrotik_allow_trial_login : {type :types.Boolean, default:false, label :'Allow mikrotik authenticated trial user login' },
	mikrotik_trial_user_data_limit : {type :String, default:'5 MB', label : 'Mikrotik trial user data limit' },
	
	hotspot_how_to_bottom_text : {type : String, label :'Hotspot Howto bottom text', default: 'Help yourself, To be helped.',},
	hotspot_free_sites_bottom_text : {type : String, label :'Hotspot Free sites bottom text', default: 'Pass it on, unconditionally help a stranger, a friend, a family member.',},
	notification_bottom_text : {type : String, label :'Hotspot notification bottom text', default: 'If it was easy, no one would care. If it was impossible, no one would dare.',},
	
	hotspot_how_to_buy : {type : String, label :'Hotspot How to buy image', default: '/default_slide_images/1.jpg',},
	hotspot_how_to_sell : {type : String, label :'Hotspot How to sell image', default: '/default_slide_images/2.jpg',},
	hotspot_how_to_recharge_seller : {type : String, label :'Hotspot How to recharge-seller image', default: '/default_slide_images/3.jpg',},
	hotspot_how_to_super_admin: {type : String, label :'Hotspot How to Super-admin image', default: '/default_slide_images/4.jpg',},

	use_external_radius_user_creation: {type :types.Boolean, default:false, label :'Enable Wifi-Radius auto user creation?' },
	external_radius_user_creation_link: {type : String, label :'Link to Wifi-radius server.', default: 'Works only with wifi-radius see (https://github.com/Tsehla/nodejs_radius_server)'},

	system_maintenace : {type : types.Select, options: "functional, maintenance, repair, upgrade", default:'functional', label :'System state'},
	
	hotspot_logo : {type : String, label :'Hotspot Logo', default: '/images/logo.png',},
	hotspot_manager : {type : types.TextArray, label :'hotspot Managers', default : ['8905135800000']},
});

router_hotspot_page_model.register();


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










