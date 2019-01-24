/*_____________________________________________________________________________________________________________________________________________________

app routes

_______________________________________________________________________________________________________________________________________________________*/

/*=====================================================================================================================================================
 external URL link to internal routing
=====================================================================================================================================================*/

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
   
   dom_hide_show('show','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); 
 
 } 
if(current_url == '/buy_voucher'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('show','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page');
    buy_page_on_init();/*page init */
 
 }
if(current_url == '/sell_voucher'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('show','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); 
 
 }
if(current_url == '/seller_login'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('show','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); 
 
 }
if(current_url == '/distributor_login'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('show','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); 
 
 }

    
 })();

/*===================================================================================================================================================
    
        when success login//same url diffrenet content
        
====================================================================================================================================================*/
function seller_sell_menu(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('show','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); 
    
}

function distributor_works_menu(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('show','seventh_page'); dom_hide_show('hide','eigth_page'); 
    
}

function distributor_works_menu_add_user(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('show','eigth_page'); 
    
}



/*=====================================================================================================================================================
    Internal navigation
=====================================================================================================================================================*/


/* voucher buy link */
function buy_voucher(){
    
 window.open('/buy_voucher', '_self');
}
/* voucher sell link */
function sell_voucher(){
    
 window.open('/sell_voucher', '_self');
}

function third_page_seller_login(){
  
 window.open('/seller_login', '_self');
}

function third_page_distributor_login(){
    
 window.open('/distributor_login', '_self');
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

var distributor_login = {logged_in : false, seller_id : '', usertype : '', credit:''};


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


function manual_voucher_init(){
        
        var url= 'http://' + current_domain + '/api/buy?code=get_voucher&unique_code='+ unique_code;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               
                if(response == 'Voucher Not found'){
               var show_code = "<p style='color:red;margin:0px;padding:0px;height:0px;width:0px'>Error couldn't find voucher. <span style='color:blue; margin:0px;padding:0px;height:auto;width:auto'>re-Checking...</span></p>";
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
               
               if(response != 'Voucher Not found'){

				dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
               var show_code = "<p style='color:green;margin:0px;padding:0px;height:0px;width:0px'>Please Enter This Voucher Code : <span style='color:red; margin:0px;padding:0px;height:auto;width:auto'>"+JSON.stringify(response.vouchercode)+"</span></p>";
               dom_innerHtml('second_page_ticket_status', show_code);
               voucher_print(response);//print voucher
               }
           }
           
           else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
               
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
	
	
	
}


/*=====================================================================================================================================================

sell ticket, seller menu

=====================================================================================================================================================*/

function sell_ticket(){
    
    //voucher code
    var seller_code_input = document.getElementById('seller_ticket_unique_code');
    
    //voucher amount
    var seller_voucher_amount_input = document.getElementById('seller_ticket_amount');
    
    
        
        var url= '://' + current_domain + '/api/sell?code=sell_voucher&unique_code='+seller_code_input.value+'&voucher_amount='+seller_voucher_amount_input.value+'&seller_id='+seller_login.seller_id;//change '' + current_domain + '' to live domain
    
    //console.log(url);
    //check voucher input length
    if(seller_code_input.value.length < 8 || seller_code_input.value.length > 9){
    return dom_innerHtml('firth_page_sell_menu_header', 'Please re-check "Code from buyer"'); 
    }    
    
    //check amount input length
    if(seller_voucher_amount_input.value.length > 4){
    return dom_innerHtml('firth_page_sell_menu_header', 'Please re-check "Ticket amount"'); 
    }
    
    if(seller_login.credit >= seller_voucher_amount_input.value){//check if credit amount is enought to sell ticket
    
       $.get(url, function(response, status){
           
            
           
           if(status == 'success'){
              
                // res.jsonp = {status : 'voucher sold for R'+seller_voucher_amount_, new_credit : response.credits}
               
               //if no error resulted at the back//change front values
               if(response.new_credit != 'no_value_change'){
                   
                seller_login.credit = response.new_credit;
                dom_innerHtml('firth_page_seller_amount', response.new_credit); 
                   
               }
               
                dom_innerHtml('firth_page_sell_menu_header', response.status);
                return null;
             
           }
           
           else{
             return dom_innerHtml('firth_page_sell_menu_header', 'error producing ticket code'); 
           }
       });  
           return null;    
}
    
//
    
    dom_innerHtml('firth_page_sell_menu_header', 'Please recharge your account'); 
    
}


/*______________________________________________________________________________________________________________________________________________________
  
  activity console seller && distributor
_______________________________________________________________________________________________________________________________________________________*/



var seller_activity_console_current_credit = seller_login.credit;//keep track changing account credits
var seller_activity_console_first_run = true;//console first open loger


function seller_activity_console_fn (){//seller console function
 
    document.getElementById('seller_console_old_balance_amount').innerHTML = seller_login.credit;//set credit captured when console open
    
var seller_activity_console_periodic_timer = setInterval(seller_activity_console_fn_extended_1, 2000);
    
    
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
                   $("#seller_activity_console_body").append("<p style='width : auto; display : block; font-size : 13px; color : red;'>Money added : R"+(Number(response.credits) - Number(seller_activity_console_current_credit))+"</p>");
                 
                   
               }
               
               
               seller_activity_console_current_credit = Number(response.credits);
               document.getElementById("seller_console_new_balance_amount").innerHTML = response.credits;
               
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
        
/*______________________________________________________________________________________________________________________________________________________
  
  Login Seller & || buyer || distributor
_______________________________________________________________________________________________________________________________________________________*/






/*=====================================================================================================================================================

    Distributor login
=====================================================================================================================================================*/




//var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:''};

var distributor_login = {logged_in : false, seller_id : '', usertype : '', credit:''};


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
                       distributor_login.seller_id = distributor_id.value;
                       distributor_login.usertype = response.usertype;
                       distributor_login.credit = response.credits;
                      // dom_innerHtml('sixth_page_seller_amount', response.credits); //**************************
                       
					   //check if password is default
					   var default_password = document.getElementById('seller_new_account_default_password').innerHTML;
                       if(response.password.toLowerCase().trim() == default_password.toLowerCase().trim()){
						  	alert('For Security : \n\rPlease Change default Password.');
						  }
					   
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

































