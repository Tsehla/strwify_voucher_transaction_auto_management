# strwify_voucher_transaction_auto_management
This is backend system, meant to allow seamless voucher selling and buying process: between The system admins> Distributers > sellers >to buyer

# Running
Make sure you have a working local mongo db installaton.
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
