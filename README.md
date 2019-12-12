# strwify_voucher_transaction_auto_management
This is backend system, meant to allow seamless voucher selling and buying process: between The system admins> Distributers > sellers >to buyer 

==> This app is build to work with mikrotik router hotspot and provide dynamic custom hotspot login page and router ip address or keep track of it if ip is dynamic, to allow remote login and administration and give notification if router is offline; but it can work fine as a voucher selling system for Internet or Events.

==> The router hotspot uses http-pap (issue with http-chap support at moment) for hotspot authentication, and hotspot uses Radius by radiusdesk installed on digital ocean using https://github.com/muffycompo/radiusdesk-installer, Radiusdesk can be installed anywhere

==> Ticket are loaded to the app using Permanent-user/Voucher csv export format.


# Running

https required when not running on localhost/else disable [ app.use(secure); ] on [/routes/index.js];

Make sure you have a working local mongo db installaton.

Rename file dot.env to .env and fill in details to enable some features of this app to work.

Run npm i, to start server

# Login
For login use any details shown on https://github.com/Tsehla/strwify_voucher_transaction_auto_management/tree/master/updates for specific type of user you want to acess.

# links

Front end http://127.0.0.1:3100
backend (keystone) http://127.0.0.1:3100/keystone

# hotspot page acess :
direct hotspot acess : http://127.0.0.1:3100/hotspot?login=true&error=&link-login-only=http://streetwifiy.co.za/login&link-orig=http://www.msftconnecttest.com/redirect&chap-id=&chap-challenge=&link-orig-esc=http%3A%2F%2Fwww.msftconnecttest.com%2Fredirect&mac-esc=90%3A2E%3A1C%3A69%3AB3%3ABA&username=&location=orangefarm

To learn how hotspot page works, Please see readme inside folder using link below.
https://github.com/Tsehla/strwify_voucher_transaction_auto_management/tree/master/hospot_login_page


#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Feature overview
-> All users can communicate with each other via inbuilt messaging platform, they can also add contact of anyone registered on the system.
-> All users can monitor transaction taking place on their account live, or see stored history

-> All brand specific data can be easily changed

-> Router hotspot can be changed to use the one inbuilt on this app, for added features like :

    => Display ads with links/text, 
    
    => Send announcements
    
    => Add hotspot usage self help text/images/video
    
    => Add free links directory, etc
    
    => Each hotspot can have different above mentioned features data/media or use same.
    
-> The hotspot uses RadiusDesk for authenticating on router



# Demo : 

Hot Hotspot landing Page : 
http://street-wify-transcat.herokuapp.com/hotspot?hotspot_link=http://streetwifiy.co.za/login&location=&link-login-only=http://streetwifiy.co.za/login

Staging login :

=> admin [ ID =1111111111111, Password : 12345 ], (http://street-wify-transcat.herokuapp.com/admin_login )

=> distributor [ ID=2222222222222, Password: 12345 ], (http://street-wify-transcat.herokuapp.com/distributor_login )

=> seller [ ID=3333333333333, Password:12345 ], (http://street-wify-transcat.herokuapp.com/seller_login )

# 

******* Pending Features ******

-> Add ability to send recharge to users added as contact


