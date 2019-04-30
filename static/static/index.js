
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
function dom_hide_show(showORhide, div){
    
    if(showORhide == 'hide'){
        document.getElementById(div).style.display='none';
    }
   if(showORhide == 'show'){
        document.getElementById(div).style.display='block';
    }
    
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++ home auto run function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

(function(){
 
 if(current_url == '/'){
   
   dom_hide_show('show','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page');

	//temp store hotspot login link from urll//pass it to voucher buy page url
	 hot_spot_url = document.location.search;

 
 } 
if(current_url == '/buy_voucher'){
  
   dom_hide_show('hide','first_page'); dom_hide_show('show','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page');dom_hide_show('hide','admin_fourth_page'); 
    buy_page_on_init();/*page init */
	
	//set hot spot login link for router//enable ato login after voucher sold 
	 var url_params = document.location.search.indexOf('hotspot_link=');
	 url_params == 1?hot_spot_url=document.location.search.replace('?hotspot_link=',''):hot_spot_url=undefined;
	// console.log(hot_spot_url);
	
 
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
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); dom_hide_show('hide','admin_fourth_page'); dom_hide_show('hide','super_admin_works_menu'); dom_hide_show('hide','admin_eigth_page');dom_hide_show('show','recharge_codes_container');dom_hide_show('hide','router_page');d
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
    
 window.open('/buy_voucher'+hot_spot_url, '_self');//pass router login link//while calling this
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
var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:''};


/* auto generated code from the user */
var unique_code = null;

/*=====================================================================================================================================================
   
   global vars
   distributor login
    
=====================================================================================================================================================*/

var distributor_login = {logged_in : false, distributor_id : '', usertype : '', credit:''};

/*=====================================================================================================================================================
 
   
   global vars
   admin login
    
========================================================================================================================*/

var admin_login = {logged_in : false, admin_id : '', usertype : '', credit:''};
/*_____________________________________________________________________________________________________________________________________________________

buy data page
_______________________________________________________________________________________________________________________________________________________*/



/*===================================================================================================================================================== 

generate unique random code 

=====================================================================================================================================================*/

/*conncet & check ticket staus */
//buy page first start fn 

function buy_page_on_init(){ 
   
    var url= 'http://' + current_domain + '/api/buy?code=unique_code';//change '' + current_domain + '' to live domain
    
    
       $.get(url, function(response, status){//response contain unique code
           

           if(status == 'success'){
             
                auto_voucher_check(response);
               
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

    
function auto_voucher_check(uniqueCode){
        unique_code = uniqueCode;
        var url= 'http://' + current_domain + '/api/buy?code=get_voucher&unique_code='+uniqueCode;//change '' + current_domain + '' to live domain
        
        var response = uniqueCode;

        var auto_voucher_loader = setInterval(function check_voucher(){
            //alert(response);                       
            $.get(url, function(response, status){
           
           if(status == 'success'){
               dom_innerHtml('second_page_ticket_status', response);
			   
               if(response != 'Voucher Not found'){
                dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
               var show_code = "<p style='color:green;margin:0px;padding:0px;height:0px;width:0px'>Please Enter This Voucher Code : <span style='color:red; margin:0px;padding:0px;height:auto;width:auto'>"+JSON.stringify(response.vouchercode)+"</span></p>";
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
        
		
        var url= 'http://' + current_domain + '/api/buy?code=get_voucher&unique_code='+ unique_code;
    
		document.getElementById(button_id).disabled = true;//disable mabual voucher download
	
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               
                if(response == 'Voucher Not found'){
               var show_code = "<p style='color:red;margin:0px;padding:0px;height:0px;width:0px'>Error couldn't find voucher. <span style='color:blue; margin:0px;padding:0px;height:auto;width:auto'>re-Checking...</span></p>";
               dom_innerHtml('second_page_ticket_status', show_code);
				document.getElementById(button_id).disabled = false;//enable mabual voucher download
               
               }
               
               if(response != 'Voucher Not found'){

				dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
               var show_code = "<p style='color:green;margin:0px;padding:0px;height:0px;width:0px'>Please Enter This Voucher Code : <span style='color:red; margin:0px;padding:0px;height:auto;width:auto'>"+JSON.stringify(response.vouchercode)+"</span></p>";
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
	
				var voucher_pin = response.vouchercode;
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
				canvas_type.font= '40px Arial';
				canvas_type.fillText('R' + voucher_amount_cost, 25, 105);
			

		
			
			
				
				var ticket_canvas = document.getElementById('ticket_canvas');
				document.location.href= ticket_canvas.toDataURL('image/jpg').replace('img/jpg', 'image/octet-stream');
				
				//picture storing
				
				var download_link = document.createElement('a');
				download_link.download = 'Ticket _ '+ voucher_profile +' _  ' + voucher_pin + ' _ ' + 'R' + voucher_amount_cost + ' _';
				download_link.href = ticket_canvas.toDataURL('image/jpg').replace('image/jpg', 'image/octed-stream');
				download_link.click()
				//download_link.clicked();
				
	
				//auto voucher adding//login
				
				auto_login(voucher_pin);
	
	
	
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
				   	dom_innerHtml('seller_recharge_status','<span style="color:darkgreen;">Success, Voucher sold to ticket number : '+seller_code_input.value+', for amount : R'+seller_voucher_amount_input.value+'</span>');
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

	        
     var url= 'http://' + current_domain + '/api/add_user?user_type=seller&name='+distributor_seller_add_name_input.value.trim()+'&surname='+distributor_seller_add_surname_input.value.trim()+'&password='+seller_new_account_default_password.textContent.trim().replace(/ /g, '%20')+'&id='+distributor_seller_add_id_input.value.trim();
	
	
	
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

	        
     var url= 'http://' + current_domain + '/api/add_user?user_type=distributor&name='+admin_distributor_add_name_input.value.trim()+'&surname='+admin_distributor_add_surname_input.value.trim()+'&password='+distributor_new_account_default_password.textContent.trim().replace(/ /g, '%20')+'&id='+admin_distributor_add_id_input.value.trim();
	
	
	
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
//$("input[type=file]").change(function(){
$("#voucher_code_add").change(function(){
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
//							$("#input_content_show").append(`<p>
//									<span>Voucher Code : `+data.name+`</span>		
//									<span>Voucher Password : `+data.password+` </span>
//									<span>Voucher Data : `+data.profile+` </span>	
//									<span>Voucher  Expiery: `+data.expiery+` </span>
//									<span>Voucher  Price: `+data.cost+` </span>	
//								</p><br>`);
							if(index ==0){//add headers
								$("#input_content_show").append(`<tr>
									<td style='border: 1px solid white;color:green'><b>Voucher Code</th>		
									<th style='border: 1px solid white;color:green'>Voucher Password </th>
									<th style='border: 1px solid white;color:green'>Voucher Data </th>	
									<th style='border: 1px solid white;color:green'>Voucher  Expiery </th>
									<th style='border: 1px solid white;color:green'>Voucher  Price</th>	
								</tr>`);
							   }
							$("#input_content_show").append(`<tr>
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
							<p>Voucher saved is <span style='color:yellow'>`+(mob.length - response[1].length)+`</span>, out of <span style='color:yellow'>`+mob.length+`</span>,total vouchers processed.
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

//mock link for db, update status from router// http://127.0.0.1:4100/api/router_checkin?router_name=NAME&router_location=LOCATION&router_details=DETAILS

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
			   
					   $("#router_log_viewer").append(`

								 <div  style="width:100%; height:auto; margin:13px 0px 13px 0px; display:block; "  class="form-control router_log `+ is_muted +`">
									<p style='width:100%; height: auto; margin: 0px 0px 0px 0px; padding:0px; text-align:center'>
										 Router Name :<br />`+ data.routername +`<br />Last Contact :<br />Time : `+ data.router_last_contact_hour + ':' + data.router_last_contact_minute + am_pm +`, Day :`+ week_day[ data.router_last_contact_day ] +`
									 </p>
									  <p style='width:90vw; height: auto; margin: 1vh 1vw 1vh 1vw; padding:0px; text-align:center; font-weight: bold; border:3px dotted green; line-height:auto; vertical-align: middle; font-size:15px; display:`+ router_extramenu_show_hide +`' id=''>
										
										Router Location : <br />`+ data.routerlocation +`<br />
										Router Extra details : <br />` + data.routerdetails + `<br />
										
									 </p>
									<div style='width:90vw; height: auto; margin: 1vh 1vw 1vh 1vw; padding:0px; text-align:center; font-weight: bold; line-height:auto; vertical-align: middle; font-size:15px;display:block;' id='' >
											<button class='btn btn-primary w3-block' style='width:100%' onclick='alert("` + router_contact_history + `")'>Contact history</button>
									</div>

									<div style='width:90vw; height: auto; margin: 1vh 1vw 1vh 1vw; padding:0px; text-align:center; font-weight: bold; line-height:auto; vertical-align: middle; font-size:15px; display:`+ router_extramenu_show_hide +`' id=''>`+ muted_button +`</div>
	
								</div>

						`);
				   	router_contact_history='';
				    console.log(router_contact_history);
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
				   var transaction_record = '<p id="" class="w3-border w3-margin" style="width:80%;height:auto;margin:auto 10px auto 10px;overflow:break-word">'+history_record[0]+'<br />'+history_record[1]+styling_for_other_users+history_record[2]+'</p><hr>';
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



/*=====================================================================================================================================================

   automated hotpot login
    
=====================================================================================================================================================*/
//THIS WORKS ONLY FOR HTTP-PAP NOT (HTTP-CHAP)/havent figured a way to detect http pap//using ajax() is way but getting origin permission issue//anyway http-chap not working for main hotspot papge anyway

//trick for next time, make ajax to router, get response link extract variable to see if it http-pap or chap then use corrcet way to login//using this nw im gettng allow origin issue

function auto_login(vocher_code){
	//hot_spot_url
	
	if(!hot_spot_url){return}//if url for router not available
	 
	 var auto_login_confirm = confirm('Do you want to use this voucher to automatically log in?');
	 
	 if(!auto_login_confirm ){return}//user refuse auto login
	
	window.open(hot_spot_url + '?password=' + vocher_code +'&username=' + vocher_code,'_self');

}




