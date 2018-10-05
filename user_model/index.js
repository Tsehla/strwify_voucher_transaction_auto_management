
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
    idnumber : {type : Number, initial:true, required:true, label :'ID Number'},
    contact : {type : types.TextArray, initial:true, required:true, label :'Contact Number(s)'},
    address :{type :types.Textarea, initial:true, required:true, label :'Living address' },
    city :{type :String, initial:true, required:true, label :'City' },
    province :{type :String, initial:true, required:true, label :'Province' },
    password : {type: String, required:true, initial:true, label :'Password'},
    email : {type : types.Email, label :'Email (optional)'},
    credits : {type : Number, initial:true, required:true, default:0, label :'Credit Amount'},
    usertype : {type :types.Select, options :'Seller, Distributor, Server admin, Buyer', initial:true, required:true, default :'Seller', label :'Type of User' }
    
    
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
    voucheramount : {type:Number, initial:true, required:true, default:1, label :'Voucher Cost'},
    voucherstate : {type : types.Select, options: "used, new", default:'new', label :'Voucher State'},
    soldby : {type : String, label :'Sold By'},
    soldto : {type: String, deafault:'', label :'Sold To'},
    
       
}

);

voucher_model.register();


