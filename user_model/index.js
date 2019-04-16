
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
	transactionhistory : {type : types.TextArray, label :'Transactions'},//keep record of all transactions on account
	manage_router : {type : types.Boolean, default:false, label :'Manage Router?'},
    
    
});


seller_distributor_model.register();

//---------------------------------------------------------
    
//vouchers model
//----------------------------------------------------------
var voucher_code = 'Voucher Codes';
var voucher_model = new keystone.List(voucher_code);

voucher_model.add(
    
    {
    vouchercode : {type:String, unique:true, initial:true, required:true, default:'xxxxxx', label :'Voucher Code'},
    voucheramount : {type:Number, initial:true, required:true, default:0.00, label :'Voucher Cost'},
	voucherprofile : {type:String, initial:true, required:true, default:'N/A', label :'Voucher Data'},
	voucherexpiry : {type:String, initial:true, required:true, default:'N/A', label :'Voucher Expiery Date'},
    voucherstate : {type : types.Select, options: "used, new", default:'new', label :'Voucher State'},
    soldby : {type : String, label :'Sold By'},
    soldto : {type: String, default:'', label :'Sold To'},
    loadedby : {type: String, default:'', label :'Added by'},
    voucherprinted : {type : types.Boolean, default:false, label :'Voucher Printed'},
	voucherproducedday : {type: String, default:'', label :'Voucher Produced Day'},
    
       
}

);

voucher_model.register();
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
	hotspot_wallpaper : {type : types.TextArray, initial:true,required:true, default:['{image_link :"static/default_slide_images/1.jpg" , image_status_text : "Image 1", image_status_link: "static/default_slide_images/1.jpg"}','{image_link :"static/default_slide_images/2.jpg" , image_status_text : "Image 2", image_status_link: "static/default_slide_images/2.jpg"}','{image_link :"static/default_slide_images/3.jpg" , image_status_text : "Image 3", image_status_link: "static/default_slide_images/3.jpg"}','{image_link :"static/default_slide_images/4.jpg" , image_status_text : "Image 4", image_status_link: "static/default_slide_images/4.jpg"}','{image_link :"static/default_slide_images/5.jpg" , image_status_text : "Image 5", image_status_link: "static/default_slide_images/5.jpg"}','{image_link :"static/default_slide_images/6.jpg" , image_status_text : "Image 6", image_status_link: "static/default_slide_images/6.jpg"}','{image_link :"static/default_slide_images/7.jpg" , image_status_text : "Image 7", image_status_link: "static/default_slide_images/7.jpg"}','{image_link :"static/default_slide_images/8.jpg" , image_status_text : "Image 8", image_status_link: "static/default_slide_images/8.jpg"}','{image_link :"static/default_slide_images/9.jpg" , image_status_text : "Image 9", image_status_link: "static/default_slide_images/9.jpg"}','{image_link :"static/default_slide_images/10.jpg" , image_status_text : "Image 10", image_status_link: "static/default_slide_images/10.jpg"}'], label :'Wallpaper data' },
        
	free_education_sites : {type : types.TextArray, label :'Free Education sites', default:['{link:"https://scholar.google.co.za/", text:"Google scholar"}','{link:"https://www.google.com",text:"Search on google"}'],initial:true,required:true,},
	free_jobs_sites : {type : types.TextArray, label :'Free Jobs Sites',default:['{link:"https://www.google.com",text:"Search on google"}'],initial:true,required:true,},
	hotspot_announcements : {type : types.TextArray, label :'Hotspot Announcements', default: ['Dare to be diffrents','Dare to write your destiny'],initial:true,required:true,},
	hotspot_logo : {type : String, label :'Hotspot Logo', default: 'static/images/logo.png',initial:true,required:true,},
	hotspot_manager : {type : types.TextArray, label :'hotspot Managers'},
});

router_hotspot_page_model.register();















