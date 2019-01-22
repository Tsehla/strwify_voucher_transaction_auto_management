var keystone = require('keystone');
var nunjucks = require('nunjucks');
var path = require ('path');//to solve sendFile forbidden error
//var express = require('express');

keystone.get('routes', function(app){
   // app.use(express.static('./static/'));
    
    
    //super admin login
    app.get('/admin', function(req, res){
        
        
        
    });

 
    
    
    
    
    
/*======================================================

    seller or distributor login

=======================================================*/
    
    
    //use variable var user=seller or user = distributor
    
    app.get('/login', function(req, res){
        
        //'http://127.0.0.1:4100/login?usertype=seller&id_number='+id_number;
      
        
        //if error --- return alert error back
        var userType = req.query.usertype;
        var user_type = userType.replace(userType[0], userType[0].toUpperCase());//turn user type to upper db is case sensitive
        var user_id = req.query.id_number;
        
        /* seller login  and distributor login */
       // if(user_type == 'seller'){
            
        //if sucess login
            keystone.list('seller distributor').model.findOne({idnumber:user_id, usertype : user_type })
            .exec(
            function (error, response){
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
    
    var userType = req.query.usertype;
    var user_type = userType.replace(userType[0], userType[0].toUpperCase());//turn user type to upper db is case sensitive
    var user_id = req.query.id_number;
    var user_name = req.query.user_name;    
        
        
        
    //if user_type == seller
   // if(user_type == 'seller'){
        
      keystone.list('seller distributor').model.findOne().where({idnumber : user_id, usertype : user_type}).exec(
      
      function(error, response){
       // console.log(response.name+response.surname);
    
        if(error){ return res.jsonp('User Not found');}
        if(response ==  null || response == ''){ return res.jsonp('User Not found')};
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
    
    var userType = req.query.usertype;
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
        
   var user_type = req.query.user_type;
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
           
            
        var date = new Date();
        //slow changing    
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
            
        var seach_code_ = year[year.length-2]+year[year.length-1]+month+day+hour_minutes_milliseconds.toString().replace(/ /g, '');
       
////            
//        console.log('-----------------------');
//        console.log(seach_code_);
//        console.log('-----------------------'); 
    
            
            
        /* find doc contains [seach_code=] */
        keystone.list('Voucher Codes').model.findOne()
            .where({soldto : Number(seach_code_), voucherstate : 'used'})
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
        //on error throw error
        
        
        //on sucess, create voucher on the front
            
        
        }
        
        
    });
    
    

//==============================================================
// sell voucher to user
//==============================================================    
    
  app.get('/api/sell', function(req, res){
      
        
        if(req.query.code = 'sell_voucher'){
            

             
        //http://127.0.0.1:4100/api/sell?code=get_voucher&unique_code=xyz;//api query link
            
        //'http://127.0.0.1:4100/api/sell?code=sell_voucher&unique_code='+seller_code_input.value+'&voucher_amount='+seller_voucher_amount_input.value+'&seller_id='+seller_login.seller_id;
           
            
        var date = new Date();
        //slow changing    
        var year = date.getFullYear().toString();
        var month = date.getMonth().toString();
        var day = date.getDate().toString();
        
        
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
            
        var seach_code_ = year[year.length-2]+year[year.length-1]+month+day+hour_minutes_milliseconds;
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
               return res.jsonp({status : 'error Selling voucher', new_credit : 'no_value_change'});
            }  
          //  console.log(response);
          
                
            
             // res.jsonp('voucher sold for R'+seller_voucher_amount_); 
              
                response.voucherstate = 'used';
                response.soldby = req.query.seller_id;
                response.soldto = seach_code_;
                response.save();
            
                var seller_id = req.query.seller_id;
               // var seller_voucher_amount  = seller_voucher_amount_;
                voucher_sell_subtract_amount(seller_id, seller_voucher_amount_, res);        
        });
        //on error throw error
        
        //on sucess, create voucher on the front
             
            
            }
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
                return null;
                    
            }
             //if the was error updating db, 
              res.jsonp({status : 'voucher sold for R'+voucherValue, new_credit : 'no_value_change'});  
                   
                
            });

       });
        

    }
    
    
    
    
/*========================================

    Routing all links to webpage
    
========================================*/
    
    app.get('/', function(req, res){
       //give home page
        //im think use api, method to serve, nunjuck changes will be anoying
        //use public to serve html standard, use api to acess data//test first
        
        res.sendFile(path.resolve('./html/index.html'));
        
    });
    app.get('/buy_voucher', function(req, res){
        res.sendFile(path.resolve('./html/index.html'));
        
    });
    app.get('/sell_voucher', function(req, res){
        res.sendFile(path.resolve('./html/index.html'));
        
    });
    app.get('/seller_login', function(req, res){
        res.sendFile(path.resolve('./html/index.html'));
        
    });    
    
    app.get('/distributor_login', function(req, res){
        res.sendFile(path.resolve('./html/index.html'));
        
    });
    
    
    
    
    
    
    
    
});
