
/*_____________________________________________________________________________________________________________________________________________________

app routes

_______________________________________________________________________________________________________________________________________________________*/

/*=====================================================================================================================================================
 external URL link to internal routing
=====================================================================================================================================================*/

//store url of hotspsot login link
var hot_spot_url;

// ++++++++++++++++++++++++++++++++++++++++++++++++  get url and route ++++++++++++++++++++++++++++++++++++++++
var current_url= window.location.pathname;//content after domain 
var current_domain = window.location.host;//domain en port//use this on live
/*++++++++++++++++++++++++++++++++++++++++++++++++ hide or show other pages div +++++++++++++++++++++++++++++++++++++++*/

// function dom_hide_show(showORhide, div){
    
//     if(showORhide == 'hide'){
//         document.getElementById(div).style.display='none';
//     }
//    if(showORhide == 'show'){
//         document.getElementById(div).style.display='block';
//     }
    
// }

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





// +++++++++++++++++++++++++++++++++++++++++++++++++++ home auto run function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

(function(){
 
 if(current_url == '/transaction'){
   
   dom_hide_show('show','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page');

	//temp store hotspot login link from urll//pass it to voucher buy page url
	 hot_spot_url = document.location.search;


 
 } 
if(current_url == '/buy_voucher'){
  
   dom_hide_show('hide','first_page'); dom_hide_show('show','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page');dom_hide_show('hide','admin_fourth_page'); 
   buy_page_on_init();/*page init */
	
	//set hot spot login link for router//enable auto login after voucher sold//handles both free login request or paid voucher request
	 var url_params = document.location.search.indexOf('?hotspot_link=') > -1 ?document.location.search.indexOf('?hotspot_link=') : document.location.search.indexOf('?free_login&hotspot_link=');

	//++++++ check if hotspot link is available in main Url, extract link if so ++++=+
	 url_params != -1 ?hot_spot_url=document.location.search.replace('?free_login&hotspot_link=','').replace('?hotspot_link=',''):hot_spot_url=undefined;
	//console.log(hot_spot_url);
		
 
 }
if(current_url == '/sell_voucher'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('show','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page');dom_hide_show('hide','admin_fourth_page');
 
 }
if(current_url == '/seller_login'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('show','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page');dom_hide_show('hide','admin_fourth_page'); 
 
 }
if(current_url == '/distributor_login'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('show','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page');
 
 }
if(current_url == '/admin_login'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('show','admin_fourth_page'); 
 
 }

    
 })();



/*===================================================================================================================================================
    
        when success login//same url diffrenet content
        
====================================================================================================================================================*/
function seller_sell_menu(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('show','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page'); dom_hide_show('hide','super_admin_works_menu'); dom_hide_show('hide','admin_eigth_page');dom_hide_show('hide','recharge_codes_container');dom_hide_show('hide','router_page');dom_hide_show('show','outer_menu_open_overlay');
		menu_button_sever();
    	process_destroyer();
}

function distributor_works_menu(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('show','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page'); dom_hide_show('hide','super_admin_works_menu'); dom_hide_show('hide','admin_eigth_page');dom_hide_show('hide','recharge_codes_container');dom_hide_show('hide','router_page');dom_hide_show('show','outer_menu_open_overlay');
		menu_button_sever();
    	process_destroyer();
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
    
 window.open('/sell_voucher', '_self');
	process_destroyer();
}

function third_page_seller_login(){
  
 window.open('/seller_login', '_self');
	process_destroyer();
}

function third_page_distributor_login(){
    
 window.open('/distributor_login', '_self');
	process_destroyer();
}
function admin_fourth_page_login(){
    
 window.open('/admin_login', '_self');
	process_destroyer();
}
/*=====================================================================================================================================================
    repeated functions
======================================================================================================================================================*/

/* change dom [innerHTML] */

function dom_innerHtml(div, value){
  document.getElementById(div).innerHTML=value;
}

/* hide or show div */

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


/*=====================================================================================================================================================
    functions/process to destroy when user leaves a page
=======================================================================================================================================================*/

    function process_destroyer(){
        
        clearInterval(router_auto_loader);
        
        
    }

/*=====================================================================================================================================================
   
   global vars
   seller login
    
=====================================================================================================================================================*/
/*seller & ||  user login details collcetor */
var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:''};


/* auto generated code from the user */
var unique_code = null;

/*=====================================================================================================================================================
   
   global vars
   distributor login
    
=====================================================================================================================================================*/

var distributor_login = {logged_in : false, distributor_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:''};

/*=====================================================================================================================================================
 
   
   global vars
   admin login
    
========================================================================================================================*/

var admin_login = {logged_in : false, admin_id : '', usertype : '', credit:'', name:'', customer_partners_contact_list:''};
/*_____________________________________________________________________________________________________________________________________________________

buy data page
_______________________________________________________________________________________________________________________________________________________*/


/*===================================================================================================================================================== 

generate unique random code 

=====================================================================================================================================================*/



function buy_page_on_init(){ //get unique code for this user session


	var url= 'http://' + current_domain + '/api/buy?code=unique_code';//change '' + current_domain + '' to live domain
    
    
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

var free_voucher_login = false;//allow unattended login if free voucher

function auto_voucher_check(uniqueCode){
		unique_code = uniqueCode;
		
		//+++++++++++ default url for voucher finding +++++++++++++
		var url= 'http://' + current_domain + '/api/buy?code=get_voucher&unique_code='+uniqueCode;//change '' + current_domain + '' to live domain
		

		//+++++++++++++++ search link params to see if this page was called by free voucher button click ++++++++++

		if(document.location.search.indexOf('free_login') != -1){ //if true change url handling request
			//alert('Yes user was directed by pressing free voucher button on hotspot page');
			url= 'http://' + current_domain + '/api/buy?code=free_voucher';
			
			free_voucher_login = true;//login is free voucher
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
                voucher_print(response);//print voucher
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
        
		//+++++++++++ default url for voucher finding +++++++++++++	
		var url= 'http://' + current_domain + '/api/buy?code=get_voucher&unique_code='+ unique_code;
		

		//+++++++++++++++ search link params to see if this page was called by free voucher button click ++++++++++

		if(document.location.search.indexOf('free_login') != -1){ //if true change url handling request
			//alert('Yes user was directed by pressing free voucher button on hotspot page');
			url= 'http://' + current_domain + '/api/buy?code=free_voucher'
		}
    
		document.getElementById(button_id).disabled = true;//disable mabual voucher download
	
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               
                if(response == 'Voucher Not found'){
               var show_code = "<p style='color:red;margin:0px 0px 0px 2px;padding:0px;height:0px;width:0px'>Error couldn't find voucher. <span style='color:blue; margin:0px;padding:0px;height:auto;width:auto'>re-Checking...</span></p>";
               dom_innerHtml('second_page_ticket_status', show_code);
				document.getElementById(button_id).disabled = false;//enable mabual voucher download
               
               }
               
               if(response != 'Voucher Not found'){

					dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');


					var show_code = "<p style='color:green;margin:0px;padding:0px;height:0px;width:0px'>Please Enter This Voucher Code : <span style='color:red; margin:0px;padding:0px;height:auto;width:auto'>"+JSON.stringify((response.vouchercode == 'N/A')?response.voucher_username:response.vouchercode) + "</span></p>";


				
					dom_innerHtml('second_page_ticket_status', show_code);
					
					voucher_print(response);//print voucher
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

function voucher_print(response){
   // alert('voucher print fn');
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

				var voucher_profile = response.voucherprofile;
				var voucher_expiry_days = response.voucherexpiry;
				var voucher_amount_cost = response.voucheramount;

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
				canvas_type.font= '39px Arial';
				canvas_type.fillText('R' + voucher_amount_cost, 25, 100);
				canvas_type.font= '9px Arial';
				canvas_type.fillText('PRINT '+ print_date, 9, 110);
				canvas_type.font= '7px Arial';
				canvas_type.fillText('T/C : service provided as is, use at own risk.',155,112);
			

		
			
			
				
				var ticket_canvas = document.getElementById('ticket_canvas');
				document.location.href= ticket_canvas.toDataURL('image/jpg').replace('img/jpg', 'image/octet-stream');
				
				//picture storing
				
				var download_link = document.createElement('a');
				download_link.download = 'Ticket _ '+ voucher_profile +' _  ' + voucher_pin + ' _ ' + 'R' + voucher_amount_cost + ' _';
				download_link.href = ticket_canvas.toDataURL('image/jpg').replace('image/jpg', 'image/octed-stream');
				download_link.click()
				//download_link.clicked();
				
	
				//auto voucher adding//login
				var voucher_username = response.voucher_username;
				var voucher_password = response.voucher_password;
				
				auto_login(voucher_pin, voucher_username, voucher_password);
	
	
	
}


/*=====================================================================================================================================================

sell ticket, seller menu

=====================================================================================================================================================*/

function sell_ticket(button_id){
    
    //voucher code
    var seller_code_input = document.getElementById('seller_ticket_unique_code');
    
    //voucher amount
    var seller_voucher_amount_input = document.getElementById('seller_ticket_amount');
    
    
        
        var url= 'http://' + current_domain + '/api/sell?code=sell_voucher&unique_code='+seller_code_input.value+'&voucher_amount='+seller_voucher_amount_input.value+'&seller_id='+seller_login.seller_id;//change '' + current_domain + '' to live domain
    
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
           return null; 
		   document.getElementById(button_id).disabled=false;//enable sell button
}
    
//
    
    dom_innerHtml('firth_page_sell_menu_header', 'Please recharge your account'); 
    
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

    var url =  'http://' + current_domain + '/api/console_amount_activity?user_type=seller&idnumber='+seller_login.seller_id;
    
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

    var url =  'http://' + current_domain + '/api/console_amount_activity?user_type=distributor&idnumber='+distributor_login.distributor_id;
		
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

    var url =  'http://' + current_domain + '/api/console_amount_activity?user_type=Server Admin&idnumber='+admin_login.admin_id;
		
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
        var url= 'http://' + current_domain + '/login?usertype=distributor&id_number='+distributor_id.value;
    
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
    
    var url = 'http://' + current_domain + '/password_hint?usertype=distributor&id_number='+id_number+'&user_name='+user_name;
    
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
	
    
    var url = 'http://'+current_domain+'/password_change?usertype=distributor&id_number='+id_number+'&old_password='+old_password+'&new_password='+new_password;
    
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

//var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:''};

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
        var url= 'http://' + current_domain + '/login?usertype=seller&id_number='+seller_id.value;
    
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
    
    var url = 'http://' + current_domain + '/password_hint?usertype=seller&id_number='+id_number+'&user_name='+user_name;
    
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
	
	
    var url = 'http://'+current_domain+'/password_change?usertype=seller&id_number='+id_number+'&old_password='+old_password+'&new_password='+new_password;
    
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
        var url= 'http://' + current_domain + '/login?usertype=server%20Admin&id_number='+admin_id.value;
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
	
	
    var url = 'http://'+current_domain+'/password_change?usertype=server%20Admin&id_number='+id_number+'&old_password='+old_password+'&new_password='+new_password;
    
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
	
     var url= 'http://' + current_domain + '/api/sell?code=sell_recharge&voucher_recharge_amount='+distributor_seller_recharge_amount_input.value.trim()+'&seller_id='+distributor_seller_id_input.value.trim()+'&seller_name_surname='+distributor_seller_name_surname_input.value.trim().replace(/ /,'*')+'&distributor_id='+distributor_login.distributor_id.trim()+'&userType=Distributor&userType_to_recharge=Seller';
	
	
	
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
	        
     var url= 'http://' + current_domain + '/api/sell?code=sell_recharge&voucher_recharge_amount='+admin_distributor_recharge_amount_input.value.trim()+'&seller_id='+admin_distributor_id_input.value.trim()+'&seller_name_surname='+admin_distributor_name_surname_input.value.trim().replace(/ /,'*')+'&distributor_id='+admin_login.admin_id.trim()+'&userType=Server Admin&userType_to_recharge=Distributor';
	
	
	
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

	        
     var url= 'http://' + current_domain + '/api/add_user?user_type=seller&name='+distributor_seller_add_name_input.value.trim()+'&surname='+distributor_seller_add_surname_input.value.trim()+'&password='+seller_new_account_default_password.textContent.trim().replace(/ /g, '%20')+'&id='+distributor_seller_add_id_input.value.trim()+'&added_by_name='+distributor_login.name+'&added_by_id='+distributor_login.distributor_id+'&added_by_usertype='+distributor_login.usertype;
	
	
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

	        
     var url= 'http://' + current_domain + '/api/add_user?user_type=distributor&name='+admin_distributor_add_name_input.value.trim()+'&surname='+admin_distributor_add_surname_input.value.trim()+'&password='+distributor_new_account_default_password.textContent.trim().replace(/ /g, '%20')+'&id='+admin_distributor_add_id_input.value.trim()+'&added_by_name='+admin_login.name+'&added_by_id='+admin_login.admin_id+'&added_by_usertype='+admin_login.usertype;
	
	
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
	
	
	
	var url= 'http://' + current_domain + '/api/add_vouchers?voucher_codes='+JSON.stringify(mob)+'&added_by='+admin_login.admin_id;
	
    //console.log(url);
    
       $.get(url, function(response, status){
           console.log(response);
            
           
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
	
	var url= 'http://' + current_domain + '/api/router_checkin_data_get';
	
	
	
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
	
	var url= 'http://' + current_domain + '/api/router_checkin_data_save?status_id='+id+'&router_todo='+todo_request+'&user_id='+admin_login.admin_id;
	
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

function menu_button_sever(typeOfUser){
	
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
	
	var url= 'http://' + current_domain + '/api/transations?type='+ transaction_type +'&user_id='+admin_login.admin_id+'&usertype='+admin_login.usertype;
}
	
if(seller_login.seller_id){// if seller logged in
	
	var url= 'http://' + current_domain + '/api/transations?type='+ transaction_type +'&user_id='+seller_login.seller_id+'&usertype='+seller_login.usertype;
}

if(distributor_login.distributor_id){// if distributor logged in
	
	var url= 'http://' + current_domain + '/api/transations?type='+ transaction_type +'&user_id='+distributor_login.distributor_id+'&usertype='+distributor_login.usertype
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

	window.open('http://' + current_domain +'/upload', '_blank');
	return;
}

	
}


// ++++++++++++++++++++ voucher redeem +++++++++++++++++

 function voucher_redeem (voucher_document_id_and_amount, div_id){
	 
	 
	// alert(voucher_document_id, voucher_amount);
	  // var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:''};
		 
	 if(!seller_login.logged_in){ return alert("Log in as a seller to be able to use this menu");}//log in a seller/for acuracy reasons
	 
	 //retrive amount and voucher db id
	 var voucher_document_id = voucher_document_id_and_amount.split(',')[0];
	 var voucher_amount = voucher_document_id_and_amount.split(',')[1];
	 
	var url= 'http://' + current_domain + '/api/redeem_voucher?voucher_id='+voucher_document_id+'&user_id='+seller_login.seller_id;//redeem voucher link
	
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
		
		var url = 'http://' + current_domain + '/api/reply_or_delete?action_type=reply&document_id=' + messaging_document_id + '&pay_load=' + reply_message;//reply link
			
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

	
	var url = 'http://' + current_domain + '/api/reply_or_delete?action_type=delete&document_id=' + messaging_document_id + '&pay_load=' + action_type;// delete link

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
		
		var url = 'http://' + current_domain + '/api/new_message_or_add_contact_or_delete_contact?action_type=new_message&message_initiator_id=' + logged_in_user_id + '&mesage_initiator_usertype='+logged_in_user_type+'&message_initiator_name='+logged_in_user_name+'&message_participant_details='+participant_details+'&message=' + new_message;//reply link
			
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

	
				var url = 'http://' + current_domain + '/api/new_message_or_add_contact_or_delete_contact?action_type=new_contact&current_user_id='+logged_in_user_id+'&current_usertype='+logged_in_user_type+'&new_contact_user_id='+new_contact_id_no.value.toString().trim()+'&new_contact_usertype='+new_contact_usertype.value+'&pay_load='+new_user_contact_; 

	
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
			window.open('http://'+current_domain+'/static/default_slide_images/3.jpg');
			return;
		}
			
		
		alert(`1) Enter ID number of the seller you want to recharge\n2) Enter name and surname of seller you want to Recharge\n\t\t\tExample : John Doe\n\n3) Enter Amount in Rands to Recharge the seller with\n\t\t\tExample : \n\t\t\t\tfor R5.00 Enter 5\n\t\t\t\tfor R10.00 Enter 10\n\t\t\t\tfor R100.00 Enter 100\n\nNB\nAllways make sure the details are for the person you want to recharge`);
		return;
		
	}
	
	
	
		
	if(type_of_user == 'superadmin'){
		
		
		var confirm_help_type = confirm('Would you prefer Picture/video?');
		
		if(confirm_help_type){
			window.open('http://'+current_domain+'/static/default_slide_images/4.jpg');
			
			return;
		}
			alert(`1) Enter ID number of the seller you want to recharge\n2) Enter name and surname of seller you want to Recharge\n\t\t\tExample : John Doe\n\n3) Enter Amount in Rands to Recharge the seller with\n\t\t\tExample : \n\t\t\t\tfor R5.00 Enter 5\n\t\t\t\tfor R10.00 Enter 10\n\t\t\t\tfor R100.00 Enter 100\n\nNB\nAllways make sure the details are for the person you want to recharge`)
		return;
		
	}
	
	if(type_of_user == 'seller'){
		
		
		var confirm_help_type = confirm('Would you prefer Picture/video?');
		
		if(confirm_help_type){
			window.open('http://'+current_domain+'/static/default_slide_images/2.jpg');
			
			return;
		}
		
		alert(`1) Enter amount of data to sell.\n\t\tExample :\n\t\t\tFor R5.00 Enter 5\n\t\t\tFor R10.00, Enter 10\n\t\t\tFor R100.00, Enter 100\n\n2) Get the Temporary code from the buyer\n3) Enter the temporary code to the second input box\n5) Press sell ticket button\n4) Wait few second and ask buyer to press get ticket button in their cellphone\n\nNB\nMake sure buyer does not close the app or change the code until transaction is complete`);
		return;
		
	}
	if(type_of_user == 'buyer'){
		
		var confirm_help_type = confirm('Would you prefer Picture/video?');
		
		if(confirm_help_type){
			window.open('http://'+current_domain+'/static/default_slide_images/1.jpg');
			
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

function auto_login(vocher_code, voucher_username, voucher_password){
	//hot_spot_url
	
	if(free_voucher_login){//if free login auto log in

		if(voucher_username != 'N/A' &&  voucher_password != 'N/A'){//check if username and password is given

			//http://streetwifiy.co.za/login?username=free&password=vouchr&dst=&popup=true

			window.open(hot_spot_url + '?username=' + voucher_username + '&password=' + voucher_password,'_self');

			return;
		}

		window.open(hot_spot_url + '?password=' + vocher_code +'&username=' + vocher_code,'_self');

		return;
	}

	if(!hot_spot_url){return}//if url for router not available
	 
	 var auto_login_confirm = confirm('Do you want to use this voucher to automatically log in?');
	 
	 if(!auto_login_confirm ){return}//user refuse auto login
	
	window.open(hot_spot_url + '?password=' + vocher_code +'&username=' + vocher_code,'_self');

}


/*=====================================================================================================================================================

   buy voucher Simple/Manual view
    
=====================================================================================================================================================*/

/* div view manage */
function simple_or_manual_view(div){

	var get_div = document.getElementById(div);



	if(div == 'simpleViewButton'){
		get_div.style.boxShadow = 'none';//remove shadow/activate
		//get_div.disabled = true;//disable clicked button

		document.getElementById('manualViewButton').style.boxShadow = '-1px 1px 2px gainsboro, -2px 1px 2px gainsboro';//apply shadow to button 
		document.getElementById('manualViewButton').style.backgroundColor = '#F8F8F8';
		document.getElementById('simpleViewButton').style.backgroundColor = '#FfFfFf';

		document.getElementById('manualViewButton').disabled = false;//enable non clicked button

		dom_hide_show('hide', 'manual_screen_content')//hide
		dom_hide_show('show', 'qr_container')//show

	}

	if(div == 'manualViewButton'){

		get_div.style.boxShadow = 'none';//remove shadow/activate 
		//get_div.disabled = true;//disable clicked button

		document.getElementById('simpleViewButton').style.boxShadow = '2px 1px 2px gainsboro, 2px 1px 2px gainsboro';//apply shadow to button
		document.getElementById('simpleViewButton').style.backgroundColor = '#F8F8F8';
		document.getElementById('manualViewButton').style.backgroundColor = '#FfFfFf';

		document.getElementById('simpleViewButton').disabled = false;//enable non clicked button

		dom_hide_show('hide', 'qr_container')//show
		dom_hide_show('show', 'manual_screen_content')//hide
		
		
	}

}

/* qr code */

function qr_code_fn(uniqueCode){

	var qr_backgroud_array = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg'];
	var qr_logo_array = ["logo1.jpg","logo2.jpg","logo3.jpg","logo4.jpg"]

			var	qr_text = uniqueCode; // Content
			var	qr_title = 'Unique Code'; // Title
			var	qr_subTitle = uniqueCode; // Subtitle content
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
					<div class="imgblock" style='margin: 10px 0;text-align: center;float: center;min-height: 420px;border-bottom: 1px solid #B4B7B4;'>
						<div class="qr" id="qrcode_div"></div>
		
					</div>
									
					<i style='font-size:12px;'>Show Quck Response Code to seller/Tell unique numbers..</i>
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
		  document.getElementById('seller_ticket_unique_code').value = Number(code.data);//fill input form
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



