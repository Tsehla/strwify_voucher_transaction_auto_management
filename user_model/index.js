
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


