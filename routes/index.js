var keystone = require('keystone');
var nunjucks = require('nunjucks');
var path = require ('path');//to solve sendFile forbidden error
//var express = require('express');



var fs = require('fs'); //file read

keystone.get('routes', function(app){
   // app.use(express.static('.//'));
   



	var corse = require('cors');
	app.use(corse());


	//body parser is ignored---- in this keystone, actually it get overriden by some code/module i dont know
	// app.use(bodyParser.json({ limit: "500kb" }));
	// app.use(bodyParser.urlencoded({
	// 	// // extended: true,
	// 	// limit: "5000kb" 
	// }));

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
			if(response == null){//if voucher not found in normal vouchers/search complimentary
				

				//++++++++ search for code in complenmetary vouchers ++++++++++

				keystone.list('Complementary Voucher').model.findOne()
				//.where({soldto : seach_code_,voucherprinted : false})
				.where({soldto : seach_code_})
				.exec( function(error, complementary_response){
				if(error){
					res.jsonp('Problem finding Voucher');
				}
				
				if(complementary_response == null){//if voucher not found in normal vouchers/search complimentary
			
				   res.jsonp('Voucher Not found');
				}
				
				else{
						res.jsonp(complementary_response); //give response
						//++++++++++++++++++++save voucher as printed+++++++++++++++++
							
						complementary_response.voucherprinted = true;//set voucher as printed (yes)
						complementary_response.complementary_soldto_device_mac = req.query.mac
						complementary_response.save(function(err, success){

							if(err){
								console.log('Error, updating complementary tickets tracking details when printed : '+err);
							   	return;
				   			}
						});
							
					}
				   
						
				});



			   // res.jsonp('Voucher Not found');
			   return;
			}
			
            else{
                res.jsonp(response); //give response
				//++++++++++++++++++++save voucher as printed+++++++++++++++++
				
				response.voucherprinted = true;//set voucher as printed (yes)
				response.voucher_soldto_device_mac = req.query.mac;//save mac address of device sold to
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

		//search complementary voucher if not found in normal voucher



		//------------------- get list of user baught vouchers -------------------

		if(req.query.code == 'baught_vouchers'){//give user unique code
		
			//console.log(req.query.mac)
			

				keystone.list('Voucher Codes').model.find()
				.where({voucher_soldto_device_mac : req.query.mac, voucherstate : 'used',voucherprinted : true})
				.sort({soldto: "descending"})
				.exec( function(error, response){

				if(error){

					res.jsonp('Problem finding Voucher');
				}

				if(response == null){//if voucher not found in normal vouchers/search complimentary
					

					//++++++++ search for code in complenmetary vouchers ++++++++++

					keystone.list('Complementary Voucher').model.find()
					//.where({soldto : seach_code_,voucherprinted : false})
					.where({complementary_soldto_device_mac : req.query.mac, voucherprinted : true})

					.exec( function(error, complementary_response){

						if(error){
							res.jsonp('Problem finding Voucher');
						}
						
						if(complementary_response == null){//if voucher not found in normal vouchers/search complimentary
					
							res.jsonp('Voucher Not found');
						}
						
						else{
								res.jsonp(complementary_response); //give response
						
							}
					
							
					});



				// res.jsonp('Voucher Not found');
				return;
				}
				
				else{
					res.jsonp(response); //give response
								
				}
			
				
			});
		
		
		
		}

        
        
    });
    

//==============================================================
// vouchers
//==============================================================  

  /*=======================================
    get all available voucher types and costs
	=======================================*/

	// --------- manual voucher types

	app.get('/api/voucher_types', function(req, res){

		keystone.list('Voucher Types').model.find().where({voucher_creation_method : {$ne : 'automatic' }})
		//.where(voucher_count != '0')
		.exec( function(error, response){
		if(error){
			   return res.jsonp('Error retrieving available vouchers, please contact administrator');
		}
		 if(response == null){

			//call function to scrape db and attemp to rebuld voucher types list
			update_or_gather_voucher_types_list();
			
			 
			return res.jsonp('No vouchers to sell available at the moment, please try gain later or contact administrator');
		   
		}
		   // console.log(response);
			return res.jsonp(response);
		});
	});

	// --------- automatic voucher types

	app.get('/api/auto_voucher_types', function(req, res){

		keystone.list('Voucher Types').model.find().where({voucher_creation_method : {$ne : 'manual' }})
		.exec( function(error, response){
		if(error){
			   return res.jsonp('Error retrieving available vouchers, please contact administrator');
		}
		 if(response == null){

			//call function to scrape db and attemp to rebuld voucher types list
			update_or_gather_voucher_types_list();
			
			 
			return res.jsonp('No vouchers to sell available at the moment, please try gain later or contact administrator');
		   
		}
		   // console.log(response);
			return res.jsonp(response);
		});
	});



		
 	 /* =======================================
		Update available vouchers data/create new/
				qeury/send alert when low
	    ======================================= */

	//call function to create new vouchers automatically for vouchers that are zero or low/send alert if vouchers are low after scraping

	function update_or_gather_voucher_types_list(res = null){//passsing http respond object if available//will be available if function is called by via a route not by function nam from another function or method

		var time_sorted_and_flattern_vouchers = []//store processed/flatterned/summarised data for time vouchers
		var data_sorted_and_flattern_vouchers = []//store processed/flatterned/summarised data for data vouchers

		keystone.list('Voucher Codes').model.find().where({voucherstate : 'new', voucher_created : {$ne : 'automatic' }})
		.exec( function(error, response){
			if(error){

				return (res?res.jsonp('Problem finding Voucher'): 'Problem finding Voucher');//if called by http use [ jsonp() ] else use [ return ] for functions
			}
			if(response == null){
				return (res?res.jsonp('No un-used vouchers found'): 'No un-used vouchers found'); //if called by http use [ jsonp() ] else use [ return ] for functions
			}
			
			response.forEach(function(data, index, array){


				//find if voucher is for time of data by looking if its [ voucherprofile ] porpulated or not
				var type_of_voucher =(data.voucherprofile != 'N/A')?'data':'time';

				//find if voucher data or by looking if its [ voucherprofile ] porpulated or not
				var profile_of_voucher =(data.voucherprofile != 'N/A')?data.voucherprofile : data.voucherprofile_time;

				let temporarly_voucher_object = {voucher_cost: data.voucheramount, voucher_profile : profile_of_voucher.toLowerCase() , voucher_type : type_of_voucher ,voucher_count: 1}


				if(data.voucherprofile != 'N/A'){//work with data voucher array
					

					//if [ data_sorted_and_flattern_vouchers ] array is empty add first data voucher in it
					if(data_sorted_and_flattern_vouchers.length == 0){
						return data_sorted_and_flattern_vouchers.push(temporarly_voucher_object);
					}

					data_sorted_and_flattern_vouchers.forEach(function(voucher, index){
						

						//let temporarly_voucher_object = {voucher_cost: data.voucheramount, voucher_profile : profile_of_voucher , voucher_type : type_of_voucher ,voucher_count: 1}

						let matching_found = false;//tracks if a match was found

						// 1) test for same voucher cost
						//if(temporarly_voucher_object.voucher_cost == voucher.voucher_cost){//issue, this give false, always in this code
						if(temporarly_voucher_object.voucher_cost){	
							//2nd check
							//test for voucher profile
							if(temporarly_voucher_object.voucher_profile == voucher.voucher_profile){

								//if therez a match 
								//increment number of that voucher [ voucher_count ]
								data_sorted_and_flattern_vouchers[index].voucher_count = Number(data_sorted_and_flattern_vouchers[index].voucher_count) + 1; 
								
								//set match to have been found
								matching_found = true;
							}

							//if array at end and no match found, add voucher as part of array
							if(data_sorted_and_flattern_vouchers.length -1 == index){
								if(matching_found == false){//add item to array
									data_sorted_and_flattern_vouchers.push(temporarly_voucher_object);
								}

							}
						}

					});


				}

				
				else{//work with data voucher array//work with time voucher array

					//if [ data_sorted_and_flattern_vouchers ] array is empty add first time voucher in it
					if(time_sorted_and_flattern_vouchers.length == 0){
							return time_sorted_and_flattern_vouchers.push(temporarly_voucher_object);
					}

					time_sorted_and_flattern_vouchers.forEach(function(voucher, index){
											
						
						//let temporarly_voucher_object = {voucher_cost: data.voucheramount, voucher_profile : profile_of_voucher , voucher_type : type_of_voucher ,voucher_count: 1}

						let matching_found = false;//tracks if a match was found

						// 1) test for same voucher cost
						//if(temporarly_voucher_object.voucher_cost == voucher.voucher_cost){//issue, this give false, always in this code
						if(temporarly_voucher_object.voucher_cost){
							//2nd check
							//test for voucher profile
							
							if(temporarly_voucher_object.voucher_profile == voucher.voucher_profile){

								//if therez a match 
								//increment number of that voucher [ voucher_count ]
								time_sorted_and_flattern_vouchers[index].voucher_count = Number(time_sorted_and_flattern_vouchers[index].voucher_count) + 1; 
								
								//set match to have been found
								matching_found = true;
							}

							//if array at end and no match found, add voucher as part of array
							if(time_sorted_and_flattern_vouchers.length -1 == index){
								if(matching_found == false){//add item to array
									time_sorted_and_flattern_vouchers.push(temporarly_voucher_object);
								}

							}
						}						




					});


				}



			});

			

			// +++++ save scrapping results 

		// 	//delete all already saved voucher types list
		// 	keystone.list('Voucher Types').model.remove()
		// 	.exec( function(error, response){
		// 		if(error){
		// 			console.log('Error retrieving available vouchers types, please contact administrator');
		// 		}
		// 		if(response == null){
		// 			console.log('voucher type list already empty, please contact administrator');
		// 		}
		// 		//console.log('all voucher types removed');
				


		// 	//save newly created voucher type list	
		// 	keystone.createItems({//add items to db//user details
					
		// 		'Voucher Types' : data_sorted_and_flattern_vouchers.concat(time_sorted_and_flattern_vouchers)
				
				
		// 	}, function(err, results){
		// 		if(err){
		// 			console.log('Error adding voucher types list to db');
		// 			return;
		// 		}
				
		// 		//console.log(results);
		// 	});
			

		// 	//reurn response 
		// 	return (res?res.jsonp(data_sorted_and_flattern_vouchers.concat(time_sorted_and_flattern_vouchers)) : data_sorted_and_flattern_vouchers.concat(time_sorted_and_flattern_vouchers));//if called by http use [ jsonp() ] else use [ return ] for functions

		
		// });

			//delete all [manual created ] already saved voucher types list
			keystone.list('Voucher Types').model.remove({voucher_creation_method : 'manual'}, function(error, response){
				

				if(error){
					console.log('Error retrieving available vouchers types, please contact administrator');
				}
				if(response == null){
					console.log('voucher type list already empty, please contact administrator');
				}
				//console.log('all voucher types removed');

				//save newly created voucher type list	
				keystone.createItems({//add items to db//user details
						
					'Voucher Types' : data_sorted_and_flattern_vouchers.concat(time_sorted_and_flattern_vouchers)
					
					
				}, function(err, results){
					if(err){
						console.log('Error adding voucher types list to db');
						return;
					}
					
					//console.log(results);
				});
				

				//reurn response 
				return (res?res.jsonp(data_sorted_and_flattern_vouchers.concat(time_sorted_and_flattern_vouchers)) : data_sorted_and_flattern_vouchers.concat(time_sorted_and_flattern_vouchers));//if called by http use [ jsonp() ] else use [ return ] for functions

			
		});





	})

	}


//link to invoke update_or_gather_voucher_types_list() function
app.get('/api/voucher_types_add', function(req, res){
	update_or_gather_voucher_types_list(res);//pass http respond object on function call/invoke
});


//++++++++++++++++++++++++++++++

// automatic voucher types creation/viewing/deleting

//++++++++++++++++++++++++++++++

//---- auto voucher creation 

app.get('/api/auto_voucher_types_add', function(req, res){

	//auto voucher processing response
	function auto_voucher_processing_response(reply){
		
		//send reply
		res.jsonp(reply);

		return;
	}


	//console.log(req.query);


	//find and filter db stored auto vouchers types
	keystone.list('Voucher Types').model.find().where({voucher_creation_method : {$ne : 'manual' }})
		.exec( function(error, response){

			if(error){

				//give error response
				auto_voucher_processing_response('db query connection error');
				console.log('Error, when attempting to query [ voucher tpes ] database.');

				return;
			}

			if(response == null || response == ''){//if no automatic voucher types stored, create new voucher types

				create_auto_voucher_type();//create new voucher type
				
				return;
			}

			//check for duplicate voucher type

			

			var voucher_match_found = false;
			response.forEach(function(data, index){

			
				//check for matching data/time
				var voucher_or_data_profile = (req.query.profile_limit_type == 'data_limited'? req.query.voucher_data_value + ' '+ req.query.voucher_data_limit_type : req.query.voucher_time_value + ' '+ req.query.voucher_time_limit_type);

				if(data.voucher_profile == voucher_or_data_profile){ //if match
					
					//check if amount match
					if(Number(data.voucher_cost) == Number(req.query.voucher_price) ){//if match
						console.log(Number(data.voucher_authorized_location ) , Number(req.query.voucher_hotspot_location ))
						//check if location match
						if(data.voucher_authorized_location == req.query.voucher_hotspot_location ){
							voucher_match_found = true; //set match to found

						}
						
						
					}


				}

			});

			
			if(voucher_match_found){//if voucher match was found
			
				//give duplicate error
				auto_voucher_processing_response('Error, duplicate found');
				//console.log('Error, duplicate found');
				return;

			}
			if(!voucher_match_found){//if voucher match not found
				
				//create new voucher type
				create_auto_voucher_type();
				return;

			}


		}
	);


	//store new voucher types
	function create_auto_voucher_type(){
		
		keystone.createItems({//add items to db//user details
						
			'Voucher Types' : [
				{

				voucher_type : (req.query.profile_limit_type == 'data_limited'? 'data' : 'time'),
				voucher_cost : req.query.voucher_price,
				voucher_profile :(req.query.profile_limit_type == 'data_limited'? req.query.voucher_data_value + ' '+ req.query.voucher_data_limit_type : req.query.voucher_time_value + ' '+ req.query.voucher_time_limit_type),
				radius_server_voucher_profile : req.query.profile_detals,
				wifi_radius_auto_voucher_details :JSON.stringify({expiery : req.query.voucher_expiery_date_value + ' ' + req.query. voucher_expiery_type, voucher_reset : req.query.voucher_reset}),
				voucher_count: 'N/A',
				voucher_creation_method : 'automatic',
				voucher_authorized_location : req.query.voucher_hotspot_location,
														
			}
		],
			
			
		}, function(err, results){
			if(err){

				auto_voucher_processing_response('db query connection error');
				console.log('Error, when attempting to create new [ voucher tpes ] on database.');
				return;
			}
			
			//console.log(results);
			auto_voucher_processing_response('success : new auto voucher type created');
		});


	}


});


//---- auto voucher view

app.get('/api/auto_voucher_types_view', function(req, res){

	
	keystone.list('Voucher Types').model.find().where({voucher_creation_method : {$ne : 'manual' }})
	.exec( function(error, response){

		if(error){

			//give error response
			res.jsonp('db [auto voucher types ] query connection error');
			console.log('Error, when attempting to query db for [ auto voucher tpes ].');

			return;
		}

		if(response == null || response == ''){//if no automatic voucher types stored

			//give error response
			res.jsonp('Error, no [ auto voucher type ] have been created yet');
			console.log('Error, no [ auto voucher tpes ] found on db.');
			
			return;
		}

		//send data
		res.jsonp(response);

	});



});




//---- auto voucher delete
app.get('/api/auto_voucher_types_delete', function(req, res){

	//console.log(req.query._id)


	//if action is delete
	if(req.query.action == 'delete'){

		keystone.list('Voucher Types').model.findById(req.query._id)
		.remove( function(error, response){

			if(error){

				//give error response
				res.jsonp('db [auto voucher types ] delete connection error');
				console.log('Error, when attempting to delete [ auto voucher type ] on db.');

				return;
			}

			if(response == null || response == ''){//if no automatic voucher types stored

				//give error response
				res.jsonp('Error, specified [ auto voucher type ] to delete not found');
				console.log('Error, specified [ auto voucher type ] to delete not found on db.');
				
				return;
			}

			//send data
			res.jsonp('Success, specified [ Voucher Type ] deleted');

		});
	}

	//if action is enable or disable
	if(req.query.action == 'enable' || req.query.action == 'disable'){

		keystone.list('Voucher Types').model.findById(req.query._id)
		.exec(function(error, response){

			if(error){

				//give error response
				res.jsonp('db [auto voucher types ] delete connection error');
				console.log('Error, when attempting to delete [ auto voucher type ] on db.');

				return;
			}

			if(response == null || response == ''){//if no automatic voucher types stored

				//give error response
				res.jsonp('Error, specified [ auto voucher type ] to delete not found');
				console.log('Error, specified [ auto voucher type ] to delete not found on db.');
				
				return;
			}


			//make changes and save

			response.voucher_active = (req.query.action == 'enable'?true:false); //set to true or false depending on what actioin is set to be
			response.save();//save changes, no need to capture resuslts, user/admin voucher menu will be auto updated when response is recived and if changes happened it wil show// writing this seem to have cost almost equal amount of energy it would have cost to write call back function whin save()
			//send data
			res.jsonp('Success, specified [ Voucher Type ] deleted');

		});



	}

	// else{

	// 	//give error response
	// 	res.jsonp('Error, specified [ auto voucher type ] to delete not found');
	// }


});




  /*=======================================
    sell voucher to user
	=======================================*/  
    
  app.get('/api/sell', function(req, res){
      
        
        if(req.query.code == 'sell_voucher'){
			
			
			
             
        //http://127.0.0.1:4100/api/sell?code=get_voucher&unique_code=xyz;//api query link
            
        //'http://127.0.0.1:4100/api/sell?code=sell_voucher&unique_code='+seller_code_input.value+'&voucher_amount='+seller_voucher_amount_input.value+'&seller_id='+seller_login.seller_id + '&ticket_type=' + data_or_time_ticket_pressed_tracker;
           
            
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
              
        // console.log('-----------------------');
        // console.log(req.query);
        // console.log('-----------------------');   
            
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
				

				//catch auto vouchers
				if(req.query.u_link.length > 6 && req.query.u_link_allowed && req.query.u_link_allowed == "true"){//if wifi radius server link is grether than 6 characters

					/*
						external wifi radius simple create single voucher api

						http://127.0.0.1:3000/create_user?user_id%5Buser_name%5D=&data_profile=200Mb%20max%20data&total_account=1&account_group_name=&voucher_username_suffix=&account_type=voucher&external_api_request=true

					*/

					var wifi_radius_api = req.query.u_link + `/create_user?user_id%5Buser_name%5D=&data_profile=${req.query.radius_profile}&total_account=1&account_group_name=&voucher_username_suffix=&account_t
					ype=voucher&external_api_request=true`;

					//get nodejs http library
					var standard_http_library = require('http');

					//make http call to [ wifi radius server ]
					standard_http_library.get(wifi_radius_api, (resp) => {

					let data = '';

					// A chunk of data has been recieved.
					resp.on('data', (chunk) => {
						data += chunk;
					});

					// The whole response has been received. Print out the result.
					resp.on('end', () => {

						//creade ticket to add to db
						var voucher_to_add_to_system = { //voucher data details object
							vouchercode:JSON.parse(data)[0].name,
							//vouchercode:data[0].password,
							voucheramount:req.query.voucher_amount,
							voucherexpiry:req.query.voucher_expiery,
							voucherstate:'new',
							loadedby:req.query.seller_id,
							voucher_created : 'automatic',

						}
					

						//if time or data
						if(req.query.ticket_type == 'time'){//if time, 

							//save voucher time
							voucher_to_add_to_system.voucherprofile_time = req.query.new_voucher_profile;
						}

						if(req.query.ticket_type == 'data'){//if data

							//save voucher data
							voucher_to_add_to_system.voucherprofile = req.query.new_voucher_profile;
						}
						


						//add voucher to db
						//----- add codes not on the system to the database --
						keystone.createItems({//add items to db//user details
							
							'Voucher Codes' :[ voucher_to_add_to_system ],
							
						}, function(err, results){
							
							if(err){

								//give error
								//res.jsonp({status: 'sorry Please try again, later', new_credit : 'no_value_change'});
								console.log('Error, new [ Auto voucher ] creation.');
								return;
							}
							
							
							//console.log('Success, new auto voucher saved to db');
							
							//write sell to database // provide newly created voucher voucher code
							write_sell_toDB(JSON.parse(data)[0].name,);

							return;
						});

						
					});

					}).on("error", (err) => {

						//give error
						//res.jsonp({status: 'sorry Please try again, later', new_credit : 'no_value_change'});
						console.log("Error: contacting wifi radius, on address : " + req.query.u_link + ", to request for a new voucher" + err.message);
						res.jsonp({status : 'sorry Please try again, later', new_credit : 'no_value_change'});//give error response to user
						return;

					});


				}

				
				else{
					//write sell to database//for non auto produced vouchers
					write_sell_toDB();
					return;
				}
               return;
            }
               // console.log(response);
                return res.jsonp({status : 'this code is used, Try a new code..', new_credit : 'no_value_change'});
        });
            
            
            
		/*
			NON AUTO VOUCHERS
		 find doc contains [seach_code=] 
		 */
        function write_sell_toDB(auto_voucher_username = 'none'){
		

		//voucher query for [ data ] 

		if(req.query.ticket_type == 'time'){

			var voucher_type_to_search_for =  {voucheramount : seller_voucher_amount_, voucherstate : 'new', voucher_created : 'manual' };
			//var voucher_type_to_search_for =  {voucheramount : seller_voucher_amount_, voucherstate : 'new', voucher_complimentary : {$ne : true}, voucher_created : {$ne : 'automatic'} };

		}
		
		//voucher query for [ time ] 
		if(req.query.ticket_type == 'data'){

			var voucher_type_to_search_for =  {voucheramount : seller_voucher_amount_, voucherstate : 'new', voucher_created : 'manual'  };
			//var voucher_type_to_search_for =  {voucheramount : seller_voucher_amount_, voucherstate : 'new', voucherprofile : {$ne : 'N/A'}, voucher_complimentary : {$ne : true}, voucher_created : {$ne : 'automatic'} };

		}

		//if voucher complementary 
		if(req.query.is_complementary){

			var voucher_type_to_search_for =  {voucheramount : seller_voucher_amount_, voucherstate : 'new' };
			//var voucher_type_to_search_for =  {voucheramount : seller_voucher_amount_, voucherstate : 'new', voucher_complimentary : {$ne : false} };
			
		}

		//for automatic created vouchers
		if(auto_voucher_username != 'none' ){//if [ auto_voucher_username  ] is provided

			var voucher_type_to_search_for =  {voucheramount : seller_voucher_amount_, voucherstate : 'new', vouchercode : auto_voucher_username };
			//var voucher_type_to_search_for =  {voucheramount : seller_voucher_amount_, voucherstate : 'new', voucher_created : {$ne : 'manual'}, vouchercode : auto_voucher_username };
			
		}

		// console.log(auto_voucher_username);
		// console.log(voucher_type_to_search_for);


        keystone.list('Voucher Codes').model.findOne()
            .where(voucher_type_to_search_for)
            .exec( function(error, response){
				
	
            if(error){
               return res.jsonp({status: 'sorry Please try again, later', new_credit : 'no_value_change'});
            }
            if(response == null){
               return res.jsonp({status : 'error Selling voucher, Please try different amount, or try again later', new_credit : 'no_value_change'});
            }  
          //  console.log(response);
          
                
            
             // res.jsonp('voucher sold for R'+seller_voucher_amount_); 
			
			//+++++ if voucher is complementary +++++
			if(response.voucher_complimentary){



				/* 
							
							
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

					

					//complementary voucher find


					//complementary voucher make
					function complementary_voucher_request_record_save(){

						console.log('this is cmpementary record save')






						return null;
					}

							
							
							
							
							
							
							
				*/
				//+++++++ create complimentary voucher +++++

				//check if voucher already exist in complemntary tickets

				keystone.list('Complementary Voucher').model.findOne()

				.where({soldto : seach_code_})
				
				.exec( function(error, complementary_response){

					if(error){
						return res.jsonp({status : 'sorry Please try again, later', new_credit : 'no_value_change'});
					}
					
					if(complementary_response == null){ //if voucher not found/not yet created


						keystone.createItems({//create new complimentary voucher
				
							'Complementary Voucher' : [
								{
									vouchercode : response.vouchercode,
									voucher_username : response.voucher_username,
									voucher_password : response.voucher_password ,
									voucheramount : response.voucheramount,
									voucherprofile : response.voucherprofile ,
									voucherprofile_time : response.voucherprofile_time,
									voucherexpiry : response.voucherexpiry,
									soldby : req.query.seller_id,
									soldto : seach_code_,
									voucherproducedday : day,//day of month voucher was printed, to be used as to calculate amount of time before point cant be recouped by the seller
									loadedby : response.loadedby,
									voucherproducedmonth : date.getMonth(),
									voucherproducedyear : date.getFullYear(),
									voucherproducedhour : date.getHours(),
									voucherproducedminute : date.getMinutes(),
									
								}
							]
							
							
						}, function(err, results){
							if(err){
								console.log('Error creating new complementary ticket');
								return res.jsonp({status : 'sorry Please try again, later', new_credit : 'no_value_change'});
							}	
						});			
						
					
					}

					else{
						// console.log(response);
						//if voucher found/voucher already created
						return res.jsonp({status : 'this code is used, Try a new code..', new_credit : 'no_value_change'});
					}
				});

			}



			//++++++ non complementary vouchers

			if(!response.voucher_complimentary){

				//if voucher created using hotel/resturent menu
				if(req.query.voucher_requester_is_hotel_or_cafe.toString() == 'true'){//if true

					//set voucher hospitality menu checkbox to true
					response.voucher_hospitality_menu = true;
				}

                response.voucherstate = 'used';
                response.soldby = req.query.seller_id;
                response.soldto = seach_code_;
				response.voucherproducedday = day;//day of month voucher was printed, to be used as to calculate amount of time before point cant be recouped by the seller
				response.save();

			}


			//++++++ do accounting and update account +++++++++
			 
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

		//   http://127.0.0.1:4100/api/sell?code=sell_recharge&voucher_recharge_amount=500&seller_id=&seller_name_surname=System&admin_id=8905135800000&userType=&userType_to_recharge=Server%20Admin //administrator account recharge link example

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
		
		
		//+++++++++++++++++++++++++++++++ system to admin account recharge +++++++++++++++++++++++++++++++++++++++++++++++++
		
		if(seller_fullname[0].toLowerCase() == 'system'){

			//console.log(req.query)

			//keystone.list('seller distributor').model.findOne().where({idnumber : req.query.admin_id, usertype : req.query.userType_to_recharge, name : seller_name.toLowerCase(), surname : seller_last_name.toLowerCase()})

			keystone.list('seller distributor').model.findOne().where({idnumber : req.query.admin_id, usertype : req.query.userType_to_recharge}).exec(
				  
				function(error, response){

					if(error){ 
						console.log('system recharge admin: server error');
						res.jsonp('Server or Conection error');
						return;
					}

					if(response == '' || response == null || response == undefined){
						console.log('system recharge admin : user Not Exist');
						res.jsonp('Error finding admin');
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
					var new_transaction_record = ' '+hour+':'+minutes+(hour>12?daytime='PM':daytime='AM')+', '+day+'/'+month+'/'+year+';  '+'Account Recharged by SYSTEM for'+' R'+recharge_amount+'+; New balance : R'+new_balance;


					var new_transactions_array = response.transactionhistory;

						new_transactions_array.unshift(new_transaction_record);

					if( new_transactions_array.length > 1000){new_transactions_array.pop()}//if lenght is over that//remove first element

					response.transactionhistory = new_transactions_array;
					 //adjust credits
					response.credits =  Number(response.credits) + Number(recharge_amount);
					
					response.save(function(err, response){ //save calculation to admin profile
						if(err){
							console.log('Connection/server error, please try gain later admin:account Recharge save()');
							res.jsonp('Server or Conection error');
							return;
						};
						if(response == '' || response == undefined || response == null){
							console.log('Error user not found : admin Account Recharge');
							res.jsonp('Server or Conection error');
							return;
						}
						
						
						//send response back to user

						//res.jsonp({name : seller_name, lastname  : seller_last_name, id : seller_id, amount : recharge_amount});
						res.jsonp({amount : recharge_amount});
					});
				}
			);

			return true;
		}



		//+++++++++++++++++++++++++++++++ user to user account recharge +++++++++++++++++++++++++++++++++++++++++++++++
		
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
							

							var codes_to_add_to_system = { //voucher data details object
								vouchercode:voucher_codes[voucher_counter].password,
								voucheramount:voucher_codes[voucher_counter].cost,
								voucherexpiry:voucher_codes[voucher_counter].expiery,
								voucherstate:'new' ,loadedby:req.query.added_by,
							}


							//check if its data or time voucher being loaded							
							if(voucher_codes[voucher_counter].profile.toLowerCase().search('mb') > -1 || voucher_codes[voucher_counter].profile.toLowerCase().search('meg') > -1 ||  voucher_codes[voucher_counter].profile.toLowerCase().search('gb') > -1 ||  voucher_codes[voucher_counter].profile.toLowerCase().search('gig') > -1){ //if its data voucher

								codes_to_add_to_system.voucherprofile = voucher_codes[voucher_counter].profile;//add time voucher info
							}

							else{//else add data voucher info
								codes_to_add_to_system.voucherprofile_time = voucher_codes[voucher_counter].profile;
							}

							//add voucher to list to be added to system
							codes_not_on_system.push(codes_to_add_to_system);
							

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
	
	
	//mock link for db, update status from router// 
	//http://127.0.0.1:3100/api/router_checkin?router_name=Home%20router&router_location=Orange%20Farm&router_details=If%20issue%20contact%20Tsehla%20on%200719010014&hotspot_ip=
	
	
	app.get('/api/router_checkin', function(req, res){
		 
			var router_name = req.query.router_name;
			var router_location = req.query.router_location;
			var router_details = req.query.router_details;

			//for mikrotik router who get intenet connection from modem or other non mikrotik lte router, we will extract ip address from request object

		 	//console.log('router ip provided by the router', req.query.hotspot_ip);
			//console.log('router ip, extracted from req object', req.header('x-forwarded-for'),req.connection.remoteAddress)
			//example results = {address=NA;interface=NA;network=102.182.165.208};{.id=*1;address=192.168.88.1/24;comment=defconf;interface=ether1;network=192.168.88.0};http://streetwifiy.herokuapp.com/api/router_checkin?router_name=Leshata School router,{.id=*3;address=102.182.165.208/32;comment=;interface=lte1;network=102.182.165.208}
			var router_ip = '{address=NA;interface=NA;network='+(req.header('x-forwarded-for')?req.header('x-forwarded-for'):req.connection.remoteAddress)+'};'+req.query.hotspot_ip ;
			
			
			
		
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
	
//console.log(req.query.user_id,req.query.usertype,req.query.type );	
	
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

		//complementar unclaimed vouchers find
		keystone.list('Complementary Voucher').model.find()

		.where({soldby : req.query.user_id})

		.exec( function(error, complementary_redeem_response){
				
			var temp_complementary_ticket_redeem_array = [];//tem array to save complementary redeem vouchers

			if(error){
				console.log('Problem finding complementary voucher to redeem');
				//return;
			}
					
			if(!complementary_redeem_response){//if voucher not found in normal vouchers/search complimentary
				
				console.log('No complementary vouchers to redeem');
				//return;
			}

			if(complementary_redeem_response){//if redeemable voucher found, add to array

				complementary_redeem_response.forEach(function(data, index){
					var date = new Date();
					if(data.voucherprinted != true){ //this/complementary vouchers are produced on demand, no need to check if they are used or new/not used
						//console.log(data)
								
						var voucher_id = data.soldto.split(':');//give code from buyer back
						temp_complementary_ticket_redeem_array.push({voucher_id:voucher_id[1], voucher_doc_id: data._id, voucher_amount: data.voucheramount, voucherproducedday:data.voucherproducedday, server_day:date.getDate()});
								
					}
							
				});

				respone_ = temp_complementary_ticket_redeem_array//tranfer complementary array content to main array
			}

			normal_vouchers_to_redeem_processing();//start processing of normal redeemable vouchers 

		})


		function normal_vouchers_to_redeem_processing(){
			
			if(err && respone_.length == 0){ //if error and no complementary ticket to redeem send error
				console.log('error: finding voucher history for user ID : '+req.query.user_id);
				return_fn('error');
				return;
			}
			
			if(response == null || response == undefined || response == '' && respone_.length == 0){//user not found and no complementary ticket to redeem send error
				console.log('error: No vouchers found for user ID : '+req.query.user_id);
				return_fn('error : no vouchers to claim');
				return;
			}
			
			
			if(response){//if there is ticket to be redeemed, (non complementary voucher/normal vouchers)

				response.forEach(function(data, index){
					var date = new Date();
					if(data.voucherprinted != true && data.voucherstate != 'new'){
							var voucher_id = data.soldto.split(':');//give code from buyer back
							respone_.push({voucher_id:voucher_id[1], voucher_doc_id: data._id, voucher_amount: data.voucheramount, voucherproducedday:data.voucherproducedday, server_day:date.getDate()});
						}
					
				});

			}
			
			if(respone_.length < 1){//if no data match request//or no ticket to be redeem for this seller account
				
				respone_ = 'error : no vouchers to claim';
			}
			//console.log(respone_)
			return_fn(respone_); 
			
			return;  
		}
							
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

	//complementary rejected voucher auto redeem
	//http://127.0.0.1:3100/api/transations?type=rejected_voucher_auto_redeem&device_mac=9G%3A2E%3A4C%3A69%3Ak3%3ABA
	if(req.query.type == 'rejected_voucher_auto_redeem'){

		//console.log(req.query.type, req.query.device_mac);
		var date = new Date();
		 
		keystone.list('Complementary Voucher').model.find()

		.where({complementary_soldto_device_mac : req.query.device_mac, complementary_voucher_reject : false, voucherproducedyear : date.getFullYear(), voucherproducedmonth : date.getMonth(), voucherproducedday : date.getDate() })

		.exec( function(error, complementary_redeem_response){

			if(error){
				console.log('Problem finding complementary voucher to redeem');
				return;
			}
					
			if(!complementary_redeem_response){//if voucher not found in normal vouchers/search complimentary
				
				console.log('No complementary vouchers to redeem');
				return;
			}


			//console.log(complementary_redeem_response);

			complementary_redeem_response.forEach((data, index)=>{

				/* ###

					THIS NEEDS TO BE MORE REFINED, IT HAS LOOP HOLES THAT ALLOW THE USER TO REDEEM VOUCHER IN THE SAME HOUR AND THE NEXT HOUR, SO LONG THE MINUTES CONDITION IS MET, SO THE SECOND HOUR LOOP HOLE NEEDS TO BE RESTRICTED.

				*/

				if( (date.getHours() - data.voucherproducedhour) == 0 || (date.getHours() - data.voucherproducedhour) == 1 || (date.getHours() - data.voucherproducedhour) == -23){//if date is [ same hour ] or [ one hour more ] or [ one hour after midnight ]

					//check minutes
					//console.log(date.getMinutes(),(date.getMinutes() - data.voucherproducedminute) == 0,(date.getMinutes() - data.voucherproducedminute) == 1,(date.getMinutes() - data.voucherproducedminute) == -59,data.voucherproducedminute)

					if( (date.getMinutes() - data.voucherproducedminute) == 0 || (date.getMinutes() - data.voucherproducedminute) == 1 || (date.getMinutes() - data.voucherproducedminute) == -59){//if date is [ same minute ] or [ one minute more ] or [ first minute after 60 minutes ]
					
					//	console.log(complementary_redeem_response[index]);





					//get seller and update their account//with amount to reddem
						
					keystone.list('seller distributor').model.findOne()
					.where({idnumber : complementary_redeem_response[index].soldby, usertype: 'Seller'})
					.exec(function(err, user_data){

							if(err){
								console.log('error : when finding user when attempting to reedem user  id no : '+complementary_redeem_response[index].soldby);
								//return_fn('Server or Conection error');
								return;
							}
									
							if(user_data == null || user_data == undefined || user_data == ''){//user not found//add user

								console.log('error : when finding user when attempting to reedem user  id no : '+complementary_redeem_response[index].soldby+ ' , no response given/response empty.');
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
									
							var new_balance = Number(user_data.credits) + Number(complementary_redeem_response[index].voucheramount);
									
							
							var new_transaction_record = ' '+hour+':'+minutes+(hour>12?daytime='PM':daytime='AM')+', '+day+'/'+month+'/'+year+';  '+'Voucher redeemed for : '+' R'+ complementary_redeem_response[index].voucheramount +'+,; Voucher ref _id : '+complementary_redeem_response[index]._id+'; New balance : R'+new_balance ;

							var hour = date.getHours();
							var new_transactions_array = user_data.transactionhistory;

								new_transactions_array.unshift(new_transaction_record);

							if( new_transactions_array.length > 1000){
								new_transactions_array.pop();
									
							}//if lenght is over that//remove first element
							
							user_data.transactionhistory = new_transactions_array;//update transaction history record
							user_data.credits = new_balance;//update user amount
									
										
							user_data.save();//save changes/edits to accounts					
						
						});
								
										
								
							
						//edit matching complimentary ticket and save  
						complementary_redeem_response[index].complementary_voucher_reject = true;
						complementary_redeem_response[index].save();

					}
					

				}

			});



		})


		
		return_fn('');

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


		//search complementary first
		keystone.list('Complementary Voucher').model.findOne()

		.where({_id : req.query.voucher_id})

		.exec( function(error, complementary_redeem_find_response){
				

			if(error){//error searching for complementary voucher
				console.log('error: finding voucher voucher to reedem, with document _id : '+req.query.voucher_id)
				
			}
					
			if(!complementary_redeem_find_response){//complimentary voucher not found
				
				console.log('error: No voucher found to reedem, with document _id : '+req.query.voucher_id);
				
			}

			if(complementary_redeem_find_response){

				//if voucher match found/pass local response object to/as main response onject
				response = complementary_redeem_find_response;
			}

			normal_vouchers_to_redeem_processing_continue();//continue with processing normal voucher

		});
		 
		
		function normal_vouchers_to_redeem_processing_continue(){

			if(err && !response){//if error en response object is still false/was not influenced/changed by complementary search function, give error/else pass
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
			
		}
								
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

		// var v = {"image_link" :"/default_slide_images/1.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/1.jpg", "ads_sponsored" : true, "hidden" : false, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":2033,"created_by_account_id": ""}

		//get current year
		var date = new Date();
		var year = date.getFullYear() + 10;//lol big year
		
		keystone.createItems({
			'Router hotspot page' : [{
				router_location : location_of_router.toLowerCase(),
				hotspot_wallpaper: ['{"image_link" :"/default_slide_images/1.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/1.jpg", "ads_sponsored" : true, "hidden" : false, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":'+year+',"created_by_account_id": ""}','{"image_link" :"/default_slide_images/2.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/2.jpg", "ads_sponsored ": true, "hidden" : false, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":'+year+',"created_by_account_id": ""}','{"image_link" :"/default_slide_images/3.jpg" , "image_status_text" : "Image 3", "image_status_link": "/default_slide_images/3.jpg", "ads_sponsored" : false, "hidden" : false, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":'+year+',"created_by_account_id": ""}','{"image_link" :"/default_slide_images/4.jpg" , "image_status_text" : "Image 4", "image_status_link": "/default_slide_images/4.jpg", "ads_sponsored" : false, "hidden" : false, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":'+year+',"created_by_account_id": ""}','{"image_link" :"/default_slide_images/5.jpg" , "image_status_text" : "Image 5", "image_status_link": "/default_slide_images/5.jpg", "ads_sponsored" : false, "hidden" : false, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":'+year+',"created_by_account_id": ""}','{"image_link" :"/default_slide_images/6.jpg" , "image_status_text" : "Image 6", "image_status_link": "/default_slide_images/6.jpg", "ads_sponsored" : false, "hidden" : true, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":'+year+',"created_by_account_id": ""}','{"image_link" :"/default_slide_images/7.jpg" , "image_status_text" : "Image 7", "image_status_link": "/default_slide_images/7.jpg", "ads_sponsored" : false, "hidden" : true, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":'+year+',"created_by_account_id": ""}','{"image_link" :"/default_slide_images/8.jpg" , "image_status_text" : "Image 8", "image_status_link": "/default_slide_images/8.jpg", "ads_sponsored" : false, "hidden" : true, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":'+year+',"created_by_account_id": ""}','{"image_link" :"/default_slide_images/9.jpg" , "image_status_text" : "Image 9", "image_status_link": "/default_slide_images/9.jpg", "ads_sponsored" : false, "hidden" : true, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":'+year+',"created_by_account_id": ""}','{"image_link" :"/default_slide_images/10.jpg" , "image_status_text" : "Image 10", "image_status_link": "/default_slide_images/10.jpg", "ads_sponsored" : true, "hidden" : true, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":'+year+',"created_by_account_id": ""}'],
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
	


	app.get('/api/hotspot_location_data', function(req, res){	


		keystone.list('Router hotspot page').model.find()
		.exec(function(err, response){


			if(err){
				console.log('Error finding router with location');
				res.jsonp({location : '<option>All</option>'});//send default location as [ all ]
				return;
			}

			if(response == null || response == undefined || response == ''){//user not found//add user
				console.log('No router with location found');//
				res.jsonp({location : '<option>All</option>'});//send default location as [ all ]
				return;
			}
			

			//extract router location
			var reply = {
				location : ''
			}
			response.forEach(function(data){

				reply.location = reply.location + '<option>' + data.router_location + '</option>'

			})


			res.jsonp(reply)
			return;

		});
	




	});



	//hotspot get all

	app.get('/api/get_hotspot_data_for_ads', function(req, res){	
	
		
		var user_requesting_data_id = req.query.user_id;

		//get user type from query string//dont know why i should clean it, but it seem i did in onother code here, so i do copy paste hahaha
		var user_requesting_data_user_type = req.query.user_type.replace('%20', ' '); 
		user_requesting_data_user_type = user_requesting_data_user_type.replace(user_requesting_data_user_type[0], user_requesting_data_user_type[0].toUpperCase());// make capital letter

		
		//check if details provided
		if(user_requesting_data_id && user_requesting_data_id.trim().length < 13 || user_requesting_data_user_type && user_requesting_data_user_type.trim().length < 4){ 
			
			//if problem send error back
			return 	send_router_hotspot_data ('error : login problem');//send nothing back
		}


		//check if user details are found on db

		var max_ads_slots_per_hotspots_allowed = 0;//get ads slots allowed for this user per hotspot
		
		//find looged in user
		function find_logged_in_user(){ 


			keystone.list('seller distributor').model.findOne()
			.where({idnumber : Number(user_requesting_data_id),usertype: user_requesting_data_user_type})
			.exec(function(err, response){
	
	
				if(err){
					console.log("ads hotspot user logins check error: user id = "+ user_requesting_data_id +", user type = "+user_requesting_data_user_type);
					send_router_hotspot_data ('error : login problem');//send nothing back
					return;
				}
	
				if(response == null || response == undefined || response == ''){//user not found//add user
					console.log("ads hotspot user logins check error: user id = "+ user_requesting_data_id +", user type = "+user_requesting_data_user_type);
					send_router_hotspot_data ('error : login problem');//send nothing back
					return;
				}
				
				// get_router_hotspots(response);
				get_router_hotspots();
				// console.log('-----',response);
				max_ads_slots_per_hotspots_allowed = response.max_ads_slots_per_hotspots_allowed;
				return;
	
			});

		};

		find_logged_in_user();//auto start


		//get hotpots data
		function get_router_hotspots(){

			var final_hotspots_data_array = [
				// {
				// 	hotspot_location : '',//location of hotspot or name
				// 	hotspot_ads_currently_live : [], //ads of this user currently on hotspot
				// 	hotspot_db_id : '',//hotspot db id
				// 	is_private_or_limited_hotspot : false,//if hotspot is only meant for those who have their id added to hotspot [ Hotspots assigned ] keystone menu//if hotspot has user id in this field, then it will automatically be treated as gone private//to be shown to usr, the user has to be included as hotspot manager by system admin
				// 	hotspots_ads_disabled : false,//for admin//disabled hotspot wont show to users irrespective if they have ads on them or not

				// }
			];//contain filtered hotspots data


			keystone.list('Router hotspot page').model.find()
			// .where(user_details)
			.exec(function(err, response){
	
	
				if(err){
					console.log("ads hotspot user logins get hotspots error: user id = "+ user_requesting_data_id +", user type = "+user_requesting_data_user_type);
					send_router_hotspot_data ('error : login problem');//send nothing back
					return;
				}
	
				if(response == null || response == undefined || response == ''){//user not found//add user
					console.log("ads hotspot user logins get hotspots [empty] error: user id = "+ user_requesting_data_id +", user type = "+user_requesting_data_user_type);
					send_router_hotspot_data ('error : login problem');//send nothing back
					return;
				}
	
				// console.log('-----',response);

				//filter hotspot data

	

				response.forEach(function(data, index){

					// console.log( data.router_location);

					//CLEAN RESULTS it contains some meta data
					data = JSON.parse(JSON.stringify(data ));

					// console.log('======',data)


					//for sellers or distributors
					if(user_requesting_data_user_type == 'Seller' || user_requesting_data_user_type == "Distributor"){//for sellers or distributor accounts


						//check if hotspot is enabled for user ads
						if(data.hotspot_allow_user_ads ){

						
							var is_private_or_limited_hotspot = false;//if hotspot is only meant for those who have their id added to hotspot [ Hotspots assigned ] keystone menu//if hotspot has user id in this field, then it will automatically be treated as gone private//to be shown to usr, the user has to be included as hotspot manager by system admin


							var is_hotspot_private_en_user_is_included_in_hotspot_manager_list = false;//if user is part of those allowd to advertise in private hotspot
							
							//check if hotspot is private
							if(data.hotspot_manager.length > 0){//if there are users

								//check if current user is prt of the users
								data.hotspot_manager.forEach(function(user_ids){


									
									if(user_ids.trim() == user_requesting_data_id.trim()){//if in list

										is_hotspot_private_en_user_is_included_in_hotspot_manager_list = true;//set true
										is_private_or_limited_hotspot = true;//set true
									}

								})

							}
							//final checks
							if(data.hotspot_manager.length == 0 || data.hotspot_manager.length > 0 && is_hotspot_private_en_user_is_included_in_hotspot_manager_list){//if hotspot has no manages, or has managers and current user is part of the managers then add hotspot

								//ads posted by current user
								var hotspot_ads_currently_live = [];//ads of this user currently on hotspot

								data.hotspot_wallpaper.forEach(function(ads,index){

									ads = JSON.parse(ads);//turn to object

									//if ads was posted by this user

									//if ads has creater account id matching current user account id
									if(ads.created_by_account_id && ads.created_by_account_id.trim() ==  user_requesting_data_id.trim() ){
										//save advertisement
										hotspot_ads_currently_live.push(ads)
									}

								})


								//save data
								final_hotspots_data_array.push(


									{
										hotspot_location : data.router_location,//location of hotspot or name
										hotspot_ads_currently_live : hotspot_ads_currently_live, //ads of this user currently on hotspot
										hotspot_db_id : data._id,//hotspot db id
										is_private_or_limited_hotspot : is_private_or_limited_hotspot,//if hotspot is only meant for those who have their id added to hotspot [ Hotspots assigned ] keystone menu//if hotspot has user id in this field, then it will automatically be treated as gone private//to be shown to usr, the user has to be included as hotspot manager by system admin
										// hotspots_ads_disabled : false,//for admin//disabled hotspot wont show to users irrespective if they have ads on them or not
										ads_edit_create_costs : JSON.parse(data.ads_create_edit_costs), //costs to create new ads or edit already active ads
										max_ads_slots_per_hotspots_allowed : max_ads_slots_per_hotspots_allowed,

										hotspot_ads_slots_available : data.hotspots_max_ads_spots - data.hotspot_wallpaper.length

										
									}

									
								)

							
							}

						}


					}

					//for system admin
					if(user_requesting_data_user_type == 'Admin'){

						final_hotspots_data_array.push(data)
					}






					//on last loop
					if(index == response.length - 1){

						// console.log(final_hotspots_data_array)
						//send filtered data back
						send_router_hotspot_data (final_hotspots_data_array)
					}



				})

	



	
			});

		








		};









			
		//find router hostpot data
		// function find_router_hotspsot_data(){ 
		// 	 keystone.list('Router hotspot page').model.findOne()
		// 	.where({router_location : location_of_router.toLowerCase()})
		// 	.exec(function(err, response){
	
	
		// 		if(err){
		// 			console.log('Error finding router with location');
		// 			send_router_hotspot_data ('');//send nothing back
		// 			return;
		// 		}
	
		// 		if(response == null || response == undefined || response == ''){//user not found//add user
		// 			console.log('No router with location found');//
		// 			create_new_named_hotspot_data();//create new named hotspot
		// 			return;
		// 		}
				
		// 		// send_router_hotspot_data (response); //send named hotspot data back
		// 		return;
	
		// 	 });
		// };
		// find_router_hotspsot_data();//start function 
		
		// //create model for the location
		// function create_new_named_hotspot_data(){//data specified on model is used, this here is disregarded...
			
		// 	keystone.createItems({
		// 		'Router hotspot page' : [{
		// 			router_location : location_of_router.toLowerCase(),
		// 			hotspot_wallpaper: ['{"image_link" :"/default_slide_images/1.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/1.jpg", "ads_sponsored" : true, "hidden" : false}','{"image_link" :"/default_slide_images/2.jpg" , "image_status_text" : "Click here to see Picture", "image_status_link": "/default_slide_images/2.jpg", "ads_sponsored" : true, "hidden" : false}','{"image_link" :"/default_slide_images/3.jpg" , "image_status_text" : "Legal for Creatives", "image_status_link": "/default_slide_images/3.jpg", "ads_sponsored" : false, "hidden" : false}','{"image_link" :"/default_slide_images/4.jpg" , "image_status_text" : "Five Fingers", "image_status_link": "/default_slide_images/4.jpg", "ads_sponsored" : false, "hidden" : false}','{"image_link" :"/default_slide_images/5.jpg" , "image_status_text" : "Marseillies", "image_status_link": "/default_slide_images/5.jpg", "ads_sponsored" : false, "hidden" : false}','{"image_link" :"/default_slide_images/6.jpg" , "image_status_text" : "Unarams", "image_status_link": "/default_slide_images/6.jpg", "ads_sponsored" : false, "hidden" : true}','{"image_link" :"/default_slide_images/7.jpg" , "image_status_text" : "Anrya", "image_status_link": "/default_slide_images/7.jpg", "ads_sponsored ": false, "hidden" : true}','{"image_link" :"/default_slide_images/8.jpg" , "image_status_text" : "Urban Village", "image_status_link": "/default_slide_images/8.jpg", "ads_sponsored" : false, "hidden" : true}','{"image_link" :"/default_slide_images/9.jpg" , "image_status_text" : "Nonkuphiri", "image_status_link": "/default_slide_images/9.jpg", "ads_sponsored" : false, "hidden" : true}','{"image_link" :"/default_slide_images/10.jpg" , "image_status_text" : "Know Your Voucher", "image_status_link": "/default_slide_images/10.jpg", "ads_sponsored" : true, "hidden" : true}'],
		// 			free_education_sites : ['{"link":"https://scholar.google.co.za/", "text":"Google scholar"}','{"link":"https://www.google.com","text":"Search on google"}'],
		// 			free_jobs_sites : ['{"link":"https://www.google.com","text":"Search on google"}'],
		// 			free_data_allow : true,
		// 			hotspot_announcements : ['Dare to be different','Dare to write your destiny.'],
		// 			hotspot_how_to_bottom_text : 'Help yourself, To be helped.',
		// 			hotspot_free_sites_bottom_text : 'Pass it on, unconditionally help a stranger, a friend, a family member.',
		// 			notification_bottom_text : 'If it was easy, no one would care. If it was impossible, no one would dare.',
		// 			hotspot_how_to_buy :'/default_slide_images/1.jpg',
		// 			hotspot_how_to_sell :  '/default_slide_images/2.jpg',
		// 			hotspot_how_to_recharge_seller : '/default_slide_images/3.jpg',
		// 			hotspot_how_to_super_admin: '/default_slide_images/4.jpg',
		// 			hotspot_logo : '/images/logo.png',
					
		// 		}]
				
		// 	}, function(err, success){
		// 		if(err){
					
		// 			console.log('Error, when attempt creating new router location');
		// 			send_router_hotspot_data ('');//send nothing back
		// 			return;	
					
		// 		}
		// 		if(success == null || success == undefined || success == ''){
		// 			console.log('No response given after attempt creating new router location');
		// 			send_router_hotspot_data ('');//send nothing back
		// 			return;
		// 		}
				
		// 		find_router_hotspsot_data();//restart search
		// 		return;
		// 	});
			
		// }
		
		// responder function	
		function send_router_hotspot_data (data){
			res.jsonp(data);
			return;
		}
		
		
	});


	
	//================================
	//			advertisement
	//================================
		

	app.post('/do_advertisement',function(req, res) {


		// console.log(req.body, JSON.stringify(req.body,1,2));
		// console.log(req.body.ads[0].ads_image_link_t_upload_file_data.image_base64_data)
	

		//check if there are any ads to add or edit
		if(!req.body || !req.body.ads || req.body.ads.length == 0){//if falsy . hahahaha

			//set reply
			give_reply = 'No ads to creative or edit provided';

			return send_response(); //call
		}

		//save error success reply
		var give_reply = 'done';

		//-----check user profile
		//save retrived user account data
		var user_account_data = {
			credits : 0,//default user credits
			max_ads_slots_per_hotspots_allowed : 0,//allowed user ads slots per hotspot
		};//get user credits

	

		function user_account_check(){

			var userType = req.body.user_type.replace('%20', ' ');
			var user_type = userType.replace(userType[0], userType[0].toUpperCase());//turn user type to upper db is case sensitive
			var user_id = req.body.user_id;
						
			//if sucess login
			keystone.list('seller distributor').model.findOne({idnumber:user_id, usertype : user_type })
			.exec( function (error, response){
	
				if(error){ //if error
		
					//set reply
					give_reply = 'User Not found'

					return send_response(); //call
						
				}   

				if(response == null){ //if no user found

					//set reply
					give_reply = 'User Not found'

					return send_response(); //call
				}


				else{
				//  res.jsonp(response); 
				// 	console.log(response.credits);

					//save user details
					user_account_data = response;

					//check
					get_hotspot();
				}   	
					
			});
			
		}

		user_account_check();//start

		//----get hotspots ads charge
		var new_ads_cost = 0; //new ads creation costs
		var ads_edit_cost = 0; //ads edit costs
		var hotspots_ads_allowed = false; //is ads allowed on hotspot
		var user_hotspot_used_slots = 0;//hotspot slots used by user on this hotspot

		function get_hotspot(){

			keystone.list('Router hotspot page').model
			.findById(req.body.db_hotspot_id)
			.exec(function(err, hotspot_data){
		
				if(err){
					console.log('error : when finding hotspot with db _id : Id = '+ req.body.db_hotspot_id);
					
					//set reply
					give_reply = 'Hotspot Not found'

					return send_response(); //call
				}
				
				if(hotspot_data == null ){//user not found//add user

					console.log('error : when finding hotspot with db _id : Id = '+ req.body.db_hotspot_id);
					
					//set reply
					give_reply = 'Hotspot Not found'

					return send_response(); //call
				}
		
				// console.log(JSON.parse(hotspot_data. ads_create_edit_costs));
		
				//do
				new_ads_cost = JSON.parse(hotspot_data.ads_create_edit_costs).ads_create_costs; //new ads creation costs
				ads_edit_cost = JSON.parse(hotspot_data.ads_create_edit_costs).ads_edit_cost; //ads edit costs
				hotspots_ads_allowed = hotspot_data.hotspot_allow_user_ads;


				//loop through ads
				hotspot_data.hotspot_wallpaper.forEach(function(data){


					//check if advertisement is already created by user on this hotspot
					if(JSON.parse(data).created_by_account_id == req.body.user_id.toString()){

						user_hotspot_used_slots = user_hotspot_used_slots + 1;//increment
					}

				});

					
				//check if hotspots ads limit are not all used up
				if(hotspot_data.hotspot_wallpaper.length > hotspot_data.hotspots_max_ads_spots){

					//set reply
					give_reply = 'All hotspot ads slots used';

					return send_response(); //call

				}
		
				//do call
				credits_check();
		
			});


		}


		//----check if you has enough credits for ads
		var total_ads_cost = 0; //cost of ads

		function credits_check(){


			// console.log(new_ads_cost,ads_edit_cost,hotspots_ads_allowed);

			//check if ads allowed on hotspot
			if(!hotspots_ads_allowed){ //if not allowed

				//set reply
				give_reply = 'Hotspot ads not allowed';

				return send_response(); //call
			}

			//check if there are ads slot available for this user
			if(user_hotspot_used_slots >= user_account_data.max_ads_slots_per_hotspots_allowed){
		
				//set reply
				give_reply = 'All ads slots used';

				return send_response(); //call

			}


			//check if user has any credits
			if(user_account_data.credits == 0){ //if not

				//set reply
				give_reply = 'ads creation, not enough credits';

				return send_response(); //call

			}



			//check if user can afford new ads or edited ads
			if( user_account_data.credits >= (new_ads_cost * req.body.ads.length) && req.body.action == 'create'){

				//set ads cost
				total_ads_cost = (new_ads_cost * req.body.ads.length);

				//do 
				return images_save();

			}

			if( user_account_data.credits >= (ads_edit_cost * req.body.ads.length) && req.body.action == 'edit'){


				//set ads cost
				total_ads_cost = (new_ads_cost * req.body.ads.length);

				//do 
				return images_save();

			}


			//---else
			//set reply
			give_reply = 'ads creation, not enough credits';

			return send_response(); //call

		}


		//----save images
		var ads_data_to_save = [];//ads data //{"image_link" :"/default_slide_images/4.jpg" , "image_status_text" : "Image 4", "image_status_link": "/default_slide_images/4.jpg", "ads_sponsored" : false, "hidden" : false, "expire" : false, "expire_day" : 1,"expire_month": 1,"expire_year":2033,"created_by_account_id": "8905135800000"}

		var current_ads_creating_tracker = 0;//tracks current ads being processed

		function images_save(){


			var ads_image_link = req.body.ads[current_ads_creating_tracker]. ads_image_link ;
			var ads_image_link_click_redirect = req.body.ads[current_ads_creating_tracker].ads_image_link_click_redirect;
			var ads_description = req.body.ads[current_ads_creating_tracker].ads_description;


			//check if its uploaded image exist

			// console.log(req.body.ads && req.body.ads[current_ads_creating_tracker].ads_image_link_t_upload_file_data)
			if( req.body.ads && req.body.ads[current_ads_creating_tracker].ads_image_link_t_upload_file_data){

				
	
					//unique filename
					var date = new Date();			
					var hour = date.getHours();
					var minutes = date.getMinutes();
					var seconds = date.getSeconds();
					var day = date.getDay();
					var month = date.getMonth();
					var year = date.getFullYear();
						
					var upload_date_time = hour+'-'+minutes+'-'+seconds+(hour>12?daytime='PM':daytime='AM')+', '+day+'-'+month+'-'+ year + ' '; //add date to file name



					//turn base64 data to buffer
					let buff = Buffer.from(req.body.ads[current_ads_creating_tracker].ads_image_link_t_upload_file_data.image_base64_data, 'base64');

					var image_file_name = upload_date_time + req.body.ads[current_ads_creating_tracker].ads_image_link_t_upload_file_data.image_file_name;//image final unique name//may add user db id for extra unique

					//clean file name
					image_file_name = image_file_name.replaceAll(/[^A-Za-z0-9\s.]/gi,'-');

					//write image to folder
					// fs.writeFileSync( "./static/images/uploads/ads/" + image_file_name, buff);

					/// write file to uploads/ folder
					fs.writeFile("./static/images/uploads/ads/" + image_file_name, buff, function (err) {

						if(err){

							// image_save_error_tracker = true;
							error_capture('advertisement image save error. error message = '+ err)

							//set reply
							give_reply = 'ads creation error, one or more ads could not be saved to disk';

							return send_response(); //call

						}

						// console.log('image created');

						//check if redirect link is same as given ads image link
						if(ads_image_link && ads_image_link_click_redirect && ads_image_link.trim() == ads_image_link_click_redirect.trim() ){ //if so update link to new saved image link

							//update link
							ads_image_link_click_redirect = "/images/uploads/ads/" +  image_file_name; //replace space
						
						}

						//get image url
						ads_image_link = "/images/uploads/ads/" + image_file_name; //replace space

						image_details_creater ();//call next

					});

			}


			//---save created ads data

			function image_details_creater (){ //to add delay for image to be saved to db, il bundle this//if not function completes before images are save

				// expiery date all ads are valid for 30 days
				var today = new Date();
				var futurerDate = new Date(new Date().setDate(today.getDate() + 31)); //date after 31 days from now

				// console.log(today.getDate(), today.getMonth(), today.getFullYear())
				// console.log(futurerDate.getDate(), futurerDate.getMonth(), futurerDate.getFullYear())

				

				ads_data_to_save.push(
					JSON.stringify(
					{
						"image_link" :ads_image_link , 
						"image_status_text" : ads_description, 
						"image_status_link": ads_image_link_click_redirect, 
						"ads_sponsored" : false, 
						"hidden" : false, 
						"expire" : false, 
						"expire_day" : futurerDate.getDate(),
						"expire_month": futurerDate.getMonth() + 1,//increment month, it start at index 0
						"expire_year":futurerDate.getFullYear(),
						"created_by_account_id": req.body.user_id
					}
				));




				// increment loop tracker
				current_ads_creating_tracker = current_ads_creating_tracker + 1;


				//check if all looped
				if( req.body.ads.length == current_ads_creating_tracker){ //if so

					return create_ads_on_hotspot(); //call next function
				}


				//re call function
				images_save();

			}

			//if no image is to be saved to db
			if(!req.body.ads[current_ads_creating_tracker].ads_image_link_t_upload_file_data){
				image_details_creater ();//call
			}

		};



		//create the ads on hotspot
		var hotspot_name = '';//save name of hotspot being edited
		function create_ads_on_hotspot(){

			// console.log(JSON.stringify(ads_data_to_save, 1,2));


			//get hotspot
			keystone.list('Router hotspot page').model
			.findById(req.body.db_hotspot_id)
			.exec(function(err, hotspot_data){
		
				if(err){
					console.log('hotspot ads save error : when finding hotspot with db _id : Id = '+ req.body.db_hotspot_id + + 'error message = ' + err);
					
					//capture error for admin notification
					error_capture('hotspot ads save error : when finding hotspot with db _id : Id = '+ req.body.db_hotspot_id);
						
					//set reply
					give_reply = 'Hotspot Not found'

					return send_response(); //call
				}
				
				if(hotspot_data == null ){//user not found//add user

					console.log('hotspot ads save error : when finding hotspot with db _id : Id = '+ req.body.db_hotspot_id);
					//capture error for admin notification
					error_capture('hotspot ads save error : when finding hotspot with db _id : Id = '+ req.body.db_hotspot_id);

					//set reply
					give_reply = 'Hotspot Not found'

					return send_response(); //call
				}
				

				//ads new ads to already there if any
				// console.log(JSON.stringify(hotspot_data, 1 ,2))
				
				//create new ads array
				var new_ads = hotspot_data.hotspot_wallpaper.concat(ads_data_to_save);
				// console.log(new_ads)

				//edit hotspot data with new ads array
				hotspot_data.hotspot_wallpaper = new_ads;

				//hotspot name 
				hotspot_name = hotspot_data.router_location;

				//save hotspot				
				hotspot_data.save(function(err, response){ //save calculation to admin profile
					
					if(err){
						console.log('Ads create on hotspot error, hotspot db id = ' + req.body.db_hotspot_id + + 'error message = ' + err );

						//capture error for admin notification
						error_capture('Ads create on hotspot error, hotspot db id = ' + req.body.db_hotspot_id );

						//set reply
						give_reply = 'Hotspot ads save error'

						return send_response(); //call
					};

					if(response == '' || response == undefined || response == null){
						console.log('Ads create on hotspot error, hotspot db id = ' + req.body.db_hotspot_id );

						//capture error for admin notification
						error_capture('Ads create on hotspot error, hotspot db id = ' + req.body.db_hotspot_id );

						//set reply
						give_reply = 'Hotspot ads save error'

						return send_response(); //call
					}
				
					//call
					user_profile_ads_history();

				});
	
			});
			
		}


		
		//create ads creation log/history on user profile//ads can be recreated//links recopied
		function user_profile_ads_history(){


			// console.log('user ads history',total_ads_cost)

			
			var userType = req.body.user_type.replace('%20', ' ');
			var user_type = userType.replace(userType[0], userType[0].toUpperCase());//turn user type to upper db is case sensitive
			var user_id = req.body.user_id;


			keystone.list('seller distributor').model.findOne({idnumber:user_id, usertype : user_type })
			.exec( function (error, response){
	
				if(error){ //if error

					//capture error for admin notification
					error_capture('Ads create error, problem with inding user, user id = ' + user_id + 'error message = ' + error );

					//set reply
					give_reply = 'User Not found'

					return send_response(); //call
						
				}   

				if(response == null){ //if no user found

					//capture error for admin notification
					error_capture('Ads create error, problem with inding user, user id = ' + user_id + 'error message = user not found' );

					//set reply
					give_reply = 'User Not found'

					return send_response(); //call
				}



				// console.log(JSON.stringify(response,1,1))
				// response = JSON.parse(JSON.stringify(response)); //clean response of db metadata

				

				//charge user account

				// console.log(
				// 	response.credits,
				// 	response.transactionhistory,
				// 	response.ads_slots_hotspot_wallpaper
				// );


				//save ads history

				//get history on profile
				var previus_ads_history = response.ads_slots_hotspot_wallpaper;

				//check if saved ads data is not over 1000
				if(previus_ads_history.length > 1000){//if so

					// delete last item
					previus_ads_history.pop()

				}


				//add new ads to old ads history
				previus_ads_history = ads_data_to_save.concat(previus_ads_history);


				//account charging
				var new_balance = response.credits - total_ads_cost;


				//account charge history
						
				//add transaction
				var date = new Date();

				var hour = date.getHours();
				var minutes = date.getMinutes();
				var day = date.getDay();
				var month = date.getMonth();
				var year = date.getFullYear();
			
				var new_transaction_record = ' '+hour+':'+minutes+(hour>12?daytime='PM':daytime='AM')+', '+day+'/'+month+'/'+year+';  [ '+ ads_data_to_save.length +' ] advertisement spot baught on hotspot [ '+hotspot_name+' ] for R'+total_ads_cost+' total +; New balance : R'+new_balance;


				var new_transactions_array = response.transactionhistory;

					new_transactions_array.unshift(new_transaction_record);

				if( new_transactions_array.length > 1000){new_transactions_array.pop()}//if lenght is over that//remove first element

			

				//save elemts
				response.ads_slots_hotspot_wallpaper = previus_ads_history;//account created ads history

				response.credits = new_balance;//account new credit after ads charge

				response.transactionhistory = new_transactions_array;//transaction history


				//save to db			
				response.save(function(err, results){//save changes
					// console.log(results)
					// console.log(err)
					if(err){
						console.log('error:when attempting to save ads credit charge money on user account, with document _id : '+ response._id +', user id number : '+req.body.user_id + 'error message = ' + err);
						
						//capture error for admin notification
						error_capture('error:when attempting to save ads credit charge money on user account, with document _id : '+ response._id +', user id number : '+req.body.user_id+ 'error message = ' + err);
						
					
					}

					if(results == null || results == undefined || results == ''){//user not found//add user
						console.log('error:when attempting to save ads credit charge money on user account, with document _id : '+ response._id +', user id number : '+req.body.user_id);
							
						//capture error for admin notification
						error_capture('error:when attempting to save ads credit charge money on user account, with document _id : '+ response._id +', user id number : '+req.body.user_id);
					
					}


					//give success or error response

					//set reply
					give_reply = 'success';

					send_response(); //call

				});	

			});

		}


		error_capture('error:when attempting to save ads credit charge money on user account, with document _id : '+ 'response._id' +', user id number : '+req.body.user_id)

		//give user response
		function send_response(){

			res.send(give_reply)
		}

		
	})
	





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
	
	
	app.post('/upload2', function(req, res) {
		
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
				// extends_upload(req, res,imageName);
	
			  });
			}
		}); 

		res.end()
	});
	
	/*=======================================
		// show upload contents
	=======================================*/  

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
					<div style="margin:1vh 2vw 1vh 2vw; padding:0px;width:95vw; height:55vh; background-color:white; box-shadow:3px 3px 2px gainsboro, -1px -1px 2px gainsboro">
						
						<form action="upload" method="post" enctype="multipart/form-data" style='margin:30px'>
						<br/>
						<p> Upload/Images/Text/Doc</p>
						<input type="file" name="filetoupload" class='form-control' ><br>
						<input type="submit" class='btn btn-primary'>
						</form>
						<hr>
						<br />
						<p style='text-align:center'><b>For Wallpaper Advertisement :</b><br> Recommended image size is : width = 802px , height = 1285px. <br /> Have your image have 30% empty space on sides, Example <a href="#" onclick='show_example()'>Click on me..</a>.
						<br >
						<p style='text-align:center'><b>For Voucher Advertisement :</b><br> Recommended image size is : width = 301px , height = 117px. <br /> Only add a logo within the box as shown, Example template <a href="#" onclick='show_example("voucher")'>Click on me..</a>.
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
						function show_example(type='none'){
							if(type == 'none'){
								window.open('http://' + current_domain +'/images/background%20example.png');
							}
							else{
								window.open('http://' + current_domain +'/images/default_ticket_template_streetwifiy.jpg');
							}
							
						}
					</script>
				</body>
			</html>
			
			`
			
			
			);
		
			res.end();
		});



	}
	


/*=======================================
    show login hotspot contents
=======================================*/  
    
app.get('/api/get_hotspot', function(req, res){
	  
	//console.log(req.query)
	
	var user_details; //used to filter hotspot pages to return to user
	
	//if admin return all hotspots
	user_details = "";//for admin dont filter return all hotspots on system


	//if user, only return hotspot they own by using their id to filter results
	if(req.query.user_type != 'Server Admin' ){

		user_details = { hotspot_manager : {$all : [ req.query.user_id.toString() ] } }
	}



	keystone.list('Router hotspot page').model.find()
	.where(user_details)
	.exec(function(err, user_data){

		if(err){
			console.log('error : when finding hotspot with user details : Id = '+ req.query.user_id +' ,user type = ' + req.query.user_type + ' ,Server or Conection error');
			res.jsonp('Server or Conection error');
			return;
		}
		
		if(user_data == null || user_data == undefined || user_data == ''){//user not found//add user

			console.log('error : when finding hotspot with user details : Id = '+ req.query.user_id +' ,user type = ' + req.query.user_type +  ', no response given/response empty.');
			res.jsonp('No data found');
			return;
		}

		//console.log(user_data);
		res.jsonp(user_data)






		

	});









})



/*=======================================
 mikrotik trial login data usage tracker
=======================================*/ 


app.post('/trial_login_data_usage_trcker', function(req, res) {
	

	// trial login sample link :: http://uwireless.za/login?username=T-90%3A2E%3A1C%3A69%3AB3%3ABA&password=

	// var date = new Date();			
	// var hour = date.getHours();
	// var minutes = date.getMinutes();
	// var seconds = date.getSeconds();
	// var day = date.getDay();
	// var month = date.getMonth();
	// var year = date.getFullYear();
		
	// // var upload_date_time = hour+'-'+minutes+'-'+seconds+(hour>12?daytime='PM':daytime='AM')+', '+day+'-'+month+'-'+ year + ' '; //add date to file name
	
	
	//---- turn recived data to array containing JSON strings objects ----
	// console.log(req.body,req.body.data)   // { data: '["{<>mac<>:<>90:2E:1C:69:B3:BA<> ,<>bytes_down<>:67516},,"]' }
	
	
	// var trial_ursage_report = JSON.parse('["{<>mac<>:<>90:2E:1C:69:B3:BA<> ,<>bytes_down<>:179711},,"]')[0].replaceAll('"',"`").replaceAll(' ','').replaceAll('<>','\"').split(',,');
	var trial_ursage_report = JSON.parse(req.body.data)[0].replace(/"/g,"`").replace(/ /g,'').replace(/\<\>/g,'\"').split(',,');//last array will be empty, this best i can do to forge an object api from mikrotik with my current knowledh=ge, hahahaha
		
	//check if any trial data was recived
	if(trial_ursage_report[0].length > 0){  //if so do saving en etc

		console.log(trial_ursage_report, '----- ',JSON.parse(trial_ursage_report[0]));

		console.log('-- trial data was recieved in this post request')

		



		//update amount of data usage for this session user currently connected to hotspot, if trial user data arrives en user is not in hotspot, take it as old session ended, add usage data to new session
		//---- 1) check if user mac is found in active users variable, if so, then add current usage data to old usage data
		//---- 2) if mac-adress is available but check (1) fails, then take it as a new session, then capture time, date, en data used thus far //can also check if previus data is lower than current usage that, this will mean new session


		//update number of trial user currently connected to hotspot
		//-- check if all users sendt by hotspot with hotspot name matches, only check those in corresponding hotspot names as many routers can report at same time, 
		//---- also i may consider having a big list, en only remove users after certain time if they dont report back, this will remove a need of having hotspot have unique names always so ya set time



		// have a function that will set usage limit for new to login users user session an will be picked up by login system if any usage limits, this limits are just more informative as they dont do much as fr as router is concerned except blocking part which is carried out by login function, hey can pretty much be easily bypassed by using a link to login directly to router


		// also pernality and blocking will happen here for missbehaving

		//also will set variables for login total active users here, that will have to be obeyed by login, use hotspot names, so imthinking even thought it may cause problems i should try different or unique hotspot names, so use hotspot specific everything en enorcing


		//================== when user logins check their usage en give warning as required, this if for login part of this












	}

	

	if(trial_ursage_report[0].length == 0){

		console.log('no trial users currently logged in in hotspot name :::: ', req.query.router_name )
	}




	
	res.send("recived");
	res.end();


});
	







/*=======================================
 system/code/function important error capture
=======================================*/ 

function error_capture(error_data =''){

	console.warn('Error captured. details = '+error_data );//show

	var date = new Date();

	var hour = date.getHours();
	var minutes = date.getMinutes();
	var day = date.getDay();
	var month = date.getMonth();
	var year = date.getFullYear();

	var new_error_record = ' '+hour+':'+minutes+(hour>12?daytime='PM':daytime='AM')+', '+day+'/'+month+'/'+year;


	keystone.createItems({//add items to db//user details
				
		'system error catcher' : [
			{
				
				error_details : error_data,
				time_stamp : new_error_record

		 	}
			
		]
		
		
	}, function(err, results){
		if(err){
			console.log('Problem capturing error to db, error = '+ error_data + ' _date captured = '+ new_error_record);
		}
		
	});


}


























/*=======================================
    handle all others request with incorrect routes
=======================================*/  


app.get('/*', function(req, res){

	res.jsonp('Icorrect link, Please try going to homepage')
});




	
});







