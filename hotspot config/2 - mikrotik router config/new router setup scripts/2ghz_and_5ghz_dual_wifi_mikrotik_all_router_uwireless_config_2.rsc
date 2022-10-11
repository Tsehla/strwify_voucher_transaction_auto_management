#Streetwifiy router configuration
# --- General router configuration script ---
#Reset router and have it running correctly then run this script using command below:
# import mikrotik_all_router_streetwifiy_config.rsc
# on mikrotik console
#Commands need to be in order as some depends on the previous ones to run and create services or script will fail
#Tip: if issue, copy all script contents and paste on terminal
#Set [ radius ] [ip] address and [ ports ] and [radius ] password/string to correct ones after running the script

# src-address #run command below on terminal then $put addr # to see result
:global addr [/ip address get [find interface="bridge"] network]

#ip adress #run command below on terminal then $put ip_addr # to see result
:global ipAddressWithNetmask [/ip address get [find interface="bridge"] address]
    #remove ip netmask
:global ipAddress [:pick $ipAddressWithNetmask  0 [:find $ipAddressWithNetmask "/"]]

#get system time # to get date :global time [/system clock get date]
:global time [/system clock get time]
#return hour or any data before [ : ] charcter.the [ 0 ] means stop on first found character [ 1 ] would mean stop on second found character, for date use [ / ] character,
:global currenthour [:pick $time  0 [:find $time  ":"]]

# Create radius
/radius
add accounting-port=80 address=34.122.7.174 authentication-port=80 secret=testing123 service=hotspot timeout=30s

#allow router accept commands from radius server
/radius incoming
set accept=yes

# Mark packets
# -- mangle packet mark
/ip firewall mangle
add action=mark-packet chain=prerouting in-interface=bridge new-packet-mark=Download_interface passthrough=yes
add action=mark-packet chain=prerouting in-interface=ether1 new-packet-mark=Upload_interface passthrough=yes

# -- firewall packet mark
/ip firewall nat
add action=masquerade chain=srcnat comment="defconf: masquerade" ipsec-policy=out,none out-interface-list=WAN
add action=masquerade chain=srcnat comment="masquerade hotspot network" src-address=($addr ."/24")
add action=masquerade chain=srcnat comment="masquerade hotspot network" src-address=3.0.0.0/24
add action=masquerade chain=srcnat comment="masquerade hotspot network" src-address=6.0.0.0/24


# User bandwidth control, add in order
# -- step 1
/queue type
add kind=pcq name=PCQ_que_download pcq-burst-rate=3M pcq-burst-threshold=768k pcq-classifier=dst-address
add kind=pcq name=PCQ_que_upload pcq-burst-rate=3M pcq-burst-threshold=768k pcq-classifier=src-address

# -- step 2
/queue tree
add name=PCQ_donwnload_speed_control packet-mark=Download_interface parent=global queue=PCQ_que_download
add name=PCQ_upload_speed_control packet-mark=Upload_interface parent=global queue=PCQ_que_upload

# -- step 3
/queue simple
add name=PCQ_upload_download_speed_control packet-marks=Upload_interface,Download_interface queue=PCQ_que_upload/PCQ_que_download target=bridge



# Disable fast path to allow acurate hotspot data usage calculation
/ip settings
set accept-redirects=yes accept-source-route=yes allow-fast-path=no

#
/ip dns
set allow-remote-requests=yes

# Change system time zone
/system clock
set time-zone-name=Africa/Johannesburg

#set system time servers
#/system ntp client
#set enabled=yes primary-ntp=0.za.pool.ntp.org secondary-ntp=3.za.pool.ntp.org
#should be ip address

#time update using mikrotik default servers #the command may fail if internet service provider blocked port UDP/15252 port
/ip cloud 
set ddns-enabled=yes

#to check time update status : /ip cloud print 
#to manually update : /ip cloud force-update


# Default users hotspot user
    #enable only when needed else keep disabled for security
/ip hotspot user
add disabled=yes name=street password=wifiy




# -- Cause new user to be added under bandwidth control rules in [que]
/ip hotspot user profile
set [ find default=yes ] insert-queue-before=bottom shared-users=1 keepalive-timeout=5m
add insert-queue-before=bottom name=FreeLoginUsersProfile shared-users=unlimited

#trial user 
/ip hotspot user
set [ find default=yes ] limit-bytes-total=5000000
add limit-bytes-total=1000000 name=free password=user profile=FreeLoginUsersProfile

# Add hotspot wall garden
/ip hotspot walled-garden
add dst-host=*herokuapp*
add dst-host=www.google.com*
add dst-host=scholar.google.com*
add dst-host=*.glitch.*
add dst-host=www.google.co.za*
add comment="link shold be : http:// not https://" dst-host=*cloudinary*
add comment="free job sites:" dst-host=tsehla-icafe-cv-maker.glitch.me*
add dst-host=accounts.google.com*
add dst-host=ssl.gstatic.com*
add dst-host=elite-cv.com*
add dst-host=sagovjobs.co.za*
add dst-host=*linkedin.com*
add dst-host=*.indeed.co.za*
add dst-host=*.glassdoor.com*
add dst-host=careers.google.com*
add dst-host=*.careerjet.co.za*
add dst-host=*.careerjunction.co.za*
add dst-host=*.careers24.com*
add dst-host=*.jobmail.co.za*
add dst-host=*.careersportal.co.za*
add dst-host=*.bestjobs.co.za*
add dst-host=*pnet.co.za*
add dst-host=*.jobvine.co.za*
add dst-host=*.bizcommunity.com*
add dst-host=za.simplyhired.com*
add dst-host=*.recruitmymom.co.za*
add dst-host=*.totaljobs.com*
add dst-host=*.gov.za*
add dst-host=*.hoteljobs.co.za*
add dst-host=*.compujobs.co.za*
add dst-host=*.hospitalityplacements.co.za*
add dst-host=jobnexus.com*
add dst-host=jobs.trovit.co.za*
add dst-host=*.junkmail.co.za*
add dst-host=thejobcentre.co.za*
add dst-host=afrizan.co.za*
add dst-host=bossjansen.com*
add dst-host=*.jhammer.co.za*
add dst-host=*.robertwalters.co.za*
add dst-host=mindcor.com*
add dst-host=*.keyrecruitment.co.za*
add dst-host=*.executiveplacements.com*
add dst-host=*.quest.co.za*
add dst-host=*.executivesonline.co.za*
add dst-host=*.woodburnmann.co.za*
add dst-host=*.pmgrecruitment.com*
add dst-host=dantesa.co.za*
add dst-host=*.execz.co.za*
add dst-host=froggrecruit-sa.co.za*
add dst-host=*.hireresolve.co.za*
add dst-host=*.armstrongappointments.com*
add dst-host=*.trsstaffing.com*
add dst-host=anchorexec.co.za*
add dst-host=*.networkrecruitment.co.za*
add dst-host=*.michaelpageafrica.com*
add dst-host=*.careerlinksa.com*
add dst-host=*.dav.co.za*
add dst-host=*.redlinerecruitment.co.za*
add dst-host=obr.co.za*
add dst-host=*.srgfp.co.za*
add comment="free jobs site supporting resources:" dst-host=ssl.gstatic.com*
add dst-host=lh3.googleusercontent.com*
add dst-host=www.gstatic.com*
add dst-host=fonts.gstatic.com*
add dst-host=www.googleoptimize.com*
add dst-host=www.googletagmanager.com*
add dst-host=static-exp1.licdn.com*
add dst-host=za.indeed.com*
add dst-host=code.jquery.com*
add dst-host=maxcdn.bootstrapcdn.com
add dst-host=cdnjs.cloudflare.com*
add dst-host=use.fontawesome.com*
add dst-host=*.cloudfront.net*
add dst-host=ajax.googleapis.com*

# add extra hotspsot dcp adress range pool
/ip pool
add name=hs-pool-8 ranges=3.0.0.2-3.0.0.254
add name=hs-pool-9 ranges=6.0.0.2-6.0.0.254


#extra hotspot dhcp server networks
/ip dhcp-server network
add address=3.0.0.0/24 comment="hotspot no-2 network" gateway=3.0.0.1
add address=6.0.0.0/24 comment="hotspot no-3 network" gateway=6.0.0.1



# Create wifi hotspot
/ip hotspot profile
add dns-name=uwireless.za hotspot-address=$ipAddress html-directory=streetwifiy_login login-by=cookie,http-pap,trial name=hsprof1 trial-uptime-limit=2h30m trial-user-profile=FreeLoginUsersProfile use-radius=yes
add dns-name=areanet.za hotspot-address=3.0.0.1 html-directory=hospot_login_page-1 login-by=cookie,https,http-pap name=hsprof2  use-radius=yes
add dns-name=netarea.za hotspot-address=6.0.0.1 html-directory=hospot_login_page-2 login-by=cookie,http-pap name=hsprof3  use-radius=yes
  
#
#/ip dhcp-client #may cause hotspot issues in some router htspot setup try to remove them or enable them by removing [ # ]
#add comment=defconf disabled=no interface=ether1

#set or restrict router service port for online security
    #enable winbox when necessary
    #change [ www ] port to 80 if needed or theres issue
/ip service
set telnet disabled=yes
set ftp disabled=yes
set ssh disabled=yes
set api disabled=yes
set api-ssl disabled=yes
set www port=81
set winbox disabled=yes

## 1)
#set system scheduler used to contact server and provide current router ip address used for remote login
#start time will be current hour plus one hour
# --- fill values ---
    # a) Give_router_name -- router name should match [ location='' ] in \hotspot config\1- hospot_login_page\login.html file
    # b) GIVE_ROUTER_LOCATION  -- location can include useful contact personnel details to be used if router is offline
    # c) IF%20ISSUE%20CONTACT%20OWNER%20on%200719000000,%20INSTALLED%20AT%20MAIN%20CORNER%20STREET%20EXTENSION%204
        # -- above is same as : IF ISSUE CONTACT OWNER on 0719000000, INSTALLED AT MAIN CORNER STREET EXTENSION 4
        # -- spaces should be replaced with [ %20 ] { percent twenty }
        # -- be aware of [ & ] { ampersant } or "and" character, its very important do not remove unless you understant or jus testing

## 2)
#second will rebook router daily at 4am to refresh/this is only good for hotspot where there are no users at this time

## 3)
#update ntp time server for router, does what this [ /system ntp client ] above those, but it will convert domain name to ip adress automatically
/system scheduler

add interval=1h name="Streetwifiy online report" on-event="/tool fetch url=(\"http://streetwifiy.herokuapp.com/api/router_checkin\\\?router_name=Give_router_name&router_location=GIVE_ROUTER_LOCATION&router_details=IF%20ISSUE%20CONTACT%20OWNER%20on%200719000000,%20INSTALLED%20AT%20MAIN%20CORNER%20STREET%20EXTENSION%204\");" start-time=(($currenthour + 1).":00:00")

add name="Reboot Router Daily 4am" on-event="/system reboot" start-time=04:10:00 interval=23h comment="" disabled=no

#add interval=23h name="Daily time server NTP_Update" on-event="/system ntp client set enabled=yes poll-interval=1d primary-ntp=[:resolve 0.za.pool.ntp.org]" start-time=(($currenthour + 1).":00:00")



# Change router identity name -- router identity should match [ location='' ] in \hotspot config\1- hospot_login_page\login.html file
/system identity
set name=uwireless

#allow router perfomance grapgh view on login
/tool graphing interface
add

#
/tool mac-server
set allowed-interface-list=LAN

#
/tool mac-server mac-winbox
set allowed-interface-list=LAN

#set router config ip address
#/ip dns static
#add address=1.2.3.4 name=router.lan

#
/ip dns
set allow-remote-requests=yes


#add interfaces to list #may cause hotspot issues in some router htspot setup try to remove them or enable them
#/interface list
#add comment=defconf name=WAN
#add comment=defconf name=LAN

#
/ip neighbor discovery-settings
set discover-interface-list=LAN

#add wireless interface to bridge #may cause hotspot issues in some router htspot setup try to remove them or enable them by removing [ # ]
#/interface bridge port
#add bridge=bridge comment=defconf interface=wlan1

# Change wifi name
#NOTE IMPORTANT CHANGE FREQUENCY MODE TO [ frequency-mode=regulatory-domain ] USE [ frequency-mode=SUPERCHANNEL ] FOR TESTING ONLY !!THIS IS IMPORTANT, AND RESPONSIBILITY LIES WITH YOU THE INSTALLER NOT THE COMPANY OR ORGANISATION EMPLOYED OR REFERED TO.. 
# 2.5ghz turbo frequency [ frequency=2437 ]
/interface wireless
set [ find default-name=wlan1 ] disabled=no frequency=auto mode=ap-bridge distance=dynamic installation=outdoor ssid="uWireless.za" wireless-protocol=802.11 station-roaming=disabled wmm-support=enabled multicast-buffering=disabled multicast-helper=disabled wps-mode=disabled arp=enabled keepalive-frames=disabled bridge-mode=disabled country="south africa" frequency-mode=superchannel tx-power-mode=default 

add disabled=no keepalive-frames=disabled master-interface=wlan1 multicast-buffering=disabled name=wlan5 ssid="AreaNet.za" wds-cost-range=0 wds-default-cost=0 wps-mode=disabled

add disabled=no keepalive-frames=disabled master-interface=wlan1 multicast-buffering=disabled name=wlan6 ssid="NetArea.za" wds-cost-range=0 wds-default-cost=0 wps-mode=disabled

set [ find default-name=wlan2 ] disabled=yes


# -- Add hotspot address pool
/ip hotspot
add address-pool=default-dhcp disabled=no interface=bridge name=hotspot1 profile=hsprof1
add address-pool=hs-pool-8 disabled=no interface=wlan5 name=hs-wlan5 profile=hsprof2
add address-pool=hs-pool-9 disabled=no interface=wlan6 name=hs-wlan6 profile=hsprof3
    

# add extra hotspot dhcp server
/ip dhcp-server
add address-pool=hs-pool-8 disabled=no interface=wlan5 lease-time=1h name=dhcp1
add address-pool=hs-pool-9 disabled=no interface=wlan6 lease-time=1h name=dhcp2


#extra hotspot adress
/ip address
add address=3.0.0.1/24 comment="hotspot network" interface=wlan5 network=3.0.0.0
add address=6.0.0.1/24 comment="hotspot network" interface=wlan6 network=6.0.0.0



# to implement 
# https://wiki.mikrotik.com/wiki/Manual:Securing_Your_Router#Neighbor_Discovery