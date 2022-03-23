# Description
Hosted API on a wifi connected raspberry PI to change the album via a phone app or such.
The client app would connect to this via WLAN IP,
call list albums which loads the uploaded folders, and then you can choose which one to set, which will then tell raspberry PI connected screen to start showing photos from that folder.

# Creation script
npm install express-generator -g
express --view=pug nodeimgs
cd nodeimgs
npm install
