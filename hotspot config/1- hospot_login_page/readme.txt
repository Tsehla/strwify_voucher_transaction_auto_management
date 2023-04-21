copy this files here to mikrotik hotspot, and replace those that are similar to them there.

before copying Change : 

for [ login.html ]

	current link [ window.open('http://myAppLocation.com/hotspot?login=true&error=$(error)&link-login-only=$(link-login-only)&link-orig=$(link-orig)&chap-id=$(chap-id)&chap-challenge=$(chap-challenge)&link-orig-esc=$(link-orig-esc)&mac-esc=$(mac-esc)&username=$(username)&location=&router_installation_address=&owner_identification=', '_self'); } 

	fill in with you desired details : [ http://myAppLocation.com ] :: change to where you hotspot app is at
					 : [ location=] :: add you location example  : [ location=orange farm ], used for showing customized hotspot login page for the location, 
					 : [ router_installation_address=] add where u installed router, example [ router_installation_address=71 extension 4] , used to match stats to the router
					 : [ owner_identification=] add unique identification of the owner, example [ owner_identification=89051358], used to group routers/hotspot that belong to someone/ managed by them but sharing same this software 
					
	edited link current link [ window.open('http://myAppLocation.com/hotspot?login=true&error=$(error)&link-login-only=$(link-login-only)&link-orig=$(link-orig)&chap-id=$(chap-id)&chap-challenge=$(chap-challenge)&link-orig-esc=$(link-orig-esc)&mac-esc=$(mac-esc)&username=$(username)&location=orange farm&router_installation_address=71 extension 4&owner_identification=89051358', '_self'); } ]
	
	add [ %20 ] to represent space within word, if what you added has space
		from [ location=orange farm ] to [ location=orange%20farm ]	
		from [ router_installation_address=71 extension 4] to [ router_installation_address=71%20extension%204]
		from [ owner_identification=89051358520 ] to [ owner_identification=89051358520 ] //exclude last two numbers of south african id, for security reason, having this identification is usefull for stats capturing in a case where many hotspots are installed on same area and share same hotspot page in backend, [ this feature not implemented yet ]

	resulting link will be like [ window.open('http://myAppLocation.com/hotspot?login=true&error=$(error)&link-login-only=$(link-login-only)&link-orig=$(link-orig)&chap-id=$(chap-id)&chap-challenge=$(chap-challenge)&link-orig-esc=$(link-orig-esc)&mac-esc=$(mac-esc)&username=$(username)&location=orange%20farm&router_installation_address=71%20extension%204&owner_identification=89051358', '_self'); } ]
	
	copy link and replace the one in [ login.html ], then copy file to router



for [ logout.html ] 
	
	current link [ window.open('http://streetwifiy.herokuapp.com/hotspot_logout?logout=true&login_link=$(link-login)&user_name=$(username)&ip_address=$(ip)&mac_address=$(mac)&uptime=$(uptime)&time_left=$(session-time-left)&data_uploaded=$(bytes-in-nice)&data_downloaded=$(bytes-out-nice)&data_left=$(remain-bytes-total-nice)&link-login-only=$(link-login-only)&location=', '_self'); ]

	fill in with you desired details : [ http://myAppLocation.com ] :: change to where you hotspot app is at
	fill in : [ location=] :: add you location example  : [ location=orange farm ], used for showing customized hotspot login page for the location, 

	copy link and replace the one in [ logout.html ], then copy file to router


for [ status.html ] 

	current link [ window.open('http://streetwifiy.herokuapp.com/hotspot_status?status=true&refresh_timeout_seconds=$(refresh-timeout-secs)&advert_link=$(link-advert)&logout_link=$(link-logout)&user_name=$(username)&ip_address=$(ip)&data_uploaded=$(bytes-in-nice)&data_downloaded=$(bytes-out-nice)&connection_time_used=$(uptime)&connection_time_left=$(session-time-left)&up_time=$(uptime)&refresh_time=$(refresh-timeout)&data_available=$(remain-bytes-total-nice)&link-login-only=$(link-login-only)&location=','_self'); ]

	fill in with you desired details : [ http://myAppLocation.com ] :: change to where you hotspot app is at
	
	fill in : [ location=] :: add you location example  : [ location=orange farm ], used for showing customized hotspot login page for the location, 

	copy link and replace the one in [ status.html ], then copy file to router

