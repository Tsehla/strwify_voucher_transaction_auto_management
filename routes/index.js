var keystone = require('keystone');
var nunjucks = require('nunjucks');
var path = require ('path');//to solve sendFile forbidden error
//var express = require('express');
var secure = require('express-force-https');//force https usages

var fs = require('fs'); //file read

keystone.get('routes', function(app){
   // app.use(express.static('.//'));

  

   app.use(function(req, res, next){  //force secure/[https] if address is local server
	 //console.log(req.hostname)

	 if(req.hostname.search('127.0.0.1') > -1 || req.hostname.search('localhost') > -1){//no match
		console.log('server running on local')	 
	 }

	 else{
		app.use(secure);
	 }
		next();
   });
  
//app.use(secure);

    
   //enable cors 
	app.use(function(req, res, next) { //allow cross origin requests
          res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
          res.header("Access-Control-Allow-Origin", "*");
		  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		  
          next();
		});

   
    //super admin login
    app.get('/admin', function(req, res){
        
        
        
    });

 
    
    
    
    
    
/*======================================================

    seller or distributor login

=======================================================*/
    
    
    //use variable var user=seller or user = distributorD
    
    app.get('/login', function(req, res){
        
        //'http://127.0.0.1:4100/login?usertype=seller&id_number='+id_number;
      
       
        //if error --- return alert error back
        var userType = req.query.usertype.replace('%20', ' ');
        var user_type = userType.replace(userType[0], userType[0].toUpperCase());//turn user type to upper db is case sensitive
        var user_id = req.query.id_number;
		
	//	console.log(userType);
	//	console.log(user_type);
        
        /* seller login  and distributor login */
       // if(user_type == 'seller'){
            
        //if sucess login
            keystone.list('seller distributor').model.findOne({idnumber:user_id, usertype : user_type })
            .exec(
            function (error, response){
				//console.log('--------');
				//console.log(error, response);
            if(error){res.jsonp('User Not found');}    
            if(response == null){
                res.jsonp('User Not found')
            }
            else{
              res.jsonp(response); 
            }   
                
                
            });
            
            
        //if user is seller--- show seller porpulated options
     //   }
        
        /* distributor login 8*/
        //if sucess login
        //if user is distributor--- show distributor porpulated action
        
        
    });
    
/* ======================================================
    
//distributor or seller password hint
    
======================================================= */
 
    
    
    app.get('/password_hint', function(req, res){
        
        
       
    //'http://127.0.0.1:4100/password_hint?usertype=seller&id_number='+id_number+&user_name='+user_name;
    
    var userType = req.query.usertype.replace('%20', ' ');
    var user_type = userType.replace(userType[0], userType[0].toUpperCase());//turn user type to upper db is case sensitive
    var user_id = req.query.id_number;
    var user_name = req.query.user_name;    
        
        
        
    //if user_type == seller
   // if(user_type == 'seller'){
        
      keystone.list('seller distributor').model.findOne().where({idnumber : user_id, usertype : user_type}).exec(
      
      function(error, response){
       // console.log(response.name+response.surname);
    
        if(error){ return res.jsonp('User Not found');}
        if(response ==  null || response == ''){ return res.jsonp('User Not found')}
        var name = response.name+response.surname;
        if(name.trim().toLocaleLowerCase() == user_name.trim().toLocaleLowerCase()){ //if name match user provided name too
            return res.jsonp(response);
        }
          res.jsonp('User Not found');
          
      })
        
        
   // }
        
        
        
    //if user type == distributor do 
    //do only
        
        
        
    });
    
    
/* ======================================================
    
 //distributor or seller password change
    
=======================================================*/
    
   


        
    app.get('/password_change', function(req, res){
        
        
       
   // var url = 'http://'+current_domain+'/password_change?usertype=seller&id_number='+id_number+'&old_password='+old_password+'&new_password='+new_password;
    
    var userType = req.query.usertype.replace('%20', ' ');
		
    var user_type = userType.replace(userType[0], userType[0].toUpperCase());//turn user type to upper db is case sensitive
    var user_id = req.query.id_number;
    var old_password = req.query.old_password.trim();   
    var new_password = req.query.new_password.trim();  //making all passwords to lowercase
        
        
        
    //if user_type == seller
   // if(user_type == 'seller'){
      keystone.list('seller distributor').model.findOne().where({idnumber : user_id, usertype : user_type, password : old_password}).exec(
      
      function(error, response){
       // console.log(response);
         
          
        if(error){ return res.jsonp('User Not found');}
        if(response ==  null || response == ''){ return res.jsonp('User Not found')}
        var password = response.password;
        if(password.trim().toLocaleLowerCase() == old_password.trim().toLocaleLowerCase()){ //if password match user provided password too
            
          response.password = new_password.toLowerCase();
          response.save(function(err, results){ //change password save
             // console.warn(results);
              if(err){
                  return res.jsonp('Error changing password');
              }
              if(results ==  null || results == ''){
                  return res.jsonp('Error changing password');
              }
              
              return res.jsonp(results);
          });  
            
            return null;
        }
        return res.jsonp('User Not found');
          
      })
        
        
   // }
        
        
        
    //if user type == distributor do 
    //do only
        
        
        
    });
    
    
    
    
 /*============================================    
    
seller or distributor console, credt auto_voucher_check

 ==============================================*/


    
    
    app.get("/api/console_amount_activity", function(req, res){
        
    //    var url =  "http://127.0.0.1:4100/api/console_amount_activity?user_type=seller&idnumber="+seller_login.seller_id;
        
   var user_type = req.query.user_type.replace('%20', ' ');
   var userType = user_type.replace(user_type[0], user_type[0].toUpperCase());
        
        keystone.list('seller distributor')
        .model.findOne({idnumber : req.query.idnumber, usertype : userType })
        .exec(function(err, response){
            if(err){ return res.jsonp("no data");}
            if(response == null || response == '' || response == undefined){
                return res.jsonp("no data");
            }
            
            return res.jsonp(response);
        });
        
    })
    
    
    
    
 /*============================================
    
        user get acess code
    
 ==============================================*/
    
    app.use('/api/buy', function(req, res){
        
        
        
        if(req.query.code == 'unique_code'){//give user unique code
            
            //http://127.0.0.1:4100/api/buy?code=unique_code;//api query link
        var date = new Date();
            
        // quick changing
        var hour = date.getHours().toString();
        var minutes = date.getMinutes().toString();
        var seconds = date.getSeconds().toString();
        
        //show to user
        var milliseconds = date.getMilliseconds();
        
         if(milliseconds < 10){
          milliseconds = '00'+milliseconds;
        }   
            
        if(milliseconds > 9 && milliseconds < 100){
        
           milliseconds = '0'+milliseconds;
        }    
        if(minutes < 10){
          minutes = '0'+minutes;
        } 
        if(seconds < 10){
          seconds = '0'+seconds ;
        }  
            
          
            
            
            res.jsonp(hour+minutes+' '+seconds+' '+milliseconds.toString());
            
        }        
        
        
        
        
        
/*============================================
       
   search for record with unique access code,
            
=============================================*/
        
        if(req.query.code == 'get_voucher'){
         
        //http://127.0.0.1:4100/api/buy?code=get_voucher&unique_code=xyz;//api query link
           
            

		//slow changing values
		var date = new Date();
        var year = date.getFullYear().toString();
        var month = date.getMonth().toString();
        var day = date.getDate().toString();
        
        
        //get from seller to user
        var hour_minutes_milliseconds = req.query.unique_code; 
       
              
//        console.log('-----------------------');
//        console.log(req.query);
//        console.log('-----------------------');   
            
        //var seller = req.query.seller;//add seller in db making---use as stats
        //var amount = req.query.amount--use as stats;
            
       // var seach_code=year[year.length-2]+year[year.length-1]+month+day+hour+minutes+milliseconds;
            
        var seach_code_ = year[year.length-2]+year[year.length-1]+month+day+':'+hour_minutes_milliseconds.toString().replace(/ /g, '');
       
//            
       console.log('-----------------------');
       console.log(seach_code_);
       console.log('-----------------------'); 
    
            
            
        /* find doc contains [seach_code=] */
        keystone.list('Voucher Codes').model.findOne()
            .where({soldto : seach_code_, voucherstate : 'used'})
            .exec( function(error, response){
            if(error){
                res.jsonp('Problem finding Voucher');
            }
            if(response == null){
                res.jsonp('Voucher Not found')
                }
            else{
                res.jsonp(response); 
				//++++++++++++++++++++save voucher as printed+++++++++++++++++
				
				response.voucherprinted = true;//set voucher as printed (yes)
				response.save(function(err, success){
					if(err){
							console.log('Error, updating voucher as printed : '+error);
						   	return;
						   }
				});
				
            }
           
            
        });
        //on error throw error
        
        
        //on sucess, create voucher on the front
            
        
		}
		
		/////free voucher code request
		if(req.query.code == 'free_voucher'){
		
			keystone.list('Voucher Codes').model.findOne({voucheramount : 0 })
            .exec( function(error, response){
            if(error){
                res.jsonp('Problem finding Voucher');
            }
            if(response == null){
                res.jsonp('Voucher Not found')
                }
            else{
                res.jsonp(response); 
				
            }
           
            
        	});



		}

        
        
    });
    
    

//==============================================================
// sell voucher to user
//==============================================================    
    
  app.get('/api/sell', function(req, res){
      
        
        if(req.query.code == 'sell_voucher'){
            

             
        //http://127.0.0.1:4100/api/sell?code=get_voucher&unique_code=xyz;//api query link
            
        //'http://127.0.0.1:4100/api/sell?code=sell_voucher&unique_code='+seller_code_input.value+'&voucher_amount='+seller_voucher_amount_input.value+'&seller_id='+seller_login.seller_id;
           
            
        var date = new Date();
        //slow changing    
        var year = date.getFullYear().toString();
        var month = date.getMonth().toString();
			
        var day = date.getDate().toString();
		var hour = date.getHours();
		var minutes = date.getMinutes();
        
        
        //get from seller to user
        var hour_minutes_milliseconds = req.query.unique_code.toString().replace(/' '/g, '').trim(); 
        //amount for voucher    
        var seller_voucher_amount_ =req.query.voucher_amount.toString().replace(/' '/g, '').trim();
              
//        console.log('-----------------------');
//        console.log(req.query);
//        console.log('-----------------------');   
            
        //var seller = req.query.seller;//add seller in db making---use as stats
        //var amount = req.query.amount--use as stats;
            
       // var seach_code=year[year.length-2]+year[year.length-1]+month+day+hour+minutes+milliseconds;
            
        var seach_code_ = year[year.length-2]+year[year.length-1]+month+day+':'+hour_minutes_milliseconds;
//            
//        console.log('-----------------------');
//        console.log(seach_code_);
//        console.log('-----------------------'); 
//    
            
            
        /* serach to make sure the unique code is not used already */
        keystone.list('Voucher Codes').model.findOne()
            //.where({voucheramount : seller_voucher_amount_, soldto : seach_code_, voucherstate : 'used'})//when needing to expand query uniqeness//give user ability to select amount//add this to unique code
            .where({soldto : seach_code_, voucherstate : 'used'})
            .exec( function(error, response){
            if(error){
                   return res.jsonp({status : 'sorry Please try again, later', new_credit : 'no_value_change'});
            }
             if(response == null){
                 
                 return write_sell_toDB()
               
            }
               // console.log(response);
                return res.jsonp({status : 'this code is used, Try a new code..', new_credit : 'no_value_change'});
        });
            
            
            
        /* find doc contains [seach_code=] */
        function write_sell_toDB(){
        keystone.list('Voucher Codes').model.findOne()
            .where({voucheramount : seller_voucher_amount_, voucherstate : 'new'})
            .exec( function(error, response){
            if(error){
               return res.jsonp({status: 'sorry Please try again, later', new_credit : 'no_value_change'});
            }
            if(response == null){
               return res.jsonp({status : 'error Selling voucher, Please try different amount, or try again later', new_credit : 'no_value_change'});
            }  
          //  console.log(response);
          
                
            
             // res.jsonp('voucher sold for R'+seller_voucher_amount_); 
			
                response.voucherstate = 'used';
                response.soldby = req.query.seller_id;
                response.soldto = seach_code_;
				response.voucherproducedday = day;//day of month voucher was printed, to be used as to calculate amount of time before point cant be recouped by the seller
                response.save();
            
                var seller_id = req.query.seller_id;
               // var seller_voucher_amount  = seller_voucher_amount_;
                voucher_sell_subtract_amount(seller_id, seller_voucher_amount_, res);
				
        });
        //on error throw error
        
        //on sucess, create voucher on the front
             
            
            }
        }
	  
	if(req.query.code == 'sell_recharge'){// +++++++++++++++distributor rechage seller
		  
		  
		  
		  

		//   http://127.0.0.1:4100/api/sell?code=sell_recharge&voucher_recharge_amount=1&seller_id=2222222222222&seller_name_surname=Tsehla*Nkhi&distributor_id=1111111111111 //&userType_to_recharge=Distributor

			var userType = req.query.userType;
			//var user_type = userType.replace(userType[0], userType[0].toUpperCase());//turn user type to upper db is case sensitive
			var user_type = userType;
			var user_to_recharge = req.query.userType_to_recharge;
			var seller_id = req.query.seller_id;
			var distributor_id = req.query.distributor_id;
			var recharge_amount = req.query.voucher_recharge_amount; 
			
			var seller_fullname = req.query.seller_name_surname.split('*');
			var seller_name = seller_fullname[0] ;  
			var seller_last_name = seller_fullname[1];  
 
//			console.log(user_type)
//			console.log(seller_id)
//			console.log(distributor_id)
//			console.log(recharge_amount)
//			console.log(seller_name)
//			console.log(seller_last_name)
//			console.log(user_to_recharge)


			//if user_type == seller
		   // if(user_type == 'seller'){
		
		
		
		
		
				keystone.list('seller distributor').model.findOne().where({idnumber : distributor_id, usertype :  user_type}).exec(
				  
				function(error, response){
					
					if(error){
						console.log('distributor recharge seller: server error');
						res.jsonp('Server or Conection error');
						return;
					}
					
					if(response == '' || response == null || response == undefined){
						console.log('distributor recharge seller : user Not Exist');
						res.jsonp('Error finding seller');
						return;
					}
			 

					//check distributor credit
					//console.log(response);
					
					if(Number(response.credit) < Number(recharge_amount)){//if amount is not enough
					   	console.log('amount less; to recharge seller');
						res.jsonp();
						return;
					   }
					 //  console.log('amount enough');
					 
					
					
						//recharge seller account
					
					
								keystone.list('seller distributor').model.findOne().where({idnumber : seller_id, usertype : user_to_recharge, name : seller_name.toLowerCase(), surname : seller_last_name.toLowerCase()}).exec(
				  
								function(error, response){

									if(error){ 
										console.log('distributor recharge seller: server error');
										res.jsonp('Server or Conection error');
										return;
									}

									if(response == '' || response == null || response == undefined){
										console.log('distributor recharge seller : user Not Exist');
										res.jsonp('Error finding seller');
										return;
									}
									
									//add recharge to account
									
									
											
									 //add transaction
										var date = new Date();
				
									var hour = date.getHours();
									var minutes = date.getMinutes();
									var day = date.getDay();
									var month = date.getMonth();
									var year = date.getFullYear();
									
									var new_balance = Number(response.credits) + Number(recharge_amount);
									var new_transaction_record = ' '+hour+':'+minutes+(hour>12?daytime='PM':daytime='AM')+', '+day+'/'+month+'/'+year+';  '+'Account Recharged'+' R'+recharge_amount+'+; New balance : R'+new_balance;


									var new_transactions_array = response.transactionhistory;

										new_transactions_array.unshift(new_transaction_record);

									if( new_transactions_array.length > 1000){new_transactions_array.pop()}//if lenght is over that//remove first element

									response.transactionhistory = new_transactions_array;
 									//adjust credits
									response.credits =  Number(response.credits) + Number(recharge_amount);
									
									response.save(function(err, response){
									if(err){
										console.log('Connection/server error, please try gain later seller:acoount Recharge save()');
										res.jsonp('Server or Conection error');
										return;
									};
									if(response == '' || response == undefined || response == null){
										console.log('Error user not found : seller Account Recharg');
										res.jsonp('Server or Conection error');
										return;
									}
									
										
									res.jsonp({name : seller_name, lastname  : seller_last_name, id : seller_id, amount : recharge_amount});
								});


								});
						//add transaction to db as record 
					
						var date = new Date();
						var hour = date.getHours();
						var minutes = date.getMinutes();
						var day = date.getDay();
						var month = date.getMonth();
						var year = date.getFullYear();
						
						var new_balance = Number(response.credits) - Number(recharge_amount);
						var seller_recharged_id ='Fund transfered to ID no : ' + seller_id;
						var new_transaction_record = ' '+hour+':'+minutes+(hour>12?daytime='PM':daytime='AM')+', '+day+'/'+month+'/'+year+';  '+seller_recharged_id+' R'+recharge_amount+'-; New balance : R'+new_balance;


						var new_transactions_array = response.transactionhistory;

								new_transactions_array.unshift(new_transaction_record);

						if( new_transactions_array.length > 1000){new_transactions_array.pop()}//if lenght is over that//remove first element

						response.transactionhistory = new_transactions_array;
 						//adjust credits

						//subtract amount from distributr acc
						response.credits = Number(response.credits) - Number(recharge_amount);
						///response.save();
						response.save(function(err, response){
							if(err){console.log(err)};
							if(response == '' || response == undefined || response == null){
								console.log('Error removing recharge amount from seller');
							}

						});
					
					
					
					
					
					   
					

				});

		


			 }
     
      
  });  
/*=======================================

    Seller subtract points & update function

=======================================*/
    function voucher_sell_subtract_amount(userId, voucherValue, res){  
        
       keystone.list('seller distributor').model.findOne()
        .where({idnumber : userId, usertype : 'Seller'})
        .exec(function(err, response){
            if(err){return res.jsonp({status : 'voucher sell subtract error  : '+error, new_credit : 'no_value_change'})}
            if(response == null){ return res.jsonp({status : 'voucher sell subtract : null', new_credit : 'no_value_change'})};
           //subtract creitd and save
            response.credits = response.credits - voucherValue;
            response.save( function(err, success){
            if(err){return res.jsonp({status : 'voucher sold for R'+voucherValue, new_credit : 'no_value_change'})}   
               
            if(success != null){
                // update credit status
                res.jsonp({status : 'voucher sold for R'+voucherValue, new_credit : success.credits});
				//write sale to db
				var transaction_cost =	voucherValue+'-';
				transactions_history('voucher sold', transaction_cost, userId, 'Seller');
                return null;
                    
            }
             //if the was error updating db, 
              res.jsonp({status : 'voucher sold for R'+voucherValue, new_credit : 'no_value_change'});  
                   
                
            });

       });
        

    }
	
	
    
/*========================================

   Add new users
    
========================================*/
    
 app.get('/api/add_user', function(req, res){
	
	
  // http://127.0.0.1:4100/api/add_user?user_type=seller&name=Petrus&surname=Nkhi&password=happy%20customers%20lead%20to%20rich%20life&id=8888888888888 '&added_by_name='+admin_login.name+'&added_by_id='+admin_login.admin_id+'&added_by_usertype='+admin_login.usertype;  
	 var userType = req.query.user_type;
	 var user_type = userType.replace(userType[0], userType[0].toUpperCase());//capitalize first letter
	 
	// console.log(req.query.name,req.query.surname,req.query.id,req.query.password.trim().replace(/%20/g, ' '),user_type);
	
	keystone.list('seller distributor').model.findOne()
	.where({idnumber : req.query.id, usertype : user_type})
	.exec(function(err, response){
		
		if(err){
			console.log('error adding user : '+user_type);
			res.jsonp('Server or Conection error');
			return;
		}
		
		if(response == null || response == undefined || response == ''){//user not found//add user
			var user_added_by = {'name':req.query.added_by_name,'type_of_user':req.query.added_by_usertype,'id_no':req.query.added_by_id};//add user creating account as contact to this new user account
			
			keystone.createItems({//add items to db//user details
				
				'seller distributor' : [
					{name: req.query.name.toLowerCase() ,surname : req.query.surname.toLowerCase() ,idnumber : req.query.id ,password : req.query.password.trim().replace(/%20/g, ' ').toLowerCase() ,usertype : user_type, added_customers_partners:[JSON.stringify(user_added_by)], }
					
					
				]
				
				
			}, function(err, results){
				if(err){
					console.log('Error creating user to db : '+user_type);
					res.jsonp('Server or Conection error');
					return;
				}
				add_as_contact();//add new account user as contact
				add_new_user_message()//add new user welcome mesage
				res.jsonp('Account succesfully created');
			});
			
			return;
			
		}
		
		res.jsonp('Error seller registered');//seller already exists
		return;
		
	});
	
	 
	//fuction add this user as a contact to the user creating this account 
	
		function add_as_contact(){
			
			var added_by_userType = req.query.added_by_usertype;
	 		var added_by_user_type = added_by_userType.replace(added_by_userType[0], added_by_userType[0].toUpperCase());//capitalize first letter
			
			keystone.list('seller distributor').model.findOne()
			.where({idnumber : req.query.added_by_id, usertype :added_by_user_type})
			.exec(function(err, response){

				if(err){
					console.log('error when finding/adding new user as contact to user id : '+req.query.added_by_id+' ,user type : '+req.query.added_by_usertype);
					return;
				}

				if(response == null || response == undefined || response == ''){//user not found//add user
					console.log('error no data when finding/adding new user as contact to user id : '+req.query.added_by_id+' ,user type : '+req.query.added_by_usertype);
					return;
				}
				
				var user_added_by = {'name':req.query.name.toLowerCase()+' '+req.query.surname.toLowerCase(),'type_of_user':user_type,'id_no':req.query.id};//create contact data
				
				var added_customers_partners_array = response.added_customers_partners;//get old contact list
				
				added_customers_partners_array.push(JSON.stringify(user_added_by));
				
				response.added_customers_partners = added_customers_partners_array;//append new contact to existing list
				
				response.save(function(error, results){//save new contact changes to profile
					
					if(error){
						console.log('error saving new user as contact to user id : '+req.query.added_by_id+' ,user type : '+req.query.added_by_usertype);
						return;
					}

					if(results == null || results == undefined || results == ''){//user not found//add user
						console.log('error saving new user as contact to user id : '+req.query.added_by_id+' ,user type : '+req.query.added_by_usertype);
						return;
					}
					
				});
				
			return;

			});


		}
	 	//new user creation message
	 	function add_new_user_message(){
			
			//user added user type
			var userType = req.query.user_type;
	 		var user_type = userType.replace(userType[0], userType[0].toUpperCase());//capitalize first letter
			
			//user adding usertype			
			var added_by_userType = req.query.added_by_usertype;
	 		var added_by_user_type = added_by_userType.replace(added_by_userType[0], added_by_userType[0].toUpperCase());//capitalize first letter
			
			//date and time
			var date = new Date();
			var hour = date.getHours();
			var minutes = date.getMinutes();
			var day = date.getDay();
			var day_of_month = date.getDate()
			var month = date.getMonth();
			var year = date.getFullYear();
			
			var week_array=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			var month_array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			
			var message_date_time =  hour+':'+minutes+((hour > 12)?'am':'pm')+' '+week_array[day]+' '+day_of_month+' '+month_array[month]+' '+year;
			//welcome message
			var new_message_contents =['{"from":"'+req.query.added_by_name+' : '+added_by_user_type+'","message":"Hello, Welcome, Please read Help , to know how the system works!.","date":"'+message_date_time+'"}','{"from":"'+req.query.added_by_name+' : '+added_by_user_type+'","message":"Reply to this message to contact me.","date":"'+message_date_time+'"}'];
			
			
			keystone.createItems({//add items to db//user details				
				
				'Messaging' : [					
					{
						message_initiator_id:req.query.added_by_id, message_initiator_names:req.query.added_by_name, message_initiator_usertype:added_by_user_type, message_parcitipant_id:req.query.id, message_parcitipant_names:req.query.name.toLowerCase()+' '+req.query.surname.toLowerCase(), message_parcitipant_usertype:user_type, new_message_participator:true, messages_array:new_message_contents, last_updated_month:month, last_updated_date: date,
					}
				]
				
				
			}, function(err, results){
				if(err){
					console.log('Error creating message to db message initiatotor ID : '+ req.query.added_by_id+', usertype : '+added_by_user_type+' , new user id : '+req.query.id+', usertype : '+user_type);
					return;
				}

			});
			
		}
	
	
	 });


/*========================================

    Voucher codes loading
    
========================================*/
	
    app.get('/api/add_vouchers', function(req, res){
        
        //var url= 'http://' + current_domain + '/api/add_vouchers?voucher_codes='+JSON.stringify(mob)&added_by='tsehla';
      
       	//response[0] == 'Server or Conection error'
		//response[0] == 'available
		//response[0] == 'saved'
		
		//----- get codes from link
		var voucher_codes = JSON.parse(req.query.voucher_codes);
		//console.log(voucher_codes );
		
		var codes_already_on_system = []; //if codes are on the system
		var codes_not_on_system = []; //if codes is not on the system
		
		
		//----- check if codes is on system or not ----
		
		var voucher_counter = 0;
		
		(function voucher_vailabilty_serach(){
			
			
			
			if(voucher_counter  == voucher_codes.length ){//end function if counter is above voucher array length
				//console.log(voucher_codes.length,voucher_counter);
				store_vouchers_to_db();// save content to db
				
				return;
			} 
			//console.log(voucher_codes[voucher_counter].password);
			
		keystone.list('Voucher Codes').model.findOne()
			.where({vouchercode : voucher_codes[voucher_counter].password})
			.exec(function(err, response){

						if(err){
							console.log('error checking for Voucher');
							res.jsonp(['Server or Conection error',[]]);
							return;
						}

						if(response == null || response == undefined || response == ''){//user not found on system//add to [ codes_not_on_system ]

							codes_not_on_system.push({vouchercode:voucher_codes[voucher_counter].password ,voucheramount:voucher_codes[voucher_counter].cost ,voucherprofile:voucher_codes[voucher_counter].profile ,voucherexpiry:voucher_codes[voucher_counter].expiery ,voucherstate:'new' ,loadedby:req.query.added_by });//add to list to be added to system
							
							voucher_counter = voucher_counter +1; //increment counter
							voucher_vailabilty_serach();//call the function again
							return;
						}

						//voucher found on system // add to [ codes_already_on_system ]
							
							codes_already_on_system.push(voucher_codes[voucher_counter]);//add to list to be NOT added to system
							voucher_counter = voucher_counter +1; //increment counter
							voucher_vailabilty_serach();//call the function again
							return;

			});
			
		})();
		
		
		function store_vouchers_to_db(){//save vouchers to db
			
			
//		console.log(codes_already_on_system);
//		console.log('---------------');
//		console.log(codes_not_on_system);
//			
			
			
			if(codes_not_on_system.length == 0){//if no items to be added to db
			   
			   
					res.jsonp(['available',codes_already_on_system]);
					return;
			   }
		
			
			//----- add codes not on the system to the database --
			keystone.createItems({//add items to db//user details
				
				'Voucher Codes' : codes_not_on_system,
				
				
			}, function(err, results){
				if(err){
					console.log('Error saving vouchers to db ');
					res.jsonp(['Server or Conection error',[]]);
					return;
				}
				
				console.log('Success, codes saved to db');
				res.jsonp(['saved',codes_already_on_system]);
				
				return;
			});
			
			
			
			
			
			
		}
		

	
		
		
	});
	
	
/*========================================

    Router up/down status record
    
========================================*/
	
	
	
	//+++++++++++++++++++++++++++++++ get router data ++++++++++++++++++++++++++++++++++
	
	//var url= 'http://' + current_domain + '/api/router_checkin_data_get;
	
	 app.get('/api/router_checkin_data_get', function(req, res){
		 
		 
		 	keystone.list('Router Monitoring').model.find()
			.exec(function(err, response){

						if(err){//if error db related
						
							res.jsonp('Server or Conection error');
							return;
						}

						if(response == null || response == undefined || response == ''){//error no data found

							res.jsonp('No router data found');
							return;
						}

						
							res.jsonp(response);
							return;
			});
			
		 
		 
		 
		 
	 });
	
	
	
	
	
	//+++++++++++++++++++++++++++++++ edit save router data ++++++++++++++++++++++++++++++++++
	
	//var url= 'http://' + current_domain + '/api/router_checkin_data_save?status_id=''&router_todo=''&user_id='';
	
	 app.get('/api/router_checkin_data_save', function(req, res){
		 
		 
		 	keystone.list('Router Monitoring').model.findOne()
		 	.where({_id: req.query.status_id})
			.exec(function(err, response){

						if(err){//if error db related
						
							res.jsonp('Server or Conection error');
							return;
						}

						if(response == null || response == undefined || response == ''){//error no data found

							res.jsonp('No data found');
							return;
						}

						
							//res.jsonp(response);
							//return;
				
							response.routermute_by = req.query.user_id ;
							response.routermute = req.query.router_todo;
							response.save(function(err, response){

									if(err){//if error db related

										res.jsonp('Server or Conection error');
										return;
									}

									if(response == null || response == undefined || response == ''){//error no data found

										res.jsonp('Save error');
										return;
									}
								res.jsonp('Sucess data saved');
								return;
							}
										
					);
			
		 
			});
		 
		 
	 });
	
	
	
	
	
	//+++++++++++++++++++++++++++++++ store router data ++++++++++++++++++++++++++++++++++
	
	
	//mock link for db, update status from router// http://127.0.0.1:4100/api/router_checkin?router_name=NAME&router_location=LOCATION&router_details=DETAILS
	
	//http://WWW.RECHARGE-WEBSITE.COM/api/router_checkin?router_name=NAME&router_location=LOCATION&router_details=DETAILS
	
	//https://*********.herokuapp.com/api/router_checkin?router_name=Mikrotik Home&router_location=Home:My room&router_details=My Home Router, Small red and orange one
	
	//http://ww.myserver.com/api/router_checkin?router_name=Home-Router-1&router_location=Orange-Farm&router_details=This-is-my-home-router
	
	
	app.get('/api/router_checkin', function(req, res){
		 
			var router_name = req.query.router_name;
			var router_location = req.query.router_location;
			var router_details = req.query.router_details;
		
			var router_ip = req.query.hotspot_ip;
		
			//time and date
		
			var date = new Date();
			
			var day_array=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			var month_array = ['January', 'February','March','April','May','June','July','August','September','October','November','December']

		
			var router_last_contact_hour = date.getHours();
			var router_last_contact_minute = date.getMinutes();
		
			var router_last_contact_day = date.getDay();
			var router_last_contact_day_text =day_array[ date.getDay() ] ;
			
			var router_last_contact_month = date.getMonth();
			var router_last_contact_month_text = month_array[ date.getMonth() ];
			
			var router_last_contact_year = date.getFullYear();
		
			var router_last_contact_date_time_history = router_last_contact_hour + ':' + date.getMinutes() +' '+router_last_contact_day_text+', '+date.getDate()+'/'+router_last_contact_month_text+'/'+router_last_contact_year;
			
			
			if(router_name =='' || router_name == null || router_name == undefined){//reject if no name given
					res.jsonp('No router name given');
					console.log('No router name given');
					return;
			}
		
			//console.log(router_name,router_location,router_details);
		
		 	keystone.list('Router Monitoring').model.findOne()
		 	.where({routername: req.query.router_name})//give router unique name
			.exec(function(err, response){

						if(err){//if error db related
						
							res.jsonp('Server or Conection error');
							console.log('Router Checkin : Server or Conection error');
							return;
						}

						if(response == null || response == undefined || response == ''){//router not found add new router

							//res.jsonp('No data found');
							console.log('Router Checkin :No data found');
							console.log('Adding router to db');
							
								keystone.createItems({//add items to db//user details

								'Router Monitoring' : [{
									routername :router_name ,routerlocation :router_location ,routerdetails :router_details ,router_last_contact_hour : router_last_contact_hour ,router_last_contact_minute : router_last_contact_minute,router_last_contact_day : router_last_contact_day,router_last_contact_date_time_history: router_last_contact_date_time_history,router_last_ip : router_ip,
								}],


								}, function(err, results){
									if(err){
										console.log('Error saving router name to db ');
										res.jsonp('Error saving router name to db');
										return;
									}

									console.log('Success, router name added to db');
									res.jsonp('Success, router name added to db');

									return;
								}
								);

							
							
						}
						
//				
//					//router exists update time
//					//router_last_contact_date_time_history
//					var date_time_history_record = response.router_last_contact_date_time_history;
//				 	//console.log(date_time_history_record);
//					date_time_history_record = date_time_history_record.push(router_last_contact_date_time_history);
//				
//					if(date_time_history_record.length > 3){
//					   date_time_history_record = date_time_history_record.shift();
//						
//					   }
							
					//time and date
					//console.log(response);

					var date = new Date();
				
					response.router_last_contact_hour = date.getHours();
					response.router_last_contact_minute = date.getMinutes();
					response.router_last_contact_day = date.getDay();
					response.router_last_ip = router_ip;
				
					var history_array = response.router_last_contact_date_time_history;
					//history_array.push(router_last_contact_date_time_history);
					history_array.unshift(router_last_contact_date_time_history);
					
					if( history_array.length > 1000){history_array.pop()};//if lenght is over that//remove first element
			
					response.router_last_contact_date_time_history = history_array;
				
					response.save(function(err, response){
						if(err){
							console.log('Erro, updating value for router name : '+router_name);
							res.jsonp('Erro, updating value for router name : '+router_name);
							return;
						}
						if(response == null || response == undefined || response == ''){//saving db /server error
							console.log('saving db/server error');
							res.jsonp('saving db/server error');
							return;
							
						}
						
						res.jsonp('Sucess, updating value for router name : '+router_name);
						return;
					});
		
			})
		

		
		return;
		
		
	});
	

/*========================================

    user transactions log/history
    
========================================*/	
	

 function transactions_history(transaction_name, transaction_cost, user_id, user_type){
	
	
	var date = new Date();
				
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var day = date.getDay();
	var month = date.getMonth();
	var year = date.getFullYear();
	

			
	
	 //find seller/user and edit their profile
	 
	 keystone.list('seller distributor').model.findOne()
	.where({idnumber : user_id, usertype : user_type})
	.exec(function(err, response){
		
		if(err){
			console.log('error finding user to add transaction log : Id Number : '+user_id+', User type : '+ user_type);
			return;
		}
		
		if(response == null || response == undefined || response == ''){//user not found//add user

			console.log('error finding user to add transaction log : Id Number : '+user_id+', User type : '+ user_type);
			return;
		}
		  
		
		 //add transaction

		var date = new Date();			
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var day = date.getDay();
		var month = date.getMonth();
		var year = date.getFullYear();
		 
		var new_transaction_record = ' '+hour+':'+minutes+(hour>12?daytime='PM':daytime='AM')+', '+day+'/'+month+'/'+year+';  '+transaction_name+' R'+transaction_cost+'; New balance : R'+response.credits;

var hour = date.getHours();
		var new_transactions_array = response.transactionhistory;

			new_transactions_array.unshift(new_transaction_record);

		if( new_transactions_array.length > 1000){new_transactions_array.pop()}//if lenght is over that//remove first element
		 
		response.transactionhistory = new_transactions_array;
			 response.save(function(err, results){
			 if(err){
				 console.log('error saving  user/seller transaction log/record : Id Number : '+user_id+', User type : '+ user_type);
				return;
			 }
		 });					
	});
	 return;
}
	
	
	
	
	
    
/*========================================

    Routing all links to webpage
    
========================================*/
    
    app.get('/', function(req, res){
       //give home page
        //im think use api, method to serve, nunjuck changes will be anoying
        //use public to serve html standard, use api to acess data//test first
        
        res.sendFile(path.resolve('./html/home_page_html/index.html'));
        
	});
	app.get('/sitemap', function(req, res){
		//give home page/s sitemap
		 //for google indexing
		 
		 res.sendFile(path.resolve('./html/home_page_html/sitemap.xml'));
		 
	 });
	app.get('/transaction', function(req, res){
		 res.sendFile(path.resolve('./html/transaction.html'));
		 
	 });
    app.get('/buy_voucher', function(req, res){
        res.sendFile(path.resolve('./html/transaction.html'));
        
    });
    app.get('/sell_voucher', function(req, res){
        res.sendFile(path.resolve('./html/transaction.html'));
        
    });
    app.get('/seller_login', function(req, res){
        res.sendFile(path.resolve('./html/transaction.html'));
        
    });    
    
    app.get('/distributor_login', function(req, res){
        res.sendFile(path.resolve('./html/transaction.html'));
        
    });
	app.get('/admin_login', function(req, res){
        res.sendFile(path.resolve('./html/transaction.html'));
        
    });

    
/*========================================

    hotspot page //shown on mikrotik as login
    
========================================*/
	
	app.get('/hotspot', function(req, res){
        res.sendFile(path.resolve('./html/hotspot_login.html'));
        
    });
	
	app.get('/hotspot_logout', function(req, res){
        res.sendFile(path.resolve('./html/hotspot_logout.html'));
        
    });
	app.get('/hotspot_status', function(req, res){
        res.sendFile(path.resolve('./html/hotspot_status.html'));
        
    });
	
	

/*========================================

    extra menu//transaction menu/voucher reedem finder//messages
    
========================================*/
	
// http://' + current_domain + '/api/transations?type='+ transaction_type +'&user_id='+distributor_login.distributor_id+'&usertype='+distributor_login.usertype	

	
app.get('/api/transations', function(req, res){
	
//http://127.0.0.1:4100/api/transations?type=to_reddem_voucher&user_id=8905135852087&usertype=Seller	
//http://127.0.0.1:4100/api/transations?type=past_transactions&user_id=8905135852087&usertype=Seller
//http://127.0.0.1:4100/api/transations?type=messaging&user_id=8905135852087&usertype=Seller
	
console.log(req.query.user_id,req.query.usertype,req.query.type );	
	
if(req.query.type == 'past_transactions'){	//find transaction made
	
	
	
	
	 keystone.list('seller distributor').model.find()
	.where({idnumber : req.query.user_id, usertype : req.query.usertype})
	.exec(function(err, response){
		
		if(err){
			console.log('error: finding transactions for user ID : '+req.query.user_id);
			return_fn('error');
			return;
		}
		
		if(response == null || response == undefined || response == ''){//user not found//add user
			console.log('error: No transactions found for user ID : '+req.query.user_id);
			return_fn('error : no transations history stored');
			return;
		}
		 
		 
		return_fn(response[0].transactionhistory); 
		  return;
							
	});	
	
}
	
	
if(req.query.type == 'to_reddem_voucher'){	//find voucher to reedem
	
	 keystone.list('Voucher Codes').model.find()
	.where({soldby : req.query.user_id})
	.exec(function(err, response){
		
		 var respone_ =[];//filter and send response
		 
		if(err){
			console.log('error: finding voucher history for user ID : '+req.query.user_id);
			return_fn('error');
			return;
		}
		
		if(response == null || response == undefined || response == ''){//user not found//add user
			console.log('error: No vouchers found for user ID : '+req.query.user_id);
			return_fn('error : no vouchers to claim');
			return;
		}
		 
		
		 
		 response.forEach(function(data, index){
			 var date = new Date();
			 if(data.voucherprinted != true && data.voucherstate != 'new'){
				 	var voucher_id = data.soldto.split(':');//give code from buyer back
					respone_.push({voucher_id:voucher_id[1], voucher_doc_id: data._id, voucher_amount: data.voucheramount, voucherproducedday:data.voucherproducedday, server_day:date.getDate()});
				}
			 
		 });
		 
		 if(respone_.length < 1){//if no data match request
			 
			 respone_ = 'error : no vouchers to claim';
		 }
		return_fn(respone_); 
		 
		return;  
							
	})
	
}
	
	
	if(req.query.type == 'messages'){//find messages	
		
		//http://127.0.0.1:4100/api/transations?type=messages&user_id=8905135852087&usertype=Seller
	
	 keystone.list('Messaging').model.find()//hide message that have delete checked
	.where({$or:[ {message_initiator_id : req.query.user_id,message_initiator_usertype:req.query.usertype,from_delete:false}, {message_parcitipant_id : req.query.user_id,message_parcitipant_usertype:req.query.usertype,to_delete:false} ]})
	.sort('-last_updated_date')
	.exec(function(err, response){
		
		 
		if(err){
			console.log('error: No messages found for user ID : '+req.query.user_id);
			return_fn('error');
			return;
		}
		
		if(response == null || response == undefined || response == ''){//user not found//add user
			console.log('error: No messages found for user ID : '+req.query.user_id);
			return_fn('error : no messages found');
			return;
		}
		 
		return_fn(response); 
		 
		return;  
							
	})
	
}	
	
	
	function return_fn(data){//send response back
		
		res.jsonp(data);
		return;
	}

});

/*========================================

    messages//delete or reply
    
========================================*/
	
//var url= 'http://' + current_domain + '/api/reply_or_delete?action_type='+ intended_action +'&document_id=' + messaging_document_id + '&pay_load=' + pay_load;//reply or delete link

/* 
	http://127.0.0.1:3100/api/reply_or_delete?action_type=reply&document_id=5cdc09ae59e47907e4c7bb7e&
pay_load={%22from%22:%22tsehla%20d%20:%20Distributor%22,%22message%22:%22hello%22,%22date%22:%2218:1pm%20Wednesday%2015%20May%202019%22} 

*/
	
app.get('/api/reply_or_delete', function(req, res){	
	
	
	if(req.query.action_type == 'reply'){	//if reply
	 
		//console.log(req.query);
	
	
	
	 keystone.list('Messaging').model.findById(req.query.document_id)
	.exec(function(err, response){

			if(err){
				console.log('error: finding message for message ID : '+req.query.document_id);
				responder('Server or Conection error');
				return;
			}

			if(response == null || response == undefined || response == ''){//message not found//this shouldnt happen//for this configuration//unless some deep error/issue
				console.log('error: No messages found for document ID : '+req.query.document_id);
				responder('No data found');
				return;
			}
		 
		 	//console.log(response.toObject().messages_array);//mangoose return results with its object wrapper data//use toObject() to clean it up
		 	var message_array = response.toObject().messages_array;//used toObject to remove mangoose properties return when doing ////this query
		 	 message_array.push(req.query.pay_load);
		 	
		 	var date = new Date();
		 
		 	response.messages_array  = message_array;//save new edited array
		 	response.last_updated_month = date.getMonth();//set current month as lat updated
			response.last_updated_date = date;//save current date//used for sorting results display at front end
		 
		 	response.save(function(error, data){
				if(err){
					console.log('error: saving message for message ID : '+req.query.document_id);
					responder('Server or Conection error');
					return;
				}

				if(data == null || data == undefined || data == ''){//message not found//this shouldnt happen//for this configuration//unless some deep error/issue
					console.log('error: saving messages, No messages found for document ID : '+req.query.document_id);
					responder('No data found');
					return;
				}
						 
		 		responder('success');
				return;
				
			});
		 
		 	
//		 	responder('Server or Conection error');
		 	return;
							
		});	

	}
	
	
	if(req.query.action_type == 'delete'){	//if delete
	 
		//console.log(req.query);
	
	
	
	 keystone.list('Messaging').model.findById(req.query.document_id)
	.exec(function(err, response){

			if(err){
				console.log('error: finding message to delete for message ID : '+req.query.document_id+', delete for : '+req.query.pay_load);
				responder('Server or Conection error');
				return;
			}

			if(response == null || response == undefined || response == ''){//message not found//this shouldnt happen//for this configuration//unless some deep error/issue
				console.log('error: deleting No messages found for document ID : '+req.query.document_id+', delete for : '+req.query.pay_load);
				responder('No data found');
				return;
			}
		 	
		 	var date = new Date();
		 
		 	response[req.query.pay_load]  = true;//set as deleted
		 	response.last_updated_month = date.getMonth();//set current month as lat updated
			response.last_updated_date = date;//save current date//used for sorting results display at front end
		 
		 	response.save(function(error, data){
				if(err){
					console.log('error: saving delete message for message ID : '+req.query.document_id+', delete for : '+req.query.pay_load);
					responder('Server or Conection error');
					return;
				}

				if(data == null || data == undefined || data == ''){//message not found//this shouldnt happen//for this configuration//unless some deep error/issue
					console.log('error: saving delete messages, No messages found for document ID : '+req.query.document_id+', delete for : '+req.query.pay_load);
					responder('No data found');
					return;
				}
						 
		 		responder('success');
				return;
				
			});
		 
		 	
//		 	responder('Server or Conection error');
		 	return;
							
		});	

	}

	
	
	
	
	
	
	
	
	
	
	function responder(what_to_say){//response function
		
		res.jsonp(what_to_say);
		return;
	}
	
});
	
	
/*========================================

   nessage // new message contact adding
    
========================================*/
	
	
 app.get('/api/new_message_or_add_contact_or_delete_contact', function(req, res){
	// 	var url = 'http://' + current_domain + '/api/new_message_or_add_contact?action_type=new_message&message_initiator_id=' + logged_in_user_id + '&mesage_initiator_usertype='+logged_in_user_type+'&message_initiator_name='+logged_in_user_name+'&message_participant_details='+participant_details+'&message=' + new_message;//reply link
	
	
		if(req.query.action_type == 'new_message'){	//if new message
			
			
			//console.log(req.query);
			
			var message_recipiens_list =req.query.message_participant_details.replace(/},/g,'};').split(';');//eish, dont ask//json missbehaving 
	
			console.log(message_recipiens_list);//use req query for message innitiator detais
			//console.log(JSON.parse(x[0]));
			
			var new_messages_array = [];//list of messages container
			
			var date = new Date();//get current date
			
			message_recipiens_list.forEach(function(data){
				var data = JSON.parse(data);
				console.log(data.name);					
				
				new_messages_array.push(
				{
					message_initiator_id:req.query.message_initiator_id,
					message_initiator_names:req.query.message_initiator_name,
					message_initiator_usertype:req.query.mesage_initiator_usertype,
					message_parcitipant_id:data.id_no,
					message_parcitipant_names:data.name,
					message_parcitipant_usertype:data.type_of_user, 
					new_message_participator:true,  
					messages_array:req.query.message, 
					last_updated_month:date.getMonth(), 
					last_updated_date: date,
					}
				);
				
				
			});
			
			keystone.createItems({//add items to db//user details				
				
				'Messaging' : new_messages_array,
				
				
			}, function(err, results){
				if(err){
					console.log('Error creating New message to db message initiatotor ID : '+ req.query.message_initiator_id+', usertype : '+req.query.mesage_initiator_usertype);
					responder('Server or Conection error');
					return;
				}

				responder('sucess');
				return;
			});
			
		
			return;
			
		}
	 
	 
	 
	 if(req.query.action_type == 'new_contact'){	//if new contact
			
		//var url = 'http://' + current_domain + '/api/new_message_or_add_contact_or_delete_contact?action_type=new_contact&current_user_id='+logged_in_user_id+'&current_usertype='+logged_in_user_type+'&new_contact_user_id='+new_contact_id_no.value.toString().trim()+'&new_contact_usertype='+new_contact_usertype.value+'&pay_load='+new_user_contact_; 
			
		//console.log(req.query);
		 
		 //search for user to be added as a new contact
		 
			keystone.list('seller distributor').model.findOne()
				.where({idnumber : req.query.new_contact_user_id, usertype : req.query.new_contact_usertype})
				.exec(function(err, response){

					if(err){
						console.log('error: finding User to add as contact user ID : '+req.query.new_contact_user_id+', type of user : '+req.query.new_contact_usertype+', requested by user ID : '+req.query.current_user_id+', requester user type : '+req.query.current_usertype);
						responder('Server or Conection error');
						return;
					}

					if(response == null || response == undefined || response == ''){//user not found
						console.log('error: User not Found : finding User to add as contact user ID : '+req.query.new_contact_user_id+', type of user : '+req.query.new_contact_usertype+', requested by user ID : '+req.query.current_user_id+', requester user type : '+req.query.current_usertype);
						responder('No data found');
						return;
					}


								//get current logged in user and save new contact
								keystone.list('seller distributor').model.findOne()
								.where({idnumber : req.query.current_user_id, usertype : req.query.current_usertype})
								.exec(function(err, response){

									if(err){
										console.log('error: [finding logged in user] in efforts of : finding User to add as contact user ID : '+req.query.new_contact_user_id+', type of user : '+req.query.new_contact_usertype+', requested by user ID : '+req.query.current_user_id+', requester user type : '+req.query.current_usertype);
										responder('Server or Conection error');
										return;
									}

									if(response == null || response == undefined || response == ''){//user not found
										console.log('error: [logged in user not found] in efforts of : finding User to add as contact user ID : '+req.query.new_contact_user_id+', type of user : '+req.query.new_contact_usertype+', requested by user ID : '+req.query.current_user_id+', requester user type : '+req.query.current_usertype);
										responder('No data found');
										return;
									}


									var new_contact_list_array = response.toObject().added_customers_partners;//used toObject to remove mangoose properties return when doing ////this query
									
									new_contact_list_array.push(req.query.pay_load);
									
									response.added_customers_partners = new_contact_list_array;//append changes to contact
									
											 
									response.save(function(error, data){//save contact changes
										if(err){
											console.log('error: [logged in user conatact saving error] in efforts of : finding User to add as contact user ID : '+req.query.new_contact_user_id+', type of user : '+req.query.new_contact_usertype+', requested by user ID : '+req.query.current_user_id+', requester user type : '+req.query.current_usertype);
											responder('Server or Conection error');
											return;
										}

										if(data == null || data == undefined || data == ''){//message not found//this shouldnt happen//for this configuration//unless some deep error/issue
											console.log('error: [logged in user contact saving error; no response] in efforts of : finding User to add as contact user ID : '+req.query.new_contact_user_id+', type of user : '+req.query.new_contact_usertype+', requested by user ID : '+req.query.current_user_id+', requester user type : '+req.query.current_usertype);
											responder('No data found');
											return;
										}

										responder('success');
										return;

									});

									return;

							});	

					
				
				
					//console.log(response);
					
					return;

			});	


		 
		 
			
		}
	 
	 
	 
	 
	 
		
	function responder(what_to_say){//response function
		
		res.jsonp(what_to_say);
		return;
	}
	
	
	
 });
		
	
	
	
	
	
	
/*========================================

    voucher reedeming
    
========================================*/	
	
	
	
	
	
app.get('/api/redeem_voucher', function(req, res){
	
	
	
		//var url= 'http://' + current_domain + '/api/redeem_voucher?voucher_id='+voucher_document_id&user_id=;//redeem voucher link
	
	
		
	 keystone.list('Voucher Codes').model.findOne()
	.where({_id : req.query.voucher_id })
	.exec(function(err, response){
		 
		 
		 
		if(err){
			console.log('error: finding voucher voucher to reedem, with document _id : '+req.query.voucher_id);
			return_fn('Server or Conection error');
			return;
		}
		
		if(response == null || response == undefined || response == ''){//user not found//add user
			console.log('error: No voucher found to reedem, with document _id : '+req.query.voucher_id);
			return_fn('No data found');
			return;
		}
		 
		
		 
		 //get seller and update their account//with amount to reddem
 
		 
	keystone.list('seller distributor').model.findOne()
	.where({idnumber : req.query.user_id, usertype: 'Seller'})
	.exec(function(err, user_data){

		if(err){
			console.log('error : when finding user when attempting to reedem user  id no : '+response.soldby);
			return_fn('Server or Conection error');
			return;
		}
		
		if(user_data == null || user_data == undefined || user_data == ''){//user not found//add user

			console.log('error : when finding user when attempting to reedem user  id no : '+response.soldby+ ' , no response given/response empty.');
			return_fn('No data found');
			return;
		}
		  
		
		 //add transaction

		var date = new Date();			
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var day = date.getDay();
		var month = date.getMonth();
		var year = date.getFullYear();
		
		var new_balance = Number(user_data.credits) + Number(response.voucheramount);
		
		
		var new_transaction_record = ' '+hour+':'+minutes+(hour>12?daytime='PM':daytime='AM')+', '+day+'/'+month+'/'+year+';  '+'Voucher redeemed for : '+' R'+ response.voucheramount +'+,; Voucher ref _id : '+response._id+'; New balance : R'+new_balance ;

		var hour = date.getHours();
		var new_transactions_array = user_data.transactionhistory;

			new_transactions_array.unshift(new_transaction_record);

		if( new_transactions_array.length > 1000){new_transactions_array.pop()}//if lenght is over that//remove first element
		 
		user_data.transactionhistory = new_transactions_array;//update transaction history record
		user_data.credits = new_balance;//update user amount
		
		
			 user_data.save(function(err, results){//save changes
				// console.log(results)
				// console.log(err)
				if(err){
					console.log('error:when attempting to save reedemed money to user account, user document _id : '+ user_data._id +', voucher Code document _id : '+req.query.voucher_id);
					
					return_fn('Server or Conection error');
					return;
				}

				if(results == null || results == undefined || results == ''){//user not found//add user
					console.log('error:when attempting to save reedemed money to user account, with document _id : '+ user_data._id +', voucher document _id : '+req.query.voucher_id);
					return_fn('No data found');
					return;
				}
		 });					
	});
		 
		 		 
		 
		 
		 //save voucher//and give sucess results
		response.voucherprinted = true;
		response.save(function(error, data){
			
		if(err){
			console.log('error: saving when reedeming, with document _id : '+req.query.voucher_id);
			return_fn('Server or Conection error');
			return;
		}
		
		if(response == null || response == undefined || response == ''){//user not found//add user
			console.log('error: No voucher data found when attempting to save reedem, with document _id : '+req.query.voucher_id);
			return_fn('No data found');
			return;
		}
		 
			return_fn('Voucher redemption succesfully made and saved');
			
		});		 
		 
							
	})
	
	
	//respond function 
	function return_fn(message){//send respondse
		
		res.jsonp(message)
		
		
	}
	
	
})
	
	
	
	
	
	
	
/*========================================

    hotspot data
    
========================================*/	
	
app.get('/api/hotspot_data', function(req, res){	
	
	//http://127.0.0.1:4100/api/hotspot_data?location=Orange farm;
	
	var location_of_router = req.query.location;
	
	if(location_of_router == null || location_of_router == undefined || location_of_router == '' || location_of_router == 'undefined'){ 
		
		location_of_router = 'default';	
	}
		
	//find router hostpot data
	function find_router_hotspsot_data(){ 
		 keystone.list('Router hotspot page').model.findOne()
		.where({router_location : location_of_router.toLowerCase()})
		.exec(function(err, response){


			if(err){
				console.log('Error finding router with location');
				send_router_hotspot_data ('');//send nothing back
				return;
			}

			if(response == null || response == undefined || response == ''){//user not found//add user
				console.log('No router with location found');//
				create_new_named_hotspot_data();//create new named hotspot
				return;
			}
			
			send_router_hotspot_data (response); //send named hotspot data back
			return;

		 });
	};
	find_router_hotspsot_data();//start function 
	
	//create model for the location
	function create_new_named_hotspot_data(){//data specified on model is used, this here is disregarded...
		
		keystone.createItems({
			'Router hotspot page' : [{
				router_location : location_of_router.toLowerCase(),
				hotspot_wallpaper: ['{"image_link" :"/default_slide_images/1.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/1.jpg", "ads_sponsored" : true, "hidden" : false}','{"image_link" :"/default_slide_images/2.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/2.jpg", "ads_sponsored" : true, "hidden" : false}','{"image_link" :"/default_slide_images/3.jpg" , "image_status_text" : "Legal for Creatives", "image_status_link": "/default_slide_images/3.jpg", "ads_sponsored" : false, "hidden" : false}','{"image_link" :"/default_slide_images/4.jpg" , "image_status_text" : "Five Fingers", "image_status_link": "/default_slide_images/4.jpg", "ads_sponsored" : false, "hidden" : false}','{"image_link" :"/default_slide_images/5.jpg" , "image_status_text" : "Marseillies", "image_status_link": "/default_slide_images/5.jpg", "ads_sponsored" : false, "hidden" : false}','{"image_link" :"/default_slide_images/6.jpg" , "image_status_text" : "Unarams", "image_status_link": "/default_slide_images/6.jpg", "ads_sponsored" : false, "hidden" : true}','{"image_link" :"/default_slide_images/7.jpg" , "image_status_text" : "Anrya", "image_status_link": "/default_slide_images/7.jpg", "ads_sponsored ": false, "hidden" : true}','{"image_link" :"/default_slide_images/8.jpg" , "image_status_text" : "Urban Village", "image_status_link": "/default_slide_images/8.jpg", "ads_sponsored" : false, "hidden" : true}','{"image_link" :"/default_slide_images/9.jpg" , "image_status_text" : "Nonkuphiri", "image_status_link": "/default_slide_images/9.jpg", "ads_sponsored" : false, "hidden" : true}','{"image_link" :"/default_slide_images/10.jpg" , "image_status_text" : "Know Your Voucher", "image_status_link": "/default_slide_images/10.jpg", "ads_sponsored" : true, "hidden" : true}'],
				free_education_sites : ['{"link":"https://scholar.google.co.za/", "text":"Google scholar"}','{"link":"https://www.google.com","text":"Search on google"}'],
				free_jobs_sites : ['{"link":"https://www.google.com","text":"Search on google"}'],
				free_data_allow : true,
				hotspot_announcements : ['Dare to be different','Dare to write your destiny.'],
				hotspot_how_to_bottom_text : 'Help yourself, To be helped.',
				hotspot_free_sites_bottom_text : 'Pass it on, unconditionally help a stranger, a friend, a family member.',
				notification_bottom_text : 'If it was easy, no one would care. If it was impossible, no one would dare.',
				hotspot_how_to_buy :'/default_slide_images/1.jpg',
				hotspot_how_to_sell :  '/default_slide_images/2.jpg',
				hotspot_how_to_recharge_seller : '/default_slide_images/3.jpg',
				hotspot_how_to_super_admin: '/default_slide_images/4.jpg',
				hotspot_logo : '/images/logo.png',
				
			}]
			
		}, function(err, success){
			if(err){
				
				console.log('Error, when attempt creating new router location');
				send_router_hotspot_data ('');//send nothing back
				return;	
				
			}
			if(success == null || success == undefined || success == ''){
				console.log('No response given after attempt creating new router location');
				send_router_hotspot_data ('');//send nothing back
				return;
			}
			
			find_router_hotspsot_data();//restart search
			return;
		});
		
	}
	
	//responder function	
	function send_router_hotspot_data (data){
		res.jsonp(data);
		return;
	}
	
	
});
	


//================================
	//			upload
	//================================

	//Images for backgrounds//upload

	app.post('/upload', function(req, res) {
		
		var date = new Date();			
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var day = date.getDay();
		var month = date.getMonth();
		var year = date.getFullYear();
			
		var upload_date_time = hour+'-'+minutes+'-'+seconds+(hour>12?daytime='PM':daytime='AM')+', '+day+'-'+month+'-'+ year + ' '; //add date to file name
		
		if(!req.files.filetoupload){//upload file not selected
			console.log(" Error, file to upload not selected..")
				res.redirect("/upload");
				res.end();
			return;
		}

		fs.readFile(req.files.filetoupload.path, function (err, data) {
	
			var imageName = upload_date_time + req.files.filetoupload.originalname;
	
			
			if(!imageName){//Error uploading
	
				console.log("There was an error_ uloading image..")
				res.redirect("/upload");
				res.end();
	
			} else { 
	
			  var newPath = "./static/images/uploads/ads/" + imageName;
	
			  /// write file to uploads/ folder
			  fs.writeFile(newPath, data, function (err) {
	
				//res.sendFile(path.resolve("./static/images/uploads/ads/" + imageName));
				extends_upload(req, res,imageName);
	
			  });
			}
		}); 
	});
	
	
	// show upload contents

	app.get('/upload', function(req, res) {

		extends_upload(req, res);

	})
	
	function extends_upload(req, res, uploadImageLink=null){//uploads and show uploaded contents

		var directory_files = '';//directory files html formatted

		fs.readdir("./static/images/uploads/ads/" , (err, files) => {//read upload folder contents

			files.forEach(file => {

			  directory_files =  directory_files + `<br /><a href="#" onclick="show_file('${file}')" style='margin:20px'>`+ file + '</a><br />';
			  //console.log(directory_files);
			});
		  
			//write upload form, + directory contents
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(`
			<html>
			<head>
				<title>Upload</title>
				<link rel="stylesheet" href="/bootstrap.min.css">
				<link rel="stylesheet" href="/line-awesome/css/line-awesome.css">
				<link rel="stylesheet" href="/index.css">
			</head>
				<body>
					<div style="margin:1vh 2vw 1vh 2vw; padding:0px;width:95vw; height:45vh; background-color:white; box-shadow:3px 3px 2px gainsboro, -1px -1px 2px gainsboro">
						
						<form action="upload" method="post" enctype="multipart/form-data" style='margin:30px'>
						<br/>
						<p> Upload/Images/Text/Doc</p>
						<input type="file" name="filetoupload" class='form-control' ><br>
						<input type="submit" class='btn btn-primary'>
						</form>
						<hr>
						<br />
						<p style='text-align:center'> Recommended image size is : width = 802px , height = 1285px. <br /> Have your image have 30% empty space on sides, Example <a href="#" onclick='show_example()'>Click on me..</a>.
						<br >
						<!-- show uploaded file link if successful -->
						${ ((uploadImageLink)? `<p>Image added <br /><a href="#" onclick="show_file('${uploadImageLink}')">${uploadImageLink}</a></p>` :'<br />Give your image descriptive name. Example <i>Orange-Farm, creativeXminds advertisment june 2019</i>..') }
					</div>
					<div style="margin:1vh 2vw 1vh 2vw; padding:0px;width:95vw; min-height:45vh; background-color:white; box-shadow:3px 3px 2px gainsboro, -1px -1px 2px gainsboro">
					${ directory_files }
					</div>
					<p id="page_location_footer" style="width:100vw; height:7vh; margin:1vh 0px 0px 0px; padding:0px;text-align:center; line-height:7vh; vertical-align: middle">
					StreetWiFiy
					</p>
					<script>
						var current_domain = window.location.host
						
						function show_file(file){
							window.open('http://' + current_domain +'/images/uploads/ads/' + file );
						}
						function show_example(){
							window.open('http://' + current_domain +'/images/background%20example.png');
						}
					</script>
				</body>
			</html>
			
			`
			
			
			);
		
			res.end();
		});



	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});