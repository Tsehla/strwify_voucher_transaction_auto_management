//ENV VARIABLES
require('dotenv').config();

var keyst = require('keystone');
var port = process.env.PORT || 3100;//for local and heroku compartible

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
	checkin_checking_routing ();
});


//get db router checkins and check hours

function checkin_checking_routing (){
	
	
	var keystone = require('keystone');
	
	var router_with_issues = [];//router with issuses details to add to email body
	
	var date = new Date();
	var router_last_contact_hour = date.getHours();//get current hour
	
	
	//exist funtion btween 11pm and 2am
	
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
						return;
					   }
					if(response == null || response == undefined || response == ''){//no router data found

						console.log('Err no super-admin data forund on db for router monitoring function email sending');
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
							  } else {
								console.log('Email sent: ' + info.response);
							  }

							});

				}
		   
			

		   
		   }
		
		
		
	});
	
}






