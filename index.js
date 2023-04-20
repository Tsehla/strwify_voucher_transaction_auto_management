//ENV VARIABLES
require('dotenv').config();

var keyst = require('keystone');
var port = process.env.PORT || process.env.Port || 3100;//for local and heroku compartible

keyst.init({
    'cookie secret' : 'gshdjhbdhdjsdhckwndioenw8739n873bd782wdhxbn7ydh7283hd7',
    'auth' : true,
    'auto update' : true,
    'static' : ['./static'],
    'user model' : 'server admin'
});

keyst.import('./routes');
keyst.import('./user_model');

keyst.set('cors allow origin', true);

keyst.set('port', port);

keyst.start();

console.log("---------------------------------- ")
console.log("-------------- hello ------------- ")
console.log("-- use : npm start , to start server, not node index--- ")
console.log("---------------------------------- ")

	//----------------  router auto status checker ----------------
	
	/*
		if not sendim mail: enable less ecure app access to your gmail acc
		 with this link 
		 
		 https://www.google.com/settings/security/lesssecureapps?rfn=27&rfnc=1&asae=2&anexp=lbe-R1_C
	
	*/
	
	/*
	 used to send mails
	 
	 
				var nodemailer = require('nodemailer');

				var transporter = nodemailer.createTransport({
				  service: 'gmail',
				  auth: {
					user: 'dietsahalo@gmail.com',
					pass: 'your_password'
				  }
				});

				var mailOptions = {
				  from: 'streetwify@gmail.com',
				  to: 'tsehlankhi@gmail.com',
				  subject: 'Sending Email using Node.js',
				  text: 'That was easy!'
				};

				transporter.sendMail(mailOptions, function(error, info){
				  if (error) {
					console.log(error);
				  } else {
					console.log('Email sent: ' + info.response);
				  }
				  
				});
	
	
	
	*/
	
	//using hours as checking to determin if router is online, if router last check hour minus schedule funtion current check hour is over or qual  (2)or (-2); send offline message
	
	//May add offline indicator on the router monitor page, not neccessary now anyway.
	







/*



		I believe this is issue with google account security. - Google blocked your sign in to use the mailing features due to unknown device (location).

		A few step to verify this:

		Start your server locally and sends the email.

		Check your account alerts for unknown sign in.

		This can be temporally resolved by: https://accounts.google.com/DisplayUnlockCaptcha

		More permanent resolution would be to change your password to a stronger level:

		upper case letter + lower case letter + special symbols + numbers



*/



var schedule = require('node-schedule');
 

var j = schedule.scheduleJob('15 * * * *', function(){//router status checking timer
 // console.log('Starting routing Router checkins');
  //console.log('The answer to life, the universe, and everything!');

	checkin_checking_routing ();//router alive/online tracker
	ads_cleaning();//router expired ads cleaner
});


//get db router checkins and check hours
var keystone = require('keystone');

function checkin_checking_routing (){
	
	

	
	var router_with_issues = [];//router with issuses details to add to email body
	
	var date = new Date();
	var router_last_contact_hour = date.getHours();//get current hour
	
	
	//exit funtion btween 11pm and 2am //no idea how to handle date change then, lol 
	
	if(router_last_contact_hour == 23 || router_last_contact_hour == 24 || router_last_contact_hour == 0 || router_last_contact_hour == 1 || router_last_contact_hour == 2 ){return;}
	
	
	keystone.list('Router Monitoring').model.find()
	.where({routermute:false})
	.exec(function(err, response){
		
		if(err){
		   
		   	console.log('Error finding data for routing monitoring function');
			return;
		   }
		if(response == null || response == undefined || response == ''){//no router data found
		
			console.log('Err no router data forund on db for router monitoring function');
			return;
		}
		
		response.forEach(function(data, index){
		//	console.log(data.routername, data.routerlocation, data.routerdetails, data.router_last_contact_hour );
			
			if(data.router_last_contact_hour != null || data.router_last_contact_hour != undefined || data.router_last_contact_hour != ''){
				
				var router_lasrouter_last_contact_hour_in_checkin = router_last_contact_hour - Number(data.router_last_contact_hour);
				
					
				if(router_lasrouter_last_contact_hour_in_checkin > -2 && router_lasrouter_last_contact_hour_in_checkin < 2){
				   		//console.log('Router name : '+data.routername+' is live.');
				   }
				else{
					//console.log('Router name : '+data.routername+' is offline.');
					
					router_with_issues.push('Router name: <b>'+data.routername+'</b><br />Installed on Location : <b>'+data.routerlocation+'</b><br />with Details : <b>'+ data.routerdetails+'</b>, is Currently OFFLINE, PLEASE investigate, DO Mute it on super admin menu to prevent futher email sending. Last contact hour : <b>'+ data.router_last_contact_hour+'</b>. <br/><br/>\n\n<hr>');
					
					//console.log(router_with_issues);
				}
			}
			
			
		});
		
		
		//email sending 
		
		
		if(router_with_issues.length > 0){//if theres content send mail
		   
		   		//get email for people with super-admin details
	
				var super_admin_emails = [];
				
				keystone.list('seller distributor').model.find()
				.where({usertype :'Server Admin'})
				.exec(function(err, response){
					

					if(err){

						console.log('Error finding super-admins data for routing monitoring function email sending');
						error_capture('Error finding super-admins data for routing monitoring function email sending');
						return;
					   }
					if(response == null || response == undefined || response == ''){//no router data found

						console.log('Err no super-admin data forund on db for router monitoring function email sending');
						error_capture('Err no super-admin data forund on db for router monitoring function email sending');
						return;
					}

					response.forEach(function(data, index){
						//console.log(data.email);
						
						if(data.email){//if email value exists
						super_admin_emails.push(data.email.trim());//add to email to send to array
						}
				
						x();//send mail part function
					})


									 
				});
			
				function x(){	//send mail	


							if(super_admin_emails.length < 1){

								return;
							}//if array empty end

							//send mail  
							//console.log('email part');
							var nodemailer = require('nodemailer');

							var transporter = nodemailer.createTransport({
							  service: 'gmail',
							  auth: {
								user: process.env.GMAIL_EMAIL,
								pass: process.env.GMAIL_PASSWORD,
							  }, tls: {
										rejectUnauthorized: false
									}
							});


							//console.log(recipients,message_body);

							var mailOptions = {
							  from: 'streetwify@gmail.com',
							  to: super_admin_emails.toString(),
							  subject: 'StreetWify Router Down',
							  text: router_with_issues.toString(),
							  html:router_with_issues.toString(),
							};

							transporter.sendMail(mailOptions, function(error, info){
							  if (error) {
								console.log(error);
								error_capture('Email send error. error = '+ error);
							  } else {
								console.log('Email sent: ' + info.response);
							  }

							});


							//save email
							email_sent_save(router_with_issues.toString() + '<br><br>Email sent to : '+super_admin_emails.toString());
				}
		   
			

		   
		   }
		
		
		
	});
	
}



//hotspot ads cleaning
function ads_cleaning(){//clean expired ads

	//do this at 11pm or after daily
	var date = new Date();
	var router_last_contact_hour = date.getHours();//get current hour
	
	
	//exist funtion btween 11pm and 3am
	if(!router_last_contact_hour == 23 || !router_last_contact_hour == 24 || !router_last_contact_hour == 0 || !router_last_contact_hour == 1 || !router_last_contact_hour == 2 || !router_last_contact_hour == 3 ){return;}
	
	// console.log('ads cleaning started');


	//get expired ads,



	//delete expired ads



			//get hotspot
			keystone.list('Router hotspot page').model
			.find({},'_id') //find all return _id only
			.exec(function(err, hotspot_data){
		
				if(err){
					console.log('Schedular advertisements cleaning : Error when finding hotspot error message = ' + err);
					
					//capture error for admin notification
					return error_capture('Schedular advertisements cleaning : Error when finding hotspot error message = ' + err);
						
			
				}
				
				if(hotspot_data == null  || hotspot_data.length == 0){//user not found//add user

					console.log('Schedular advertisements cleaning : Error when finding hotspot error message = no hotspots found');
					//capture error for admin notification
					return error_capture('Schedular advertisements cleaning : Error when finding hotspot error message = no hotspots found');

				}



				// console.log(JSON.parse(JSON.stringify(hotspot_data)));

				//call
				do_cleaning(JSON.parse(JSON.stringify(hotspot_data)))

			});




			var this_session_expired_ads =  [  //contains all removed expired ads
				// {
					
				// 	hotspot_location : '',
				// 	hotspot_location_id : ',
				// 	removed_ads :  ',
				// 	time_stamp : '

				// }
				
			];

			function do_cleaning(hotspots_id = []){

					
				//track if all hotspots have been lopped 
				var loop_tracker = 0;

				
				function get_hotspot_en_check(){


					//get hotspot id
					var hotspot_id = hotspots_id[loop_tracker]._id;

					//get hotspot
					keystone.list('Router hotspot page').model
					.findById(hotspot_id)
					.exec(function(err, hotspot_data){
				
						if(err){

				
							console.log('hotspot ads save error : when finding hotspot with db _id : Id = '+ hotspot_id + 'error message = ' + err);
							
							//capture error for admin notification
							error_capture('hotspot ads save error : when finding hotspot with db _id : Id = '+ hotspot_id);

							// call loop control
							return loop_control();
			
			
						}
						
						if(hotspot_data == null ){//user not found//add user//are hotspot has no ads
						
							console.log('hotspot ads save error : when finding hotspot with db _id : Id = '+ hotspot_id);
							//capture error for admin notification
							error_capture('hotspot ads save error : when finding hotspot with db _id : Id = '+ hotspot_id);

							// call loop control
							return loop_control();

						}

						//if hotspsots has no ads on it
						if( hotspot_data.hotspot_wallpaper.length == 0){
						
							// call loop control
							return loop_control();
						}
						
						//today date
						var date = new Date();
						var hour = date.getHours(); //hour
						var minutes = date.getMinutes();//minutes
						var day = date.getDate();//day of month
						var month = date.getMonth() + 1;//increment as its index based value meaning january = 0 not 1
						var year = date.getFullYear();//year


						// console.log(JSON.parse(JSON.stringify(hotspot_data)))

						// hotspot_data = JSON.parse(JSON.stringify(hotspot_data))//clean of mongoose db metadata//usefull when developing to see data clearly only else keep disabled db .save() function seem to mulfunction when this on

						var cleaned_ads_to_display = []; //contains ads cleaned of expiry

						var new_error_record = ' '+hour+':'+minutes+(hour>12?daytime='PM':daytime='AM')+', '+day+'/'+month+'/'+year; //date as string

						var captured_expired_ads = { //contains ads expired, to be used for stats/history
							hotspot_location_id : hotspot_data._id, //hotspot id
							hotspot_location : hotspot_data.router_location,//location name
							removed_ads : [],//removed ads
							time_stamp : new_error_record //time this record captured
						}

				
						//loop ads data
						// for(a in hotspot_data.hotspot_wallpaper){

						hotspot_data.hotspot_wallpaper.forEach(function(data, index){

							

							//check if expire details exist
							if(JSON.parse(data).expire_day && JSON.parse(data).expire_month && JSON.parse(data).expire_year){

							
								//expiry date  
								var expire_day = JSON.parse(data).expire_day;
								var expire_month = JSON.parse(data).expire_month;
								var expire_year = JSON.parse(data).expire_year;

								// console.log(expire_day,expire_month,expire_year)

								//check if expiry is this year
								if( (expire_year - year) == 0){ //its this year

									//check if expiry is this month
									if((expire_month - month) == 0){
								
										//check if expire day has not passed
										if((expire_day - day) < 0 ){ //i so then it has expired//current day of month is begger than day set of expire
								
											//save stats
											captured_expired_ads.removed_ads.push(data);
										
										}
										
									}

									//check if expiry previus months
									if((expire_month - month) < 0){
									
										//save stats
										captured_expired_ads.removed_ads.push(data);
										
									}
								
								}

								//check if expiery is next year
								else if((expire_year - year) < 0){ //for those expired previus years
								
									//save stats
									captured_expired_ads.removed_ads.push(data);

								}

								//if arrived here
								else {

									cleaned_ads_to_display.push(data); //push to new array
									// console.log(expire_day,expire_month,expire_year, day, month,year)
								}

							}

							//on last loop
							if( index == hotspot_data.hotspot_wallpaper.length - 1){
						
								// console.log('on last loop',hotspot_data.hotspot_wallpaper.length )
								
								if(captured_expired_ads.removed_ads.length > 0){
								
									// console.log('there are expired items',captured_expired_ads.removed_ads);

									//save expired ads
									this_session_expired_ads.push(captured_expired_ads);

									//call save function
									hotspot_edit_ads_data();

									return;
								}

								// else call loop control
								loop_control();
							}

						})

				
						//save filtered ads to hotspot
						function hotspot_edit_ads_data(){
				
							// console.log('in save')


							//create /attach cleaned ads
							hotspot_data.hotspot_wallpaper = cleaned_ads_to_display;


							// //save hotspot				
							hotspot_data.save(function(err, response){ //save calculation to admin profile
								
									if(err){
										console.log('Ads create on hotspot error, hotspot db id = ' + hotspot_id + 'error message = ' + err );

										//capture error for admin notification
										error_capture('Ads create on hotspot error, hotspot db id = ' + hotspot_id );

									
									};

									if(response == '' || response == undefined || response == null){
										console.log('Ads create on hotspot error, hotspot db id = ' + hotspot_id );

										//capture error for admin notification
										error_capture('Ads create on hotspot error, hotspot db id = ' + hotspot_id );

									}
							
					
									// else call loop control
									loop_control();

							});

						}
			
					});


					//loop controller
					function loop_control(){
					
						//check if to exit function
						if(loop_tracker == hotspots_id.length -1){
				
							return history_data_save();//call next function
						}

						//increment
						loop_tracker = loop_tracker + 1;

						//re-call
						get_hotspot_en_check();
					}

				}
				get_hotspot_en_check(); //auto start

			};



			//history data save
			function history_data_save(){

				// console.log('done -----',this_session_expired_ads);

				keystone.createItems({//add items to db//user details
							
					'expired ads history' : this_session_expired_ads
					
					
				}, function(err, results){

					if(err){
						console.log('Problem creating expired ads history to db, error = '+ err + ' _date captured = ');

						//capture error
						 error_capture('Problem creating expired ads history to db, error = '+ err);
					}
					
				});


				//create email 

				//get total expired ads
				var total_removed_ads = 0;
				var ads_data = '';

				var server_url = process.env.server_url || '127.0.0.1:8080/';

				//loop all ads from hotspots
				this_session_expired_ads .forEach(ads=>{

					//do second loop, \\loop ads from each hotspot
					ads.removed_ads.forEach(ads2=>{

						ads2 = JSON.parse(ads2);

						// console.log(JSON.parse(ads2))

						//increment
						total_removed_ads = total_removed_ads + 1;

						//get extra usefull data//mostly for quick quality check
						ads_data = ads_data + '<br><br> 1) : <br><br>Time captured : '+ads.time_stamp+' <br><br>Advertisement status text <br>'+ ads2.image_status_text + '<br>Advertisement image link <br><a href="'+ ads2.image_link + '" target="blank>" '+ ads2.image_link + '</a><br>Advertisement clicking user transfer link<br> <a href="'+ads2.image_status_link + '" target="blank>'+ads2.image_status_link + '</a>'
					})



				});

				var email_message = 'Good day, <br><br>This is router expired ads removal service.<br><br>Total of '+total_removed_ads+' advertisements have been removed in this session.<br><br>'+ads_data+'<br>. <br><br>Open admin account to see this information in greater details as here some links may not work as expected. <br><a href="'+server_url+'" target="blank">Go to account Login</a><br>\n\n<hr>'

				// console.log(email_message)
				email_send(email_message);
			}
}

// ads_cleaning();




function email_send(email_message){



	var super_admin_emails = [];
				
	keystone.list('seller distributor').model.find()
	.where({usertype :'Server Admin'})
	.exec(function(err, response){
		

		if(err){

			console.log('Error finding super-admins data for routing monitoring function email sending');
			error_capture('Error finding super-admins data for routing monitoring function email sending');
			return;
		   }
		if(response == null || response == undefined || response == ''){//no router data found

			console.log('Err no super-admin data forund on db for router monitoring function email sending');
			error_capture('Err no super-admin data forund on db for router monitoring function email sending');
			return;
		}

		response.forEach(function(data, index){
			//console.log(data.email);
			
			if(data.email){//if email value exists
			super_admin_emails.push(data.email.trim());//add to email to send to array
			}
	
			x();//send mail part function
		})


						 
	});

	function x(){	//send mail	


		if(super_admin_emails.length < 1){

			return;
		}//if array empty end

		//send mail  
		//console.log('email part');
		var nodemailer = require('nodemailer');

		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
			user: process.env.GMAIL_EMAIL,
			pass: process.env.GMAIL_PASSWORD,
			}, tls: {
					rejectUnauthorized: false
				}
		});


		//console.log(recipients,message_body);

		var mailOptions = {
			from: 'streetwify@gmail.com',
			to: super_admin_emails.toString(),
			subject: 'StreetWify Notification',
			text: email_message.toString(),
			html:email_message.toString(),
		};

		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
			console.log(error);
			error_capture('Email send error. error = '+ error);
			} else {
			console.log('Email sent: ' + info.response);
			}

		});


		//save email
		email_sent_save(email_message + '<br><br>Email sent to : '+super_admin_emails.toString());


	}




}





/*=======================================
 system/code/function important error capture
=======================================*/ 

function error_capture(error_data =''){

	console.warn('Error captured. details = '+error_data );//show

	if(error_data.trim().length == 0){return};//if no error message

	var date = new Date();

	var hour = date.getHours();
	var minutes = date.getMinutes();
	var day = date.getDate();
	var month = date.getMonth() + 1;
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
 email sent save
=======================================*/ 

function email_sent_save(email_data =''){
	


	if(email_data.trim().length == 0){return};//if no error message

	var date = new Date();

	var hour = date.getHours();
	var minutes = date.getMinutes();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	var new_error_record = ' '+hour+':'+minutes+(hour>12?daytime='PM':daytime='AM')+', '+day+'/'+month+'/'+year;

	// console.log('in ',email_data)

	keystone.createItems({//add items to db//user details
				
		'system email catcher' : [
			{
				email_details : email_data,
				email_type : 'System',//message producer
				time_stamp : new_error_record,
		 	}
			
		]
		
	}, function(err, results){
		if(err){
			console.log('Problem capturing sent email to db, error = '+ err);
			error_capture('Problem capturing sent email to db, error = '+ err);
		}
		
	});


}



