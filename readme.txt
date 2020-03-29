Add .env file with MONGO_URI for externat database inside parent folder

Change index.js inside static change 'https' to 'http' for local run or run on site with no https.


------
//login migrated to server : bug ++ issue login using http-chap/ use http-pap [non encrypted login]


// add this at head of hospot login.html found in mikrotik ; add before </head> tag:
<script type="text/javascript">//checks for internet connection//en if available show external login//if not available show default mikrotik

	if(navigator.onLine){
		window.open('http://127.0.0.1:4100/hotspot?login=true&error=$(error)&link-login-only=$(link-login-only)&link-orig=$(link-orig)&chap-id=$(chap-id)&chap-challenge=$(chap-challenge)&link-orig-esc=$(link-orig-esc)&mac-esc=$(mac-esc)&username=$(username)&location=orangefarm', '_self');//open link where hotspot is at  
	}
	
</script>


or  use file(s) in hospot_login_page

PS. change url : http://127.0.0.1:4100/ to where yourserver if at && change location=orangefarm [orangefarm] to where your location is at, this used to display ads/images you associate with that location.

-----------
