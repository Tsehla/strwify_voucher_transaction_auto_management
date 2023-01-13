

/*=====================================================================================================================================================
    repeated functions
======================================================================================================================================================*/

/* change dom [innerHTML] */

function dom_innerHtml(div, value){
	document.getElementById(div).innerHTML=value;
}



function animate_four_direction (div_id, direction = 'left', start_at = '8', end_at = '0'){ //can have six axis as like direction_left_or_right ='up', up_or_down='down', start='8px', end='0px'//idea is if loop move div up on this loop, the next loop will move div to the left until 8 lops has occured, basically the div will move 4 times in both direction, unlike this 4 axix, the div will moves all specified pixels in specified direction
  
	  if(div_id){//if div id is given

				
		//calculate steps to move div
		var step_to_move = Number(start_at) - Number(end_at); //max loops to perform 
		
		if(Number(start_at) < Number(end_at)){//if end at is bigger than start, then subtract small from big 

			step_to_move = Number(end_at) -  Number(start_at); //max loops to perform 

		}


		//perform move
		var div_get_style = document.getElementById(div_id).style; //get di styles attributes

		var loops= 1;//keep track of loop

		var lopp_interval = setInterval(function(){

			//check move end
			if(loops == step_to_move ){

				clearInterval(lopp_interval);

			}

			loops = loops + 1;//icrement loops counter


			//check if div has relatiive/absolute positioning css attributes provided
			if(div_get_style.position ){ //if position attributes provided //do move left/right/top/bottom

				if(direction.toLowerCase() == 'left'){//if direction is left

					document.getElementById(div_id).style.left = (Number(start_at) > Number(end_at)? Number(start_at) - loops : loops) + 'px';//get div and if start number is bigger than end number do decrement movement i.e 9,8,7,6,5 etc, else do normal movement 

					return;

				}

				if(direction.toLowerCase() == 'right'){//if direction is right

					document.getElementById(div_id).style.right = (Number(start_at) > Number(end_at)? Number(start_at) - loops : loops) + 'px';
					return;

				}

				if(direction.toLowerCase() == 'top'){//if direction is top

					document.getElementById(div_id).style.top = (Number(start_at) > Number(end_at)? Number(start_at) - loops : loops) + 'px';

					return
				}

				if(direction.toLowerCase() == 'bottom'){//if direction is bottom

					document.getElementById(div_id).style.bottom = (Number(start_at) > Number(end_at)? Number(start_at) - loops : loops) + 'px';
					return;
				}
				

			}

			if(!div_get_style.position){//if position attributes not provided

				
				if(div_get_style.margin.length || div_get_style.marginLeft.length || div_get_style.marginRight.length || div_get_style.marginTop.length || div_get_style.marginBottom.length){//if any margin provided
			
			
					if(direction.toLowerCase() == 'left'){//if direction is left

						document.getElementById(div_id).style.marginLeft = (Number(start_at) > Number(end_at)? Number(start_at) - loops : loops) + 'px';//get div and if start number is bigger than end number do decrement movement i.e 9,8,7,6,5 etc, else do normal movement 

						return;
	
					}
	
					if(direction.toLowerCase() == 'right'){//if direction is right
	
						document.getElementById(div_id).style.marginRight = (Number(start_at) > Number(end_at)? Number(start_at) - loops : loops) + 'px';
						return;
	
					}
	
					if(direction.toLowerCase() == 'top'){//if direction is top
	
						document.getElementById(div_id).style.marginTop = (Number(start_at) > Number(end_at)? Number(start_at) - loops : loops) + 'px';
	
						return
					}
	
					if(direction.toLowerCase() == 'bottom'){//if direction is bottom
	
						document.getElementById(div_id).style.marginBottom = (Number(start_at) > Number(end_at)? Number(start_at) - loops : loops) + 'px';
						return;
					}

				}


			}




			

		}, 50);



	  }


}
  

//user click guide cues
        var animate_interval = "";//contains js interval 
		var contrast_change_alternate_tracker = false;//tracks if contrast was change

        function border_breath_animation(color_pallette = [], div_id="", apply_to = "border"){//if not "border" can be "background"

			// console.log(div_id)
			
           
            if(color_pallette.length > 0 && typeof color_pallette == "object"){

                //add transparent color to array
                color_pallette.unshift("transparent");

                var color_pallette_current_color_index = 0; //start default 

                animate_interval = setInterval(function(){ //set

                    if(color_pallette_current_color_index == color_pallette.length){ //if color index is array length//array length will be 1 point extra

                        color_pallette_current_color_index = 0;//reset

                    }
					if(apply_to == "border"){ //default apply on border
						document.getElementById(div_id).style.borderColor =  color_pallette[ color_pallette_current_color_index ]; //apply color
					}

					if(apply_to != "border"){//other apply on background
						document.getElementById(div_id).style.backgroundColor =  color_pallette[ color_pallette_current_color_index ]; //apply color
					}
                   
              
                    color_pallette_current_color_index = color_pallette_current_color_index  + 1;//increment

					

					    //item contrast change
						if(contrast_change_alternate_tracker == true){//if constrast was set

                      
							// user buy           
							document.getElementById('user_buy_option').style.filter = 'contrast(100%)';
	
							contrast_change_alternate_tracker = false//set contrast tracker
	
							return
	
						}


				 		// user buy
                        document.getElementById('user_buy_option').style.filter = 'contrast(95%)';

                        contrast_change_alternate_tracker = true//set contrast tracker
	

                    //console.log("busy");
                }, 200)  

            }

        }
  
  
  /*=====================================================================================================================================================
	  functions/process to destroy when user leaves a page
  =======================================================================================================================================================*/
  
	  function process_destroyer(){
		  
		  clearInterval(router_auto_loader);
		  
		  clearInterval(animate_interval);//clear animate
		  
	  }
  
  /*=====================================================================================================================================================
	 
	 global vars
	 seller login
	  
  =====================================================================================================================================================*/
  /*seller & ||  user login details collcetor */
  var seller_login = { logged_in : false, seller_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:'', resturent_hotel_cafe_login:false, manages_hotspot :false, hotspot_printable_vouchers :false,hotspot_printable_vouchers_template :'Primary',managed_hotspot : [],nocharge_voucher_sell : false };

  seller_login= {
		"logged_in": true,
		"seller_id": "8905135800000",
		"usertype": "Seller",
		"credit": 500,
		"name": "Tsehla Seller",
		"customer_partners_contact_list": [],
		"resturent_hotel_cafe_login": false,
		"manages_hotspot": false,
		"hotspot_printable_vouchers": true,
		"hotspot_printable_vouchers_template": "Primary",
		"managed_hotspot": [],
		"nocharge_voucher_sell": true
	}

  console.log('======delete this [seller_login ]===== ',seller_login)
  
  
  
  /* auto generated code from the user */
  var unique_code = null;


  /* tracks if button pressed is for time voucher of data voucher */
  //related to function [ add_sell_ticket_pop_contents() ] && [ ]
  var data_or_time_ticket_pressed_tracker = 'data'; //defaults to data
  
  /*=====================================================================================================================================================
	 
	 global vars
	 distributor login
	  
  =====================================================================================================================================================*/
  
  var distributor_login = {logged_in : false, distributor_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:''};
  
  /*=====================================================================================================================================================
   
	 
	 global vars
	 admin login
	  
  ========================================================================================================================*/
  
  var admin_login = {logged_in : false, admin_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:'', manages_hotspot :false, hotspot_printable_vouchers :false, hotspot_printable_vouchers_template :'Primary', managed_hotspot : [] };
  

//store url of hotspsot login link
var hot_spot_url;

// ++++++++++++++++++++++++++++++++++++++++++++++++  get url and route ++++++++++++++++++++++++++++++++++++++++
var current_url= window.location.pathname;//content after domain 
var current_domain = window.location.host;//domain en port//use this on live


// //change https to http when on localhost 
// var http_https = "https://";

// if(current_domain.search('127.0.0.1') > -1 || current_domain.search('localhost') > -1){//match exist

// 	http_https = 'http://';//return http
// }

//change protocol to unsecured if coming from unsecured site ::
var http_https = "https://"; 

if(location.protocol === 'http:'){
	http_https = 'http://';//return http
}

// console.log(current_domain);
// console.log(http_https);


//selected menu https securing//check if this ap server support https, if so run some menu in https to allow features that allow https to
function selected_https(){

	//alert('https://' + current_domain + location.pathname + location.search);
	
	if(http_https == 'https://'){//if website already loaded on https, 
		return; //then ignore//end function

	}

	var url_secure_version = 'https://' + current_domain + location.pathname + location.search;//url to test if current website link can be served via https by server

	$.ajax({
		type: "HEAD",
		async: true,
		url: url_secure_version,
		success: function(message, text, response) {

				//console.log('1 : ',message, '2 : ',text, '3 : ',response, '4 : ',response.status);
				if(response.status == 200){
					//window.open(url_secure_version, '_self');

					//to keep back navi history
					window.location.assign(url_secure_version);//change window current url/go to new url

					//show loading icon
					$('body').append(`

					<span style='position:absolute; top:42vh;left:40vw; font-size:18px;font-weight:800; width:300px;height:60px;background-color:white;border-radius:20px;border:1px solid blue;text-align:center'>
						<i class='la la-cog la-spin' style='font-size:15px;font-weight:800'>
						</i>
						Secure page found,<br> Applying security please wait.
					</span>
					`);

					
				}
				
				
			}
		}).catch(function(err){//if file not exist

			//console.log(err);
					
		});
		




}

		

//selected_https()

//get url parms and return results as object array
function url_parms_object(){

	var url_query_string = window.location.search.replace('?','').split('&');//clean string and turn to array
	var url_query_string_object_array = {};

	url_query_string.forEach(function(array){
		var temp_array = array.split('=');//break array item to sub array
		url_query_string_object_array[temp_array[0]]=temp_array[1];//save as object array
		


	});

	return url_query_string_object_array;//return object array as function

//console.log(url_query_string);
//console.log(url_query_string_object_array);
}

/*++++++++++++++++++++++++++++++++++++++++++++++++ hide or show other pages div +++++++++++++++++++++++++++++++++++++++*/
function dom_hide_show(option, ...argument){	

	if(option.toLowerCase() == 'hide'){//hide	

		argument.forEach(function(div_Id){ //to hide	
			document.getElementById(div_Id).style.display = 'none';	
		})	
		return 'divs hidden == success';	
	}	

	if(option.toLowerCase() == 'show'){//show	

		argument.forEach(function(div_Id){ //to show	
			document.getElementById(div_Id).style.display = 'block';	
		})	
		return 'divs shown == success';	

	}	
	return 'nothing to show or hide';	


}

/*++++++++++++++++++++++++++++++++++++++++++++++++ add break on text/string +++++++++++++++++++++++++++++++++++++++*/
function text_line_break(input_string){

	//example string 
	//var input_string = "This is the second version router, running test adding new features,This is the second version router, running test adding new features";

	input_string = input_string.replace(/\s/g, ' ^').split('^');//replace space with space and ^ then split to array by ^ char;

	var new_string='';//resulting input_string
	let temp_array =[];//temporary altered array
	input_string.forEach((value, index)=>{
	
	//create new array
		  temp_array.push(value);//transfer text/char to new array
	
		  (input_string.length>7)?(index != input_string.length-1)?((index+1)%7==0)?temp_array.push('<br>'):null:null:null;////skip array index 0//if string to array has more than ten items/words/char //if array text index divisable by 10, and not last item of array//add break
			//console.info(index%10,index%10==0);
	  //fill new string 
		if(index == input_string.length-1 ){//when done processing last item from original string array
		  temp_array.forEach((text_or_char)=>{//create new edited string
			   new_string += text_or_char;
		  });
	
		}
	});
	
	//console.log(new_string);
	return new_string;

}


// +++++++++++++ get defined hotspot data +++++++++++++

//get wifi radius link passed from hotspot login page//extract hotspot details
var auto_user_creater_wifi_radius_link = {

	u_link : '',
	u_link_allow : false,
	hotspot_id : undefined,
	hotspot_voucher_template_link : undefined,
	router_hotspot_location : 'default',
	allow_hotspot_universal_vouchers : true,
	mikrotik_trial_user_data_limit : '',
	mikrotik_trial_user_data_expiery : undefined

	
};


 $.get('/api/hotspot_data?location='+ (url_parms_object()['hotspot_location']?url_parms_object()['hotspot_location']:''), function(response, status){
	
	   if(status == 'success'){//if success
	
		// console.log(response) 

		   //add u link
		   auto_user_creater_wifi_radius_link.u_link = response.external_radius_user_creation_link;

			//track if u link is enabled
		   auto_user_creater_wifi_radius_link.u_link_allow = response.use_external_radius_user_creation;

		   // add hotspot id
		   auto_user_creater_wifi_radius_link.hotspot_id = response.router_id;

		   //add hotspot voucher template link
		   auto_user_creater_wifi_radius_link.hotspot_voucher_template_link = response.hotspot_voucher_template_link;

		   //hotspot location
		   auto_user_creater_wifi_radius_link.router_hotspot_location = response.router_location;
		   //console.log('hotspot location ',response.router_location)

		   //allow default market vouchers to be shown
		   auto_user_creater_wifi_radius_link.allow_hotspot_universal_vouchers = response.allow_hotspot_all_location_marked_vouchers;

		   //get data limit in mb/gb or time in /min/hours for mikrotik [ trial ] user login
		   auto_user_creater_wifi_radius_link.mikrotik_trial_user_data_limit = response.mikrotik_trial_user_data_limit;

		   //get data expiery mikrotik [ trial ] user login
		   auto_user_creater_wifi_radius_link.mikrotik_trial_user_data_expiery = response.mikrotik_trial_user_data_expiery


	   }

	   else{

			console.log('Error retrieving hotspot data from db to extracts details') ;
	   }      
	   
	   	//check if voucher template image with rouder id as a name exists
		hotspot_voucher_template_selector();
   });

   //console.log(auto_user_creater_wifi_radius_link);

   // ++++++++++++++++++++++++++++++++++++ custom alerts ++++++++++++++++++++++++++++++++++++++++++++++++
   
	function custom_alert(open_type='', alert_text='""', button_okay, button_cancel){//open type determin if links should open in self document or new tab/window option "_blank/_self/ if open_type not provided then fn will assume its a function type of alert// butons should be function with their input data myfunction(1,b) or if url they should be complete including http/https


   		//clean div's
		document.getElementById("custome_alert_box_text").innerHTML = ''; //alert text div
		document.getElementById("custome_alert_box_button").innerHTML = ''; //alert buttons fiv



		//add alert text // the text should be formatted as desired . ie <br />, <p>, <h> etc html elementsa edded as desired, including styling
		$("#custome_alert_box_text").append("<br />" + alert_text);

		//add buttons

		//if both buttons  and its url type meaning open_type is specified
			if(button_okay && button_cancel && open_type && open_type.toLocaleLowerCase().trim() == '_blank' || open_type.toLocaleLowerCase().trim() == '_self' ){

				$("#custome_alert_box_button").append(`
				
				<span style="width:inherit; max-heigh:inherit;">

					<button onclick="window.open('${button_cancel}', '${open_type.toLocaleLowerCase().trim()}') ;dom_hide_show('hide', 'custome_alert_box_container')" class="btn btn-danger" style='margin-left:10px'>Cancel</button>
					<button id="custome_alert_okay_button" onclick="window.open('${button_okay}', '${open_type.toLocaleLowerCase().trim()}') ;dom_hide_show('hide', 'custome_alert_box_container'); clearInterval(animate_interval)" class="btn btn-primary">Okay</button>
				
				</span>`
			);}

			//if single url button provided
			if(button_okay && open_type && open_type.toLocaleLowerCase().trim() == '_blank' || open_type.toLocaleLowerCase().trim() == '_self' ){

				$("#custome_alert_box_button").append(`
				
				<span style="width:inherit; max-heigh:inherit; ">

					<button id="custome_alert_okay_button" onclick="window.open('${button_okay}', '${open_type.toLocaleLowerCase().trim()}') ;dom_hide_show('hide', 'custome_alert_box_container')" class="btn btn-primary" style=''>Okay</button>
					<br />
				
				</span>`
			);}
			
		

			//for functions

			//if dual buttons
			if(button_okay && button_cancel && open_type.length == 0){ //for function open type should not be specified

				$("#custome_alert_box_button").append(`
				
				<span style="width:inherit; max-heigh:inherit">

					<button onclick="${button_cancel} ;dom_hide_show('hide', 'custome_alert_box_container')" class="btn btn-danger" style='margin-left:10px'>Cancel</button>
					<button id="custome_alert_okay_button" onclick="${button_okay} ;dom_hide_show('hide', 'custome_alert_box_container')" class="btn btn-primary">Okay</button>
				
				</span>`
			);}

			//if single button
			if(button_okay && button_cancel == undefined && open_type.length == 0){ //for single button , function open type should not be specified and cancel button should remain ubdefined

				$("#custome_alert_box_button").append(`
				
				<span style="width:inherit; max-heigh:inherit">

					<button id="custome_alert_okay_button" onclick="${button_okay};dom_hide_show('hide', 'custome_alert_box_container')" class="btn btn-primary">Okay</button>
				
				</span>`
			);}


			//just a standard alert()
			if(open_type.length == 0 && button_okay == undefined && button_cancel == undefined){ //to call do  custom_alert("","alert text");

				$("#custome_alert_box_button").append(`
				
					<span style="width:inherit; max-heigh:inherit">

						<button id="custome_alert_okay_button" onclick="dom_hide_show('hide', 'custome_alert_box_container')" class="btn btn-primary">Okay</button>
					
					</span>`
				);
			}

		//show div
		dom_hide_show('show', 'custome_alert_box_container');
	

	}



/*_____________________________________________________________________________________________________________________________________________________

app routes

_______________________________________________________________________________________________________________________________________________________*/

/*=====================================================================================================================================================
 external URL link to internal routing
=====================================================================================================================================================*/



// +++++++++++++++++++++++++++++++++++++++++++++++++++ home auto run function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

(function(){
 
 if(current_url == '/transaction'){
   
   dom_hide_show('show','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page');

	//temp store hotspot login link from urll//pass it to voucher buy page url
	 hot_spot_url = document.location.search;

	 clearInterval(animate_interval);//clear animate
	 border_breath_animation(["#ffffff", "#bcd8bf", "#8db792", "#619a68", "#37773f", "#114217", "#031505"], "user_buy_option");//button animation
 
 } 
if(current_url == '/buy_voucher'){
  
   dom_hide_show('hide','first_page'); dom_hide_show('show','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page');dom_hide_show('hide','admin_fourth_page'); 
   buy_page_on_init();/*page init */

   clearInterval(animate_interval);//clear animate
   //border_breath_animation(["#f3f5f7", "#d8e2ec", "#e3e7ea"], "qrcode_text", "background");//button animation 
   border_breath_animation(["#ffffff", "#bcd8bf", "#8db792", "#619a68", "#37773f", "#114217", "#031505"], "qrcode_text_code", "border");//button animation
	
	//set hot spot login link for router//enable auto login after voucher sold//handles both free login request or paid voucher request
	 var url_params = document.location.search.indexOf('?hotspot_link=') > -1 ?document.location.search.indexOf('?hotspot_link=') : document.location.search.indexOf('?free_login&hotspot_link=');

	//++++++ check if hotspot link is available in main Url, use link if so ++++=+
	
	var url_params_array = url_parms_object();//get/return url parameters as objects

	//url_params != -1 ?hot_spot_url=document.location.search.replace('?free_login&hotspot_link=','').replace('?hotspot_link=',''):hot_spot_url=undefined;
	url_params != -1 ?hot_spot_url=url_params_array['hotspot_link']:hot_spot_url=undefined;
	//console.log(hot_spot_url);
	//console.log(url_params_array)


	//if free voucher login/show manual view page menu
	if(document.location.search.indexOf('?free_login&hotspot_link=') > -1){

		clearInterval(animate_interval);//clear animate
		simple_or_manual_view('manualViewButton');//show manual version voucher buy menu
	}
		
 
 }
if(current_url == '/sell_voucher'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('show','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page');dom_hide_show('hide','admin_fourth_page');

   clearInterval(animate_interval);//clear animate
   border_breath_animation(["#ffffff", "#bcd8bf", "#8db792", "#619a68", "#37773f", "#114217", "#031505"], "seller_distributor_option_2");//button animation

 }
if(current_url == '/seller_login'){

	//check if server provide [ https version of the url ] if url is secure via [ http ]
	//selected_https();//disable this function call if you dont desire this hehavior //ISSUE WITH QR CODE USAGE FOR SELLER
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('show','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page');dom_hide_show('hide','admin_fourth_page'); 
 

   clearInterval(animate_interval);//clear animate
   border_breath_animation(["#ffffff", "#bcd8bf", "#8db792", "#619a68", "#37773f", "#114217", "#031505"], "fourth_page_id_input");//button animation


 }
if(current_url == '/distributor_login'){
   //check if server provide [ https version of the url ] if url is secure via [ http ]
	selected_https();//disable this function call if you dont desire this hehavior
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('show','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page');
 
 }
if(current_url == '/admin_login'){
   //check if server provide [ https version of the url ] if url is secure via [ http ]
	//selected_https();//disable this function call if you dont desire this hehavior //ISSUE WITH AUTO VOUCHER CREATION FOR ADMIN
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('show','admin_fourth_page'); 
 
 }

    
 })();



/*===================================================================================================================================================
    
        when success login//same url diffrenet content
        
====================================================================================================================================================*/
//part of seller/admin login ***
var seller_connected_on_owned_hotspot = false;//keep track if user is connected to hotspot
var was_connected_before_status_change = false; //keep track if user account was ever connected before being disconnected on owned wifi
var owned_hotspot_interval; //keep interval for clearing later

function allow_no_paid_selling(){//prevent user account from using recharge point to sell voucher on their owned hotspot// this function keeps checking if user is still connected on owned hotspot

	//  var seller_login = { logged_in : false, seller_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:'', resturent_hotel_cafe_login:false, manages_hotspot :false, hotspot_printable_vouchers :false,hotspot_printable_vouchers_template :'Primary',managed_hotspot : [],nocharge_voucher_sell : false };

	
	if(seller_login.logged_in && url_parms_object().hotspot_link.length > 10 && url_parms_object().hotspot_location ){//if seller is logged in // and parameters provided on urls

	
		//set timeout to handle no event listner response from iframe/ this will happen when i framed got no response .ie user not logged in to the hotspot so the hotspot url is invalide since its only exist on router hotspot//also when the returned iframe page has no code that comminicate with the parent code
		var no_response_timeout = window.setTimeout(function(){ 

			console.log('hotspot manage timeout')
			
			//clear owned hotspot connected check interval
			window.clearInterval(owned_hotspot_interval);

			//hide
			if( was_connected_before_status_change ){//if //do

				document.getElementById('owned_wifi_connected').style.display = 'none'; //hide connected banner 
				document.getElementById('owned_wifi_disconnected').style.display = 'block';//show disconnect banner
			}

			seller_connected_on_owned_hotspot = false;//set connected to owned hotspot as false

			
			// ** clear 
			// -- iframe
			document.getElementById('iframe_container').innerHTML = '';//clear div of iframe content

			// -- event listner
			window.removeEventListener('message', function(result){
				//console.log(result);
			});

		}, 60000)//set timeout for 2 minutes

		//get hotspot login url and open iframe//THIS ONLY WORKS IF ORIGIN IS SAME
		//in this case mikrotik hotspot address is streetwifiy.co.za or whatever specified by [ url_parms_object().hotspot_link ] when calling that connected to the hotspot, mikrotik will reply with external hotspot login page, in this case the page is either login/logout/status found in the same server as this in the folder [ /html/ ]. so at the end [ same-origin ] cors requirement is met so iframe can work //error using ajax as mikrotik does not reply witth cors accept headers  [ this not working { issue calling hotspot url which is https at the moment causes browser to give error since the seller is logged in in https by default if its available }]

		window.addEventListener('message', function(recived_data){//wait for message with hotspot location from code in hotspot login page loaded from iframe
			
			console.log(recived_data.data[1]);

			//clear timeout
			window.clearTimeout(no_response_timeout);//clear/stop connection fail interval

			//check if currently hotspot connected matches seller managed hotspots
			if(seller_login.managed_hotspot.length > 0){//if hotspot names/locations are provided in seller profile

			
				var loop_recheckes_still_connected = false;//keep track if seller account is still connected in each loop//its set to false at end of array loop 

				//loop through and find match
				seller_login.managed_hotspot.forEach(function(data, index){

					//set connected variables
					if(data && recived_data.data[1] && recived_data.data[1].toLowerCase().trim() == data.toLowerCase().trim() ){//if managed hotspots matches connected to hotspot,//checks returned hotspot location name, with managed hotspot location name
						
						if(seller_connected_on_owned_hotspot == false){//if  [ seller_connected_on_owned_hotspot  ] has notbeen set as true//it will be on first function call

							seller_connected_on_owned_hotspot = true;//set connected to owned hotspot as true

							//give alert on first login //once only on first login

							alert('You are connected on WiFi that you have been set as the owner.\nVoucher selling will not be charged on this account while you remain connected on this WiFi hotspot.');

							

							//show owned wifi connected banner
							document.getElementById('owned_wifi_disconnected').style.display = 'none'; //hide disconnected banner  
							document.getElementById('owned_wifi_connected').style.display = 'block';//show connected banner

							//set owner connection histor tracker to true
							was_connected_before_status_change = true;

							//is_seller_still_connected_to_owned_wifi_hotspot(); //do periodic check of if seller still connected to their owned hotspot
							owned_hotspot_interval = window.setInterval(function(){
		
								allow_no_paid_selling();//call owned hotspot checking
								//console.log(1)
							}, 60000); //every 15 minutes
							//}, 900000); //every 15 minutes


						}
						
						loop_recheckes_still_connected = true; //set as true, keep track if user is still connected to managed hotspot on each checking run

					}

					
					
					if(seller_login.managed_hotspot.length == index + 1 ){//if array loop has reach end





						//check if match was not found
						//if(owned_hotspot_match_found == false || loop_recheckes_still_connected == false){// [ loop_recheckes_still_connected ] will be false if user moves away from maged hotspot

						if( loop_recheckes_still_connected == false){// [ loop_recheckes_still_connected ] will be false if user moves away from maged hotspot//end checks 

							//show owned WiFi doiconnected message
							document.getElementById('owned_wifi_connected').style.display = 'none'; //hide connected banner 

							if(was_connected_before_status_change ){//if user was connected to owned wifi sometime in the session before disconnecting
								//show disconnected banner
								//useful in not showing the banner if the user was never connected to begin with//incase some if statement let water in
								document.getElementById('owned_wifi_disconnected').style.display = 'block';//show disconnect banner
							} 
							
							//clear owned hotspot connected check interval
							window.clearInterval(owned_hotspot_interval);

							seller_connected_on_owned_hotspot = false;//set connected to owned hotspot as false


						}


						loop_recheckes_still_connected = false;//return to false, keep track if user is still connected to managed hotspot on each checking run
					}
				})
				
				
			//clear timeout
			window.clearTimeout(no_response_timeout);//clear/stop connection fail interval

			}

			// ** clear 
			// -- iframe
			document.getElementById('iframe_container').innerHTML = '';//
			// -- event listner
			// window.removeEventListener('message', function(result){
			// 	//console.log(result);
			// });

		}, false);


	
		$('#iframe_container').append(`
			<iframe id='iframe' src='${url_parms_object().hotspot_link}'></iframe>
		`); //using redirect to attempt to bypass mixed content error
	


		
		// //to run when timeout fires if not cancelled
		// function time_out_function(){

		// 	console.log('hotspot manage timeout')
			
		// 	//clear owned hotspot connected check interval
		// 	clearInterval(owned_hotspot_interval);

		// 	seller_connected_on_owned_hotspot = false;//set connected to owned hotspot as false

		// 	// ** hide and show banner message if necessary

		// 	//show
		// 	if( document.getElementById('owned_wifi_connected').style.display == 'none'  ){//if free voucher sell message is not shown//hide all message banners just incase

		// 		document.getElementById('owned_wifi_connected').style.display = 'none'; //hide connected banner 
		// 		document.getElementById('owned_wifi_disconnected').style.display = 'none';//show disconnect banner
		// 	}
			
		// 	//hide
		// 	if( document.getElementById('owned_wifi_connected').style.display == 'block'  ){//if free voucher sell message is shown

		// 		document.getElementById('owned_wifi_connected').style.display = 'none'; //hide connected banner 
		// 		document.getElementById('owned_wifi_disconnected').style.display = 'block';//show disconnect banner
		// 	}
			
		// 	// ** clear 
		// 	// -- iframe
		// 	document.getElementById('iframe_container').innerHTML = '';//clear div of iframe content

		// 	// -- event listner
		// 	window.removeEventListener('message', function(result){
		// 		//console.log(result);
		// 	});
		// }
		

	}


}

// //periodically checks if seller is still connected to hotspot they owned, if they have disconnected, [ free voucher selling ] will be dissallowed
// var owned_hotspot_interval; //keep interval for clearing later

// function is_seller_still_connected_to_owned_wifi_hotspot(){

// 	return owned_hotspot_interval = setInterval(function(){
		
// 		allow_no_paid_selling();//call owned hotspot checking
// 		console.log(1)
// 	}, 60000); //every 15 minutes
// 	//}, 900000); //every 15 minutes
// }

function seller_sell_menu(){


		//check url to see if menu to show is for voucher sell or complimentary vucher
		if(document.location.search.indexOf('?its_resturent_hotel_cafe_login=true')> -1){

			seller_login.resturent_hotel_cafe_login = true; //default set to false
		}
	
	
	   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('show','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page'); dom_hide_show('hide','super_admin_works_menu'); dom_hide_show('hide','admin_eigth_page');dom_hide_show('hide','recharge_codes_container');dom_hide_show('hide','router_page'); dom_hide_show('show','outer_menu_open_overlay');
	   menu_button_sever('seller_show');
	   process_destroyer();
	   
	   

	   //select which menu to show first//sell voucher or complementary voucher menu
		if(seller_login.resturent_hotel_cafe_login){//show complementary menu
			document.getElementById("sell_voucher").style.boxShadow="2px 1px 2px lightgrey"; 
			document.getElementById("sell_voucher").style.backgroundColor ="snow";
			current_sell_menu_distinguisher ="-hotel-cafe";//set hotel cafe varible
			dom_hide_show('show','complementary_ticket_menu');

		}
		if(!seller_login.resturent_hotel_cafe_login){//shoe sell menu
			document.getElementById("complementary_voucher").style.boxShadow="-2px 1px 2px lightgrey"; 
			document.getElementById("complementary_voucher").style.backgroundColor ="snow";
			dom_hide_show('show','sell_ticket_menu');

			clearInterval(animate_interval);//clear 
			border_breath_animation(["#ffffff", "#bcd8bf", "#8db792", "#619a68", "#37773f", "#114217", "#031505"], "seller_ticket_amount");//start animate
		
		
		}

		//do side menu animation
		animate_four_direction ('side_menu_container', direction = 'right', start_at = '140', end_at = '12');

		if(seller_login.nocharge_voucher_sell && seller_login.manages_hotspot ){//if seller owns hotspot and no-charge voucher selling is allowed for them on their hotspot
			
			allow_no_paid_selling()//do owned hotspot check on login
			
		}
		
		

}





function distributor_works_menu(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('show','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page'); dom_hide_show('hide','super_admin_works_menu'); dom_hide_show('hide','admin_eigth_page');dom_hide_show('hide','recharge_codes_container');dom_hide_show('hide','router_page');dom_hide_show('show','outer_menu_open_overlay');
		menu_button_sever();
		process_destroyer();

		//do side menu animation
		animate_four_direction ('side_menu_container', direction = 'right', start_at = '140', end_at = '12');
}

function distributor_works_menu_add_user(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('show','eigth_page'); dom_hide_show('hide','admin_fourth_page');dom_hide_show('hide','super_admin_works_menu'); dom_hide_show('hide','admin_eigth_page');dom_hide_show('hide','recharge_codes_container');dom_hide_show('hide','router_page');
		menu_button_sever();
	    process_destroyer();
    
}
function admin_fourth_page_menu(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page'); dom_hide_show('show','super_admin_works_menu'); dom_hide_show('hide','admin_eigth_page');dom_hide_show('hide','recharge_codes_container');dom_hide_show('hide','router_page');dom_hide_show('show','outer_menu_open_overlay');
		menu_button_sever('admin_user_side_menu_button');
		process_destroyer();
		
		//do side menu animation
		animate_four_direction ('side_menu_container', direction = 'right', start_at = '140', end_at = '12');
    
}

function super_admin_works_menu_add_user(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page'); dom_hide_show('hide','super_admin_works_menu'); dom_hide_show('show','admin_eigth_page');dom_hide_show('hide','recharge_codes_container');dom_hide_show('hide','router_page');dom_hide_show('show','outer_menu_open_overlay');
		menu_button_sever();
		process_destroyer();

    
}


function admin_distributor_works_menu(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page'); dom_hide_show('show','super_admin_works_menu'); dom_hide_show('hide','admin_eigth_page');dom_hide_show('hide','recharge_codes_container');dom_hide_show('hide','router_page');
	    process_destroyer();
    
}

function recharge_codes_container_works_menu(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page'); dom_hide_show('show','super_admin_works_menu'); dom_hide_show('hide','admin_eigth_page');dom_hide_show('hide','recharge_codes_container');dom_hide_show('hide','router_page');
	    process_destroyer();
    
}

function recharge_codes_container_works_menu_open(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page'); dom_hide_show('hide','super_admin_works_menu'); dom_hide_show('hide','admin_eigth_page');dom_hide_show('show','recharge_codes_container');dom_hide_show('hide','router_page');
	    process_destroyer();
    
}

function router_page_works_menu_open(input){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page'); dom_hide_show('hide','super_admin_works_menu'); dom_hide_show('hide','admin_eigth_page');dom_hide_show('hide','recharge_codes_container');dom_hide_show('show','router_page');
	    process_destroyer();
    	show_router_workd_extra_menu(input);
		
}


/*=====================================================================================================================================================
    Internal navigation
=====================================================================================================================================================*/



/* voucher buy link */
function buy_voucher(){
    
 window.open('/buy_voucher'+ (hot_spot_url?hot_spot_url:''), '_self');//pass router login link//while calling this if its exists
	process_destroyer();
}
/* voucher sell link */
function sell_voucher(){
    
 //window.open('/sell_voucher?u_link=' + auto_user_creater_wifi_radius_link.u_link, '_self');
 window.open('/sell_voucher' + (hot_spot_url?hot_spot_url:''), '_self');
	process_destroyer();
}

function third_page_seller_login(is_cafe_hotel_resturent =''){//is its not cafe resturant or hotel login dont add query to url

 //window.open('/seller_login'+ is_cafe_hotel_resturent + (is_cafe_hotel_resturent.length > 0?'&u_link=':'?u_link=') + auto_user_creater_wifi_radius_link.u_link , '_self');
 window.open('/seller_login'+(document.location.search?document.location.search + '&':'?') + is_cafe_hotel_resturent, '_self');
	process_destroyer();
}

function third_page_distributor_login(){
    
 window.open('/distributor_login', '_self');
	process_destroyer();
}
function admin_fourth_page_login(){
    
 //window.open('/admin_login?u_link=' + auto_user_creater_wifi_radius_link.u_link, '_self');
 window.open('/admin_login', '_self');
	process_destroyer();
}/*_____________________________________________________________________________________________________________________________________________________

buy data page
_______________________________________________________________________________________________________________________________________________________*/


/*===================================================================================================================================================== 

generate unique random code 

=====================================================================================================================================================*/



function buy_page_on_init(){ //get unique code for this user session


	var url= http_https + current_domain + '/api/buy?code=unique_code';//change '' + current_domain + '' to live domain
    
    
       $.get(url, function(response, status){//response contain unique code
           

           if(status == 'success'){
             
				auto_voucher_check(response);//start check for voucher with unique code
				
				qr_code_fn(response)//create qr image with code 
			             
                return dom_innerHtml('second_page_user_auto_code', response);
               
           }
           
           else{
             return dom_innerHtml('second_page_user_auto_code', 'error requesting unique code'); 
           }
       });   
    
}


/*===================================================================================================================================================== 
start timer for auto voucher download
=====================================================================================================================================================*/

//console.log(url_parms_object())

var free_voucher_login = false;//allow unattended login if free voucher


function auto_voucher_check(uniqueCode){

		unique_code = uniqueCode;

		var url_params_array = url_parms_object();//get/return url parameters as objects
		
		//+++++++++++ default url for voucher finding +++++++++++++
		var url= http_https + current_domain + '/api/buy?code=get_voucher&unique_code=' + uniqueCode + '&mac=' + url_params_array['mac'];//change '' + current_domain + '' to live domain
		

		//+++++++++++++++ search link params to see if this page was called by free voucher button click ++++++++++

		if(document.location.search.indexOf('free_login') != -1){ //if true change url handling request
			//alert('Yes user was directed by pressing free voucher button on hotspot page');
			url= http_https + current_domain + '/api/buy?code=free_voucher';
			
			free_voucher_login = true;//login is free voucher


			//for free login inititated by enabling [ trial user ] on mikrotik hotspot // server connection to check for free ticket is not necessary
			if(url_params_array.router_free_type == 'true'){

				//call auto login function // mikrotik trial user expects 'T-' + client device mac address as username only; sometimes [ dst= ] which is redirect url link with [ http ], if not provided user will be directed to status page most likely, seem not with mikrosoft edge thought
								
				/* FUNCTION REMOVED AND SENT TO [ selected_voucher_ticket_template_append() ], issue it runs before function [ hotspot_voucher_template_selector() ] ticket request ajax call completes

				auto_login({

					vocher_code : 'N/A',
					voucher_username : 'T-' + url_params_array.mac,
					voucher_password : '' 
				});

				*/

				return; //end function

			}
		}
			
        var response = uniqueCode;

        var auto_voucher_loader = setInterval(function check_voucher(){
            //alert(response);                       
            $.get(url, function(response, status){
           
           if(status == 'success'){
               dom_innerHtml('second_page_ticket_status', response);
			   
               if(response != 'Voucher Not found'){
                dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
               var show_code = "<p style='color:green;margin:0px;padding:0px;height:0px;width:0px'>Please Enter This Voucher Code : <span style='color:red; margin:0px;padding:0px;height:auto;width:auto'>" + JSON.stringify((response.vouchercode == 'N/A')?response.voucher_username:response.vouchercode) +"</span></p>";
               dom_innerHtml('second_page_ticket_status', show_code);
				stop_auto_voucher_check();//timer stop
				
				//voucher_print(response);//print voucher
				auto_login(response);//give auto login prompt

               }
           }
           
           else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
               
           }
           
               
           });
           }, 3000);
                   
    
//console.log(unique_code);
    
/*======================================================================================================================================================
Not used tickets/printed tickets refunding 

========================================================================================================================================================*/    
//if wrong code was used when selling the ticket, the seller can do a refund: after thirty days
	
	
	
	
	
/*=====================================================================================================================================================
stop timer for auto donloader
=====================================================================================================================================================*/
function stop_auto_voucher_check(){
            clearInterval(auto_voucher_loader);
        }
       

}

/*======================================================================================================================================================

manual voucher check/download

========================================================================================================================================================*/


function manual_voucher_init(button_id){
		
		var url_params_array = url_parms_object();//get/return url parameters as objects

		//+++++++++++ default url for voucher finding +++++++++++++	
		var url= http_https + current_domain + '/api/buy?code=get_voucher&unique_code='+ unique_code + '&mac=' + url_params_array['mac'];
		

		//+++++++++++++++ search link params to see if this page was called by free voucher button click ++++++++++

		if(document.location.search.indexOf('free_login') != -1){ //if true change url handling request
			//alert('Yes user was directed by pressing free voucher button on hotspot page');
			url= http_https + current_domain + '/api/buy?code=free_voucher'


			//for free login inititated by enabling [ trial user ] on mikrotik hotspot // server connection to check for free ticket is not necessary
			if(url_params_array.router_free_type == 'true'){

				//call auto login function // mikrotik trial user expects 'T-' + client device mac address as username only; sometimes [ dst= ] which is redirect url link with [ http ], if not provided user will be directed to status page most likely, seem not with mikrosoft edge thought
				 
				auto_login({

					vocher_code : 'N/A',
					voucher_username : 'T-' + url_params_array.mac,
					voucher_password : '' 
				});
				
				return; //end function

			}
		}
    
		document.getElementById(button_id).disabled = true;//disable mabual voucher download
	
        $.get(url, function(response, status){
           
           if(status == 'success'){

				clearInterval(animate_interval);//clear animate
               
                if(response == 'Voucher Not found'){
               var show_code = "<p style='color:red;margin:0px 0px 0px 2px;padding:0px;height:0px;width:0px'>Error couldn't find voucher. <span style='color:blue; margin:0px;padding:0px;height:auto;width:auto'>re-Checking...</span></p>";
               dom_innerHtml('second_page_ticket_status', show_code);
				document.getElementById(button_id).disabled = false;//enable mabual voucher download
               
               }
               
               if(response != 'Voucher Not found'){

					dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');


					var show_code = "<p style='color:green;margin:0px;padding:0px;height:0px;width:0px'>Please Enter This Voucher Code : <span style='color:red; margin:0px;padding:0px;height:auto;width:auto'>"+JSON.stringify((response.vouchercode == 'N/A')?response.voucher_username:response.vouchercode) + "</span></p>";


				
					dom_innerHtml('second_page_ticket_status', show_code);
					
					//voucher_print(response);//print voucher
					auto_login(response);//give auto login prompt

					document.getElementById(button_id).disabled = false;//enable mabual voucher download
               }
           }
           
           else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
			 document.getElementById(button_id).disabled = false;//enable mabual voucher download
               
           }
           
               
           });
    
       } 
/*=======================================================================================================================================================

voucher printing 

=========================================================================================================================================================*/

//set voucher template according to hotspot name


//--- get router hotspot id on page/script load;//used to identifiy hotspot owner and here used to identifiy branded ticket voucher
//console.log(auto_user_creater_wifi_radius_link.hotspot_id)

//set default voucher ticket template
var ticket_template_selector = "images/default_ticket_template_not_specified.jpg";//images/uploads/ads/16-5-53PM,%203-8-2020%20streetwifiy_ticket_template.jpg

function hotspot_voucher_template_selector(){


//if hotspot_voucher_template_link is not provided
if( auto_user_creater_wifi_radius_link.hotspot_voucher_template_link.length < 6){// if link lenght provided is less than six characters
	selected_voucher_ticket_template_append();//call voucher div createer function
	
}


//if hotspot_voucher_template_link provided
if(auto_user_creater_wifi_radius_link.hotspot_voucher_template_link.length > 6){ //if link lenght provided is biger than six characters
	
	//set new image link
	ticket_template_selector = auto_user_creater_wifi_radius_link.hotspot_voucher_template_link.trim();

	//check if image with extention [ .jpg ] exist, then return headers not the image as results
	$.ajax({
		type: "HEAD",
		async: true,
		url: ticket_template_selector,
		success: function(message, text, response) {

				//console.log(response.status);
				//if found, keep link as is
				selected_voucher_ticket_template_append();//call voucher div createer function
				
			}
		}).catch(function(err){//if file not exist

			//set template back to default image
			ticket_template_selector = "images/default_ticket_template_not_specified.jpg";//set default template
			selected_voucher_ticket_template_append();//call voucher div createer function
					
		});


}

}

// $.get('images/ticket.jpg', function(result, status){//check if file exist


// 	if(status == 'success'){//if file found
// 		//add div with selected ticket template
// 		$('#buyer_container').append(ticket_template_selector);
// 	}

// 	else{
// 		//add div with default ticket template
// 		$('#buyer_container').append(ticket_template_selector);
// 	}

// }).catch(function(err){//if file not exist

// 	//add div with default ticket template
// 	$('#buyer_container').append(ticket_template_selector);
// });


function selected_voucher_ticket_template_append(){

	
	//add ticket image template to html div body
	$('#buyer_container').append(`

		<img src="${ ticket_template_selector }" id='ticket_outline' style="width: 300px; height: 270px; display:none" alt="ticket img" />
		<canvas style="width: 280px; height: 270px; display: none;" id='ticket_canvas'> Ticket </canvas>

	`);


	//call free login ticket production//for mikrotik hotspot [ trial ] user initiated free login request
	//code block moved from [ auto_voucher_check(uniqueCode) ], so as to wait for ajax call that call container function to complete

	setTimeout(function(){//added timer to prolong time before calling ticket production function

		if(free_voucher_login && url_parms_object().router_free_type == 'true'){

			
				
				auto_login({ // 

					vouchercode : 'N/A',
					voucher_username : 'T-' + url_parms_object().mac,
					voucher_password : '' 
				});

				


			}
	}, 1001);// 1001 = head is also tail


			
	
}



function voucher_print(response){
   // alert('voucher print fn');


	// console.log({response})

				var month_text = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
				var day_of_week_text = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
	
				var date = new Date();
				var hour = date.getHours();
				var minutes = date.getMinutes();
				var day_of_week = day_of_week_text[date.getDay()];
				var day_of_month = date.getDate();
				var month =month_text[ date.getMonth()];
				var year  = date.getFullYear();
	
				var print_date = (hour<12?hour=hour.toString()+':'+minutes.toString()+'am':hour=hour.toString()+':'+minutes.toString()+'pm')+' '+day_of_week+' '+day_of_month+'/'+month+'/'+year;

				var voucher_pin = response.vouchercode;

					if(voucher_pin == 'N/A'){
						voucher_pin = response.voucher_username;
					}

				var voucher_profile = (response.voucherprofile == 'N/A')?(response.voucherprofile_time?response.voucherprofile_time:''):(response.voucherprofile?response.voucherprofile:'');//if its not data profile, print time profile value
				var voucher_expiry_days = (response.voucherexpiry?response.voucherexpiry:'24 Hours');
				var voucher_amount_cost = (response.voucheramount?response.voucheramount:'0');

				var ticket_canvas = document.getElementById('ticket_canvas');
				var canvas_type = ticket_canvas.getContext('2d');
				var ticket_outline = document.getElementById('ticket_outline');
				canvas_type.drawImage(ticket_outline, 0, 0);
				canvas_type.font= '16px Arial';
				canvas_type.fillText(voucher_pin, 90, 37);
				canvas_type.font= '18px Arial';
				canvas_type.fillText(':', 80, 37);
				canvas_type.font= '13px Arial';
				canvas_type.fillText(voucher_profile, 55, 50);
				canvas_type.font= '13px Arial';
				canvas_type.fillText(voucher_expiry_days, 65, 65);

				if(response.voucher_hospitality_menu){//for hote/cafe menu produced tickets

					//if hotspot id is provided
					if(auto_user_creater_wifi_radius_link.hotspot_id){

						canvas_type.font= '18px Arial';
						canvas_type.fillText( auto_user_creater_wifi_radius_link.hotspot_id, 20, 90);

					}
					if(!auto_user_creater_wifi_radius_link.hotspot_id){//if not provided//show voucher cost

						canvas_type.font= '39px Arial';
						canvas_type.fillText('R' + voucher_amount_cost, 25, 100);

					}

				}

				if(!response.voucher_hospitality_menu){//for normalticket sell menu produced tickets
					canvas_type.font= '39px Arial';
					canvas_type.fillText('R' + voucher_amount_cost, 25, 100);
				}

				canvas_type.font= '9px Arial';
				canvas_type.fillText('PRINT '+ print_date, 9, 110);
				canvas_type.font= '7px Arial';
				canvas_type.fillText('T/C : service provided as is, use at own risk.',155,112);
			
			

		//
			
			
				
				var ticket_canvas = document.getElementById('ticket_canvas');

				//picture viewing
				//document.location.href= ticket_canvas.toDataURL('image/jpg').replace('img/jpg', 'image/octet-stream');
				
				// //picture storing
				var download_link = document.createElement('a');
				download_link.download = 'Ticket _ '+ voucher_profile +' _  ' + voucher_pin + ' _ ' + 'R' + voucher_amount_cost + ' _.png';
				download_link.href = ticket_canvas.toDataURL('image/jpg').replace('image/jpg', 'image/octed-stream');
				download_link.click()
				//download_link.clicked();
				

	
				//auto voucher adding//login
				// var voucher_username = response.voucher_username;
				// var voucher_password = response.voucher_password;
				
				// auto_login(voucher_pin, voucher_username, voucher_password);  /* issue on iphone safari, the ticket is downloaded by opening the image in current browser page, this stops presentation of auto voucher login prompt, so ticket production function will be called after [ auto login prompt ] may cause ticket not to be downloaded at all on iphone, but so long users can log in  */


				/* picture viewing
				var string = ticket_canvas.toDataURL('image/jpg').replace('img/jpg', 'image/octet-stream');

				var iframe = "<iframe width='100%' height='100%' src=" + string + "></iframe>";
				var x = window.open();
				x.document.open();
				x.document.write(iframe);
				x.document.close();
				*/
	
	
}


/*=====================================================================================================================================================

sell ticket, seller menu

=====================================================================================================================================================*/

function sell_ticket(button_id, req_complementary_voucher = false, hotel_or_cafe_ticket_requster = false){

	var ticket_complementary = req_complementary_voucher;//set is ticket complimentary to false/true
	
    //voucher code
    var seller_code_input = document.getElementById('seller_ticket_unique_code');
    
    //voucher amount
	var seller_voucher_amount_input = document.getElementById('seller_ticket_amount');
	
	//wifi radius voucher profile name # for id all had to do was to duplicate getAttribute on complementary menu below, lol realised too late after intgrating [ current_sell_menu_distinguisher ], undoing require more enenergy done just adding shorthand if else { hahaha [ embarrassed laugh]}
	var auto_voucher_radius_profile = document.getElementById((current_sell_menu_distinguisher.length == 0?'seller_ticket_amount':"seller_cpmlimentary_ticket_amount")).getAttribute('data-auto-voucher-profile' + current_sell_menu_distinguisher);

	//auto voucher expiery  # for id all had to do was to duplicate getAttribute on complementary menu below, lol realised too late after intgrating [ current_sell_menu_distinguisher ], undoing require more enenergy done just adding shorthand if else { hahaha [ embarrassed laugh]}
	var auto_voucher_expiery = document.getElementById((current_sell_menu_distinguisher.length == 0?'seller_ticket_amount':"seller_cpmlimentary_ticket_amount")).getAttribute('data-auto-voucher-expiery' + current_sell_menu_distinguisher);

	//new voucher profile  # for id all had to do was to duplicate getAttribute on complementary menu below, lol realised too late after intgrating [ current_sell_menu_distinguisher ], undoing require more enenergy done just adding shorthand if else { hahaha [ embarrassed laugh]}
	var new_voucher_profile = document.getElementById((current_sell_menu_distinguisher.length == 0?'seller_ticket_amount':"seller_cpmlimentary_ticket_amount")).getAttribute('data-voucher-profile' + current_sell_menu_distinguisher);

	//if complimentary voucher menu
	if(seller_login.resturent_hotel_cafe_login){//true

		//voucher code
		seller_code_input = document.getElementById('seller_complimentary_ticket_unique_code');
    
		//voucher amount
		seller_voucher_amount_input = document.getElementById('seller_cpmlimentary_ticket_amount');

		

		//Wifi-radius abilitity to handle hourly/daily/weekly account usage reset still in development and not ready for use
		//so end this request en give error
		if(req_complementary_voucher){
			alert("Notice :\nThis feature is being upgraded, and not available right now");
			return;
		}
	}
	
	//console.log(ticket_complementary);
        
    var url= http_https + current_domain + '/api/sell?code=sell_voucher&unique_code='+seller_code_input.value+'&voucher_amount='+seller_voucher_amount_input.value+'&seller_id='+seller_login.seller_id + '&ticket_type=' + data_or_time_ticket_pressed_tracker+'&is_complementary='+ticket_complementary+'&u_link='+auto_user_creater_wifi_radius_link.u_link+'&u_link_allowed='+auto_user_creater_wifi_radius_link.u_link_allow+'&radius_profile='+auto_voucher_radius_profile+'&voucher_expiery='+auto_voucher_expiery+'&new_voucher_profile='+new_voucher_profile + '&voucher_requester_is_hotel_or_cafe=' + hotel_or_cafe_ticket_requster;//change '' + current_domain + '' to live domain
    
    //console.log(url);
    //check voucher input length
    if(seller_code_input.value.length < 8 || seller_code_input.value.length > 9){
	
    return dom_innerHtml('firth_page_sell_menu_header', 'Please re-check "Code from buyer"'); 
    }    
    
    //check amount input length
    if(seller_voucher_amount_input.value.length > 4){
    return dom_innerHtml('firth_page_sell_menu_header', 'Please re-check "Ticket amount"'); 
    }
	
	var seller_voucher_sell_confirm = confirm('Are you sure this Number :'+seller_code_input.value+' is correct for recharge, with R'+seller_voucher_amount_input.value +' ?');
	
	if(seller_voucher_sell_confirm == false){
		return;
	}
    
    if(seller_login.credit >= seller_voucher_amount_input.value){//check if credit amount is enought to sell ticket
		
		document.getElementById(button_id).disabled=true;//disabled sell button for now
		
		
    
       $.get(url, function(response, status){
           
            
           
           if(status == 'success'){
              
                // res.jsonp = {status : 'voucher sold for R'+seller_voucher_amount_, new_credit : response.credits}
               
               //if no error resulted at the back//change front values
               if(response.new_credit != 'no_value_change'){
                   
                	seller_login.credit = response.new_credit;
                	dom_innerHtml('firth_page_seller_amount', response.new_credit);
				   	dom_innerHtml('firth_page_sell_menu_header', response.status);
				   	dom_innerHtml('seller_recharge_status','<span style="color:darkgreen;">Success, Voucher sold to ticket number :<br  /> '+seller_code_input.value+', For amount : R'+seller_voucher_amount_input.value+'</span>');
				   document.getElementById(button_id).disabled=false;//enable sell button
                   return;
               }
               
                dom_innerHtml('firth_page_sell_menu_header', response.status);
			   	dom_innerHtml('seller_recharge_status','<span style="color:red">Failure, Voucher not sold for ticket no :'+seller_code_input.value+'</span>');
			   	document.getElementById(button_id).disabled=false;//enable sell button
                return null;
           }
           
           else{
			
             	dom_innerHtml('firth_page_sell_menu_header', 'error producing ticket code'); 
			    document.getElementById(button_id).disabled=false;//enable sell button
			   return;
           }
       });  
           
		   document.getElementById(button_id).disabled=false;//enable sell button
		   return null; 
}
    
//
    
    dom_innerHtml('firth_page_sell_menu_header', 'Please recharge your account'); 
    
}


/* ==========================================================
	Select ticket amount
   ========================================================= */
//http://127.0.0.1:3100/api/voucher_types //get voucher types list with cost
//http://127.0.0.1:3100/api/voucher_types_add  //create/update voucher type list, with new one

//normal sell menu or hotel/cafe sell menu selector
//# keeps record on which menu the seller is currently using to sell//it will help distinguish when calling getAtrributes(), to produce voucher
var current_sell_menu_distinguisher = ''; //default is = ''; hotel/cafe = '-hotel-cafe';


function add_sell_ticket_pop_contents(){ //porpulate div with available ticket choices


	//div to add value on
	
	var voucher_amount_div_to_add_value_on = "seller_ticket_amount"; //default div

	if(seller_login.resturent_hotel_cafe_login){//if complimentary ticket menu

		voucher_amount_div_to_add_value_on = "seller_cpmlimentary_ticket_amount";//change div

	}
	
	//console.log(seller_login.resturent_hotel_cafe_login,voucher_amount_div_to_add_value_on )
	//clear div of old data
	document.getElementById("data_or_time_select_box").innerHTML="";
	document.getElementById("data_or_time_select_box_time").innerHTML="";

	//add manual voucher amound input button
	document.getElementById("data_or_time_select_box").innerHTML=`<button id='enter_data_ticket_amount_button' class='btn btn-warning' style='width: 94%; min-height: 30px;height:5vh;margin:3% 3% 0px 3%; display: block' onclick='document.getElementById(this.id).style.display="none";document.getElementById("data_ticket_manual_input").style.display="block"'>enter Data Ticket amount</button>

	<div id ='data_ticket_manual_input' style='width: 94%; min-height: 80px;height:15vh;margin:3% 3% 10px 3%; border:2px solid green;border-radius:5px;display:none'>
		<input type='number' placeholder='type amount for Data ticket' style='height:47%;width:100%' class='form-control' id='data_ticket_manual_input_input_box'>
		<button class='btn btn-primary' style='display: block; height:47%;width:100%' onclick='data_or_time_ticket_pressed_tracker="data";	document.getElementById("${voucher_amount_div_to_add_value_on}").value = document.getElementById("data_ticket_manual_input_input_box").value;document.getElementById("sell_ticket_enter_amount_popup").style.display="none"'>Okay</button>
	</div>
	
	`;

	document.getElementById("data_or_time_select_box_time").innerHTML=`<button id='enter_time_ticket_amount_button' class='btn btn-warning' style='width: 94%; min-height: 30px;height:5vh;margin:3% 3% 0px 3%; display: block' onclick='document.getElementById(this.id).style.display="none";document.getElementById("time_ticket_manual_input").style.display="block"'>enter Time Ticket amount </button>
	
	<div id ='time_ticket_manual_input' style='width: 94%; min-height: 80px;height:15vh;margin:3% 3% 10px 3%; border:2px solid green;border-radius:5px;display:none;'>
		<input type='number' placeholder='type amount for Time ticket' style='height:47%;width:100%' class='form-control' id='time_ticket_manual_input_input_box'>
		<button class='btn btn-primary' style='display: block; height:47%;width:100%' onclick='data_or_time_ticket_pressed_tracker="time";
		document.getElementById("${voucher_amount_div_to_add_value_on}").value = document.getElementById("time_ticket_manual_input_input_box").value;document.getElementById("sell_ticket_enter_amount_popup").style.display="none"'>Okay</button>
	</div>
	`;

	//if auto voucher link is provided and enabled//disable manual voucher amount input # or give a nice alert\\instead of removing it or hiding
	if(auto_user_creater_wifi_radius_link.u_link.length > 6 && auto_user_creater_wifi_radius_link.u_link_allow ){

		document.getElementById("data_or_time_select_box").innerHTML=`<button id='enter_time_ticket_amount_button' class='btn btn-warning' style='width: 94%; min-height: 30px;height:5vh;margin:3% 3% 0px 3%; display: block' onclick='alert("This menu is not usable under current system setup.\\n[ Auto Voucher Ondemand ] production is Active")'>enter Time Ticket amount </button>`;

		document.getElementById("data_or_time_select_box_time").innerHTML=`<button id='enter_time_ticket_amount_button' class='btn btn-warning' style='width: 94%; min-height: 30px;height:5vh;margin:3% 3% 0px 3%; display: block' onclick='alert("This menu is not usable under current system setup.\\n[ Auto Voucher Ondemand ] production is Active.")'>enter Time Ticket amount </button>`;

	};


	//get list of ticket for 
	// ------- manual created vouchers
	let vouchers_types_link = http_https + current_domain + '/api/voucher_types';

	// ------- automatic created vouchers
	//if auto voucher link is avalable, enabled
	if(auto_user_creater_wifi_radius_link.u_link.length > 6 && auto_user_creater_wifi_radius_link.u_link_allow ){ //and is bigger than six letters

		//changes link to server
		vouchers_types_link = http_https + current_domain + '/api/auto_voucher_types';	
	}


	$.get(vouchers_types_link, function(response, status){

		//console.log(response.length == 0);

		if(response.length == 0){//empty response//no vouchers data list generated

			//give error if auto vouchers link is provided, enabled but no auto vouchers available
			if(auto_user_creater_wifi_radius_link.u_link.length > 6 && auto_user_creater_wifi_radius_link.u_link_allow){

				//give error notofication
				alert('Error getting Auto vouchers templates, Please try again later or contact administrator.');
				return;
			}

			//give user error
			$('#data_or_time_select_box_time').append(`<p><br/>Error, no Vouchers details found, <br> please type amount manually,<br /> close and re-open this menu<br />or refresh page.<br> Or contact administrator</p>`);
			$('#data_or_time_select_box').append(`<p><br/>Error, no Vouchers details found, <br> please type amount manually,<br /> close and re-open this menu<br />or refresh page.<br> Or contact administrator</p>`);
			
			//try to cause the system to auto generate voucher list :
			//this works only for manual uploaded vouchers, and auto voucher link not provided since it will check db for available vouchers and create available voucher types list
			let vouchers_types_link_generate_link = http_https + current_domain + '/api/voucher_types_add';
			$.get(vouchers_types_link_generate_link, function(response, status){});

			//show voucher types selection box
			document.getElementById("sell_ticket_enter_amount_popup").style.display="block";

			return 0;


		}
		

		if(status == 'success'){

			//console.log(typeof response)

			if(typeof response == 'object'){

				
				//show div with newly acquired data each time
				document.getElementById("sell_ticket_enter_amount_popup").style.display="block";

				return response.forEach(function(data){

					

					//give alert to admin/ start auto voucher add function if voucher count is less than 50 vouhers of that type//this is for manual uploaded vouchers
					//++++++++++++++++++++++++ CODE HERE +++++++++++++++++++++++++++

					// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					
					

					if(data.voucher_cost > 0 || auto_user_creater_wifi_radius_link.u_link.length > 6 && auto_user_creater_wifi_radius_link.u_link_allow){//show vouchers with cost greater than zero, and with voucher count more than 50 vouchers of same type //but let Auto voucher through if [ wifi radus server ] link provided

						//if avalable manual produced or uploaded vouchers codes are more than 25 or :
						//for automatically produced vouchers : if radius profile data is missing// for whaterver cause, dont show this ticket value//this error will cause [ wifi radius ] to proceduce unlimited voucher account if it passes through
						
						if(data.voucher_count > 25 || data.radius_server_voucher_profile && data.radius_server_voucher_profile != 'null' || data.radius_server_voucher_profile != 'undefined' ){
								

							//console.log(seller_login.resturent_hotel_cafe_login,voucher_amount_div_to_add_value_on)
							if(data.voucher_type == 'time' && data.voucher_active ){//if time end voucher active, add to selection

								//data to be passed to server for ticket creation
								//let voucher_creation_extra_data = JSON.stringify({'profile': data.radius_server_voucher_profile,'expiery': JSON.parse(data.wifi_radius_auto_voucher_details).expiery });

								if(data.voucher_authorized_location[0] == 'All' && auto_user_creater_wifi_radius_link.allow_hotspot_universal_vouchers || data.voucher_authorized_location[0] == auto_user_creater_wifi_radius_link.router_hotspot_location ){//filter voucher sellable to be shown by [ All ] or matching location and [ allow_hotspot_universal_vouchers ] is true

									$('#data_or_time_select_box_time').append(`
									<button id='' class='btn btn-default' style="width: 94%; min-height: 30px;height:5vh;margin:3% 3% 0px 3%; display: ${( auto_user_creater_wifi_radius_link.u_link.length > 6 && auto_user_creater_wifi_radius_link.u_link_allow?data.voucher_creation_method == 'manual'? 'none' : 'block' : 'block')}" onclick='document.getElementById("${voucher_amount_div_to_add_value_on}").value="${data.voucher_cost}";document.getElementById("${voucher_amount_div_to_add_value_on}").setAttribute("data-auto-voucher-profile${current_sell_menu_distinguisher}","${data.radius_server_voucher_profile}");document.getElementById("${voucher_amount_div_to_add_value_on}").setAttribute("data-auto-voucher-expiery${current_sell_menu_distinguisher}","${data.wifi_radius_auto_voucher_details.length > 5 ?JSON.parse(data.wifi_radius_auto_voucher_details).expiery:'N/A'}");document.getElementById("${voucher_amount_div_to_add_value_on}").setAttribute("data-voucher-profile${current_sell_menu_distinguisher}","${data.voucher_profile}");document.getElementById("sell_ticket_enter_amount_popup").style.display="none"; data_or_time_ticket_pressed_tracker="time"'>${data.voucher_profile + ' R'+ data.voucher_cost}</button>
									
									`);
								}
							}
						

							if(data.voucher_type == 'data' && data.voucher_active){//if time end voucher active, add to selection

								if(data.voucher_authorized_location[0] == 'All' && auto_user_creater_wifi_radius_link.allow_hotspot_universal_vouchers || data.voucher_authorized_location[0] == auto_user_creater_wifi_radius_link.router_hotspot_location ){//filter voucher sellable to be shown by [ All ] or matching location and [ allow_hotspot_universal_vouchers ] is true

									$('#data_or_time_select_box').append(`
									<button id='' class='btn btn-default' style="width: 94%; min-height: 30px;height:5vh;margin:3% 3% 0px 3%; display: ${( auto_user_creater_wifi_radius_link.u_link.length > 6 && auto_user_creater_wifi_radius_link.u_link_allow?data.voucher_creation_method == 'manual'? 'none' : 'block' : 'block')}" onclick='document.getElementById("${voucher_amount_div_to_add_value_on}").value="${data.voucher_cost}";document.getElementById("${voucher_amount_div_to_add_value_on}").setAttribute("data-auto-voucher-profile${current_sell_menu_distinguisher}","${data.radius_server_voucher_profile}");document.getElementById("${voucher_amount_div_to_add_value_on}").setAttribute("data-auto-voucher-expiery${current_sell_menu_distinguisher}","${data.wifi_radius_auto_voucher_details.length > 5 ?JSON.parse(data.wifi_radius_auto_voucher_details).expiery:'N/A'}");document.getElementById("${voucher_amount_div_to_add_value_on}").setAttribute("data-voucher-profile${current_sell_menu_distinguisher}","${data.voucher_profile}");document.getElementById("sell_ticket_enter_amount_popup").style.display="none"; data_or_time_ticket_pressed_tracker="data"'>${data.voucher_profile + ' R'+ data.voucher_cost}</button>
									
									`);
								}
							}
						}
					}

				});
				
				

			}
		

			//server error response
			//console.log('not array',response);
			$('#data_or_time_select_box_time').append(response);
			$('#data_or_time_select_box').append(response);

			

		}

	});


}












/*______________________________________________________________________________________________________________________________________________________
  
  activity console seller && distributor
_______________________________________________________________________________________________________________________________________________________*/

//+++++++++++++++++ seller console

var seller_activity_console_current_credit = seller_login.credit;//keep track changing account credits
var seller_activity_console_first_run = true;//console first open loger
var seller_activity_console_periodic_timer;

function seller_activity_console_fn (){//seller console function
 
    document.getElementById('seller_console_old_balance_amount').innerHTML = seller_login.credit;//set credit captured when console open
    
 seller_activity_console_periodic_timer = setInterval(seller_activity_console_fn_extended_1, 2000);
    
    
    function seller_activity_console_fn_extended_1 (){
    
    //var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:''};

    var url =  http_https + current_domain + '/api/console_amount_activity?user_type=seller&idnumber='+seller_login.seller_id;
    
    if(seller_login.logged_in == true){//if user is logged in
        
        $.get(url, function(response, status){//check/get seller account current credit
           
            
           if(status == 'success'){
               
               if(response == "no data"){ return document.getElementById('firth_page_sell_menu_header').innerHTML= "<b style='color:red'>Error getting amount, Try again later</b>"; }
               
                              
               if(Number(response.credits) != Number(seller_activity_console_current_credit)){//if current credit is not equal previous credits
                   
                   if(seller_activity_console_first_run == true){//first run on console open
                       seller_activity_console_current_credit = Number(response.credits);
                       document.getElementById("seller_activity_console_body").innerHTML = "<p style='width : auto; display : block; font-size : 13px; color : green'>Waiting for activity in your account</p>";                       
                       seller_activity_console_first_run = false;
                       return null;
                   }
                   
               
               if(Number(response.credits) < Number(seller_activity_console_current_credit)){
                  // alert(1)
                   $("#seller_activity_console_body").append("<p style='width : auto; display : block; font-size : 13px; color : red;'>Money used : R"+(Number(seller_activity_console_current_credit) - Number(response.credits))+"</p>")
                   
                   
               }
               if(Number(response.credits) > Number(seller_activity_console_current_credit)){
                  // alert(2)
                   $("#seller_activity_console_body").append("<p style='width : auto; display : block; font-size : 13px; color : blue;'>Money added : R"+(Number(response.credits) - Number(seller_activity_console_current_credit))+"</p>");
                 
                   
               }
               
               
               seller_activity_console_current_credit = Number(response.credits);
               document.getElementById("seller_console_new_balance_amount").innerHTML = response.credits;
               document.getElementById("firth_page_seller_amount").innerHTML = response.credits;
               
           }
               return null;
               
           }
            
            document.getElementById('firth_page_sell_menu_header').innerHTML= "<b style='color:red'>Error getting amount, Try again later</b>";
            return null;
                 
             });
        
              }
    else{
        document.getElementById('firth_page_sell_menu_header').innerHTML= "<b style='color:red'>Authentication error</b>";
    }
    
    
}

}

function seller_activity_console_stop_interval(){//stop interval timer
    
        clearInterval(seller_activity_console_periodic_timer);
}


//+++++++++++++++++++++++++++++ distributeor console


var distributor_activity_console_current_credit = distributor_login.credit;//keep track changing account credits
var distributor_activity_console_first_run = true;//console first open loger
var distributor_activity_console_periodic_timer;

function distributor_activity_console_fn(){//seller console function
	
 
    document.getElementById('distributor_console_old_balance_amount').innerHTML = distributor_login.credit;//set credit captured when console open
    
	distributor_activity_console_periodic_timer = setInterval(distributor_activity_console_fn_extended_1, 2000);
    
    
    function distributor_activity_console_fn_extended_1 (){
    
    //var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:''};

    var url =  http_https + current_domain + '/api/console_amount_activity?user_type=distributor&idnumber='+distributor_login.distributor_id;
		
	//console.log(distributor_login.distributor_id);
	//console.log(distributor_login);
    
    if(distributor_login.logged_in == true){//if user is logged in
        
        $.get(url, function(response, status){//check/get seller account current credit
           
            
           if(status == 'success'){
               
               if(response == "no data"){ return document.getElementById('sixth_page_distributor_menu_header').innerHTML= "<b style='color:red'>Error getting amount, Try again later</b>"; }
               
                              
               if(Number(response.credits) != Number(distributor_activity_console_current_credit)){//if current credit is not equal previous credits
                   
                   if(distributor_activity_console_first_run == true){//first run on console open
                       distributor_activity_console_current_credit = Number(response.credits);
                       document.getElementById("distributor_activity_console_body").innerHTML = "<p style='width : auto; display : block; font-size : 13px; color : green'>Waiting for activity in your account</p>";                       
                       distributor_activity_console_first_run = false;
                       return null;
                   }
                   
               
               if(Number(response.credits) < Number(distributor_activity_console_current_credit)){
                  // alert(1)
                   $("#distributor_activity_console_body").append("<p style='width : auto; display : block; font-size : 13px; color : red;'>Money used : R"+(Number(distributor_activity_console_current_credit) - Number(response.credits))+"</p>")
                   
                   
               }
               if(Number(response.credits) > Number(distributor_activity_console_current_credit)){
                  // alert(2)
                   $("#distributor_activity_console_body").append("<p style='width : auto; display : block; font-size : 13px; color : blue;'>Money added : R"+(Number(response.credits) - Number(distributor_activity_console_current_credit))+"</p>");
                 
                   
               }
               
               
               distributor_activity_console_current_credit = Number(response.credits);
               document.getElementById("distributor_console_new_balance_amount").innerHTML = response.credits;
               document.getElementById("seventh_page_distributor_amount").innerHTML = response.credits;
               
           }
               return null;
               
           }
            
            document.getElementById('sixth_page_distributor_menu_header').innerHTML= "<b style='color:red'>Error getting amount, Try again later</b>";
            return null;
                 
             });
        
              }
    else{
        document.getElementById('sixth_page_distributor_menu_header').innerHTML= "<b style='color:red'>Authentication error</b>";
    }
    
    
}

}

function distributor_activity_console_stop_interval(){//stop interval timer
    
        clearInterval(distributor_activity_console_periodic_timer);
}


//+++++++++++++++++++++++++++++ superadmin console






var admin_activity_console_current_credit = admin_login.credit;//keep track changing account credits
var admin_activity_console_first_run = true;//console first open loger
var admin_activity_console_periodic_timer;

function super_admin_activity_console_fn(){//seller console function
	
 
    document.getElementById('super_admin_console_old_balance_amount').innerHTML = admin_login.credit;//set credit captured when console open
    
	admin_activity_console_periodic_timer = setInterval(admin_activity_console_fn_extended_1, 2000);
    
    
    function admin_activity_console_fn_extended_1 (){
    
    //var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:''};

    var url =  http_https + current_domain + '/api/console_amount_activity?user_type=Server Admin&idnumber='+admin_login.admin_id;
		
	//console.log(distributor_login.distributor_id);
	//console.log(distributor_login);
    
    if(admin_login.logged_in == true){//if user is logged in
        
        $.get(url, function(response, status){//check/get seller account current credit
           
            
           if(status == 'success'){
               
               if(response == "no data"){ return document.getElementById('super_admin_menu_header').innerHTML= "<b style='color:red'>Error getting amount, Try again later</b>"; }
               
                              
               if(Number(response.credits) != Number(admin_activity_console_current_credit)){//if current credit is not equal previous credits
                   
                   if(admin_activity_console_first_run == true){//first run on console open
                       admin_activity_console_current_credit = Number(response.credits);
                       document.getElementById("super_admin_activity_console_body").innerHTML = "<p style='width : auto; display : block; font-size : 13px; color : green'>Waiting for activity in your account</p>";                       
                       admin_activity_console_first_run = false;
                       return null;
                   }
                   
               
               if(Number(response.credits) < Number(admin_activity_console_current_credit)){
                  // alert(1)
                   $("#super_admin_activity_console_body").append("<p style='width : auto; display : block; font-size : 13px; color : red;'>Money used : R"+(Number(admin_activity_console_current_credit) - Number(response.credits))+"</p>")
                   
                   
               }
               if(Number(response.credits) > Number(admin_activity_console_current_credit)){
                  // alert(2)
                   $("#super_admin_activity_console_body").append("<p style='width : auto; display : block; font-size : 13px; color : blue;'>Money added : R"+(Number(response.credits) - Number(admin_activity_console_current_credit))+"</p>");
                 
                   
               }
               
               
               admin_activity_console_current_credit = Number(response.credits);
               document.getElementById("super_admin_console_new_balance_amount").innerHTML = response.credits;
               document.getElementById("super_admin_amount").innerHTML = response.credits;
              
           }
               return null;
               
           }
            
            document.getElementById('super_admin_menu_header').innerHTML= "<b style='color:red'>Error getting amount, Try again later</b>";
            return null;
                 
             });
        
              }
    else{
        document.getElementById('super_admin_menu_header').innerHTML= "<b style='color:red'>Authentication error</b>";
    }
    
    
}

}

function super_admin_activity_console_stop_interval(){//stop interval timer
    
        clearInterval(admin_activity_console_periodic_timer);
}






        
/*______________________________________________________________________________________________________________________________________________________
  
  Login Seller & || buyer || distributor || admnistrtor
_______________________________________________________________________________________________________________________________________________________*/






/*=====================================================================================================================================================

    Distributor login
=====================================================================================================================================================*/




//distributor_login = {logged_in : false, distributor_id : '', usertype : '', credit:''};

//var distributor_login = {logged_in : false, distributor_id : '', usertype : '', credit:''};


/*++++++++++++++++++++++++++++++++++++++++++++++++++ account login +++++++++++++++++++++++++++++++++++++++++++++*/
function sixth_page_distributor_login(){
    

    
        var distributor_id = document.getElementById('sixth_page_id_input');
        var distributor_password = document.getElementById('sixth_page_password_input');
    
    

    
        
/*++++++++++++++++++++++++++++++++ check input filled ++++++++++++++++++++++++++++++++++++++*/
    
        if(distributor_id.value != '' && distributor_password.value != ''){
           
/*++++++++++++++++++++++++++++++++++ check id number lenth ++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++ should be 13 numbers in sout africa +++++++++++++++++++++++++++++++++*/
            
        if(distributor_id.value.length !== 13){
          return dom_innerHtml('sixth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect ID number</p>'); 
    }
            
            
        //change [http://' + current_domain + '] url to live server url
        var url= http_https + current_domain + '/login?usertype=distributor&id_number='+distributor_id.value;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               if(response == 'User Not found'){
                  return  dom_innerHtml('sixth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect Login Details</p>'); 
               }
               
               else{//+++++++++++++++++++++++++++check password+++++++++++++++++++++++++++
                   
                   if(response.password == distributor_password.value.toLowerCase()){ //changed passwaord case//passwaord is saved as small case also  
                       
/*++++++++++++++++++++++++ porpulate vars used for creating field when voucher is sold +++++++++++++++++++++++*/
                       
                       distributor_login.logged_in = true;
                       distributor_login.distributor_id = distributor_id.value;
                       distributor_login.usertype = response.usertype;
                       distributor_login.name = response.name+' '+response.surname;
					   distributor_login.customer_partners_contact_list = response.added_customers_partners;
                       distributor_login.credit = response.credits;
                      // dom_innerHtml('sixth_page_seller_amount', response.credits); //**************************
                       
					   //check if password is default
					   var default_password = document.getElementById('seller_new_account_default_password').innerHTML;
                       if(response.password.toLowerCase().trim() == default_password.toLowerCase().trim()){
						  	alert('For Security : \n\rPlease Change default Password.');
						  }
					   
					   dom_innerHtml('seventh_page_distributor_amount', distributor_login.credit);//add credit on login
                       distributor_works_menu();
					   
					   
                       
                       
                   }
                   else{
                        dom_innerHtml('sixth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect Login Details</p>'); 
                   }
                   
               }
               
           }
           
        else{
            
             dom_innerHtml('sixth_page_login_menu_header', 'error when trying to login'); 
               
           }
           
               
           });
}
/*+++++++++++++++++++++++++++++++++++++++++++ if input not filled or partially filled +++++++++++++++++++++++++++++++++++++++*/
  else{ 
      
    
      dom_innerHtml('sixth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Please Fill in all login Details</p>'); 
      
      if(distributor_id.value == ''){
          distributor_id.style.borderColor ='red';
      }
      if(distributor_password.value == ''){
          distributor_password.style.borderColor ='red';
      }
      
  }  
    
}




/*+++++++++++++++++++++++++++++++++++++++++++++ Show password +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function sixth_page_seller_show_password_hint(){ //distributor password hint
    
    // http://' + current_domain + '/password_hint?usertype=seller&id_number='+id_number+'&user_name='+user_name;
    
  //  alert('seller password hint HERE');  
 
    var id_number = document.getElementById('sixth_page_seller_password_hint_id').value;
    var userName = document.getElementById('sixth_page_seller_password_hint_name').value;
  //  var user_name = userName.replace(/' '/g, '');//combine names// remove space//================= make it global get space char
    var user_name = userName.trim().replace(' ', '');//combine names// remove space
    
    
    if(user_name == '' || id_number.length != 13 ){
        document.getElementById('sixth_page_password_hint_header').innerHTML = 'Please verify provided details';
        return null;
    }
    
    var url = http_https + current_domain + '/password_hint?usertype=distributor&id_number='+id_number+'&user_name='+user_name;
    
     $.get(url, function(response, status){
         console.log(' res : '+response);
         console.log(' status : '+status);
          if(status == 'success'){
              if(response == 'User Not found'){
                   document.getElementById('sixth_page_seller_password_hint').innerHTML = 'Cant find "HINT" using given details';
                  return null;
                  
              }
             // document.getElementById('fourth_page_seller_password_hint').innerHTML= response.password;
              var password = response.password;
              distributor_password_scramble(password);
              
              return null;
          }
         
         document.getElementById('sixth_page_seller_password_hint').innerHTML = 'Cant find "HINT" using given details';
         return null;
         
         
     });
    
    function distributor_password_scramble(password){
        
        var password_to_array = password.split("");
        var scrambled_password = password_to_array;
        
        for(var i = 0; i <= scrambled_password.length; i++){
//            
//          //  scrambled_password.splice(2, 0,'*');
//            if(scrambled_password[i] == '^'){// ERRor this is not formatted correctly [ hello there my name is tsehla ]
//               scrambled_password.splice(i, 1,'&nbsp');
//                return null;
//            }//
            if(i % 2 == 0 ){
                scrambled_password.splice(i, 1,'*');
              //  console.log(scrambled_password[i]);
            }
            
            
            if(i==scrambled_password.length -1 ){
                //console.log(scrambled_password);
                document.getElementById('sixth_page_seller_password_hint').innerHTML=scrambled_password.toString().replace(/,/g,'&nbsp;');
                break;
            }
            
            
        }
        
        
    }
    
    
  /*  
    
    
        var url= 'http://' + current_domain + '/api/buy?code=get_voucher&unique_code='+ unique_code;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               
        if(response == 'Voucher Not found'){
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
               
            if(response != 'Voucher Not found'){
                dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
           }
           
        else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
               
           }
           
               
           });
    
    
    
    
    
    
    */
    
    

    
    
}


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++ Change password +++++++++++++++++++++++++++++++++++++++++++++++++++*/


function sixth_page_seller_change_password(){
    
    
    
    
    
      // http://' + current_domain + '/password_change?usertype=seller&id_number='+id_number+'&old_password='+old_password+'&new_password='+new_password;
    
 
    var id_number = document.getElementById('sixth_page_seller_change_password_id').value;
    var old_password = document.getElementById('sixth_page_seller_change_password_old_password').value;
    var new_password = document.getElementById('sixth_page_seller_change_password_new_password').value;

   
    
    
    if(old_password == '' || new_password == '' || id_number.length != 13 ){
        document.getElementById('sixth_page_seller_change_password_header').innerHTML = 'Please verify provided details';
        return null;
    }
	
	//check if password is default// if so abort
	var default_password = document.getElementById('seller_new_account_default_password').innerHTML;
    if(new_password.toLowerCase().trim() == default_password.toLowerCase().trim()){
			alert('For Security : \n\rDefault password can not be used as new password.');
		return;
	}
	
    
    var url = http_https+current_domain+'/password_change?usertype=distributor&id_number='+id_number+'&old_password='+old_password+'&new_password='+new_password;
    
     $.get(url, function(response, status){
         console.log(' res : '+response);
         console.log(' status : '+status);
          if(status == 'success'){
              if(response == 'User Not found'){
                   document.getElementById('sixth_page_seller_change_password_header').innerHTML = 'Cant "Change Password" using given details';
                  return null;
                  
              }
              if(response == 'Error changing password'){
                   document.getElementById('sixth_page_seller_change_password_header').innerHTML = 'Error changing password';
                  return null;
                  
              }
             
              document.getElementById('sixth_page_seller_change_password_header').innerHTML= "Password Changed";
              
              return null;
          }
         
         document.getElementById('sixth_page_seller_change_password_header').innerHTML = 'Cant "Change Password" using given details';
         return null;
         
         
     });
    
    

    /*
    
    alert('seller change password');
    
    
        var url= 'http://' + current_domain + '/api/buy?code=get_voucher&unique_code='+ unique_code;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               
        if(response == 'Voucher Not found'){
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
               
            if(response != 'Voucher Not found'){
                dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
           }
           
        else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
               
           }
           
               
   });
    
    */
    
}



/*=====================================================================================================================================================

    seller login
    
=====================================================================================================================================================*/

//var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:'', resturent_hotel_cafe_login:false};

/*++++++++++++++++++++++++++++++++++++++++++++++++++ account login +++++++++++++++++++++++++++++++++++++++++++++*/
function fourth_page_seller_login(){
    
    
        var seller_id = document.getElementById('fourth_page_id_input');
        var seller_password = document.getElementById('fourth_page_password_input');
    
    

    
        
/*++++++++++++++++++++++++++++++++ check input filled ++++++++++++++++++++++++++++++++++++++*/
    
        if(seller_id.value != '' && seller_password.value != ''){
           
/*++++++++++++++++++++++++++++++++++ check id number lenth ++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++ should be 13 numbers in sout africa +++++++++++++++++++++++++++++++++*/
            
        if(seller_id.value.length !== 13){
          return dom_innerHtml('fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect ID number</p>'); 
    }
            
            
        //change [http://' + current_domain + '] url to live server url
        var url= http_https + current_domain + '/login?usertype=seller&id_number='+seller_id.value;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               if(response == 'User Not found'){
                  return  dom_innerHtml('fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect Login Details</p>'); 
               }
               
               else{//+++++++++++++++++++++++++++check password+++++++++++++++++++++++++++
                   
                   if(response.password == seller_password.value.toLowerCase()){ //changed passwaord case//passwaord is saved as small case also  
                       
/*++++++++++++++++++++++++ porpulate vars used for creating field when voucher is sold +++++++++++++++++++++++*/
                       
                       seller_login.logged_in = true;
                       seller_login.seller_id = seller_id.value;
                       seller_login.usertype = response.usertype;
                       seller_login.name = response.name+' '+response.surname;
					   seller_login.customer_partners_contact_list = response.added_customers_partners;
					   seller_login.credit = response.credits;
					   seller_login.manages_hotspot = response.manage_router;
					   seller_login.hotspot_printable_vouchers = response.manage_router_printable_vouchers;
					   seller_login.hotspot_printable_vouchers_template = response.manage_router_printable_vouchers_templates;
					   seller_login.managed_hotspot = response.manage_router_hotspots;
					   seller_login.nocharge_voucher_sell = response.manage_router_no_charge_voucher_sell;
					
					   

                       dom_innerHtml('firth_page_seller_amount', response.credits); 
                       
					   
					   //check if password is default
					   var default_password = document.getElementById('seller_new_account_default_password').innerHTML;
                       if(response.password.toLowerCase().trim() == default_password.toLowerCase().trim()){
						  	alert('For Security : \n\rPlease Change default Password.');
						}
                       
                       seller_sell_menu();
                       
                       
                   }
                   else{
                        dom_innerHtml('fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect Login Details</p>'); 
                   }
                   
               }
               
           }
           
        else{
            
             dom_innerHtml('fourth_page_login_menu_header', 'error when trying to login'); 
               
           }
           
               
           });
}
/*+++++++++++++++++++++++++++++++++++++++++++ if input not filled or partially filled +++++++++++++++++++++++++++++++++++++++*/
  else{ 
      
    
      dom_innerHtml('fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Please Fill in all login Details</p>'); 
      
      if(seller_id.value == ''){
          seller_id.style.borderColor ='red';
      }
      if(seller_password.value == ''){
          seller_password.style.borderColor ='red';
      }
      
  }  
    
}


/*+++++++++++++++++++++++++++++++++++++++++++++ Show password +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function fourth_page_seller_show_password_hint(){ //seller password hint
    
    // http://' + current_domain + '/password_hint?usertype=seller&id_number='+id_number+'&user_name='+user_name;
    
  //  alert('seller password hint HERE');  
 
    var id_number = document.getElementById('fourth_page_seller_password_hint_id').value;
    var userName = document.getElementById('fourth_page_seller_password_hint_name').value;
  //  var user_name = userName.replace(/' '/g, '');//combine names// remove space//================= make it global get space char
    var user_name = userName.trim().replace(' ', '');//combine names// remove space
    
    
    if(user_name == '' || id_number.length != 13 ){
        document.getElementById('fourth_page_password_hint_header').innerHTML = 'Please verify provided details';
        return null;
    }
    
    var url = http_https + current_domain + '/password_hint?usertype=seller&id_number='+id_number+'&user_name='+user_name;
    
     $.get(url, function(response, status){
         console.log(' res : '+response);
         console.log(' status : '+status);
          if(status == 'success'){
              if(response == 'User Not found'){
                   document.getElementById('fourth_page_seller_password_hint').innerHTML = 'Cant find "HINT" using given details';
                  return null;
                  
              }
             // document.getElementById('fourth_page_seller_password_hint').innerHTML= response.password;
              var password = response.password;
              password_scramble(password);
              
              return null;
          }
         
         document.getElementById('fourth_page_seller_password_hint').innerHTML = 'Cant find "HINT" using given details';
         return null;
         
         
     });
    
    function password_scramble(password){
        
        var password_to_array = password.split("");
        var scrambled_password = password_to_array;
        
        for(var i = 0; i <= scrambled_password.length; i++){
//            
//          //  scrambled_password.splice(2, 0,'*');
//            if(scrambled_password[i] == '^'){// ERRor this is not formatted correctly [ hello there my name is tsehla ]
//               scrambled_password.splice(i, 1,'&nbsp');
//                return null;
//            }//
            if(i % 2 == 0 ){
                scrambled_password.splice(i, 1,'*');
              //  console.log(scrambled_password[i]);
            }
            
            
            if(i==scrambled_password.length -1 ){
				//console.log(scrambled_password);
				document.getElementById('fourth_page_seller_password_hint').innerHTML=scrambled_password.toString().replace(/,/g,'&nbsp;');
				alert('This is your pasword Hint :\r\n'+scrambled_password.toString().replace(/,/g,'')+'\r\nDoes it ring any bells?');
                break;
            }
            
            
        }
        
        
    }
    
    
  /*  
    
    
        var url= 'http://' + current_domain + '/api/buy?code=get_voucher&unique_code='+ unique_code;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               
        if(response == 'Voucher Not found'){
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
               
            if(response != 'Voucher Not found'){
                dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
           }
           
        else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
               
           }
           
               
           });
    
    
    
    
    
    
    */
    
    

    
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++ Change password +++++++++++++++++++++++++++++++++++++++++++++++++++*/


function fourth_page_seller_change_password(){
    
    
    
    
    
      // http://' + current_domain + '/password_change?usertype=seller&id_number='+id_number+'&old_password='+old_password+'&new_password='+new_password;
    
 
    var id_number = document.getElementById('fourth_page_seller_change_password_id').value;
    var old_password = document.getElementById('fourth_page_seller_change_password_old_password').value;
    var new_password = document.getElementById('fourth_page_seller_change_password_new_password').value;

   
    
    
    if(old_password == '' || new_password == '' || id_number.length != 13 ){
        document.getElementById('fourth_page_seller_change_password_header').innerHTML = 'Please verify provided details';
        return null;
    }
    
		
	//check if password is default// if so abort
	var default_password = document.getElementById('seller_new_account_default_password').innerHTML;
    if(new_password.toLowerCase().trim() == default_password.toLowerCase().trim()){
			alert('For Security : \n\rDefault password can not be used as new password.');
		return;
	}
	
	
    var url = http_https+current_domain+'/password_change?usertype=seller&id_number='+id_number+'&old_password='+old_password+'&new_password='+new_password;
    
     $.get(url, function(response, status){
         console.log(' res : '+response);
         console.log(' status : '+status);
          if(status == 'success'){
              if(response == 'User Not found'){
                   document.getElementById('fourth_page_seller_change_password_header').innerHTML = 'Cant "Change Password" using given details';
                  return null;
                  
              }
              if(response == 'Error changing password'){
                   document.getElementById('fourth_page_seller_change_password_header').innerHTML = 'Error changing password';
                  return null;
                  
              }
             
              document.getElementById('fourth_page_seller_change_password_header').innerHTML= "Password Changed";
              
              return null;
          }
         
         document.getElementById('fourth_page_seller_change_password_header').innerHTML = 'Cant "Change Password" using given details';
         return null;
         
         
     });
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
    
    alert('seller change password');
    
    
        var url= 'http://' + current_domain + '/api/buy?code=get_voucher&unique_code='+ unique_code;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               
        if(response == 'Voucher Not found'){
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
               
            if(response != 'Voucher Not found'){
                dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
           }
           
        else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
               
           }
           
               
   });
    
    */
    
}



/*=====================================================================================================================================================

    admin login
    
=====================================================================================================================================================*/

//var admin_login = {logged_in : false, admin_id : '', usertype : '', credit:''};


/*++++++++++++++++++++++++++++++++++++++++++++++++++ account login +++++++++++++++++++++++++++++++++++++++++++++*/
function super_admin_login(){
    

    
        var admin_id = document.getElementById('admin_fourth_page_id_input');
        var admin_password = document.getElementById('admin_fourth_page_password_input');
    
    

        
/*++++++++++++++++++++++++++++++++ check input filled ++++++++++++++++++++++++++++++++++++++*/
    
        if(admin_id.value != '' && admin_password.value != ''){
           
/*++++++++++++++++++++++++++++++++++ check id number lenth ++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++ should be 13 numbers in sout africa +++++++++++++++++++++++++++++++++*/
            
        if(admin_id.value.length !== 13){
          return dom_innerHtml('admin_fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect ID number</p>'); 
    }
            
            
        //change [http://' + current_domain + '] url to live server url
        var url= http_https + current_domain + '/login?usertype=server%20Admin&id_number='+admin_id.value;
			//console.log(url);
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               if(response == 'User Not found'){
                  return  dom_innerHtml('admin_fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect Login Details</p>'); 
               }
               
               else{//+++++++++++++++++++++++++++check password+++++++++++++++++++++++++++
                   
                   if(response.password == admin_password.value.toLowerCase()){ //changed passwaord case//passwaord is saved as small case also  
                       
/*++++++++++++++++++++++++ porpulate vars used for creating field when voucher is sold +++++++++++++++++++++++*/
                       
                       admin_login.logged_in = true;
                       admin_login.admin_id = admin_id.value;
                       admin_login.usertype = response.usertype;
                       admin_login.name = response.name+' '+response.surname;
					   admin_login.customer_partners_contact_list = response.added_customers_partners;
					//   console.log(admin_login.customer_partners_contact_list);
					   admin_login.credit = response.credits;
					   admin_login.manages_hotspot = response.manage_router;
					   admin_login.hotspot_printable_vouchers = response.manage_router_printable_vouchers;
					   admin_login.hotspot_printable_vouchers_template = response.manage_router_printable_vouchers_templates;
					   admin_login.managed_hotspot = response.manage_router_hotspots;

                       dom_innerHtml('super_admin_amount', response.credits); //show amount in user account
                       
					   //check if password is default
					   var default_password = document.getElementById('seller_new_account_default_password').innerHTML;
                       if(response.password.toLowerCase().trim() == default_password.toLowerCase().trim()){
						  	alert('For Security : \n\rPlease Change default Password.');
						  }
					   
//===========	dom_innerHtml('admin_page_distributor_amount', admin_login.credit);//add credit on login
                       admin_fourth_page_menu();
					   
					   
                       
                       
                   }
                   else{
                        dom_innerHtml('admin_fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect Login Details</p>');
                   }
                   
               }
               
           }
           
        else{
            
             dom_innerHtml('admin_fourth_page_login_menu_header', 'error when trying to login'); 
               
           }
           
               
           });
}
/*+++++++++++++++++++++++++++++++++++++++++++ if input not filled or partially filled +++++++++++++++++++++++++++++++++++++++*/
  else{ 
      
    
      dom_innerHtml('admin_fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Please Fill in all login Details</p>'); 
      
      if(admin_id.value == ''){
          admin_id.style.borderColor ='red';
      }
      if(admin_password.value == ''){
          admin_password.style.borderColor ='red';
      }
      
  }  
    
}



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++ Change password +++++++++++++++++++++++++++++++++++++++++++++++++++*/


function admin_password_change_fn(){
    
    
    
    
    
      // http://' + current_domain + '/password_change?usertype=seller&id_number='+id_number+'&old_password='+old_password+'&new_password='+new_password;
    
 
    var id_number = document.getElementById('admin_change_password_id_number').value;
    var old_password = document.getElementById('admin_change_password_old_password').value;
    var new_password = document.getElementById('admin_change_password_new_password').value;

   
    
    
    if(old_password == '' || new_password == '' || id_number.length != 13 ){
        document.getElementById('admin_change_password_header').innerHTML = 'Please verify provided details';
        return null;
    }
    
		
	//check if password is default// if so abort
	var default_password = document.getElementById('admin_change_password_new_password').innerHTML;
    if(new_password.toLowerCase().trim() == default_password.toLowerCase().trim()){
			alert('For Security : \n\rDefault password can not be used as new password.');
		return;
	}
	
	
    var url = http_https+current_domain+'/password_change?usertype=server%20Admin&id_number='+id_number+'&old_password='+old_password+'&new_password='+new_password;
    
     $.get(url, function(response, status){
         console.log(' res : '+response);
         console.log(' status : '+status);
          if(status == 'success'){
              if(response == 'User Not found'){
                   document.getElementById('admin_change_password_header').innerHTML = 'Cant "Change Password" using given details';
                  return null;
                  
              }
              if(response == 'Error changing password'){
                   document.getElementById('admin_change_password_header').innerHTML = 'Error changing password';
                  return null;
                  
              }
             
              document.getElementById('admin_change_password_header').innerHTML= "Password Changed";
              
              return null;
          }
         
         document.getElementById('admin_change_password_header').innerHTML = 'Cant "Change Password" using given details';
         return null;
         
         
     });
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
    
    alert('seller change password');
    
    
        var url= 'http://' + current_domain + '/api/buy?code=get_voucher&unique_code='+ unique_code;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               
        if(response == 'Voucher Not found'){
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
               
            if(response != 'Voucher Not found'){
                dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
           }
           
        else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
               
           }
           
               
   });
    
    */
    
}

/*=====================================================================================================================================================

password alert
    
=====================================================================================================================================================*/


//change password
var password_change_ini_run = false;
function password_change_alert(){//check if alert was clicked//end dont show again in this session
	
	if(password_change_ini_run){
	   
	   	return;
	   }//alert was shown before in this session
	
		alert('Please test your password Hint, or change password again to get a new Hint\n\nA password can be a sentence\nExample :\nhello streetWiFiy');
	password_change_ini_run = true;
	return;
}


//password hint
var password_hint_ini_run = false;
function password_hint_alert(){//check if alert was clicked//end dont show again in this session
	
	if(password_hint_ini_run){
	   
	   	return;
	   }//alert was shown before in this session
	
		alert("Please make sure your Password Hint is not easy to gues, if so change your password to change password Hint");
	password_hint_ini_run = true;
	return;
}


/*=====================================================================================================================================================

   distributor : seller account recharge 
    
=====================================================================================================================================================*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++ distributor -> seller recharge

function distributor_seller_sell_amount(button_id){
    
    //id no
    var distributor_seller_id_input = document.getElementById('distributor_seller_id_input');
	
	//name and surname
    var distributor_seller_name_surname_input = document.getElementById('distributor_seller_name_surname_input');
    
    //recharge amount
    var distributor_seller_recharge_amount_input = document.getElementById('distributor_seller_recharge_amount_input');
      
	
    //check id number length
    if(distributor_seller_id_input.value.length < 13 || distributor_seller_id_input.value.length > 13){
		dom_innerHtml('sixth_page_distributor_menu_header', 'Please re-check "Seller ID number"'); 
		document.getElementById('sixth_page_distributor_menu_header').style.borderColor ='red';
		return;
    }    
    
    //check amount input length
    if(distributor_seller_recharge_amount_input.value.length > 5){
	distributor_seller_recharge_amount_input.style.borderColor ='red';
    return dom_innerHtml('sixth_page_distributor_menu_header', 'Please re-check "Recharge amount"'); 
    }   
	
	//check name input
    if(distributor_seller_name_surname_input.value == '' || distributor_seller_name_surname_input.value == null || distributor_seller_name_surname_input.value == 'undefined'){
	distributor_seller_name_surname_input.style.borderColor ='red';
    return dom_innerHtml('sixth_page_distributor_menu_header', 'Please re-check "Name and Surname"'); 
    }
    
   	//quick value sufficiency check 
	if(distributor_login.credit < distributor_seller_recharge_amount_input.value){
		distributor_seller_recharge_amount_input.style.borderColor ='red';
	   	return dom_innerHtml('sixth_page_distributor_menu_header', 'Insufficient amount in your account, Please recharge.'); 
	 }
	
	//add confirm to waste time
	var confirm_transaction = confirm('Are you sure you want to send recharge of R' + distributor_seller_recharge_amount_input.value + ', to user : ' + distributor_seller_name_surname_input.value + ', ID no: ' + distributor_seller_id_input.value+' ?.');
	
	if(!confirm_transaction){return;}//if corfim is no
	
	 //disable button for now
	document.getElementById(button_id).disabled=true;
	
     var url= http_https + current_domain + '/api/sell?code=sell_recharge&voucher_recharge_amount='+distributor_seller_recharge_amount_input.value.trim()+'&seller_id='+distributor_seller_id_input.value.trim()+'&seller_name_surname='+distributor_seller_name_surname_input.value.trim().replace(/ /,'*')+'&distributor_id='+distributor_login.distributor_id.trim()+'&userType=Distributor&userType_to_recharge=Seller';
	
	
	
   // console.log(url);
		
	
    
       $.get(url, function(response, status){
           
            
           
           if(status == 'success'){
              
      
               if(response == 'Server or Conection error'){
                   
                
                dom_innerHtml('sixth_page_distributor_menu_header', 'Server or Conection error, Please try again later');
				   document.getElementById(button_id).disabled=false;//sending button enable
				   return;
                   
               }              
			   
			   if(response == 'Error finding seller'){
                   
                document.getElementById(button_id).disabled=false;//sending button enable
                dom_innerHtml('sixth_page_distributor_menu_header', 'Error, Please check user details'); 
				   return;
                   
               }
               
                dom_innerHtml('sixth_page_distributor_menu_header', 'Account Succesfully Recharged.');//secess message
			    distributor_login.credit = distributor_login.credit - Number.parseInt(distributor_seller_recharge_amount_input.value);//calculate and set new value
			    dom_innerHtml('seventh_page_distributor_amount', distributor_login.credit);//set new value for view
			    dom_innerHtml('distributor_seller_recharge_status','<b>Success : '+response.name+' '+response.lastname+', ID no:'+response.id+', account Recharged by R'+response.amount+'</b>');//reacherge sucess status
			   document.getElementById(button_id).disabled=false;//sending button enable
                return null;
             
           }
           
           else{
             dom_innerHtml('sixth_page_distributor_menu_header', 'System/Connection error, please try again later.'); 
			  document.getElementById(button_id).disabled=false;//sending button enable
			  return;
           }
       });  
          

    
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++  admin -> distributor account recharge


function super_admin_distributor_sell_amount(button_id){
    
    //voucher code
    var admin_distributor_id_input = document.getElementById('super_admin_distributor_id_input');
	
	//name and surname
    var admin_distributor_name_surname_input = document.getElementById('super_admin_distributor_name_surname_input');
    
    //recharge amount
    var admin_distributor_recharge_amount_input = document.getElementById('super_admin_distributor_recharge_amount_input');
      
	
    //check id number length
    if(admin_distributor_id_input.value.length < 13 || admin_distributor_id_input.value.length > 13){
		dom_innerHtml('super_admin_menu_header', 'Please re-check "Seller ID number"'); 
		document.getElementById('super_admin_menu_header').style.borderColor ='red';
		return;
    }    
    
    //check amount input length
    if(admin_distributor_recharge_amount_input.value.length > 5){
	admin_distributor_recharge_amount_input.style.borderColor ='red';
    return dom_innerHtml('super_admin_menu_header', 'Please re-check "Recharge amount"'); 
    }   
	
	//check name input
    if(admin_distributor_name_surname_input.value == '' || admin_distributor_name_surname_input.value == null || admin_distributor_name_surname_input.value == 'undefined'){
	admin_distributor_name_surname_input.style.borderColor ='red';
    return dom_innerHtml('super_admin_menu_header', 'Please re-check "Name and Surname"'); 
    }
    
   	//quick value sufficiency check 
	if(admin_login.credit < admin_distributor_recharge_amount_input.value){
		admin_distributor_recharge_amount_input.style.borderColor ='red';
	   	return dom_innerHtml('super_admin_menu_header', 'Insufficient amount in your account, Please recharge.'); 
	 }
	var send_recharge_confirm = confirm('Are you sure you want to send recharge of R' +admin_distributor_recharge_amount_input.value+ ', to user : ' +admin_distributor_name_surname_input.value+ ', of ID no : ' +admin_distributor_id_input.value+ ' ?.'); //send recharge confirm
	
	if(!send_recharge_confirm){return;}//if send recharge cancelled
	
	document.getElementById(button_id).disabled=true;//disable send rechar button for now
	        
     var url= http_https + current_domain + '/api/sell?code=sell_recharge&voucher_recharge_amount='+admin_distributor_recharge_amount_input.value.trim()+'&seller_id='+admin_distributor_id_input.value.trim()+'&seller_name_surname='+admin_distributor_name_surname_input.value.trim().replace(/ /,'*')+'&distributor_id='+admin_login.admin_id.trim()+'&userType=Server Admin&userType_to_recharge=Distributor';
	
	
	
   // console.log(url);
		
	
    
       $.get(url, function(response, status){
           
            
           
           if(status == 'success'){
              
      
               if(response == 'Server or Conection error'){
                   
                
                dom_innerHtml('super_admin_menu_header', 'Server or Conection error, Please try again later'); 
				   document.getElementById(button_id).disabled=false;//enable send recharge button
				   return;
                   
               }              
			   
			   if(response == 'Error finding seller'){
                   
                
                dom_innerHtml('super_admin_menu_header', 'Error, Please check user details'); 
				    document.getElementById(button_id).disabled=false;//enable send recharge button
				   return;
                   
               }
               
                dom_innerHtml('super_admin_menu_header', 'Account Succesfully Recharged.');//secess message
			    admin_login.credit = admin_login.credit - Number.parseInt(admin_distributor_recharge_amount_input.value);//calculate and set new value
			    dom_innerHtml('super_admin_amount', admin_login.credit);//set new value for view
			    dom_innerHtml('super_admin_distributor_recharge_status','<b>Success : '+response.name+' '+response.lastname+', ID no:'+response.id+', account Recharged by R'+response.amount+'</b>');//reacherge sucess status
			    document.getElementById(button_id).disabled=false;//enable send recharge button
                return null;
             
           }
           
           else{
             dom_innerHtml('super_admin_menu_header', 'System/Connection error, please try again later.'); 
			    document.getElementById(button_id).disabled=false;//enable send recharge button
			   return;
           }
       });  
          

}

//++++++++++++++++++++++++++++++++++++++++++++++++++++  system -> admin account recharge /self recharge

function system_super_admin_account_rechatge(button_id, self_recharge_amount){


	var account_self_recharge_amount = self_recharge_amount || 500; //recharge by R500 as default if no value specified 

       
	var self_recharge_confirm = confirm('Are you sure you want to add recharge of R' + account_self_recharge_amount + ' , to user : '  + admin_login.name.trim() + ', of ID no : ' + admin_login.admin_id.trim()+ ' ?.\n\nSelect cancel to choose different amount.'); //send recharge confirm

	
	if(!self_recharge_confirm){ //if send recharge cancelled


		var new_amount = prompt('Please enter your preferred recharge amount, example : 500');
		
		
		//set new amount and continue
		if( new_amount &&  Number(new_amount) != NaN && Number(new_amount) > 0 && Number(new_amount) < 1001 ){ //if new amount is entered and its a number less that 1000//set as new recharge amount

			account_self_recharge_amount = new_amount; //set new custom recharge amount

			do_self_recharge();//call recharge

			return;

		}

		//if not match of above, give error
		
		alert('Please make sure new amount entered its a Number between 1 and 1000');
	
		return;
		

	}


	if(self_recharge_confirm){//if send recharge not cancelled

		do_self_recharge();//call recharge

	}
	
	
	function do_self_recharge(){//recharge


		document.getElementById(button_id).disabled=true;//disable send rechar button for now
				
		var url= http_https + current_domain + '/api/sell?code=sell_recharge&voucher_recharge_amount=' + account_self_recharge_amount  + '&seller_id=&seller_name_surname=System&admin_id=' + admin_login.admin_id.trim() + '&userType=&userType_to_recharge=Server Admin';
		
			
		// console.log(url);
			
		
		$.get(url, function(response, status){
			
				
			
			if(status == 'success'){
				
		
				if(response == 'Server or Conection error'){
					
					
					dom_innerHtml('super_admin_menu_header', 'Server or Conection error, Please try again later'); 
					document.getElementById(button_id).disabled=false;//enable send recharge button

					return;
					
				}              
				
				if(response == 'Error finding admin'){
					
					
					dom_innerHtml('super_admin_menu_header', 'Error, Please check user details'); 

						document.getElementById(button_id).disabled=false;//enable send recharge button

					return;
					
				}
				
					dom_innerHtml('super_admin_menu_header', 'Account Succesfully Recharged.');//secess message
					admin_login.credit = admin_login.credit + Number.parseInt(account_self_recharge_amount);//calculate and set new value
					dom_innerHtml('super_admin_amount', admin_login.credit);//set new value for view
					dom_innerHtml('super_admin_distributor_recharge_status','<b>Success : System has recharged, Admin ID no:' + admin_login.admin_id.trim() + ', account by R'+response.amount+'</b>');//reacherge sucess status
					document.getElementById(button_id).disabled=false;//enable send recharge button
					document.getElementById("side_menu_container").style.right="12px";//restore menu position
					return null;
				
			}
			
			else{
				dom_innerHtml('super_admin_menu_header', 'System/Connection error, please try again later.'); 
					document.getElementById(button_id).disabled=false;//enable send recharge button
				return;
			}
		});  
			
	}
}








/*=====================================================================================================================================================

  account add
    
=====================================================================================================================================================*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++ seller account add by distributor


function distributor_seller_new_account_creation(){
    
    //add seller id
    var distributor_seller_add_id_input = document.getElementById('distributor_seller_add_id_input');
	
	//seller add name
    var distributor_seller_add_name_input = document.getElementById('distributor_seller_add_name_input');
	
	//seller add surname
    var distributor_seller_add_surname_input = document.getElementById('distributor_seller_add_surname_input');
	 
    //seller account creation default password
    var seller_new_account_default_password = document.getElementById('seller_new_account_default_password');
      
	

	//check Seller ID
    if(distributor_seller_add_id_input.value.length < 13 || distributor_seller_add_id_input.value.length > 13){
	distributor_seller_add_id_input.style.borderColor ='red';
    return dom_innerHtml('eight_page_distributor_menu_header', 'Please re-check "Seller ID number"'); 
    }
    
	//check seller Name
    if(distributor_seller_add_name_input.value == '' || distributor_seller_add_name_input.value == null || distributor_seller_add_name_input.value == 'undefined'){
	distributor_seller_add_name_input.style.borderColor ='red';
    return dom_innerHtml('eight_page_distributor_menu_header', 'Please re-check "Seller Name"'); 
    }
	//check Seller surname
    if(distributor_seller_add_surname_input.value == '' || distributor_seller_add_surname_input.value == null || distributor_seller_add_surname_input.value == 'undefined'){
	distributor_seller_add_surname_input.style.borderColor ='red';
    return dom_innerHtml('eight_page_distributor_menu_header', 'Please re-check "Seller Surname"'); 
    }
	
	//check Seller password
    if(seller_new_account_default_password.textContent == '' || seller_new_account_default_password.textContent == null || seller_new_account_default_password.textContent == 'undefined'){
	seller_new_account_default_password.style.borderColor ='red';
    return dom_innerHtml('eight_page_distributor_menu_header', 'Please re-check "Seller password"'); 
    }

	        
     var url= http_https + current_domain + '/api/add_user?user_type=seller&name='+distributor_seller_add_name_input.value.trim()+'&surname='+distributor_seller_add_surname_input.value.trim()+'&password='+seller_new_account_default_password.textContent.trim().replace(/ /g, '%20')+'&id='+distributor_seller_add_id_input.value.trim()+'&added_by_name='+distributor_login.name+'&added_by_id='+distributor_login.distributor_id+'&added_by_usertype='+distributor_login.usertype;
	
	
    //console.log(url);
		
	
    
       $.get(url, function(response, status){
           
            
           
           if(status == 'success'){
              
      
               if(response == 'Server or Conection error'){
                   
                
                dom_innerHtml('eight_page_distributor_menu_header', 'Server or Conection error, Please try again later'); 
				   return;
                   
               }              
			   
			   if(response == 'Error seller registered'){
                   
                
                dom_innerHtml('eight_page_distributor_menu_header', 'Error, This ID number is already registred'); 
				   return;
                   
               }
               
                dom_innerHtml('eight_page_distributor_menu_header', 'Account Succesfully created.');//secess message

             
           }
           
           else{
             return dom_innerHtml('eight_page_distributor_menu_header', 'System/Connection error, please try again later.'); 
           }
       });  
          

    
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++ distributor account add by admin


function admin_distributor_new_account_creation(){
    
    //add seller id
    var admin_distributor_add_id_input = document.getElementById('admin_distributor_add_id_input');
	
	//seller add name
    var admin_distributor_add_name_input = document.getElementById('admin_distributor_add_name_input');
	
	//seller add surname
    var admin_distributor_add_surname_input = document.getElementById('admin_distributor_add_surname_input');
	 
    //seller account creation default password
    var distributor_new_account_default_password = document.getElementById('seller_new_account_default_password');
      
	

	//check Seller ID
    if(admin_distributor_add_id_input.value.length < 13 || admin_distributor_add_id_input.value.length > 13){
	admin_distributor_add_id_input.style.borderColor ='red';
    return dom_innerHtml('admin_eight_page_distributor_menu_header', 'Please re-check "Distributor ID number"'); 
    }
    
	//check seller Name
    if(admin_distributor_add_name_input.value == '' || admin_distributor_add_name_input.value == null || admin_distributor_add_name_input.value == 'undefined'){
	admin_distributor_add_name_input.style.borderColor ='red';
    return dom_innerHtml('admin_eight_page_distributor_menu_header', 'Please re-check "Distributor Name"'); 
    }
	//check Seller surname
    if(admin_distributor_add_surname_input.value == '' || admin_distributor_add_surname_input.value == null || admin_distributor_add_surname_input.value == 'undefined'){
	admin_distributor_add_surname_input.style.borderColor ='red';
    return dom_innerHtml('admin_eight_page_distributor_menu_header', 'Please re-check "Distributor Surname"'); 
    }
	
	//check Seller password
    if(distributor_new_account_default_password.textContent == '' || distributor_new_account_default_password.textContent == null || distributor_new_account_default_password.textContent == 'undefined'){
	distributor_new_account_default_password.style.borderColor ='red';
    return dom_innerHtml('admin_eight_page_distributor_menu_header', 'Please re-check "Distributor password"'); 
    }

	        
     var url= http_https + current_domain + '/api/add_user?user_type=distributor&name='+admin_distributor_add_name_input.value.trim()+'&surname='+admin_distributor_add_surname_input.value.trim()+'&password='+distributor_new_account_default_password.textContent.trim().replace(/ /g, '%20')+'&id='+admin_distributor_add_id_input.value.trim()+'&added_by_name='+admin_login.name+'&added_by_id='+admin_login.admin_id+'&added_by_usertype='+admin_login.usertype;
	
	
    //console.log(url);
		
	
    
       $.get(url, function(response, status){
           
            
           
           if(status == 'success'){
              
      
               if(response == 'Server or Conection error'){
                   
                
                dom_innerHtml('admin_eight_page_distributor_menu_header', 'Server or Conection error, Please try again later'); 
				   return;
                   
               }              
			   
			   if(response == 'Error seller registered'){
                   
                
                dom_innerHtml('admin_eight_page_distributor_menu_header', 'Error, This ID number is already registred'); 
				   return;
                   
               }
               
                dom_innerHtml('admin_eight_page_distributor_menu_header', 'Account Succesfully created.');//secess message

             
           }
           
           else{
             return dom_innerHtml('admin_eight_page_distributor_menu_header', 'System/Connection error, please try again later.'); 
           }
       });  
          

    
}

/*=====================================================================================================================================================

  upload vouchers
    
=====================================================================================================================================================*/


	
	
//user provided data

var get_price, get_voucher_expiery_value, get_voucher_expiery_value_type;

var mob = [];


//clean old contents first when upload file button is clicked
 function upload_csv_cleaning(){

	
	mob= [];//clear array of previous vouchers.

	//clear div's of old contents
	dom_innerHtml('report_box', '');
	dom_innerHtml('old_content_as_report_box', '');
	dom_innerHtml('input_content_show_table', '');

	//clear upload button value
	document.getElementById('voucher_code_add').value = '';

	//reset preview box height
	document.getElementById('input_content_show').style.height='50px';

 }


//$("input[type=file]").change(function(){
$("#voucher_code_add").change(function(){

	//show warning about max vouchers to load ad once
	var voucher_load_limit_confirm = confirm('Please dont load csv file with over 50 voucher codes at once.\n\rOnly loads voucher of same amount/data/time per batch.');
	if(!voucher_load_limit_confirm){ return}//if cancell pressed end function

	$("#voucher_code_add").parse({
		config: {
			delimiter: "",	// auto-detect
			newline: "",	// auto-detect
			quoteChar: '"',
			header: false,
			complete: function(results, file) {

				var get_name, get_password, get_profile, first_run=0;
				
				

				for(var i=0; i<results.data.length;i++){


							  var current_content_array = results.data[i];


							  if(first_run==0){
							  //get passowrd and names
							  	get_name = current_content_array.indexOf('name');
							  	get_password = current_content_array.indexOf('password');
							  //get profile
							  get_profile = current_content_array.indexOf('profile');
							   if(get_name == -1 || get_password == -1){//check for vouchers
								   document.getElementById('recharge_codes_menu_header').innerHTML ='ERR : No Vouchers codes found on the file.'
								   break;
							   }

							  if(get_profile == -1){//check for profile
								 	document.getElementById('recharge_codes_menu_header').innerHTML ='ERR : No Bundles profile found for vouchers.'
								 	break;
							   }
								  
								  //voucher price
								get_price = document.getElementById('price_input_box').value;
								if(get_price < 1){ 
								   
								   		document.getElementById('recharge_codes_menu_header').innerHTML ='NOTICE! : No Voucher Price set.'
										document.getElementById('price_input_box').style.borderColor = 'red';
										var confirm_price = confirm('NOTICE! : No Voucher Price set.');
									
										if(!confirm_price){break;}
								 	
								   }
								  //voucher expiery
								get_voucher_expiery_value = document.getElementById('voucher_expiery_date').value;
								 if(get_voucher_expiery_value < 1){
								   
								   		document.getElementById('recharge_codes_menu_header').innerHTML ='NOTICE! : No Voucher Expiery date set.'
										document.getElementById('voucher_expiery_date').style.borderColor = 'red';
										var confirm_expiery = confirm('NOTICE! : No Voucher Expiery date set.');
									
										if(!confirm_expiery){break;}
								 	
								   } 
								  
								  //voucher expery type
								get_voucher_expiery_value_type = document.getElementById('voucher_expiery_date_type').value;
								  if(get_voucher_expiery_value_type){ 
									  
									  	var confirm_expiery_type = confirm('NOTICE! : Voucher Expiery date type selected is : ' + get_voucher_expiery_value_type + '.');
									
										if(!confirm_expiery_type){break;}
								 	
								   } 
								  
								// log first run : things that should be done once	  
								 first_run=1;
								  
							
							  }

							//skip first run//data contains csv headers
								if(i == 0){continue;}
							//skip final entry id be empty, because header is calculated in.
								if(i == results.data.length - 1){continue}


								mob.push({'name':current_content_array[get_name],'password':current_content_array[get_password],'profile':current_content_array[get_profile], 'expiery':get_voucher_expiery_value+' '+ get_voucher_expiery_value_type,'cost':get_price}); //modify this line as per the format of your CSV file
						}
						//console.log(mob);
						
						//$(".d").val(mob.toString());
				
						mob.forEach(function(data, index){
							//console.log(index,data);
//							$("#input_content_show_table").append(`<p>
//									<span>Voucher Code : `+data.name+`</span>		
//									<span>Voucher Password : `+data.password+` </span>
//									<span>Voucher Data : `+data.profile+` </span>	
//									<span>Voucher  Expiery: `+data.expiery+` </span>
//									<span>Voucher  Price: `+data.cost+` </span>	
//								</p><br>`);
							if(index ==0){//add headers
								$("#input_content_show_table").append(`<tr>
									<td style='border: 1px solid white;color:green'><b>Voucher Code</th>		
									<th style='border: 1px solid white;color:green'>Voucher Password </th>
									<th style='border: 1px solid white;color:green'>Voucher Data </th>	
									<th style='border: 1px solid white;color:green'>Voucher  Expiery </th>
									<th style='border: 1px solid white;color:green'>Voucher  Price</th>	
								</tr>`);
							   }
							$("#input_content_show_table").append(`<tr>
									<td style='border: 1px solid white;'>Voucher Code :<span style='color:yellow'> `+data.name+`</span></td>		
									<td style='border: 1px solid white;'>Voucher Password : <span style='color:yellow'>`+data.password+` </span></td>
									<td style='border: 1px solid white;'>Voucher Data : <span style='color:yellow'>`+data.profile+` </span></td>	
									<td style='border: 1px solid white;'>Voucher  Expiery: <span style='color:yellow'>`+data.expiery+` </span></td>
									<td style='border: 1px solid white;'>Voucher  Price: <span style='color:yellow'>R`+data.cost+` </span></td>	
								</tr>`);
							
							if(index == mob.length -1){//enable button
								document.getElementById('add_voucher_button').disabled = false;
							}
						});
						document.getElementById('input_content_show').style.height = '250px';
						
					}
			}
	});
});
	
	
	
	
function admin_voucher_upload(){//send voucher to db
	
	//alert();
	
	
	
	var url= http_https + current_domain + '/api/add_vouchers?voucher_codes='+JSON.stringify(mob)+'&added_by='+admin_login.admin_id;
	
    //console.log(url);
    
       $.get(url, function(response, status){
           //console.log(response);
            
           
           if(status == 'success'){
              
      
               if(response[0] == 'Server or Conection error'){
                   
                
					dom_innerHtml('recharge_codes_menu_header', 'Server or Conection error, Please try again later'); 
					   return;

               }                 
			   
			   if(response[0] == 'available'){
                   
                
					dom_innerHtml('recharge_codes_menu_header', 'Some voucher CODES are already on the system');
				   
				   	var show_report_confirm = confirm('WARNING ! : Some voucher were already on the system.\n\nSee report on [Content loaded ..] box?');
				   
				    if(show_report_confirm){//show report
						document.getElementById('report_box').style.border = 'thick solid blue';
						
						
						$("#report_box").append(`
							<h1 style='color:orange;text-decoration:underline;text-align:center'>Results Report... </h1>
							<br />
							<p style='color:white'>Voucher saved is <span style='color:yellow'>`+(mob.length - response[1].length)+`</span>, out of <span style='color:yellow'>`+mob.length+`</span>,total vouchers processed.
							<br />
							<br />
							<p style='color:red'>Vouchers code already stored on the system :</p>
							<br />
							
						`);
					   
					   	response[1].forEach(function(data, index){
							if(index ==0){//add headers
								$("#report_box").append(`<tr>
									<td style='border: 1px solid white;color:green'><b>Voucher Code</th>		
									<th style='border: 1px solid white;color:green'>Voucher Password </th>
									<th style='border: 1px solid white;color:green'>Voucher Data </th>	
									<th style='border: 1px solid white;color:green'>Voucher  Expiery </th>
									<th style='border: 1px solid white;color:green'>Voucher  Price</th>	
								</tr>`);
							   }
							$("#report_box").append(`<tr>
									<td style='border: 1px solid white;'>Voucher Code :<span style='color:yellow'> `+data.name+`</span></td>		
									<td style='border: 1px solid white;'>Voucher Password : <span style='color:yellow'>`+data.password+` </span></td>
									<td style='border: 1px solid white;'>Voucher Data : <span style='color:yellow'>`+data.profile+` </span></td>	
									<td style='border: 1px solid white;'>Voucher  Expiery: <span style='color:yellow'>`+data.expiery+` </span></td>
									<td style='border: 1px solid white;'>Voucher  Price: <span style='color:yellow'>R`+data.cost+` </span></td>	
								</tr>`);
							
							if(index == mob.length -1){//enable button
								//document.getElementById('add_voucher_button').disabled = false;
								document.getElementById('input_content_show').style.height = '500px';
							}
						});
						
						
						$("#old_content_as_report_box").append(`
							<h2 style='color:orange;text-decoration:underline;text-align:center'>Vouchers processed from list... </h2>
							<p style='color:red'>Vouchers found from the list added by you :</p>
							<br />
							
						`);
					   }
				   
					return;

               }	
			   
			   if(response[0] == 'saved'){
                   
                
					dom_innerHtml('recharge_codes_menu_header', 'All Voucher Sucessfully added'); 
				   
				  	alert('SUCCESS! : All Vouchers have been saved to the system');
				   
				   
					return;

               }              
			   
               
                return;

             
           }
           
           else{
             	return dom_innerHtml('admin_eight_page_distributor_menu_header', 'System/Connection error, please try again later.'); 
           }
       });  
          
	
	
	
}

/*=====================================================================================================================================================

   router up/down status user side view
    
=====================================================================================================================================================*/

//mock link for db, update status from router// http://127.0.0.1:4100/api/router_checkin\?router_name=Home%20router&router_location=Orange%20Farm&router_details=If%20issue%20contact%20Tsehla%20on%2007190000&hotspot_ip="{.id=*1;address=192.168.88.1/24;comment=defconf;interface=ether1;network=192.168.88.0}"

//retrive status from db
//var url= 'http://' + current_domain + '/api/router_checkin_data_get;

//add status to db
//var url= 'http://' + current_domain + '/api/add_vouchers?voucher_codes='


var router_menu_input;//used to dertemine if function called in or out of admin acc

function show_router_workd_extra_menu(input){//show admin config menu
	
	router_menu_input = input;
	
	var router_extramenu_show_hide = 'none';//hide some menu if function called without login
	//var router_extramenu_show_hide = 'block';//hide some menu if function called without login
	
	if(input){//logging from within admin menu//show extra stuff
		
		router_extramenu_show_hide = 'block';//show if function called within admin-logged in account
	}
	
	var url= http_https + current_domain + '/api/router_checkin_data_get';
	
	
	
	  $.get(url, function(response, status){
           
            
           
           if(status == 'success'){
              
      
               if(response == 'Server or Conection error'){
                   
                
                dom_innerHtml('router_menu_header', 'Server or Conection error, Please try again later'); 
				   return;
                   
               }              
			   
			   if(response == 'No router data found'){
                   
                
                dom_innerHtml('router_menu_header', 'No data found'); 
				   return;
                   
               }
               
               // dom_innerHtml('router_menu_header', 'Sata found.');//secess message
			   
			   //console.log(response);
			   document.getElementById('router_log_viewer').innerHTML='';//clear dom for future content reload
			   
			   var router_contact_history = '';//router time history
			   
			   response.forEach(function(data, index){
				   	
				   	if(data.router_last_contact_date_time_history){//created rooter history formated for alert
						data.router_last_contact_date_time_history.forEach(function(data){
							router_contact_history=router_contact_history + data + '\\r-------\\r';
							//console.log(data);
						});
						
					}
				   
				   //last contact hour AM/PM
				   
				   var am_pm = data.router_last_contact_hour < 12?' AM':' PM';
				   
				   
				     var week_day =['Holiday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];//weekday
				     var is_muted = (data.routermute? 'muted' : 'not_muted');
				   
					 var muted_button = (data.routermute? "<button class='btn btn-success' style='width:100%' onclick='router_mute_control(\""+data._id+"\",\"unmute\")'>un-Mute Router Router</button>" : "<button class='btn btn-danger w3-block' style='width:100%' onclick='router_mute_control(\""+data._id+"\",\"mute\")'>Mute</button>");
					 
					 
					//Ip adress string cleaning function
					function ip_string_cleaning(ip_string_input){

							//Example recieved string from db/router
							//	var ip_string_input = "{.id=*1;address=192.168.88.1/24;comment=defconf;interface=ether1;network=192.168.88.0};
							// update link example ::::: http://127.0.0.1:4100/api/router_checkin\?router_name=Home%20router&router_location=Orange%20Farm&router_details=If%20issue%20contact%20Tsehla%20on%2007190000&hotspot_ip="{.id=*1;address=192.168.88.1/24;comment=defconf;interface=ether1;network=192.168.88.0}"

								if(!ip_string_input){return 'No IP provided by router/database';}//if no ip provided quit

								ip_string_input=ip_string_input.replace(/[{}]/g,'').split(';');//clean string and turn to array
								var new_ip_string ='<span style="text-decoration:underline;">Connection :</span><br/>';
								
								ip_string_input.forEach((value, index)=>{//extract usefull data from ip string array

								//add string connection if still more adresses available//prohibit add on last line
								var connection_add = index != ip_string_input.length-1?'<br/><span style="text-decoration:underline;">Connection :</span>':'';

								//get/search ip adress
								(value.search('address')==0)?(new_ip_string+=ip_string_input[index]+'<br>'):null;
								
								//get/search interface
								(value.search('interface')==0)?new_ip_string+=ip_string_input[index]+'<br>':null;
								
								//get/search network

									function router_ip_open(){//clean router ip adress for easy acess at front

										var link_cleaning = (ip_string_input[index]);
									
										link_cleaning = link_cleaning.replace('network=' ,'').replace('"' ,'');
										
										link_cleaning = `<br><button style='min-width:100px; width:20%; height:50px' class='btn btn-warning' onclick='window.open("http://`+ link_cleaning +`","_blank")'>Open link</button>`;

										//console.log(link_cleaning);

										 return link_cleaning;
									}
									(value.search('network')==0)?new_ip_string+=ip_string_input[index] + router_ip_open() + connection_add+'<br>':null;
								
	
								});


								
								return new_ip_string;

					 	}

			   
					   $("#router_log_viewer").append(`

								 <div  style="width:100%; height:auto; margin:13px 0px 13px 0px; display:block; "  class="form-control router_log `+ is_muted +`">
									<p style='width:100%; height: auto; margin: 0px 0px 0px 0px; padding:0px; text-align:center'>
										 Router Name :<br />`+ text_line_break(data.routername) +`<br />Last Contact :<br />Time : `+ text_line_break(data.router_last_contact_hour + ':' + data.router_last_contact_minute + am_pm +`, Day :`+ week_day[ data.router_last_contact_day ]) +`
									 </p>
									  <p style='width:90vw; height: auto; margin: 1vh 1vw 1vh 1vw; padding:0px; text-align:center; border:3px dotted green; line-height:auto; vertical-align: middle; font-size:15px; display:`+ router_extramenu_show_hide +`' id=''>
										
										<span style='font-weight: bold;'>Router Location :</span> <br />`+ text_line_break(data.routerlocation) +`<br />
										<span style='font-weight: bold;'>Router Extra details : </span><br />` + text_line_break(data.routerdetails) + `<br />
										<span style='font-weight: bold;'>Router IP addresses: </span><br />` + ip_string_cleaning(data.router_last_ip) + `<br />
										
									 </p>
									<div style='width:90vw; height: auto; margin: 1vh 1vw 1vh 1vw; padding:0px; text-align:center; font-weight: bold; line-height:auto; vertical-align: middle; font-size:15px;display:block;' id='' >
											<button class='btn btn-primary w3-block' style='width:100%' onclick='alert("` + router_contact_history + `")'>Contact history</button>
									</div>

									<div style='width:90vw; height: auto; margin: 1vh 1vw 1vh 1vw; padding:0px; text-align:center; font-weight: bold; line-height:auto; vertical-align: middle; font-size:15px; display:`+ router_extramenu_show_hide +`' id=''>`+ muted_button +`</div>
	
								</div>

						`);






				   	router_contact_history='';
				 //   console.log(router_contact_history);
				  });
			   
			   router_log_view_control ('active');
			   router_content_autoloader_fn();//start auto updater
			   return;
             
           }
           
           else{
             return dom_innerHtml('router_menu_header', 'System/Connection error, please try again later.'); 
           }
       });  
          
	
	
}


//router status load contents control

function router_log_view_control (show){//show or hide muted
	var router_log_class_content = document.getElementsByClassName('router_log');
	
	if(show == 'active'){ //show active
		
		
		document.getElementById('router_active_view').style.borderBottom='2px solid red'
		document.getElementById('router_mute_view').style.borderBottom='0px'
		
		for(var i =0; i <=router_log_class_content.length -1; i++){//hide all
	
			router_log_class_content[i].style.display='none';

		}
		
		for(var i =0; i <=document.getElementsByClassName('not_muted').length -1; i++){//show selected

			document.getElementsByClassName('not_muted')[i].style.display='block';
		}
	}
	
	if(show == 'muted'){ //show muted
		
				
		document.getElementById('router_active_view').style.borderBottom='0px'
		document.getElementById('router_mute_view').style.borderBottom='2px solid red'
		
		for(var i =0; i <=router_log_class_content.length -1; i++){//hide all

			router_log_class_content[i].style.display='none';
		}
		
		for(var i =0; i <=document.getElementsByClassName('muted').length -1; i++){//show selected

			document.getElementsByClassName('muted')[i].style.display='block';
		}
		
	
	}
	
}

//router mute or un-mute

function router_mute_control(id,todo){
	
	//console.log(id,todo);
	
	var todo_request = todo =='mute'?true:false;
	
	var url= http_https + current_domain + '/api/router_checkin_data_save?status_id='+id+'&router_todo='+todo_request+'&user_id='+admin_login.admin_id;
	
	//console.log(url);
		
	  $.get(url, function(response, status){
           
            
           
           if(status == 'success'){
              
      
               if(response == 'Server or Conection error'){
                   
                
                dom_innerHtml('router_menu_header', 'Server or Conection error, Please try again later'); 
				   return;
                   
               }              
			   
			   if(response == 'No data found'){
                   
                
                dom_innerHtml('router_menu_header', 'Error, No data found'); 
				   return;
                   
               }
			   if(response == 'Save error'){
                   
                
                dom_innerHtml('router_menu_header', 'Error, Saving changes, please try again later or contact administrator'); 
				   return;
                   
               }
			   
			   dom_innerHtml('router_menu_header', 'Succes Changes made'); 
			   
			   show_router_workd_extra_menu(router_menu_input);//reload router log view contents
				return;
                   
			   
			                   

		   }
	
	
	  });
	
	
}




//router content auto re-load//for when clicking mute/un-mute button

var router_auto_loader;
function router_content_autoloader_fn(){
	
	router_auto_loader = setInterval(function(){
		show_router_workd_extra_menu(router_menu_input);//start function and pass parameter//every 15 minutes
		
	}, (1000*60*15));
//	}, (3000));
	
}

/*=====================================================================================================================================================

   extra side menu control
    
=====================================================================================================================================================*/



//show buttons applicable to user type

function menu_button_sever(typeOfUser){//type of user allows custom css .class matching
	
	var side_menu_side_buttons = document.getElementsByClassName('side_menu_button');
	
	for(var a = 0; a <= side_menu_side_buttons.length-1; a++){
		
		var classes_to_array = side_menu_side_buttons[a].className.split(' ');//convert class contained in button to array
		
		classes_to_array.forEach(function(data, index){//search for match//and hide as necessary/show
			
			//console.log(data, data=='all_user_side_menu_button', data=='admin_user_side_menu_button)
			
			side_menu_side_buttons[a].style.display='none';//hide all first
			
			if(data == typeOfUser || data == 'all_user_side_menu_button'){//show all buttons matching or containing "all_user_side_menu_button" class
					//console.log('yes');
			   		side_menu_side_buttons[a].style.display='block';//show matching
			}
			
			
		});
		
	}
	
	
	
}


//++++++++++++++++++++ extra menu content ++++++++++++++++++++


function extra_menu(transaction_type){ //extra menu initiator
	
	//show menu window
		
	document.getElementById('transactions_and_voucher_page').style.display='block';	
		
	if(admin_login.admin_id){//if admin logged in
		
		var url= http_https + current_domain + '/api/transations?type='+ transaction_type +'&user_id='+admin_login.admin_id+'&usertype='+admin_login.usertype;
	}
		
	if(seller_login.seller_id){// if seller logged in
		
		var url= http_https + current_domain + '/api/transations?type='+ transaction_type +'&user_id='+seller_login.seller_id+'&usertype='+seller_login.usertype;
	}

	if(distributor_login.distributor_id){// if distributor logged in
		
		var url= http_https + current_domain + '/api/transations?type='+ transaction_type +'&user_id='+distributor_login.distributor_id+'&usertype='+distributor_login.usertype
	}
		
		
		
	//console.log(url);
			
	if(transaction_type == 'past_transactions'){//++++++++++++++++++++++++++++ transacton record menu
		

		var alert_button = `<br />
							<button style="width:100%; height:7vh; margin 10px 0px 10px 0px; padding:0px; display: block" class="btn btn-warning" onclick="alert('List of transactions made in the past. (a) [ - ] means money out. (b) [ + ] means money in.')">Help</button>`; 
		
		$.get(url, function(response, status){
			
				
			
			if(status == 'success'){
				
		
				if(response == 'error'){
					
					
					dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later');
					
					//add alert button
					dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);
					
					return;
					
				}              
				
				if(response == 'error : no transations history stored'){
					
					
					dom_innerHtml('transactions_and_voucher_header', 'Error, no Transations found'); 
					
					//add alert button
					dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);
					return;
					
				}

				//console.log(response);
				
				
				//clear div current contents
				document.getElementById('transactions_and_voucher_viewer').innerHTML='';
				document.getElementById('transactions_and_voucher_header').innerHTML='Transactions History';
			
				response.forEach(function(data, index){//add contents
					
					var styling_for_other_users = '';
					
					if(!seller_login.logged_in){//if seller is not logged in apply
						styling_for_other_users = '<br />';
					}
					
					var history_record = data.split(';');
					var transaction_record = '<p id="" class="w3-border w3-margin" style="width:80%;height:auto;margin:auto 10px auto 10px;overflow:break-word; font-size:12px;">'+history_record[0]+'<br />'+history_record[1]+styling_for_other_users+history_record[2]+'</p><hr>';
					
					//if record has three items//i.e voucher reedem record
					
					if(history_record.length > 3){
						
						transaction_record = '<p id="" class="w3-border w3-margin" style="width:80%;height:auto;margin:auto 10px auto 10px;overflow:break-word; font-size:12px;">'+history_record[0]+'<br />'+history_record[1]+'<br />'+history_record[2]+'<br />'+history_record[3]+'</p><hr>';
						
					}
					
					$('#transactions_and_voucher_viewer').append(transaction_record);
					
					
					//add help button at end o adding items
					
					if(index  == response.length - 1){
						

						//add alert button
							dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);
						}
				});
				
				
					return;

			}
		
			dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later'); 
			
			//add alert button
			dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);
			return;
		});
		
	}
		
	if(transaction_type == 'to_reddem_voucher'){//++++++++++++++++++++++ voucher reedem menu
		
		
		dom_innerHtml('transactions_and_voucher_viewer', '');//clean div for new content 
		
		//add help button contents
		var alert_button = `<br /><button style="width:100%; height:7vh; margin 10px 0px 10px 0px; padding:0px; display: block" class="btn btn-warning" onclick="alert('List of vouchers that were not used by user : Possible Cause = Incorect code was entered from the buyer. This voucher money can be refunded by clicking [ Redeem Voucher Cash ] Button. ')">Help</button>`;
		
		$.get(url, function(response, status){
			
				
			
			if(status == 'success'){
				
		
				if(response == 'error'){
					
					
					dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later'); 
					
					//add alert button
					dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);
					return;
					
				}              
				
				if(response == 'error : no vouchers to claim'){
					
					
					dom_innerHtml('transactions_and_voucher_header', 'Error, No Voucher to claim found');
					
					//add alert button
					dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);
					
					
					return;
					
				}

				// console.log(response);
				
				//clear div current contents
				document.getElementById('transactions_and_voucher_viewer').innerHTML='';
				document.getElementById('transactions_and_voucher_header').innerHTML='Voucher never sold';
			
				response.forEach(function(data, index){//add contents
						
					var claim_button = "<button class='btn btn-primary' onclick=\"voucher_redeem('"+data.voucher_doc_id.toString()+','+ data.voucher_amount+"',this.id)\" id='redeem_button_"+index+"'>Redeem Voucher Cash</button>";//show redeem button
					
					if(Number(data.voucherproducedday) == Number(data.server_day)){//if ticket was produced in same day// dont allow download: //wannet to have voucher claimed after 30 days, well implementing that is annoying//so will use next day
						claim_button = "<b style='color:red'>You can only get money back for this ticket next day</b> ";
					}
					
					//give sense to date/day
					var simple_date='';
					
					if(data.voucherproducedday==1){simple_date='<sup>st</sup>'}//1st
					if(data.voucherproducedday==2){simple_date='<sup>nd</sup>'}//2nd
					if(data.voucherproducedday==3){simple_date='<sup>rd</sup>'}//3rd
					if(data.voucherproducedday>3){simple_date='<sup>th</sup>'}//4th....
		
					if(data.voucherproducedday==21){simple_date='<sup>st</sup>'}//21st
					if(data.voucherproducedday==22){simple_date='<sup>nd</sup>'}//22nd
					if(data.voucherproducedday==23){simple_date='<sup>rd</sup>'}//23rd
						
					if(data.voucherproducedday==31){simple_date='<sup>st</sup>'}//31st
					if(data.voucherproducedday==32){simple_date='<sup>nd</sup>'}//32nd//haha incase
					
					
					var content_div = "<div id='"+data.voucher_id+"' class='w3-margin w3-border' ><p>Voucher Not used/created by Mistake : <br /> Code from User : "+data.voucher_id+"<br /> Voucher amount : R"+data.voucher_amount+", <br />Produced on the "+data.voucherproducedday+simple_date+",<br /> "+claim_button+"</p></div><br ><hr><br>";
					
					
					$('#transactions_and_voucher_viewer').append(content_div);
					
					
					
					//add help button at end o adding items
					
					if(index == response.length -1){
						
						//add alert button
							dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);

						
						}
					
								
					
				});
				
					return;

			}
		
			dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later'); 
			//add alert button
			dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);
			return;
		});
		
	}
		
	
	
	if(transaction_type == 'messages'){//++++++++++++++++++++++ messages
		
		var new_message_available = false;//check if theres a nww 
		
		dom_innerHtml('transactions_and_voucher_viewer', '');//clean div for new content 
		
		//add help button contents
		var alert_button = `<br /><button style="width:100%; height:7vh; margin 10px 0px 10px 0px; padding:0px; display: block" class="btn btn-warning" onclick="alert('List of vouchers that were not used by user : Possible Cause = Incorect code was entered from the buyer. This voucher money can be refunded by clicking [ Redeem Voucher Cash ] Button. ')">Help</button><div id='' style='position:fixed;width:80px;height:50px;right:40px;bottom:150px;font-size:50px;font-weight:bold;box-shadow:3px 3px green;'><i class='la la-envelope' style='text-shadow:2px 2px grey' onclick='message_creation()'></i></div>`;
		
		$.get(url, function(response, status){
			
				
			
			if(status == 'success'){
				
		
				if(response == 'error'){  
					
						dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later'); 
						//add alert button
						dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);
					return;
					
				}              
				
				if(response == 'error : no messages found'){
						dom_innerHtml('transactions_and_voucher_header', 'Error, No Messages found');
						//add alert button
						dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);			   			   
					return;                 
				}

				// console.log(response);
				
				//clear div current contents
				document.getElementById('transactions_and_voucher_viewer').innerHTML='';
				document.getElementById('transactions_and_voucher_header').innerHTML='Messages';
			
				response.forEach(function(data,index){
					
					var document_id = data._id;//id of current document
					
					data.messages_array.forEach(function(message_item,index){
						
					
						if(index == 0){//control divs for message
							//add opening div tag for this message//container used for deleting whole thing
							
							$('#transactions_and_voucher_viewer').append(`<hr><div id="`+document_id+`_container" style="width:auto;height:auto; margin:0px;padding:0px">`);
							
							//message container div opening tag
						$('#'+document_id+'_container').append(`<div id="`+document_id+`message_container" style="width:auto;height:auto; margin:0px;padding:0px">`);
							}
						//vars 
						var message_item = JSON.parse(message_item);
						var message_fron_to;//message to or from
						
						message_item['from']?message_fron_to=message_item['from']:message_fron_to=message_item['to'];//message to or from
						
									
						var content_div = "<div id='' class='w3-margin w3-border'><span style='text-decoration: underline;font-weight:bold;'>"+message_fron_to+"</span><br /><i> "+message_item.date+"</i><br />"+ text_line_break(message_item.message)+"</div><br>";
					
						
						//message
						$('#'+document_id+'message_container').append(content_div);
						
						
						if(index == data.messages_array.length -1){
							
							//find user logged in id
							var logged_in_user_id = '';
							
							if(admin_login.admin_id){//is admin logged in
									logged_in_user_id = admin_login.admin_id;
								}
							
							if(distributor_login.distributor_id){ //is didtributor logged in
									logged_in_user_id =distributor_login.distributor_id;
								}
							
							if(seller_login.seller_id){// is seller logged in
									logged_in_user_id = seller_login.seller_id;
								}
								
									
									

							
							//is logged in user message initiator or reciever//to find out whom to delete/hide message for
							var is_message_initiator_or_not;
							
							if(data.message_initiator_id.toString() == logged_in_user_id.toString()){
									is_message_initiator_or_not = 'from_delete';//user is initiator of this message
								}
									
							if(data.message_parcitipant_id.toString() == logged_in_user_id.toString()){
									is_message_initiator_or_not = 'to_delete';//user is participant of this message
								}
							
							
							//message container closing tag
								$('#'+document_id+'message_container').append(`</div>`);
							
							//add conversation parties//usefull if message has not reply yet
							// console.log(data);
							$('#'+document_id+'_container').append(`<div id='' style='width:100%;height:20px;font-size:10px;font-weight:bold;color:blue'>[ `+data.message_initiator_names+` : `+data.message_initiator_usertype+` << >> `+data.message_parcitipant_names+` : `+data.message_parcitipant_usertype+` ]</div>`);
							
							
							//add reply or delete button
								
							$('#'+document_id+'_container').append('<button class="btn btn-danger" id="' + document_id + '_delete" style="margin:10px;width:95%;height:30px" onclick="messaging_send(\''+document_id+'\',\''+is_message_initiator_or_not+'\')">Delete</button><br />');
							$('#'+document_id+'_container').append('<input type="text" id="'+document_id+'_reply" placeholder="Your response..." class="form-control" style="height:30px;text-align:center;margin:2px"><button style="width:95%;height:30px" class="btn btn-success" id="'+document_id+'_input"  onclick="messaging_send(\''+document_id+'\',\'input\')">Reply</button><br><hr>');
							
							//add main div container closing tag
							$('#'+document_id+'_container').append(`</div>`);
							
							}	
					
					});
					

						//add help button at end o adding items

						if(index == response.length -1){

							//add alert button
								dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);

							}		
					});
				
					return;

			}
		
			dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later'); 
			//add alert button
			dom_innerHtml('transactions_and_voucher_viewer_alert_button',alert_button);
			return;
		});
		
	}

	//uploads/advertiment	
	if(transaction_type == 'upload'){	
		document.getElementById('transactions_and_voucher_page').style.display='none';	//close popup, not nedded

		window.open(http_https + current_domain +'/upload', '_blank');	
		return;	
	}
		
	//greate/update/view voucher types list 
	if(transaction_type == 'voucher_types_list'){
		
		 document.getElementById('transactions_and_voucher_page').style.display='none';	//close popup,
		// document.getElementById('transactions_and_voucher_viewer_options_menu').style.display='none';	//close choice menu

		//http://127.0.0.1:3100/api/voucher_types //get voucher types list with cost
		//http://127.0.0.1:3100/api/voucher_types_add  //create/update voucher type list, with new one


		let choose_what_to_do = confirm('To see list of currently available Voucher types on offer press Cancel button\n\rTo delete current Voucher list and automatically create new, press Ok button')

		if(choose_what_to_do){
			let vouchers_types_link_generate_link = http_https + current_domain + '/api/voucher_types_add';//link to update/re-create voucher types list

			$.get(vouchers_types_link_generate_link, function(response, status){//reset/update voucher type list

				
				if(response.length == 0){//check if any data was recieved in response
					alert('Error no data recieved from server, about Voucher types, when trying to reset/update');
					return 0;
				}

				if(status == 'success'){
					alert('Changes made, if you have added new type of voucher, it should appear on Voucher types for all users.');//give success alert
					
					if(typeof response == 'object'){//check if whats recieved is object array
						document.getElementById('transactions_and_voucher_page').style.display='block';	//show popup,
						document.getElementById('transactions_and_voucher_viewer').innerHTML= ''; //clean div of old data
						document.getElementById('transactions_and_voucher_header').innerHTML='Voucher Types list';//set header for div

						response.forEach(function(data, index){//add voucher data to div 

							$('#transactions_and_voucher_viewer').append(`<p>${index + 1})<br/> Voucher Amount : R${data.voucher_cost},  Voucher Type : ${data.voucher_type}, <br/>Voucher Profile : ${data.voucher_profile}, Available vouchers : ${data.voucher_count}</p><hr>`);
						});
					}

					return 0;

				}

				alert('An error occured trying to update Voucher types list, please try again later or contact administrator');//if error give alert
			});
		}


		else{//if cancell button//show currently available menu types

			alert('To see this results better, please login as a seller, and click enter ticket amount box.\n\rNote: Closing and opening ticket amount box will give you new results/updated results if any changes where done;\r\nSome of the info you see here you may not see in seller menu, i.e some will be displayed in complimentary ticket menu');//im lazy to get this working nicely like it thoes for seller right now

			
			//add_sell_ticket_pop_contents();//show current voucher types menu
			let vouchers_types_link_view_link = http_https + current_domain + '/api/voucher_types';//link to update/re-create voucher types list

			$.get(vouchers_types_link_view_link, function(response, status){//make api call to get data

				if(response.length == 0){//check if any data was recieved in response
					alert('Error no data recieved from server, about Voucher types, please try to update/re-create menu option');
					return 0;
				}

				if(status == 'success'){
					
					if(typeof response == 'object'){//check if whats recieved is object array
						document.getElementById('transactions_and_voucher_page').style.display='block';	//show popup,
						document.getElementById('transactions_and_voucher_viewer').innerHTML= ''; //clean div of old data
						document.getElementById('transactions_and_voucher_header').innerHTML='Voucher Types list';//set header for div

						response.forEach(function(data, index){//add voucher data to div 

							$('#transactions_and_voucher_viewer').append(`<p>${index + 1})<br/> Voucher Amount : R${data.voucher_cost},  Voucher Type : ${data.voucher_type}, <br/>Voucher Profile : ${data.voucher_profile}, Available vouchers : ${data.voucher_count}</p><hr>`);
						});
					}

					return 0;
				}

				alert('An error occured trying to update Voucher types list, please try again later or contact administrator');//if error give alert
			});




		}

	}

	// --------------------
	//create/update/view { radius Auto ] voucher types list 
	//---------------------
	if(transaction_type == 'voucher_types_list_radius_auto'){

		document.getElementById('transactions_and_voucher_page').style.display='none';	//close popup,
		document.getElementById('transactions_and_voucher_viewer_options_menu').style.display='none';	//close choice menu
		
		//var wifi_radius_server_link = url_parms_object();

		//give option to view and manage auto vouxher types list or create them
		var auto_voucher_types_list = confirm('Press "OK"\nto VIEW and MANAGE auto voucher types list.\nPress "CANCEL"\nto CREATE new voucher types.');//give choice of action

		if(auto_voucher_types_list){//if okay pressed, show list of voucher types

			document.getElementById('transactions_and_voucher_page').style.display='block';	//show popup,
			document.getElementById('transactions_and_voucher_viewer').innerHTML= ''; //clean div of old data
			document.getElementById('transactions_and_voucher_header').innerHTML='Auto voucher Details';//set header for div

			//get saved vouchers
			defined_auto_vouchers_retrieve();


			//menu help button : add help data
			document.getElementById('transactions_and_voucher_viewer_alert_button').innerHTML = `
			<br>
				<button style="width:100%; height:7vh; margin 10px 0px 10px 0px; padding:0px; display: block" class="btn btn-warning" onclick="alert('This vouchers are defined templates used to automatically create a Voucher of the shown amount and data or time limit with unique Voucher code to access the internet.\\nThe vouher code will be produced on request by a [ RADIUS COMPUTER ]')">
					Help
				</button>

			`;



			return;//end fntion
		}

		//check if wifi-radius link rpovided
		//if(!wifi_radius_server_link.u_link){ //if not end function
		if(!auto_user_creater_wifi_radius_link.u_link){ //if not end function
			
			alert('No link to [Wifi-Radius] server provided.\nPlease add in "HotSpot Manage" option.');//give error alert
			return
		}

		//get created hotspots locations
		var retrieved_hotspot_location_data = '';
		$.get('/api/hotspot_location_data', function(response, status){ //connect to server and request data

			if(status == 'success'){//if result recived 
				retrieved_hotspot_location_data = response.location; //save result to local variable
			}

			voucher_type_production();
		});
		
		//connect and get profiles group data from wifi-radius server
		function voucher_type_production(){

			var url = auto_user_creater_wifi_radius_link.u_link + '/saved_profiles'
		
			$.get(url, function(response, status){

				if(status == 'success'){

					//console.log(response);
					document.getElementById('transactions_and_voucher_page').style.display='block';	//show popup,
					document.getElementById('transactions_and_voucher_viewer').innerHTML= ''; //clean div of old data
					document.getElementById('transactions_and_voucher_header').innerHTML='Auto voucher creation Details';//set header for div

					//check if profile group data was retrieved
					if(response.length == 0){//if nothing retrived from request

						document.getElementById('transactions_and_voucher_viewer').innerHTML= `<p>No data found from server by calling this link : <a href='${url}'>${url}</a></p>`; //give error

						return;//end function
					}

					var wifi_radius_auto_voucher_details_creation = '';//stores user creation div data
					response.forEach(function(response, index){

						radius_voucher_profile_limit_type = response.profile_group_attributes_properties?response.profile_group_attributes_properties.time_or_data_limit:'N/a';

						wifi_radius_auto_voucher_details_creation = wifi_radius_auto_voucher_details_creation + `
						<div id='wifi_radius_auto_voucher_details_creation_div_${index}' data-wifi_radius_auto_voucher_details_${index}=${JSON.stringify(response['_id'])}   class='w3-margin wifi_radius_auto_voucher_details_creation_div' style='background-color:white;box-shadow:3px 3px 2px gainsboro, -1px -1px 2px gainsboro;text-align: left'>

							<div style='margin-top:24px text-align :center; width:100%'><b>Profile Details</b><br /> <span id='profile_detals_${index}'>${response.data[0]}</span></div>

							<div style='margin-top:24px text-align :center; width:100%'><b>Profile Limit type</b><br /> <span id='profile_limit_type_${index}'> ${radius_voucher_profile_limit_type} </span></div>

							<div style='margin-top:24px text-align :center; width:100%'><b>Voucher Reset</b><br /> <span id='voucher_reset_${index}'>  ${response.profile_group_attributes_properties?response.profile_group_attributes_properties.when_to_reset:'N/A'} </span></div>

							<p style='margin-top:24px text-align :center'><b>Fill in : </b></p>

							<p style='color: red;font-size: 15px;font-weight: bolder' class="w3-block">1)</p>
								<label for='voucher_value'>Voucher Price :  <b style='font-size: 15px'>R</b></label>
								<input type="number" value='0' step='0.1' id='voucher_price_${index}' style="width: 20%; display: inline" class="form-control">
							<br />
							<!-- data input -->
							<div style='display:${radius_voucher_profile_limit_type == "data_limited"?"block":"none"}'>

								<p style='color: red; font-size: 15px;font-weight: bolder' class="w3-block ">2)</p>
								<label for='voucher_value'>Voucher Data : </label>
								<input type="number" id='voucher_data_value_${index}' value='0.00' step='1' style="width: 20%; display: inline" class="form-control"> <!-- input time value -->
								<select class='btn btn-primary' id='voucher_data_limit_type_${index}'> <!-- input value type --> 
									<option selected'>Data limit type</option>	
									<option>KB</option>	
									<option>MB</option>	
									<option>GB</option>	
									<option>TB</option>	
									<option>ZB</option>	
								</select>

							</div>
							
							<!-- time input -->
							<div style='display:${radius_voucher_profile_limit_type == "data_limited"?"none":"block"}'>

							<p style='color: red; font-size: 15px;font-weight: bolder' class="w3-block ">2)</p>
							<label for='voucher_value'>Voucher Time : </label>
							<input type="number" id='voucher_time_value_${index}' value='0.00' step='1' style="width: 20%; display: inline" class="form-control"> <!-- input time value -->
							<select class='btn btn-primary' id='voucher_time_limit_type_${index}'> <!-- input value type --> 
								<option selected>Time limit type</option>	
								<option>Minutes</option>	
								<option>Hours</option>	
								<option>Days</option>	
								<option>Weeks</option>	
								<option>Months</option>
								<option>Years</option>
							</select>



							</div>

							<!-- voucher expiery input -->
							<p style='color: red; font-size: 15px;font-weight: bolder' class="w3-block ">3)</p>
							<label for='voucher_value'>Voucher Expiery : </label>
							<input type="number" id='voucher_expiery_date_value_${index}' value='0.00' step='0.01' style="width: 20%; display: inline" class="form-control"> <!-- expiery value -->
							<select class='btn btn-primary' id='voucher_expiery_type_${index}'> <!-- input value type --> 
								<option selected>Select</option>
								<option>Minutes</option>	
								<option>Hours</option>	
								<option>Days</option>	
								<option>Weeks</option>	
								<option>Months</option>	
								<option>Years</option>	
							</select>
							<br />

							<!-- voucher hotspot limit -->
							<p style='color: red; font-size: 15px;font-weight: bolder' class="w3-block ">3)</p>
							<label for='voucher_value'>Voucher Hotspot location limit : </label>
							<select class='btn btn-primary' id='voucher_hotspot_location_limit_${index}'> <!-- voucher location value --> 
								<option selected>All</option>
								${retrieved_hotspot_location_data}	
							</select>
							<br />

							<div style='width:100%; height:auto; margin-bottom : 20px'>
								<button class='btn btn-warning' style='width:44% margin:10px' onclick='dom_hide_show("hide", "wifi_radius_auto_voucher_details_creation_div_${index}")'>Remove</button>
								<button class='btn btn-danger' style='width:44% margin:10px' onclick='auto_voucher_create("${index}")'>Save</button>
							</div>
						</div>
						
						`

					});







					$('#transactions_and_voucher_viewer').append(wifi_radius_auto_voucher_details_creation );

					//menu help button : add help data
					document.getElementById('transactions_and_voucher_viewer_alert_button').innerHTML = `
						<br>
						<button style="width:100%; height:7vh; margin 10px 0px 10px 0px; padding:0px; display: block" class="btn btn-warning" onclick="alert('This are voucher profiles retrived from [ Radius Computer ]\\nThey are used to create Vouchers of shown data/time limit.\\n1) Specify voucher : Cost/Price, data/time limit, and expiery.\\n2) Save changes\\n3) If what you save already exist, save will be rejected.\\nInfo: this process differ from manual way of uploading [ csv ] file with vouchers exported from [ radiusdesk ], as vouchers are produced only when requested automatically.')">
						Help
					</button>

				`;




					return;
				}

				alert('Error opening wifi-radius link : ' + url + '\nTo retrieve profile data to create vouchers.');
				

				
			});

		}
		return;
	}
	
}

//+++++++++++++
//auto voucher types
//+++++++++++++

// [radius server api ]
/*
	 $.get('/create_user', {'user_id' : vouchercode_username_password, 'data_profile' : data_profile_group, 'total_account' : batch_total, 'account_group_name' : batch_name, 'voucher_username_suffix': vouchercode_username_password_suffix, account_type : type_of_user }, function(data, success){
*/

//------------ save/create
function auto_voucher_create(voucher_details_div_index){
	//alert(voucher_details_div_index);

	var wifi_radius_auto_voucher_details_id = document.getElementById('wifi_radius_auto_voucher_details_creation_div_' + voucher_details_div_index).getAttribute('data-wifi_radius_auto_voucher_details_' + voucher_details_div_index);

	var profile_detals = document.getElementById('profile_detals_' + voucher_details_div_index).textContent.trim();
	
	var profile_limit_type = document.getElementById('profile_limit_type_' + voucher_details_div_index).textContent.trim();

	var voucher_reset = document.getElementById('voucher_reset_' + voucher_details_div_index).textContent.trim();

	//user inputs
	//voucher cost
	var voucher_price = document.getElementById('voucher_price_' + voucher_details_div_index).value;

	//voucher data 
		//data value
	var voucher_data_value = document.getElementById('voucher_data_value_' + voucher_details_div_index).value;
		// data limit type
	var voucher_data_limit_type  = document.getElementById('voucher_data_limit_type_' + voucher_details_div_index).value;

	// voucher time
		//data value
	var voucher_time_value = document.getElementById('voucher_time_value_' + voucher_details_div_index).value;
		//time limit type
	var voucher_time_limit_type = document.getElementById('voucher_time_limit_type_' + voucher_details_div_index).value;

	// voucher expiery
		//expiery value
	var voucher_expiery_date_value = document.getElementById('voucher_expiery_date_value_' + voucher_details_div_index).value;
		//expiery type
	var voucher_expiery_type = document.getElementById('voucher_expiery_type_' + voucher_details_div_index).value;

		//voucher location limit
	var voucher_location_limit = document.getElementById('voucher_hotspot_location_limit_' + voucher_details_div_index).value;
	

	//check inputs filled
	var voucher_price_is_zero = true;
	if(Number(voucher_price) < 1){

		voucher_price_is_zero = confirm('Voucher is priced at : 0\nContinue?')

	}
	if(voucher_price_is_zero == false){//if voucher price value, confirm cancelled, end function
		return;
	}


	//check if [values ] types are specified
	if(voucher_expiery_type == 'Select' ){

		alert('Please specifiy all voucher [ value types ] to continue. ')
		return;
	}
	if(voucher_data_limit_type == 'Data limit type' &&  profile_limit_type == 'data_limited'){

		alert('Please specifiy all voucher [ value types ] to continue. ')
		return;
	}
	if(voucher_time_limit_type == 'Time limit type' && profile_limit_type == 'time_limited'){

		alert('Please specifiy all voucher [ value types ] to continue. ')
		return;
	}

	//voucher data
	var auto_voucher_payload = `
		wifi_radius_auto_voucher_details_id=${wifi_radius_auto_voucher_details_id}&profile_detals=${profile_detals}&profile_limit_type=${profile_limit_type}&voucher_reset=${voucher_reset}&voucher_price=${voucher_price}&voucher_data_value=${voucher_data_value}&voucher_data_limit_type=${voucher_data_limit_type}&voucher_time_value=${voucher_time_value}&voucher_time_limit_type=${voucher_time_limit_type}&voucher_expiery_date_value=${voucher_expiery_date_value}&voucher_expiery_type=${voucher_expiery_type}&voucher_hotspot_location=${voucher_location_limit}

	`;

	//send voucher type data to sever
	
	$.get('/api/auto_voucher_types_add?' + auto_voucher_payload, function(response, status){

		if(status == 'success'){//if response recieved from server

			//if response is error message 
			if(response == 'db query connection error'){

				alert('Error, when attempting to query [ voucher tpes ] database.')
				return;

			}

			//if response is success message 
			if(response == 'success : new auto voucher type created'){

				alert('Success : new auto voucher type created.\nView created [ voucher types ] list menu to verify.')
				return;

			}

			//if respons is duplicate message
			if(response == 'Error, duplicate found'){

				alert('Error, voucher profile already created.\n\nTip\nDelete in [ View ] menu.');
				return

			}

			
		}


		else{//give error

			alert('Error when attempting to connect to [ voucher types ] server, Please try again later ');

		}




	});

}

//------------ view

function defined_auto_vouchers_retrieve(){

	
	$.get('/api/auto_voucher_types_view', function(response, status){

		if(status == 'success'){//if response recieved from server


			//if error
			if(response == 'db [auto voucher types ] query connection error'){

				alert(response);
				return;
			}

			//if no data available
			if(response == 'Error, no [ auto voucher type ] have been created yet'){

				//give error
				alert('Error, no [ auto voucher type ] have been created yet.\nUse creation menu to define some.');
				return;

			}

			//show stored data
			//console.log(response)



			response.forEach(function(data, index){

				if(data.voucher_creation_method != 'manual'){//filter auto voucher to show//show non manual created only


					var auto_voucher_div =  `
						<div class='w3-margin wifi_radius_auto_voucher_details_creation_div' style='background-color:white;box-shadow:3px 3px 2px gainsboro, -1px -1px 2px gainsboro;text-align: center'>

							

							<div id='' style=''>
								<span>Voucher type : <b> ${data.voucher_type} </b> <span>
							</div>

							<div id='' style=''>
								<span>Voucher profile : <b> ${data.voucher_profile} </b> </span>
							</div>

							<div id='' style=''>
							<span>Voucher profile cost : <b> ${data.voucher_cost} </b>  <span>

							</div>


							<div id='' style=''>
								<span>Wifi radius Voucher template name : <b> ${data.radius_server_voucher_profile} </b> <span>
							</div>

							<div id='' style=''>
								<span>Voucher expiery after first activation : <b> ${data.wifi_radius_auto_voucher_details.length > 5 ?JSON.parse(data.wifi_radius_auto_voucher_details).expiery:'N/A'} </b> <span>
							</div>

							<div id='' style=''>
								<span>Voucher usage type : <b> ${data.wifi_radius_auto_voucher_details.length > 5 ?JSON.parse(data.wifi_radius_auto_voucher_details).voucher_reset:'N/A'} </b> <span>
							</div>
							<div id='' style=''>
								<span>Voucher hotspot location limit : <b> ${ data.voucher_authorized_location } </b> <span>
							</div>

							

							<br />

							<div style='width:100%; height:auto; margin-bottom : 20px'>

								<button class='btn btn-danger' style='width:98%;margin:10px' onclick='auto_voucher_delete("delete","${data._id}", "${data.voucher_profile}", "${data.voucher_cost}")'>Delete</button>

								<button class='btn btn-success' style='width:98%;margin:10px;display:${data.voucher_active?'none':'block'}' onclick='auto_voucher_delete("enable","${data._id}", "${data.voucher_profile}", "${data.voucher_cost}")'>Enable</button>

								<button class='btn btn-warning' style='width:98%;margin:10px;display:${data.voucher_active?'block':'none'}' onclick='auto_voucher_delete("disable","${data._id}", "${data.voucher_profile}", "${data.voucher_cost}")'>Disable</button>

							</div>
						</div>
					`



					$('#transactions_and_voucher_viewer').append(auto_voucher_div);
				}
			})






			return;
		}

	//give error
	alert('Error, requesting created, [ Auto voucher types ] from server. Please try again later');

	});

}


//-------------auto voucher types delete/enable/disable

function auto_voucher_delete(action=null, delete_db_id, voucher_value, voucher_cost){//function repurposed to do more than just delete later on..

	//console.log(delete_db_id, voucher_value, voucher_cost);



	//give delete notice
	var delete_confirm = confirm('You are about to ' + action + ' : ' + voucher_value + ', that cost : ' + voucher_cost + '\nContinue?');

	if(!delete_confirm){//if cancell pressed

		//end function
		return;
	}


	//contact server
	$.get('/api/auto_voucher_types_delete?_id=' + delete_db_id + '&action=' + action, function(response, status){
		
		if(status == 'success'){

			//if error message recieved
			if(response == 'db [auto voucher types ] delete connection error'){

				//give alert
				alert('Error, when attempting to ' + action + ' [ auto voucher type ] on db.');
				return;
			}

			//if voucher to delete not found
			if(response == 'Error, specified [ auto voucher type ] to delete not found'){

				//give alert
				alert('Error, specified [ auto voucher type ] to ' + action  + '  not found on db.');
				return;

			}

			//if sucess message 
			if(response == 'Success, specified [ Voucher Type ] deleted'){

				//give notification
				alert('Success, specified [ Voucher Type ] ' + action + 'd.');

				//reload [ auto voucher type ] view
				document.getElementById('transactions_and_voucher_viewer').innerHTML= ''; //clean div of old data
				defined_auto_vouchers_retrieve();//reload [ auto voucher type ] view menu

				return;

			}


		}

		//give error
		alert('Error, when attempting to contact server and ' + action + ' [ auto voucher ]. Please try again later.');

	})



}



// ++++++++++++++++++++ voucher redeem +++++++++++++++++

 function voucher_redeem (voucher_document_id_and_amount, div_id){
	 
	 
	// alert(voucher_document_id, voucher_amount);
	  // var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:''};
		 
	 if(!seller_login.logged_in){ return alert("Log in as a seller to be able to use this menu");}//log in a seller/for acuracy reasons
	 
	 //retrive amount and voucher db id
	 var voucher_document_id = voucher_document_id_and_amount.split(',')[0];
	 var voucher_amount = voucher_document_id_and_amount.split(',')[1];
	 
	var url= http_https + current_domain + '/api/redeem_voucher?voucher_id='+voucher_document_id+'&user_id='+seller_login.seller_id;//redeem voucher link
	
	document.getElementById(div_id).disabled=true;//disable reedem button for now
	 		
	  $.get(url, function(response, status){
           
            
           
           if(status == 'success'){
              
      
               if(response == 'Server or Conection error'){
                   
                
                	dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later'); 
				   
				  document.getElementById(div_id).disabled=false;//re-enable  reedem button//wen error
				   return;
                   
               }              
			   
			   if(response == 'No data found'){
                   
                
                	dom_innerHtml('transactions_and_voucher_header', 'Error, No data found, Please try again later');
				    document.getElementById(div_id).disabled=false;//re-enable  reedem button//wen error
				   return;
                   
               }
			   if(response == 'Save error'){
                   
                
				   	dom_innerHtml('transactions_and_voucher_header', 'Error, Redeeming voucher, please try again later or contact administrator'); 
				    document.getElementById(div_id).disabled=false;//re-enable  reedem button//wen error
				   return;
                   
               }
			   
			   dom_innerHtml('transactions_and_voucher_header', 'Voucher succefully redeemed, check your transaction history'); 
                   
			   seller_login.credit = Number(seller_login.credit) + Number(voucher_amount);//update amounts
			   
			   dom_innerHtml('firth_page_seller_amount', seller_login.credit );//show updated amount 
			   extra_menu('to_reddem_voucher');//update extra menu contents
			   return;

		   }
		  
		dom_innerHtml('transactions_and_voucher_header', 'Error processing your request, Please try again later or contact administrator');//if errorredeeming voucher
	
	  });
	 
	 
	 
	 
}

// +++++++++++++++++++++++++++++ send message +++++++++++++++++++++++++++++

function messaging_send(messaging_document_id, action_type){
	
	//deta time
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var week_day = date.getDay();
	var month_day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
	
	var am_or_pm = hour<12?'am':'pm';
	var week_day_text = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	
	week_day_text = week_day_text[week_day];//week in text
	
	var month_text = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	month_text = month_text[month];//month in text
	
	
	if(action_type == 'input'){
	//	alert(messaging_document_id+', '+action_type+' ,input');
		
		//logged in user
		var logged_in_user_name;
		var logged_in_user_type;

		//get logged in user details
		var logged_in_user_array_var = '';
						   
		if(admin_login.admin_id){//is admin logged in
			logged_in_user_array_var = admin_login;
		}
						   
		if(distributor_login.distributor_id){ //is didtributor logged in
			logged_in_user_array_var = distributor_login;
		}
						   
		if(seller_login.seller_id){// is seller logged in
			logged_in_user_array_var = seller_login;
		}
		
		
		//get reply text
		var reply_input_text = document.getElementById(messaging_document_id+'_reply');
		
		
		//server api link + vars	
		var reply_message = {"from":logged_in_user_array_var.name+' : '+logged_in_user_array_var.usertype, "message":reply_input_text.value, "date":+hour+':'+minutes+am_or_pm+' '+week_day_text+' '+month_day+' '+month_text+' '+year };
		
		reply_message = JSON.stringify(reply_message);//turn to json string
		
		var url = http_https + current_domain + '/api/reply_or_delete?action_type=reply&document_id=' + messaging_document_id + '&pay_load=' + reply_message;//reply link
			
		var confirm_reply = confirm("Are you sure?");//give alert
		if(!confirm_reply){return;}//if cancelled pressed// end function

		
		
		document.getElementById(messaging_document_id+'_input').disabled=true;//disable reply button for now
	 		
		$.get(url, function(response, status){
           
           if(status == 'success'){
      
               if(response == 'Server or Conection error'){
                   
				  dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later'); 
				   
				  document.getElementById(messaging_document_id+'_input').disabled=false;//re-enable  reply button//wen error
				   return;
                   
               }              
			   
			   if(response == 'No data found'){
                   
                	dom_innerHtml('transactions_and_voucher_header', 'Error, Message not Found, Please try again later');
				    document.getElementById(messaging_document_id+'_input').disabled=false;//re-enable  reply button//wen error
				   return;
                   
               }
			   if(response == 'Save error'){
                   
				   	dom_innerHtml('transactions_and_voucher_header', 'Error, Message not Found, please try again later or contact administrator'); 
				    document.getElementById(messaging_document_id+'_input').disabled=false;//re-enable  reply button//wen error
				   return;
                   
               }
			   
			  			
			//on success add reply to message on screen//no reloading
			var content_div = "<div id='' class='w3-margin w3-border'><span style='text-decoration: underline;font-weight:bold;'>"+logged_in_user_array_var.name+" : "+logged_in_user_array_var.usertype+"</span> "+hour+":"+minutes+am_or_pm+" "+week_day_text+" "+month_day+" "+month_text+" "+year+"<br />"+reply_input_text.value+"</div><br>";
						  
			//message   
			$('#'+messaging_document_id+'message_container').append(content_div);
			   
			document.getElementById(messaging_document_id+'_reply').value='';//clear input box
			   
			document.getElementById(messaging_document_id+'_input').disabled=false;//re-enable  reply button//wen error
			   
			   console.log(response);
			return;

		   }
			
			
			dom_innerHtml('transactions_and_voucher_header', 'Error, Connecting, please try again later or contact administrator'); 
			document.getElementById(messaging_document_id+'_input').disabled=false;//re-enable  reedem button//wen error
			return;

	
	  });
	 
		return;
	
	}


	//	alert(messaging_document_id+', '+action_type+' ,not input');

	
	var confirm_delete = confirm("Are you sure you want to delete this message?");//give alert
	if(!confirm_delete){return;}//if cancelled pressed// end function

	
	var url = http_https + current_domain + '/api/reply_or_delete?action_type=delete&document_id=' + messaging_document_id + '&pay_load=' + action_type;// delete link

		document.getElementById(messaging_document_id+'_delete').disabled=true;//disable  delete button 	
	
		$.get(url, function(response, status){
           
           if(status == 'success'){
      
               if(response == 'Server or Conection error'){
                   
				  dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later'); 
				   
				 	document.getElementById(messaging_document_id+'_delete').disabled=false;//re-enable delete button //wen error
				   return;
                   
               }              
			   
			   if(response == 'No data found'){
                   
                	dom_innerHtml('transactions_and_voucher_header', 'Error, deleting Message not Found, Please try again later');
				   	document.getElementById(messaging_document_id+'_delete').disabled=false;//re-enable delete button //wen error
				   return;
                   
               }
			   if(response == 'Save error'){
                   
				   	dom_innerHtml('transactions_and_voucher_header', 'Error, deleting Message not Found, please try again later or contact administrator'); 
				   	document.getElementById(messaging_document_id+'_delete').disabled=false;//re-enable delete button //wen error
				   return;
                   
               }
			   	
				//on sucess remove message on screen//no reloading
				document.getElementById(messaging_document_id+'_container').style.display='none';
	
			return;

		   }
			
			
			dom_innerHtml('transactions_and_voucher_header', 'Error, Connecting, please try again later or contact administrator'); 
			document.getElementById(messaging_document_id+'_delete').disabled=false;//re-enable delete button //wen error
			return;

	
	  });
	 
	
	
	
	

}


//  +++++++++++++++++++++++++++++ create mssage ++++++++++++++++++++++++++++++

function message_creation(){//gives user ability to add contacts and send message
	
	//	var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:''};
	//	var distributor_login = {logged_in : false, distributor_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:''};
	//	var admin_login = {logged_in : false, admin_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:''};
	
		var my_users_contact = [{"name":"No contacts found.","type_of_user":"","id_no":""}];//default usr list {"name":"tsehla nkhi","type_of_user":"Seller","id_no":"89051"}
		
		if(seller_login.logged_in){//if seller is logged in
			my_users_contact = seller_login.customer_partners_contact_list;
		}
	
		if(distributor_login.logged_in){//if distributor is logged in
			my_users_contact = distributor_login.customer_partners_contact_list;
		}
	
		if(admin_login.logged_in){//if admin is logged in
			my_users_contact = admin_login.customer_partners_contact_list;
		}
		
		//help button
		var alert_button = `<br /><button style="width:100%; height:7vh; margin 10px 0px 10px 0px; padding:0px; display: block;font-size:18px" class="btn btn-warning" onclick="alert('List of vouchers that were not used by user : Possible Cause = Incorect code was entered from the buyer. This voucher money can be refunded by clicking [ Redeem Voucher Cash ] Button. ')">Help</button><div id='' style='position:fixed;width:80px;height:50px;right:40px;bottom:150px;font-size:50px;font-weight:bold;box-shadow:3px 3px green;'><i class='la la-envelope' style='text-shadow:2px 2px grey' onclick='message_creation()'></i></div>`;
	
	  //clear div current contents
		document.getElementById('transactions_and_voucher_viewer').innerHTML='';
		document.getElementById('transactions_and_voucher_header').innerHTML='Create New Messages';
		//alert();
		//contactable user list
		var user_contact_list = `<select id='user_select_list' style='width:95%;height:50px;font-size:18px' class='form-control' ></select><br /><br />`;
		$('#transactions_and_voucher_viewer').append(user_contact_list);
		//message input text
		var message_box = `<textarea id='message_text_box' style='width:95%;min-height:100px;height:50vh;font-size:18px' class='form-control' >Message</textarea><br /><br />`;
		$('#transactions_and_voucher_viewer').append(message_box);
		//message send
		var message_send_button = `<button id='new_message_send' style='width:45%;height:50px;margin:10px;font-size:18px' class='btn btn-primary' onclick="new_contact_or_message_send('new_message')">Send Message</button><button id='new_contact_add' style='width:45%;height:50px;margin:10px;font-size:18px' class='btn btn-primary' onclick="new_contact_or_message_send('new_contact')">Add New Contact</button>`;
		$('#transactions_and_voucher_viewer').append(message_send_button);
	
		//fill user select list with contacts
		my_users_contact.forEach(function(data, index){
			
			var data = JSON.parse(data);
			
			if(data.name != "No contacts found." && index == 0){
				
			   	$('#user_select_list').append("<option value='all'>Send to All</option>");
				
			   }
			$('#user_select_list').append("<option value="+data.id_no+";"+data.type_of_user.trim().replace(/\s/g,'#')+";"+data.name.trim().replace(/\s/g,'#')+">"+data.name+" : "+data.type_of_user+"</option>");
			
		});
	
		
		//clean then add alert button
		dom_innerHtml('transactions_and_voucher_viewer_alert_button', '');
		dom_innerHtml('transactions_and_voucher_viewer_alert_button', alert_button);
	
}


//  +++++++++++++++++++++++++++++ add new contact/send new message ++++++++++++++++++++++++++++++

function new_contact_or_message_send(calling_button){
	
	
		//logged in user
		var logged_in_user_name;
		var logged_in_user_type;
		var logged_in_user_id;
		var logged_in_user_contacts_list;
		

		//get logged in user details						   
		if(admin_login.admin_id){//is admin logged in
			logged_in_user_name = admin_login.name;
			logged_in_user_type = admin_login.usertype;
			logged_in_user_id = admin_login.admin_id;
			logged_in_user_contacts_list = admin_login.customer_partners_contact_list;
		}
						   
		if(distributor_login.distributor_id){ //is didtributor logged in
			logged_in_user_name = distributor_login.name;
			logged_in_user_type = distributor_login.usertype;
			logged_in_user_id = distributor_login.distributor_id;
			logged_in_user_contacts_list = distributor_login.customer_partners_contact_list;
		}
						   
		if(seller_login.seller_id){// is seller logged in
			logged_in_user_name = seller_login.name;
			logged_in_user_type = seller_login.usertype;
			logged_in_user_id = seller_login.seller_id;
			logged_in_user_contacts_list = seller_login.customer_partners_contact_list;
			
		}

	
	// new message add -----------------
	if(calling_button == 'new_message'){
	   //	alert('new_message');
		//alert('contact : '+get_contact.value+', message : '+get_message.value);
		
		
		//deta time
		var date = new Date();
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var week_day = date.getDay();
		var month_day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();

		var am_or_pm = hour<12?'am':'pm';
		var week_day_text = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		week_day_text = week_day_text[week_day];//week in text

		var month_text = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		month_text = month_text[month];//month in text

		
		//get contact and get message
		var get_contact = document.getElementById('user_select_list');
		var get_message = document.getElementById('message_text_box');
		
		//get single participant data
		var single_participant_detais = get_contact.value.split(';');
	//	console.log(get_contact)
		//console.log(single_participant_detais)
		
		//participant details
		var participant_details = {"id_no": single_participant_detais[0],"type_of_user":single_participant_detais[1].replace(/#/g,' '),name:single_participant_detais[2].replace(/#/g,' ')};
		participant_details= JSON.stringify(participant_details);//prepare it for sending over wire
		
		//if all selected as participant
		//console.log(logged_in_user_contacts_list);
		if(single_participant_detais[0] == 'all'){
		   	participant_details = logged_in_user_contacts_list
		   }
		

		
		//server api link + vars	
		var new_message = {"from":logged_in_user_name+' : '+logged_in_user_type, "message":get_message.value, "date":+hour+':'+minutes+am_or_pm+' '+week_day_text+' '+month_day+' '+month_text+' '+year };
		
		 new_message = JSON.stringify(new_message);//turn to json string
		
		var url = http_https + current_domain + '/api/new_message_or_add_contact_or_delete_contact?action_type=new_message&message_initiator_id=' + logged_in_user_id + '&mesage_initiator_usertype='+logged_in_user_type+'&message_initiator_name='+logged_in_user_name+'&message_participant_details='+participant_details+'&message=' + new_message;//reply link
			
		var confirm_reply = confirm("Are you sure?");//give alert
		if(!confirm_reply){return;}//if cancelled pressed// end function

		
		
		document.getElementById('new_message_send').disabled=true;//disable sendmessage button for now
	 		
		$.get(url, function(response, status){

			   if(status == 'success'){

				   if(response == 'Server or Conection error'){

					  dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later'); 

					  document.getElementById('new_message_send').disabled=false;//re-enable  send message button//wen error
					   return;

				   }              


				//on success add reply to message on screen

				   get_message.value = 'MESSAGE SENT! ...';//clear input box

				  document.getElementById('new_message_send').disabled=false;//re-enable  send message button

				return;

			   }


				dom_innerHtml('transactions_and_voucher_header', 'Error, Connecting, please try again later or contact administrator'); 
				document.getElementById('new_message_send').disabled=false;//re-enable  send message button//wen error
				return;


		  });

	   
	   }
	
	
	// new contact add --------------
	
	 if(calling_button == 'new_contact'){
	   //	alert('new_contact');
		 
		 
		 
		 
		 //help button
		var alert_button = `<br /><button style="width:100%; height:7vh; margin 10px 0px 10px 0px; padding:0px; display: block" class="btn btn-warning" onclick="alert('List of vouchers that were not used by user : Possible Cause = Incorect code was entered from the buyer. This voucher money can be refunded by clicking [ Redeem Voucher Cash ] Button. ')">Help</button><div id='' style='position:fixed;width:80px;height:50px;right:40px;bottom:150px;font-size:50px;font-weight:bold;box-shadow:3px 3px green;'><i class='la la-envelope' style='text-shadow:2px 2px grey' onclick='message_creation()'></i></div>`;
	
	  	//clear div current contents
		document.getElementById('transactions_and_voucher_viewer').innerHTML='';
		document.getElementById('transactions_and_voucher_header').innerHTML='Create New Contact';
		 
		//add user details
		var new_contact_user_name_input = `<input type='text' id='new_contact_user_name_input_box' style='width:98%;height:50px; margin:10px;font-size:18px' class='form-control' placeholder='add New contact Name'>` ;
		$('#transactions_and_voucher_viewer').append(new_contact_user_name_input);
		 
		var new_contact_user_surname_input = `<input type='text' id='new_contact_user_surname_input_box' style='width:98%;height:50px;  margin:10px;font-size:18px' class='form-control ' placeholder='add New contact Surname'>` ;
		$('#transactions_and_voucher_viewer').append(new_contact_user_surname_input);
		 
		var new_contact_user_id_no_input = `<input type='Number' id='new_contact_user_id_no_input_box' style='width:98%;height:50px;  margin:10px;font-size:18px' class='form-control' placeholder='add New contact ID number'>` ;
		$('#transactions_and_voucher_viewer').append(new_contact_user_id_no_input);
		 
		var new_contact_user_type_select = `<select id='new_contact_user_type_select_box' style='width:98%;height:50px;  margin:10px;font-size:18px' class='form-control'>
			<option value='Choose'>Choose type of User</option>
			<option value='Seller'>Seller</option>
			<option value='Distributor'>Distributor</option>
			<option value='Buyer'>Buyer</option>
			<option value='Server Admin'>Server Admin</option>
		</select>` ;
		$('#transactions_and_voucher_viewer').append(new_contact_user_type_select);

		//message send
		var message_add_or_contact_save_button = `<button id='add_message_button' style='width:45%;height:50px;margin:20px 10px 10px 10px;font-size:18px' class='btn btn-primary' onclick="message_creation()">Add Message</button><button id='save_new_contact' style='width:45%;height:50px;margin:20px 10px 10px 10px;font-size:18px' class='btn btn-primary' onclick="new_contact_save()">Save New Contact</button>`;
		$('#transactions_and_voucher_viewer').append(message_add_or_contact_save_button);
	

	
		
		//clean then add alert button
		dom_innerHtml('transactions_and_voucher_viewer_alert_button', '');
		dom_innerHtml('transactions_and_voucher_viewer_alert_button', alert_button);
		 
		 
	   }
	
}


//save contact +++++++++++++++++

function new_contact_save(){
	
	var new_contact_name = document.getElementById('new_contact_user_name_input_box');//get contact name
	var new_contact_surname = document.getElementById('new_contact_user_surname_input_box');//get surname
	var new_contact_id_no = document.getElementById('new_contact_user_id_no_input_box');//get id number
	var new_contact_usertype = document.getElementById('new_contact_user_type_select_box');//get usertype

	
	//input validation
	if(new_contact_name.value.trim() == ''){//check if name not mepty
	   		document.getElementById('new_contact_user_name_input_box').style.borderColor='red';
			dom_innerHtml('transactions_and_voucher_header', 'Please check : Name '); 
			return;
	   }
		if(new_contact_surname.value.trim() == ''){//check if surname not empty
	   		document.getElementById('new_contact_user_surname_input_box').style.borderColor='red';
			dom_innerHtml('transactions_and_voucher_header', 'Please check : Surname'); 
			return;
	   }
		if(new_contact_id_no.value.length < 10 || new_contact_id_no.value.length > 13){//check if id not empty and value not less than ten or creater than 13
	   		document.getElementById('new_contact_user_id_no_input_box').style.borderColor='red';
			dom_innerHtml('transactions_and_voucher_header', 'Please check : ID number '); 
			return;
	   }
		if(new_contact_usertype.value == 'Choose'){//check if usertype is selected
	   		document.getElementById('new_contact_user_type_select_box').style.borderColor='red';
			dom_innerHtml('transactions_and_voucher_header', 'Please select : Type of User'); 
			return;
	   }
	

	
	
		//check if user dont have contact saved already-------------------
	
		//logged in user
		var logged_in_user_name;
		var logged_in_user_type;
		var logged_in_user_id;
		var logged_in_user_contacts_list;

		//get logged in user details						   
		if(admin_login.admin_id){//is admin logged in
			logged_in_user_name = admin_login.name;
			logged_in_user_type = admin_login.usertype;
			logged_in_user_id = admin_login.admin_id;
			logged_in_user_contacts_list = admin_login.customer_partners_contact_list;
		}
						   
		if(distributor_login.distributor_id){ //is didtributor logged in
			logged_in_user_name = distributor_login.name;
			logged_in_user_type = distributor_login.usertype;
			logged_in_user_id = distributor_login.distributor_id;
			logged_in_user_contacts_list = distributor_login.customer_partners_contact_list;
		}
						   
		if(seller_login.seller_id){// is seller logged in
			logged_in_user_name = seller_login.name;
			logged_in_user_type = seller_login.usertype;
			logged_in_user_id = seller_login.seller_id;
			logged_in_user_contacts_list = seller_login.customer_partners_contact_list;
			
		}
	
	
		var is_contact_already_stored = false;//check if stored contact found
	
		
		logged_in_user_contacts_list.forEach(function(data){
			
			var data = JSON.parse(data);
			
			//console.log(data);
			
			if(Number(new_contact_id_no.value) == Number(data.id_no) && new_contact_usertype.value == data.type_of_user){//if contact found
			   
			   is_contact_already_stored = true;//contact found
			   
			   }
			
			
		});
		

		if(is_contact_already_stored){//if contact alread stored//stop function
			
			//switch lights on
			document.getElementById('new_contact_user_type_select_box').style.borderColor='blue';
			document.getElementById('new_contact_user_id_no_input_box').style.borderColor='blue';
			document.getElementById('new_contact_user_surname_input_box').style.borderColor='blue';	
			document.getElementById('new_contact_user_name_input_box').style.borderColor='blue';

			dom_innerHtml('transactions_and_voucher_header', 'Contact already stored...');//give response

			return;
		   }


			var new_user_contact_ = {name: new_contact_name.value.toLowerCase().trim()+" "+new_contact_surname.value.toLowerCase().trim(), type_of_user:  new_contact_usertype.value, id_no: new_contact_id_no.value.toString().trim()};//create contact detail format
			new_user_contact_ = JSON.stringify(new_user_contact_);//prepare it for sending 


			//console.log(logged_in_user_contacts_list);

	
				var url = http_https + current_domain + '/api/new_message_or_add_contact_or_delete_contact?action_type=new_contact&current_user_id='+logged_in_user_id+'&current_usertype='+logged_in_user_type+'&new_contact_user_id='+new_contact_id_no.value.toString().trim()+'&new_contact_usertype='+new_contact_usertype.value+'&pay_load='+new_user_contact_; 

	
				document.getElementById('save_new_contact').disabled=true;//disable  save button
	
	 	 
		 		$.get(url, function(response, status){

			   if(status == 'success'){

				   if(response == 'Server or Conection error'){

					  dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later'); 

					  document.getElementById('save_new_contact').disabled=false;//re-enable save button//wen error
					   return;

				   }              

				   if(response == 'No data found'){

						dom_innerHtml('transactions_and_voucher_header', 'Error, Adding Contact, Please try again later');
						document.getElementById('save_new_contact').disabled=false;//re-enable save button//wen error
					   return;

				   }
				   if(response == 'Save error'){

						dom_innerHtml('transactions_and_voucher_header', 'Error, Adding Contact, please try again later or contact administrator'); 
						document.getElementById('save_new_contact').disabled=false;//re-enable save button//wen error
					   return;

				   }


				//on success add reply to message on screen
				   
				   //update loaded user contact list
				   logged_in_user_contacts_list.push(new_user_contact_);
				   
				   //show green lights
				   	document.getElementById('new_contact_user_type_select_box').style.borderColor='green';
					document.getElementById('new_contact_user_id_no_input_box').style.borderColor='green';
					document.getElementById('new_contact_user_surname_input_box').style.borderColor='green';	
					document.getElementById('new_contact_user_name_input_box').style.borderColor='green';
				   
				  	//give response
				   	dom_innerHtml('transactions_and_voucher_header', 'Contact Saved...');
				   
				  	document.getElementById('save_new_contact').disabled=false;//re-enable save button//wen error

					return;

			   }


				dom_innerHtml('transactions_and_voucher_header', 'Error, Connecting, please try again later or contact administrator'); 
				document.getElementById('save_new_contact').disabled=false;//re-enable save button//wen error
				return;


		  });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}





/*=====================================================================================================================================================

distributor/Super admin help
    
=====================================================================================================================================================*/

function distributor_superadmin_acc_help(type_of_user){
	
	
	if(type_of_user == 'distributor'){
		
		var confirm_help_type = confirm('Would you prefer Picture/video?');
		
		if(confirm_help_type){
			window.open(http_https+current_domain+'/default_slide_images/3.jpg');
			return;
		}
			
		
		alert(`1) Enter ID number of the seller you want to recharge\n2) Enter name and surname of seller you want to Recharge\n\t\t\tExample : John Doe\n\n3) Enter Amount in Rands to Recharge the seller with\n\t\t\tExample : \n\t\t\t\tfor R5.00 Enter 5\n\t\t\t\tfor R10.00 Enter 10\n\t\t\t\tfor R100.00 Enter 100\n\nNB\nAllways make sure the details are for the person you want to recharge`);
		return;
		
	}
	
	
	
		
	if(type_of_user == 'superadmin'){
		
		
		var confirm_help_type = confirm('Would you prefer Picture/video?');
		
		if(confirm_help_type){
			window.open(http_https+current_domain+'/default_slide_images/4.jpg');
			
			return;
		}
			alert(`1) Enter ID number of the seller you want to recharge\n2) Enter name and surname of seller you want to Recharge\n\t\t\tExample : John Doe\n\n3) Enter Amount in Rands to Recharge the seller with\n\t\t\tExample : \n\t\t\t\tfor R5.00 Enter 5\n\t\t\t\tfor R10.00 Enter 10\n\t\t\t\tfor R100.00 Enter 100\n\nNB\nAllways make sure the details are for the person you want to recharge`)
		return;
		
	}
	
	if(type_of_user == 'seller'){
		
		
		var confirm_help_type = confirm('Would you prefer Picture/video?');
		
		if(confirm_help_type){
			window.open(http_https+current_domain+'/default_slide_images/2.jpg');
			
			return;
		}
		
		alert(`1) Enter amount of data to sell.\n\t\tExample :\n\t\t\tFor R5.00 Enter 5\n\t\t\tFor R10.00, Enter 10\n\t\t\tFor R100.00, Enter 100\n\n2) Get the Temporary code from the buyer\n3) Enter the temporary code to the second input box\n5) Press sell ticket button\n4) Wait few second and ask buyer to press get ticket button in their cellphone\n\nNB\nMake sure buyer does not close the app or change the code until transaction is complete\n\nTip :\na) Complementary vouchers are meant to be offered to users once per hour/day/week/etc and will reject login until their usage is reset per person if the already used it\nb) [ Hote/Resturant/etc ] menu, printed vouchers will not show [ voucher amount] but resturant/hotel/etc [name] or any [message]`);
		return;
		
	}
	if(type_of_user == 'buyer'){
		
		var confirm_help_type = confirm('Would you prefer Picture/video?');
		
		if(confirm_help_type){
			window.open(http_https+current_domain+'/default_slide_images/1.jpg');
			
			return;
		}
		alert(`1) Give code to seller\n2) When ticket ready click 'Get ticket' button\n3) Connect to StreetWifiy\n4) Goto : streetwifiy.co.za\n5) Enter voucher code as shown on ticket\n6) Please pay attention to expeiry days and use your data before then\n\nNB\nDo not leave page/app or change code until you have downloaded your voucher card\n\n***\nENJOY\n***`);
		return;
		
	}
	
	
}







/*=====================================================================================================================================================

   automated hotpot login
    
=====================================================================================================================================================*/
//THIS WORKS ONLY FOR HTTP-PAP NOT (HTTP-CHAP)/havent figured a way to detect http pap//using ajax() is way but getting origin permission issue//anyway http-chap not working for main hotspot papge anyway

//trick for next time, make ajax to router, get response link extract variable to see if it http-pap or chap then use corrcet way to login//using this nw im gettng allow origin issue

var voucher_free_print_initiator_variable = ""; //stores data to be used to print free voucher

function auto_login(response){
	//hot_spot_url

	clearInterval(animate_interval);//clear animate
	

	var vocher_code = response.vouchercode;

	if(vocher_code == 'N/A'){
		
		vocher_code = response.voucher_username;
	}

	var voucher_username = response.voucher_username;
	var voucher_password = response.voucher_password;

	//if mikrotik hotspot inititated trial user [ trial ] login, 
	if(url_parms_object().router_free_type == 'true'){//if match

		//remove password
		voucher_password = '';//password not required for mikrotik hotspot [ trial ] users login

		//clean username for voucher ticket to be printed to show code as free and not device mac address
		response.voucher_username = 'FREE';

		//set data limit
		response.voucherprofile = auto_user_creater_wifi_radius_link.mikrotik_trial_user_data_limit;
		
		//set voucher expiery
		response.voucherexpiry = auto_user_creater_wifi_radius_link.mikrotik_trial_user_data_expiery
	}

	if(!hot_spot_url){

		//voucher_print(response)//call voucher image/ticket production function

		//give alert
		custom_alert("", alert_text='Please find downloaded voucher code<br />Use it when connected to any of our wifi hotspot.', "voucher_free_print_initiator()", undefined);
		
		voucher_free_print_initiator_variable = response;//save ticket print data


		return; //if url for router not available
	
	}
	

	// +++++++ free voucher or complemenary auto voucher login  ++++++

	//if(free_voucher_login){//if free login auto log in
	

	if(voucher_username != 'N/A' &&  voucher_password != 'N/A'){//check if username and password is given//this is mostly was expected to be used for free voucher, password is meant to remain hidden so user is auto logged in without confirmation need

		//http://streetwifiy.co.za/login?username=free&password=vouchr&dst=&popup=true
			
		let url = hot_spot_url + '?username=' + voucher_username + '&password=' + voucher_password;

		//window.open(hot_spot_url + '?username=' + voucher_username + '&password=' + voucher_password,'_self');
		//window.open(url, '_blank');

		//give notification to login//to bypass popup block// show single button alert box
		//custom_alert(open_type='_blank', alert_text='Free login voucher ready<br/>Click okay to automatically login and use the Wifi Internet Voucher.', url, undefined) //url verion
		
		custom_alert("", alert_text='Free login voucher ready<br/>Click okay to automatically login and use the Wifi Internet Voucher.', "window.open('"+url+"', '_blank');voucher_free_print_initiator()", undefined)
		//console.log( "window.open('"+url+"', '_blank');voucher_free_print_initiator()")

		border_breath_animation(["#ffffff", "#bcd8bf", "#8db792", "#619a68", "#37773f", "#114217", "#031505"], "custome_alert_okay_button");//button animation

		//voucher_print(response)//call voucher image/ticket production function
		
			//voucher_print(response)
			voucher_free_print_initiator_variable = response;//save ticket print data
		
		//incasse window.open is closed/blocked by popup//do get request also /to trigger router login
		//$.get(url, function(response, status){ });//cross origin error wil be recieved


			
		return;
	}

	// 	window.open(hot_spot_url + '?password=' + vocher_code +'&username=' + vocher_code,'_self');

	// 	return;
	// }

	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	
	/*
	 
		var auto_login_confirm = confirm('Do you want to use this voucher to automatically log in?');
		
		if(!auto_login_confirm ){

			voucher_print(response)//call voucher image/ticket production function
			return
		}//user refuse auto login
	
	*/

	//give notification to login//to bypass popup block// show single button alert box
		
	//custom_alert("", alert_text='Login voucher ready<br/>Click okay to automatically login and use the Wifi Internet Voucher.', "window.open('"+hot_spot_url + '?password=' + vocher_code +'&username=' + vocher_code+"', '_blank');voucher_free_print_initiator()", 'voucher_free_print_initiator()')

	custom_alert("", alert_text='Login voucher ready<br/>Click okay to automatically login and use the Wifi Internet Voucher.', "window.open('"+hot_spot_url + '?password=' + vocher_code +'&username=' + vocher_code+"', '_self')", 'voucher_free_print_initiator()') ;//accepting auto login wont download voucher anymore compare to above link//now user can refer to their voucher history in the [vouchers menu] for re-use//cancel will download voucher
	
	//window.open(hot_spot_url + '?password=' + vocher_code +'&username=' + vocher_code,'_blank');


	//voucher_print(response)//call voucher image/ticket production function

	voucher_free_print_initiator_variable = response;//save ticket print data

	//incasse window.open is closed/blocked by popup//do get request also /to trigger router login
	//$.get(hot_spot_url + '?password=' + vocher_code +'&username=' + vocher_code, function(response, status){ })//cross origin error wil be recieved
	
	
}


	function voucher_free_print_initiator(){ // call voucher printing after login popup is clicked//solution is meant to solve issue on ios where image print opens on ticket window and this disanables automatic login funtions //fixing that by making auto login to open new wimdow or tab to call mikrotik login link api cause issue of blocked popup, since the new window was requested by a function not user intervention//so custom alert was created to handle the issue, and that led to this setup


		voucher_print(voucher_free_print_initiator_variable)
	
	}


/*=====================================================================================================================================================	
   buy voucher Simple/Manual view	
    	
=====================================================================================================================================================*/	

/* div view manage */	
function simple_or_manual_view(div){ 
	
	//hadle help
	// if(div == "help_button"){

	// 	custom_alert('','Shows vouchers you baught on this device connected on this WIFI hotspot</br>1) You can use the vouchers to reconnect to the wifi if they are still valid/not depleted.<br/>2) You can re-download voucher ticket.');

	// 	return;
	// }

	var get_div = document.getElementById(div);	

	if(div == 'vouchersViewButton'){

		//write text on div
		document.getElementById("vouchers_history_view").innerHTML =` <div style="width: 100%;height: 100%;padding-top:25%;text-align: center;"> Searching for Vouchers you baught previously on <br/>this hotspot, using this phone/computer<br/><br/>PLESE WAIT..<br/><br/><i class="la la-gear la-spin" style="font-size: 35px;"></i></div>`;

		get_div.style.boxShadow = 'none';//remove shadow/activate	
		//get_div.disabled = true;//disable clicked button	
		

		document.getElementById('manualViewButton').style.boxShadow = '-1px 1px 2px gainsboro, -2px 1px 2px gainsboro';//apply shadow to button 	
		document.getElementById('manualViewButton').style.backgroundColor = '#F8F8F8';

		document.getElementById('simpleViewButton').style.boxShadow = '-2px 1px 2px gainsboro, 2px 1px 2px gainsboro';//apply shadow to button	
		document.getElementById('simpleViewButton').style.backgroundColor = '#F8F8F8';
		
		
		document.getElementById('vouchersViewButton').style.backgroundColor = '#FfFfFf';

		document.getElementById('buyer_container').style.height = '80vh';//for the looks/apperance
		document.getElementById('page_location_footer_').style.marginTop = '3%';//for the looks/apperance 

		document.getElementById('manualViewButton').disabled = false;//enable non clicked button	
		document.getElementById('simpleViewButton').disabled = false;//enable non clicked button

		dom_hide_show('hide', 'manual_screen_content')//hide	
		dom_hide_show('hide', 'qr_container')//hide
		dom_hide_show('show', 'vouchers_history')//show	

		clearInterval(animate_interval);//clear animate


		//get vouchers
		var url_params_array = url_parms_object();//get/return url parameters as objects


		
		//+++++++++++ default url for voucher finding +++++++++++++
		var url= '/api/buy?code=baught_vouchers&mac=' + url_params_array['mac'];//this wont find vouchers only for the current connected hotspot, to do that we will need to add hotspot name/location as a filter wtogether with mac address when searching the database.


		if(!url_params_array['mac'] && url_params_array['mac'].length < 5){//if mac address is not available or text is less than 5 letters or symbols

			document.getElementById("vouchers_history_view").innerHTML	= `<div style="width: 100%;height: 100%;padding-top:25%;text-align: center;color:red"> Error : Searching for Vouchers<br/>you baught previously on this hotspot, <br/>using this phone/computer<br/><br/>Please connect to one of your local <br/>streetWifiy hotspot to use this feature.<br/><br/> Or try to close and open this browser window.</div>
			</div>`;

			return; //end function
		}



		$.get(url, function(response, status){
           
			if(status == 'success'){
				
				
				if(response == 'Voucher Not found' || response == "Problem finding Voucher"){
				
					//give error
					dom_innerHtml('vouchers_history_view', `<div style="width: 100%;height: 100%;padding-top:25%;text-align: center;color:red"> Error : Searching for Vouchers<br/>you baught previously on this hotspot, <br/>using this phone/computer<br/><br/>You haven't yet baught a voucher<br/>while connected on this hotspot.</div>
			  		</div>`); 
				
					return;
				}

				//console.log(response);

				//clear div
				dom_innerHtml('vouchers_history_view', "");
				//add data to div
				response.forEach(function(data){

					//clculate date 
					var date = new Date()
					
					var code= (data.soldto? data.soldto : "000000:0000000")//get year/month/day from unique code
					code = code.split(":"); //turn to array

					var year= code[0][0].toString() + code[0][1];//get year
					var month = code[0][2].toString();//get month / get months first digit if double dgit month[ oct/nov/december ]


					var voucher_produced_day = (data.voucherproducedday?data.voucherproducedday:"00");//get day
					
					//check if month should be double digit//OCT/NOV/DEC
					if(code[0].length == 6  && voucher_produced_day.length == 2){//if day is double digit/en combined /year/month/day is six digits then month should also be double digit
						 month = month+code[0][3];//get other digit for month
					}
					if(code[0].length == 5  && voucher_produced_day.length == 1){ //if day single digit;//en total date string is 5 digit long; then day should be double digit
						month = month+code[0][3]//get another month digit
					}

					
					var month_text = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
					var current_year = date.getFullYear().toString();//looking for century/lol the year will loose accuracy when century changes for vouchers of old century
					current_year = current_year[0] + current_year[1]; //getting century fro current year date

					var voucher_produced_date = voucher_produced_day+"/"+month_text[month]+"/"+current_year+year;//date

		
					
					$("#vouchers_history_view").append(`

						<div style='width:100%;max-width:300px;min-height: 40px;height:auto;margin : 10px auto;border-bottom:4px solid blue;background-color:#ffd700'>
							<br>
							Voucher code	: <br/><b>${data.vouchercode}</b>
							<br/>
							Voucher cost	: R${data.voucheramount}
							<br />
							Voucher data/time	 : ${data.voucherprofile == "N/A"? data.voucherprofile_time:data.voucherprofile}
							<br>
							 voucher produced date : <br/>${voucher_produced_date} 

							 <div style="width:100%;height:7%; text-align:center">
							 	<button class="btn btn-primary" style="height: 100%;width:70%; margin-bottom:20px" onclick='auto_login(${JSON.stringify(data)})'>Use Voucher</button>
						   </div>
						</div>

						

					`)
				})


			}
			
			else{ //give error
			 
			  dom_innerHtml('vouchers_history_view', `<div style="width: 100%;height: 100%;padding-top:25%;text-align: center;color:red"> Error : Searching for Vouchers<br/>you baught previously on this hotspot, <br/>using this phone/computer<br/><br/>Please connect to one of your local <br/>streetWifiy hotspot to use this feature.<br/><br/> Or try to close and open this browser window.</div>
			  </div>`); 
				
			}
			
				
		});










	}

	if(div == 'simpleViewButton'){	
		get_div.style.boxShadow = 'none';//remove shadow/activate	
		//get_div.disabled = true;//disable clicked button	

		document.getElementById('manualViewButton').style.boxShadow = '-1px 1px 2px gainsboro, -2px 1px 2px gainsboro';//apply shadow to button 	
		document.getElementById('manualViewButton').style.backgroundColor = '#F8F8F8';	

		document.getElementById('vouchersViewButton').style.boxShadow = '2px 1px 2px gainsboro, 2px 1px 2px gainsboro';//apply shadow to button	
		document.getElementById('vouchersViewButton').style.backgroundColor = '#F8F8F8';

		document.getElementById('simpleViewButton').style.backgroundColor = '#FfFfFf';	

		document.getElementById('manualViewButton').disabled = false;//enable non clicked button	
		document.getElementById('vouchersViewButton').disabled = false;//enable non clicked button

		document.getElementById('buyer_container').style.height = '63vh';//for the looks/apperance 
		document.getElementById('page_location_footer_').style.marginTop = '11%';//for the looks/apperance 

		dom_hide_show('hide', 'manual_screen_content')//hide
		dom_hide_show('hide', 'vouchers_history')//hide	
		dom_hide_show('show', 'qr_container')//show	

		clearInterval(animate_interval);//clear animate
		border_breath_animation(["#f3f5f7", "#d8e2ec", "#e3e7ea"], "qrcode_text", "background");//button animation

	}	

	if(div == 'manualViewButton'){	

		clearInterval(animate_interval)

		get_div.style.boxShadow = 'none';//remove shadow/activate 	
		//get_div.disabled = true;//disable clicked button	

		document.getElementById('simpleViewButton').style.boxShadow = '2px 1px 2px gainsboro, 2px 1px 2px gainsboro';//apply shadow to button	
		document.getElementById('simpleViewButton').style.backgroundColor = '#F8F8F8';	

		document.getElementById('vouchersViewButton').style.boxShadow = '2px 1px 2px gainsboro, 2px 1px 2px gainsboro';//apply shadow to button	
		document.getElementById('vouchersViewButton').style.backgroundColor = '#F8F8F8';

		document.getElementById('manualViewButton').style.backgroundColor = '#FfFfFf';	

		document.getElementById('vouchersViewButton').disabled = false;//enable non clicked button
		document.getElementById('simpleViewButton').disabled = false;//enable non clicked button	

		document.getElementById('buyer_container').style.height = '80vh';//for the looks/apperance
		document.getElementById('page_location_footer_').style.marginTop = '3%';//for the looks/apperance 

		
		dom_hide_show('hide', 'vouchers_history')//hide	
		dom_hide_show('hide', 'qr_container')//hide	
		dom_hide_show('show', 'manual_screen_content')//show


	}	

}	

/* qr code */	

function qr_code_fn(uniqueCode){	

	var qr_backgroud_array = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg'];	
	var qr_logo_array = ["logo1.jpg","logo2.jpg","logo3.jpg","logo4.jpg"]	

			// var	qr_text = uniqueCode; // Content	
			// var	qr_title = 'Unique Code'; // Title	
			//var	qr_subTitle = uniqueCode; // Subtitle content
			var	qr_text = " "; // Content	
			var	qr_title = " "; // Title	
			var	qr_subTitle = " "; // Subtitle content	
			var	qr_logo = '/images/qr_code_images/logos/' + qr_logo_array[Math.floor(Math.random() * qr_logo_array.length)]; // LOGO	
			var	qr_backgroundImage = '/images/qr_code_images/backgrounds/' + qr_backgroud_array[Math.floor(Math.random() * qr_backgroud_array.length)];//background img;	

			var qr_design_array = [	

				/*{	
						
					config: {	
						text : qr_text,	
						// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	
						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	
						width: 240,	
						height: 240,	
						quietZone: 0,	
						colorDark: "#000000",	
						colorLight: "#ffffff",	
						//PI: '#f55066',	
						correctLevel: QRCode.CorrectLevel.H // L, M, Q, H	
					}	
				},*/	
				/*{	
						
					config: {	
						text : qr_text,	
						// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	
						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	
						width: 240,	
						height: 240,	
						colorDark: "#473C8B",	
						colorLight: "#FFFACD",	
						//PI: '#f55066',	
						correctLevel: QRCode.CorrectLevel.H // L, M, Q, H	
					}	
				},*/	
				/*{	
						
					config: {	
						text : qr_text,	
						// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	
						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	
					
						width: 240,	
						height: 240,	
						colorDark: "#000000",	
						colorLight: "#ffffff",	
					
						correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H	
					
							
						dotScale: 0.4	
					}	
					
				}, */	
				{	

					config: {	
						text : qr_text,	

						// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	


						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	

						width: 240,	
						height: 240,	
						colorDark: "#000000",	
						colorLight: "#ffffff",	

						PI: '#BF3030',	
						PO: '#269926', 	

						AI: '#009ACD',	
						AO: '#B03060',	


						correctLevel: QRCode.CorrectLevel.H // L, M, Q, H	

					}	

				},	
				/*{	
						
					config: {	
						text : qr_text,	
						// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	
						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	
					
						width: 240,	
						height: 240,	
						colorDark: "#000000",	
						colorLight: "#ffffff",	
					
						PI: '#f55066',	
						PI_TL: '#b7d28d', // Position Inner - Top Left 	
						PO_TL: '#aa5b71', // Position Outer - Top Right	
							
					
						correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H	
					
							
						dotScale: 0.5	
					}	
					
				},*/	
				/*{	
						
					config: {	
						text : qr_text,	
						width: 240,	
						height: 240,	
						// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	
						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	
						colorDark: "#000000",	
						colorLight: "#ffffff",	
						AO: '#A67C00', // Position Outer - Top Right	
						AI: '#A67C00',  // Position Outer - Bottom Right	
						// === Timing Pattern Color	
						timing: '#e1622f',	
						timing_V: '#00C12B',	
						correctLevel: QRCode.CorrectLevel.H, //  L, M, Q, H	
							
						dotScale: 0.4	
					}	
				},*/	


				{	

					config: {	
						text : qr_text,	

						// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	


						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	

						width: 240,	
						height: 240,	
						colorDark: "#000000",	

						correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H	

						backgroundImage: qr_backgroundImage,	
						backgroundImageAlpha: 1,	
						autoColor: false,	


						dotScale: 1	

					}	

				},	

				{	

					config: {	
						text : qr_text,	

						width: 240,	
						height: 240,	
						colorDark: "#000000",	

						// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	


						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	

						PI: '#f55066',	

						correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H	

						backgroundImage: qr_backgroundImage,	
						autoColor: true,	


						dotScale: 0.5	
					}	

				},	

				{	

					config: {	
						text : qr_text,	

						width: 240,	
						height: 240,	
						colorDark: "#000000",	

							// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	


						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	

						PI: '#f55066',	

						correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H	

						backgroundImage: qr_backgroundImage,	
						backgroundImageAlpha: 0.3,	
						autoColor: true,	


						dotScale: 0.5,	

						binarize: true	


					}	

				},	

				{	

					config: {	
						text : qr_text, // Content	

						width: 240, // Widht	
						height: 240, // Height	
						colorDark: "#000000", // Dark color	
						colorLight: "#ffffff", // Light color	

						// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	


						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	



						// === Logo	
						logo: qr_logo, // LOGO	
						//					logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png",  	
						//					logoWidth:80, 	
						//					logoHeight:80,	
						logoBackgroundColor: '#ffffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'	
						logoBackgroundTransparent: false, // Whether use transparent image, default is false	


						correctLevel: QRCode.CorrectLevel.H // L, M, Q, H	

					}	

				},	

				{	

					config: {	
						text : qr_text, // Content	

						width: 240, // Widht	
						height: 240, // Height	
						colorDark: "#000000", // Dark color	
						colorLight: "#ffffff", // Light color	

						// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	


						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	


						// === Logo	
						logo: qr_logo, // LOGO	
						//					logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png",  	
						//					logoWidth:80, 	
						//					logoHeight:80,	
						logoBackgroundColor: '#ffffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'	
						logoBackgroundTransparent: false, // Whether use transparent image, default is false	


						timing_V: '#00B2EE',	


						correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H	


						dotScale: 0.5	
					}	

				},	
				{	

					config: {	
						text : qr_text, // Content	

						width: 240, // Widht	
						height: 240, // Height	
						colorDark: "#27408B", // Dark color	
						colorLight: "#FFF8DC", // Light color	

							// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	


						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	

						// === Logo	
						logo: qr_logo, // LOGO	
						//					logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png",  	
						//					logoWidth:80, 	
						//					logoHeight:80,	
						logoBackgroundColor: '#FFF8DC', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'	
						logoBackgroundTransparent: false, // Whether use transparent image, default is false	

						// === Posotion Pattern(Eye) Color	
						PO: '#e1622f', // Global Position Outer color. if not set, the defaut is `colorDark`	
						PI: '#aa5b71', // Global Position Inner color. if not set, the defaut is `colorDark`	
						//					PO_TL:'', // Position Outer - Top Left 	
						PI_TL: '#b7d28d', // Position Inner - Top Left 	
						PO_TR: '#aa5b71', // Position Outer - Top Right 	
						PI_TR: '#c17e61', // Position Inner - Top Right 	
						//					PO_BL:'', // Position Outer - Bottom Left 	
						//					PI_BL:'' // Position Inner - Bottom Left 	

						// === Timing Pattern Color	
						//	timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`	
						timing_H: '#ff6600', // Horizontal timing color	
						timing_V: '#cc0033', // Vertical timing color	


						correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H	


						dotScale: 0.5	
					}	

				},	
				{	

					config: {	
						text : qr_text, // Content	

						width: 240, // Widht	
						height: 240, // Height	
						quietZone: 20, 	
						colorDark: "#27408B", // Dark color	
						colorLight: "#FFF8DC", // Light color	

							// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	


						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	

						// === Logo	
						logo: qr_logo, // LOGO	
						//					logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png",  	
						//					logoWidth:80, 	
						//					logoHeight:80,	
						logoBackgroundColor: '#FFF8DC', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'	
						logoBackgroundTransparent: false, // Whether use transparent image, default is false	


						backgroundImage: qr_backgroundImage,	
						backgroundImageAlpha: 0.3,	
						autoColor: true,	

						// === Posotion Pattern(Eye) Color	
						PO: '#e1622f', // Global Position Outer color. if not set, the defaut is `colorDark`	
						PI: '#aa5b71', // Global Position Inner color. if not set, the defaut is `colorDark`	
						//					PO_TL:'', // Position Outer - Top Left 	
						PI_TL: '#b7d28d', // Position Inner - Top Left 	
						PO_TR: '#aa5b71', // Position Outer - Top Right 	
						PI_TR: '#c17e61', // Position Inner - Top Right 	
						//					PO_BL:'', // Position Outer - Bottom Left 	
						//					PI_BL:'' // Position Inner - Bottom Left 	

						// === Timing Pattern Color	
						//	timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`	
						timing_H: '#ff6600', // Horizontal timing color	
						timing_V: '#cc0033', // Vertical timing color	


						correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H	


						dotScale: 0.5	
					}	

				},	
				{	

					config: {	
						text : qr_text,	
						width: 240,	
						height: 240,	

							// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	


						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	

						colorDark: "#000000",	
						colorLight: "#ffffff",	


						// === Timing Pattern Color	
						timing: '#e1622f',	

						correctLevel: QRCode.CorrectLevel.H, //  L, M, Q, H	


						dotScale: 0.4	
					}	

				},	



				// All	
				{	

					config: {	
						text : qr_text, // Content	

						width: 240, // Widht	
						height: 240, // Height	
						quietZone: 0,	
						colorDark: "#000000", // Dark color	
						colorLight: "#FFFACD", // Light color	

						// === Title	
						title:  qr_title, // Title	
						titleFont: "bold 18px Arial", // Title font	
						titleColor: "#004284", // Title Color	
						titleBackgroundColor: "#fff", // Title Background	
						titleHeight: 70, // Title height, include subTitle	
						titleTop: 25, // Title draw position(Y coordinate), default is 30	


						// === SubTitle	
						subTitle: qr_subTitle, // Subtitle content	
						subTitleFont: "14px Arial", // Subtitle font	
						subTitleColor: "#004284", // Subtitle color	
						subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50	


						// === Logo	
						logo: qr_logo, // LOGO	
						//					logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png",  	
						//					logoWidth:80, 	
						//					logoHeight:80,	
						logoBackgroundColor: '#ffffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'	
						logoBackgroundTransparent: false, // Whether use transparent image, default is false	

						// === Posotion Pattern(Eye) Color	
						PO: '#e1622f', // Global Position Outer color. if not set, the defaut is `colorDark`	
						PI: '#aa5b71', // Global Position Inner color. if not set, the defaut is `colorDark`	
						//					PO_TL:'', // Position Outer - Top Left 	
						PI_TL: '#b7d28d', // Position Inner - Top Left 	
						PO_TR: '#aa5b71', // Position Outer - Top Right 	
						PI_TR: '#c17e61', // Position Inner - Top Right 	
						//					PO_BL:'', // Position Outer - Bottom Left 	
						//					PI_BL:'' // Position Inner - Bottom Left 	

						// === Timing Pattern Color	
						//	timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`	
						timing_H: '#ff6600', // Horizontal timing color	
						timing_V: '#cc0033', // Vertical timing color	

						// === Aligment color	
						AI:'#27408B',	
						AO:'#7D26CD',	

						correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H	


						dotScale: 0.5	
					}	

				}	

			]	



				container = document.getElementById('qr_container').innerHTML+=`	
					<div style="font-size: 23px;text-align:center;width:100%;height:auto;white-space:normal;position: relative;margin: 23px auto 11px auto;z-index: 0;color: blue;font-weight: 600;">Unique Code</div>
					<div style="font-size: 22px;text-align:center;width:100%;height:auto;white-space:normal;margin: -5px auto -43px auto;position: relative;z-index: 3;font-weight: 600;"  onclick="custom_alert('','Give UNIQUE Code to seller/Show them Qr code..')"> <b id="qrcode_text_code" style="width:auto;height:100%;margin:0px;padding:0px;border-bottom:1px solid white">${uniqueCode}</b></div>
					<div class="qr" id="qrcode_div"></div>	
					<hr>	
					<i id="qrcode_text" style="font-size:12px;text-align:center; width:auto;height:auto;white-space:normal;margin:5px">Give "UNIQUE Code" to seller/Show them Qr code..</i>	
					`;	

				 new QRCode(document.getElementById("qrcode_div"), qr_design_array[Math.floor(Math.random() * qr_design_array.length)].config);	

				
}		

/* qr code reader */	

var video = document.createElement("video");	
var canvasElement = document.getElementById("canvas");	
var canvas = canvasElement.getContext("2d");	
var loadingMessage = document.getElementById("loadingMessage");	
var outputContainer = document.getElementById("output");	
var outputMessage = document.getElementById("outputMessage");	
var outputData = document.getElementById("outputData");	
var localStream;	

function qr_code_read(){	

	//check https
	if(location.protocol === 'http:'){
		return alert("Error, Cant start scanner, page not secure or loaded via https");
	}
	dom_hide_show('show','qr_scan_div');//show qr div/canvas	

    function drawLine(begin, end, color) {	
      canvas.beginPath();	
      canvas.moveTo(begin.x, begin.y);	
      canvas.lineTo(end.x, end.y);	
      canvas.lineWidth = 4;	
      canvas.strokeStyle = color;	
      canvas.stroke();	
    }	

    // Use facingMode: environment to attemt to get the front camera on phones	
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {	
	  video.srcObject = stream;	
	  localStream = stream; //streaming data object	
      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen	
      video.play();	
      requestAnimationFrame(tick);	
    });	

    function tick() {	
      loadingMessage.innerText = "⌛ Loading video..."	
      if (video.readyState === video.HAVE_ENOUGH_DATA) {	
		//dom_hide_show('hide','loadingMessage_close')	
        loadingMessage.hidden = true;	
        canvasElement.hidden = false;	
        outputContainer.hidden = false;	

        canvasElement.height = video.videoHeight;	
        canvasElement.width = video.videoWidth;	
        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);	
        var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);	
        var code = jsQR(imageData.data, imageData.width, imageData.height, {	
          inversionAttempts: "dontInvert",	
        });	
        if (code) {	
          drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");	
          drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");	
          drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");	
          drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");	
		  outputMessage.hidden = true;	
		//  dom_hide_show('hide', 'outputMessage_close');	
          outputData.parentElement.hidden = false;	
		  outputData.innerText = code.data;	
		  
		  document.getElementById('seller_ticket_unique_code').value = Number(code.data.replace(/\s/g,''));//fill input form
		  stop_qr_record();//close scanner	

        } else {	
		  outputMessage.hidden = false;	
		 // dom_hide_show('show','outputMessage_close');	
          outputData.parentElement.hidden = true;	
        }	
      }	
      requestAnimationFrame(tick);	
    }	





}	


function stop_qr_record(){//stop camera	
	dom_hide_show('hide','qr_scan_div');// hide scanner div	

	video.pause();	
	video.src = "";	
	//localStream.getTracks()[0].stop();	
	localStream.getTracks().forEach(function(media_streaming){//close all media streaming	
		media_streaming.stop();	
	});	


}	



/*=====================================================================================================================================================	
   
	hotspot management	
    	
=====================================================================================================================================================*/	

//seller_login = {logged_in : false, seller_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:'', resturent_hotel_cafe_login:false};
//distributor_login = {logged_in : false, distributor_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:''};
//admin_login = {logged_in : false, admin_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:''};

var hot_spot_data_array = []; //store data of hotspot retrived form internet


//------------ get hotspot ---------------


function show_hotspot(){

	//clean hotspot manage div
	dom_innerHtml('hotspot_edit_content', '');

	//show hotspot manage div
	dom_hide_show('show','hotspot_manage');

	//hide save button/view button/show help button
	dom_hide_show('hide','hotspot_save_button');
	dom_hide_show('hide','hotspot_view_button');
	dom_hide_show('show','hotspot_help_button');

	//change edit page title
	dom_innerHtml('hotspot_manage_menu_header', 'Select hotspot to edit');


	//find logged in user //or say 'not_logged_in' if no user is found

	var logged_in_user_user_type = (admin_login.logged_in == true )?admin_login.usertype: (distributor_login.logged_in == true)?distributor_login.usertype: (seller_login.logged_in == true)?seller_login.usertype:'not_logged_in';

	var logged_in_user_user_id = (admin_login.logged_in == true )?admin_login.admin_id: (distributor_login.logged_in == true)?distributor_login.distributor_id: (seller_login.logged_in == true)?seller_login.seller_id:'not_logged_in';




	var url = http_https + current_domain + '/api/get_hotspot?user_type=' + logged_in_user_user_type + '&user_id=' + logged_in_user_user_id;
	
	//document.getElementById('save_new_contact').disabled=true;//disable  save button


	$.get(url, function(response, status){

		if(status == 'success'){

					if(response == 'Server or Conection error'){

						// dom_innerHtml('transactions_and_voucher_header', 'Server or Conection error, Please try again later'); 

						// document.getElementById('save_new_contact').disabled=false;//re-enable save button//wen error
						return;

					}              

					if(response == 'No data found'){

						//	dom_innerHtml('transactions_and_voucher_header', 'Error, Adding Contact, Please try again later');
						//	document.getElementById('save_new_contact').disabled=false;//re-enable save button//wen error
						return;

					}
						//    if(response == 'Save error'){

						// 		dom_innerHtml('transactions_and_voucher_header', 'Error, Adding Contact, please try again later or contact administrator'); 
						// 		document.getElementById('save_new_contact').disabled=false;//re-enable save button//wen error
						// 	   return;

						//    }


					
					//console.log(response);
					
					hot_spot_data_array = response; //store retrived hotspot details

					//give reponse/ hotspot selection options
					response.forEach(function(data, index, original_array){

						var selectable_div_hotspot_details = `<div class='btn btn-default' id='hotspot_select_${index}' style='width:100%;height:auto;min-height:20px;border-bottom:1px solid gainsboro ;margin-bottom:10px ;margin-top:10px; font-weight:800' onclick='hotspot_edit(${Number(index)})'>${data.router_location.toUpperCase()}</div> <br> `;

						$('#hotspot_edit_content').append(selectable_div_hotspot_details); //add hotspots to user ui to select

						//set background on every 1st after second hotspot select div
						var divisable_by_two = index / 2;

						if( divisable_by_two.toString().indexOf(".") == 1 ){ //if true

							document.getElementById(`hotspot_select_${index}`).style.backgroundColor = 'black';//set backround color to this div
							document.getElementById(`hotspot_select_${index}`).style.color = 'white';

						}

					});
				}

				else{ //if error


		}

	})









}

//------------ edit hotspot details -------------------
function hotspot_edit(hot_spot_data){

	console.log(hot_spot_data_array[hot_spot_data]);

	//clean hotspot manage div
	dom_innerHtml('hotspot_edit_content', '');
	
	//show save button/view button/hide help button
	dom_hide_show('show','hotspot_save_button');
	dom_hide_show('show','hotspot_view_button');
	dom_hide_show('hide','hotspot_help_button');

	//change edit page title
	dom_innerHtml('hotspot_manage_menu_header', 'Edit : '+ hot_spot_data_array[hot_spot_data].router_location);








}


//------------ save hotspot changes -------------------





//------------ hotspot manage -------------------------

var router_ads_owned = [];//ads owned

function get_hotspots_editable_for_user(){



	//shot htospot menu
	dom_hide_show('show', 'hotspot_manage')

	var user_type;//type of logged in user
	var user_id; //logged in user id

	//get loggeg in user data
	if(seller_login.logged_in){

		user_type = seller_login.usertype
		user_id = seller_login.seller_id

	}

	if(distributor_login.logged_in){
		
		user_type = distributor_login.usertype
		user_id = distributor_login.seller_id
	}

	if(admin_login.logged_in){

		user_type = admin_login.usertype
		user_id = admin_login.seller_id

	}


	//check if login details provided
	if(!user_type || !user_id){

		return alert('Please login to you account to use this menu');//give error alert
	}


	$.get('/api/get_hotspot_data_for_ads?user_id='+user_id + '&user_type='+user_type, function(response, status){
	
		if(status == 'success'){//if success


			if(response == 'error : login problem'){
				return alert("loggin details contain error, please re-login or contact system administrator for help");//give error 
			}
	 
		 	console.log(response) 

			router_ads_owned = response;//save ads


			var div_text = '';

			//create divs
			response.forEach(function(hotspots, index){


				var ads_data = '';//containd ads links en data

				hotspots.hotspot_ads_currently_live.forEach(function (ads_links){

					ads_data = ads_data + `
					
						<li style="width:80%;margin: 10px auto;border-bottom: 1px solid grey;">
							<div style="width: 100%;height:20px;margin: 10px 0px;text-align: center;background-color: orange;"> Is Advertisement de-activated/expired :${ads_links.expire} </div>

							<span style="width: 100%;height:auto;margin:2px;display: block;">
								Expiery date : <span style="font-weight:bolder"> ${ads_links.expire_day }/${ads_links.expire_month}/${ads_links.expire_year}</span>
							</span>
							<span style="width: 100%;height:auto;margin:2px;display: block;">
								Advertisment poster link :  <br><a href="${ads_links.image_link}" style="display: block;" target="bank"><span style="font-weight:bolder">${ads_links.image_link}</span></a>
								<img src="${ads_links.image_link}" alt="${ads_links.image_status_text }" style="height:200px;margin : 5px auto" onclick="window.open('${ads_links.image_link}','_blank')">
							</span>
							<span style="width: 100%;height:auto;margin:2px;display: block;">
								Advertisment status click link :  <br> <a href="${ads_links.image_status_link}" target="bank"><span style="font-weight:bolder">${ads_links.image_status_link }</span></a>
							</span>
							<span style="width: 100%;height:auto;margin:2px;display: block;">
								Advertisment status text : <br><span style="font-weight:bolder">${ads_links.image_status_text }</span>
							</span>
	

						</li>
					
					`;

				})


				//check if this ads is new or an edit
				var button_edit = '';//edit button
				var button_create = '';//crete button
			

				if(hotspots.hotspot_ads_currently_live.length == 0 || hotspots.hotspot_ads_currently_live.length < hotspots.max_ads_slots_per_hotspots_allowed ){//if their are no hotspots ads links or data for the user//then it means they will have to create ads in this hotspot as nothing to edit//ADD HOTSPOT MAX ADS CHECK HERE, IF NO SPOTS DONT SHOW EDIT, EN ON SERVER YOU MAY NOT GIVE THE HOTSPOT WITHOUT SPOTS TO USERS, EXCEPT IF THEY ALREADY HAVE POSTS OR ADS ON IT, BUT CREATE BUTTON WONT SHOW

					//change
					button_create = `
					<div style="width: 100%;margin:10px 0px;font-size: 10px;">
						To create new Advertisment on this hotspots will cost :<br> <span style="font-weight:bolder">R${hotspots.ads_edit_create_costs.ads_create_costs}</span>
					</div>
					<button class="btn btn-primary" style="margin: 10px auto;" onclick="ads_create(${index})">Create new Advertisment</button>`;

				}

				if(hotspots.hotspot_ads_currently_live.length > 0){
					button_edit = `
					<div style="width: 100%;margin:10px 0px;font-size: 10px;">
						To edit/update this Advertisment on this hotspots will cost :<br> <span style="font-weight:bolder">R${hotspots.ads_edit_create_costs.ads_edit_cost}</span>
					</div>
					<button class="btn btn-primary" style="margin: 10px auto;" onclick="ads_edit(${index})">Edit Advertisment</button>`;
				}

				div_text = div_text + `

                <div id="hotspot_container_${index}" style="width: 100%;height: auto;min-height: 80px;margin: 10px 0px;border: 2px solid #ff4b0054;background-color:white;box-shadow:3px 3px 2px gainsboro, -1px -1px 2px gainsboro">

                  <div style="width: auto;height:20px;margin:10px 0px">
                    Hotspot Name/Location : <span style="font-weight:bolder"> ${hotspots.hotspot_location.toUpperCase().replace(/^A-Za-z0-9/gi,' ')}</span>
                  </div>

				  <div style="width: auto;height:20px;margin:10px 0px">
					You have used [ <span style="font-weight:bolder">${hotspots.hotspot_ads_currently_live.length}</span> ] of [ <span style="font-weight:bolder">${hotspots.max_ads_slots_per_hotspots_allowed}</span> ] ads slots for you on this hotspot.
				 </div>
                
                  <div style="width: auto;min-height:20px;margin:10px 0px">

                    <div style="width: 100%;height:20px;margin: 10px 0px;text-align: center;background-color: greenyellow;"> Is Hotspot private : <span style="font-weight:bolder">${hotspots.is_private_or_limited_hotspot}</span> </div>

						<ol>
							${ads_data}
						</ol>

						${button_edit}
						${button_create}

					

						<button class="btn btn-success" style="margin: 10px auto;" onclick="selected_hotspot_ads_view('${hotspots.hotspot_location}')">live View this hotspots</button>
      
                  	</div>
                
                </div>
				
				`

				//on last loop
				if(index == response.length - 1){
					
					dom_innerHtml('hotspot_select', div_text)
					
				}
			})
		}
	
		else{
	
			 console.log('Error retrieving hotspot data from db, please re-login or contact system administrator for help') ;
		}      
	});
	


}
get_hotspots_editable_for_user();

function ads_edit(hotspot_index){


	//if ads is edited//no charged

		//check if ads is still active//if not do new ads request //user will be charged new ads price

	//check if user has enough funds to pay for ads edits

	

	console.log('edit', hotspot_index, router_ads_owned[hotspot_index])

	





}


function ads_create(hotspot_index){

	console.log('create', hotspot_index, router_ads_owned[hotspot_index])

	//get ads to edit details
	var ads_to_edit_details = router_ads_owned[hotspot_index];

	/*
		ads_edit_create_costs 	: 	{ads_edit_cost: 50, ads_create_costs: 100}
		hotspot_ads_currently_live	: 	[]
		hotspot_db_id	: 	"63a6baea0672fa206cd45718"
		hotspot_location	: 	"default"
		is_private_or_limited_hotspot	: 	false
		max_ads_slots_per_hotspots_allowed	: 	3

	*/
	

	// //check if users has ads to edit in this hotspot
	// if(ads_to_edit_details.hotspot_ads_currently_live.length == 0){ //if no ads alread created by this user on this hotspot

	// 	//give alert
	// 	alert("You do not have advertisment already created on this hotspot, you will be sent to advertisement create menu");

	// 	return ads_edit(hotspot_index);

	// }



	//check if user still has advertisement slots available
	if(ads_to_edit_details.hotspot_ads_currently_live.length >= ads_to_edit_details.max_ads_slots_per_hotspots_allowed){

		// give alert
		alert("You already have used all your advertisement slots on this hotspot.\r\rYou may ask system administrator for more advertisement slots or edit (active) adverstiement you already have.\r\ryou will be sent to advertisement edit menu for this hotspot.");

		return ads_edit(hotspot_index)
	}



	//get logged in user credits
	var credits = 0

	//get loggeg in user data
	if(seller_login.logged_in){

		credits = seller_login.credit

	}

	if(distributor_login.logged_in){
		
		credits = distributor_login.credit
	}

	if(admin_login.logged_in){

		credits = admin_login.credit

	}

	
	//check if user can afford minimum 1 advertisement slot
	if(credits + 0.1 < ads_to_edit_details.ads_edit_create_costs.ads_create_costs ){

		dom_innerHtml('hotspot_edit_create', 'You do not have enough credits to afford to create a single advertisement on this hotspot\r\rYou have R' + credits + ' available.\r\rSingle advertisement slots on this hotspot cost R'+ads_to_edit_details.ads_edit_create_costs.ads_create_costs + '. Please recharge your account or contact system administrator.');

		//show hotspot
		dom_hide_show('show','hotspot_manage_edit_or_create');

		return;
	}

	//create  ads for available slots
	var hotspot_ads_slots = '';

	//create slots
	var slots_available = ads_to_edit_details.max_ads_slots_per_hotspots_allowed - ads_to_edit_details.hotspot_ads_currently_live.length;


	//ads slots usr can afford for this hotspot
	var added_slots = 1;


	for(var a = 1; a <= slots_available; a++){


		//check if user credits are enough to pay for ads slots before adding them
		var total_charge = added_slots * ads_to_edit_details.ads_edit_create_costs.ads_create_costs ;

		
		//check if user can afford this ads slots
		if(total_charge <= credits){//if so, add the slot

			hotspot_ads_slots = hotspot_ads_slots + `

				<div style="width:80%;min-height:130px;border:1px solid;margin:10px auto;box-shadow: inset 0px 0px 6px #0e0e0e66;">
					
					<div style="width:100%;height:20px;text-align:center;margin:10px 0px">
					Advertisment no :  <span style="font-weight:bolder">${added_slots}</span>
					</div>
				
					<div style="width:80%;text-align:center;margin:10px auto">

						<div style="width: 100%;height:20px;margin:10px 0px 2px 0px;text-align:left">
							1) 
						</div>
						Paste picture/image link of your Advertisment here.<br>
						Example link to picture/image : <a href="/default_slide_images/5.jpg">http://www.website.com/ads/birthday_event.jpg</a><br>
						Recommended image/picture size is : width = 802px , height = 1285px.
						Recommended picture size for best user experience and quick display = 100Kb and less.

						<input id='${ads_to_edit_details.hotspot_db_id}_${added_slots }_1' type="text"  placeholder="type/paste advertisement link here" class="form-control" style="border: 1px solid #00bcd4;">

						<span style="width:100%;height:20px; text-align:center;display: block;margin:5px 0px">OR</span>

						<span style="width:100%;height:20px; text-align:center">Use button below to upload your advertsiement image/picture</span>

						<input id='${ads_to_edit_details.hotspot_db_id}_${added_slots }_1.2' type="file" class="form-control" style="border: 1px solid #00bcd4;" onchange=" imageUploaded('${ads_to_edit_details.hotspot_db_id}_${added_slots }_1.2')">

						<div style="width: 100%;height:20px;margin:10px 0px 2px 0px;text-align:left">
							2) 
						</div>
						Give link or website you want user to be sent when clicking the image or image description, or just leave empty.
						<input id="${ads_to_edit_details.hotspot_db_id}_${added_slots}_2" type="text"  placeholder="link to send user to when clicking on the advertisement image" class="form-control" style="border: 1px solid #00bcd4;">

						<div style="width: 100%;height:20px;margin:10px 0px 2px 0px;text-align:left">
							3) 
						</div>
						Give short description of your advertisement to user, Example : Party with us this weekend
						<input id="${ads_to_edit_details.hotspot_db_id}_${added_slots }_3" type="text"  placeholder="Advertisment short description or introduction" class="form-control" style="margin-bottom: 20px;b  oi order: 1px solid #00bcd4;">

					</div>
				
				</div>
			
			`;


			//increment slots
			added_slots = added_slots + 1;

		}
	}

	//dont ask dont know, not carring right now
	added_slots = added_slots - 1;

	var create_ads_buttons = '';//ads create/preview buttons

	if(added_slots > 0){//if ads slots where created
	
		create_ads_buttons = `
		
			<div style="width:100%;height:30px;margin:20px;text-align:center">
				<button style="display:inline-block;margin:auto" onclick="ads_create_save('${ads_to_edit_details.hotspot_db_id}',${added_slots})" class="btn btn-danger">Create Advertisment</button>
				<button style="display:inline-block;margin:auto" onclick="ads_edit_create_preview('${ads_to_edit_details.hotspot_db_id}',${added_slots})" class="btn btn-success">Preview Advertisment</button>
			</div>
		`;
	}

	//hotspots create menu
	var hotspot_div = `
					
		<div style="width:100%;height:20px;text-align:center;margin:5px 0px">
			Ads slots available :  <span style="font-weight:bolder">${ads_to_edit_details.max_ads_slots_per_hotspots_allowed - ads_to_edit_details.hotspot_ads_currently_live.length }</span>
		</div>

		${hotspot_ads_slots}
		${create_ads_buttons}

	`;


	//create div
	dom_innerHtml('hotspot_edit_create', hotspot_div);
	

	//show hotspot
	dom_hide_show('show','hotspot_manage_edit_or_create');

	//give not enough funds to afford all slot available friendly reminder
	if(added_slots < slots_available ){//if slots added are less than slots available
		alert("Alert!, Your account credit is not enough to afford all advertisements [ "+slots_available+" ] slots available. \rOnly [ "+added_slots+" ] could be added.\rIf you were intending to use all advertisements slots, you will have to recharge your account and come back to add the advertisments.");
	}

}

//get image and convert to base 64 for upload	
var base_64_ads_images_container =[

	// {
	// 	image_form_id : {
	// 		image_base64_data : '',
	// 		image_file_name : '',
	// 		image_file_size : '',//forbid over 300kb 
	// 	}
	// }
];
	
function imageUploaded(image_form_id) {

	// console.log(image_form_id, typeof image_form_id)

	let base64String = "";

	var file = document.querySelector(
		'input[id="'+image_form_id+'"]'
	)['files'][0];

	// console.log('----',file)
	
	var reader = new FileReader();
	// console.log("next");
		
	reader.onload = function () {
		base64String = reader.result.replace("data:", "")
			.replace(/^.+,/, "");
	

		imageBase64Stringsep = base64String;
	
		// alert(imageBase64Stringsep);
		// console.log(base64String);
		// created_ads_data.upload_image_data = base64String;

	
	
		

		//save image
		// base_64_ads_images_container[image_form_id].image_base64_data = base64String;
		// base_64_ads_images_container[image_form_id].image_file_name = file.name;
		// base_64_ads_images_container[image_form_id].image_file_size = file.size;//forbid over 300kb 



		base_64_ads_images_container.push(

			{	image_form_id : image_form_id,
				image_base64_data : base64String,
				image_file_name : file.name,
				image_file_size : file.size,//forbid over 300kb 
			
			}
		);

	}

	reader.readAsDataURL(file);

	// console.log(base_64_ads_images_container)

}

//advertisement created saving
async function ads_create_save(hospot_id, total_ads_slots_created){


	//check if any sds slot was filled, //look for ads image, and click text maybe
	var ads_to_create = [];//ads to create


	//loop through created ads sloot
	for(var a = 1; a <= total_ads_slots_created; a++ ){

		//check if values where added
		var ads_image_link = document.getElementById(hospot_id + '_' + a +'_1').value;//type/paste advertisement link here
		var ads_image_link_uploaded = document.getElementById(hospot_id + '_' + a +'_1.2').value;
		var ads_image_link_click_redirect = document.getElementById(hospot_id + '_' + a +'_2').value;//link to send user to when clicking on the advertisement image
		var ads_description = document.getElementById(hospot_id + '_' + a +'_3').value;//Advertisment short description or introduction

		var created_ads_data = {};//contains created ads data

		//check if image link is provided //this is important
		if(ads_image_link || ads_image_link_uploaded){

			//check image link provided
			if(ads_image_link){
				created_ads_data.ads_image_link = ads_image_link;
			}
			
			//check if upload provided
			if(ads_image_link_uploaded){

				created_ads_data.ads_image_link = ads_image_link_uploaded;

			
				//crrent processing upload input form id
				// console.log('match uload', upload_file_input_id )
				var upload_file_input_id = hospot_id + '_' + a +'_1.2';

				//loop through images to upload
				for(counter in base_64_ads_images_container){

					//find matching input id
					if(base_64_ads_images_container[counter].image_form_id == upload_file_input_id ){

						// console.log('match found')
						//save upload file data
						created_ads_data.ads_image_link_t_upload_file_data = base_64_ads_images_container[counter];

						//end loop
						// break;
					}

					// console.log('match no match',base_64_ads_images_container[counter].image_form_id , upload_file_input_id )

				}

	

			}
		

			//check for click redirect link
			if(ads_image_link_click_redirect){
				created_ads_data.ads_image_link_click_redirect = ads_image_link_click_redirect;

			}

			//if no redirect link given
			if(!ads_image_link_click_redirect){

				//given image link
				created_ads_data.ads_image_link_click_redirect = created_ads_data.ads_image_link;

			}

			//check ads description
			if(ads_description){
				created_ads_data.ads_description = ads_description;
			}

			//if no ads description
			if(!ads_description){
				created_ads_data.ads_description = "Click here to see picture";
			}

			//save ads data
			ads_to_create.push(created_ads_data);

		}

		// on last loop
		if(a == total_ads_slots_created){
			console.log('hhhh',ads_to_create)
			do_upload_ads_image()
		}
		

	};

	function do_upload_ads_image(){

		//check if any ads data were created
		if(ads_to_create.length == 0){//if no ads

			//give alert
			return alert("You have not filled all reqired details to create advertisement(s).");
		}


		//give confirm box
		var create_confirm = confirm("You are about to create [ "+ads_to_create.length +" ] ads, this is irreversable.\r\rContinue?")

		//if confirm cancel button click
		if(!create_confirm){
			return;//end function
		}


		// console.log(ads_to_create);
		dom_hide_show('show','busy_animate');


		var user_id = "";//logged in user
		var user_tye = "";//logged in user type



		//get loggeg in user data
		if(seller_login.logged_in){

			user_id = seller_login.seller_id ;
			user_tye = seller_login.usertype ;

		}

		if(distributor_login.logged_in){
			
			user_id = distributor_login.seller_id ;
			user_tye = distributor_login.usertype ;
		}

		if(admin_login.logged_in){

			user_id = admin_login.seller_id ;
			user_tye = admin_login.usertype ;

		}
		



		//do post to back end
		$.post('/do_advertisement',{
			user_id : user_id,

			user_type : user_tye,
			db_hotspot_id : hospot_id,
			db_hotspot_name : '',
			action : 'create',
			ads : ads_to_create,

		} ,function(response, error){
			// console.log(error,response)

			if(error != 'success' || response.err){
				dom_hide_show('hide','busy_animate');//hide animate
				return alert('Server error when attempting login..');
			}
		

		
			//hide
			dom_hide_show('hide','busy_animate');//hide animate


			//if logged in
			if(response && response.trim().length > 0){

				//alert to give privew of live hotspot when ads created
			
			}



		});
	}

	

	




};

function ads_edit_create_preview(){



}

//opens ads to view on current hotspots
function selected_hotspot_ads_view(hotspot_location='default_'){


	//if locaion its default_, mostly help button was pressed
	if(hotspot_location == 'default_'){

		//give help
		var confirm_ = confirm("1) Create/Edit your ads shown on hotspots.\r\r2) Private hotspots you not registered to be part off, are not shown here\r\rDo you want to see ads currently shown on sample hotspot")

		if(confirm_){//if true

			//show default hotspot
			window.open("/hotspot?location=default", "_blank")
		}
		return

	}


	//else open selected hotspot
	window.open("/hotspot?location="+hotspot_location, "_blank")


}