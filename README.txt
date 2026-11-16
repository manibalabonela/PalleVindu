PALLE VINDU FAMILY RESTAURANT — WEBSITE
========================================

FILES
-----
assets/     Restaurant logo, village background, menu photos and videos
index.html  Main website: hero, menu, Dine In, restaurant details and QR code
style.css   All layout, responsive styling, colours and animations/hover effects
script.js   Demo food menu, search, category filters, discount prices, cart and QR setup
menu.html   QR destination: a mobile-friendly digital menu

RUN LOCALLY
-----------
1. Download and unzip this folder.
2. Open the folder in Visual Studio Code.
3. Install the "Live Server" extension (if you do not already have it).
4. Right-click index.html and choose "Open with Live Server".
5. Test the Order Now section, add items to the bag, change quantities, and open Dine In.
6. Visit menu.html or scan the on-page QR code while both pages are being served.

IMPORTANT QR NOTE
-----------------
The QR code points to menu.html on the current website host. For testing, use Live Server.
For customers to scan the QR on their phones, publish the website to a public HTTPS URL first,
then generate/refresh the QR code using that public menu URL. A localhost URL will not work
on another person's phone. The QR script loads from a CDN, so internet access is needed.

CUSTOMISE YOUR RESTAURANT
-------------------------
1. Open script.js.
2. Edit the RESTAURANT object near the top:
   - name
   - address
   - phone
   - hours
   - mapQuery
3. Edit the menuItems array to change food names, descriptions, prices, discounts, categories,
   vegetarian status and image URLs.
4. Replace assets/palle-vindu-logo.png to change the restaurant logo. Edit
   assets/village-background.svg to customize the village background illustration.
5. Replace assets/hero-featured.mp4 to change the homepage hero video. Replace restaurant
   photos in index.html with your own restaurant images as needed.

DEMO LIMITATIONS
----------------
- Menu items and cart are front-end demo data; they do not save to a server.
- Checkout only shows a demo confirmation. It does not send an order to the restaurant.
- No payment gateway, customer login, admin dashboard or live order tracking is connected.
- Google Fonts, food photos and the QR-code library require internet access.
- Before taking real orders, add a backend (for example Django), database, secure checkout,
  order notifications and an admin interface.

VIDEO DISHES
------------
The first three demo dishes use local muted, looping video clips. The remaining menu cards
create a subtle, muted motion video from each dish photo while the card is on screen. This uses
the browser canvas captureStream API and CORS-enabled image URLs. Visitors who prefer reduced
motion see the poster photos instead. To use filmed footage for another dish, add its local
video base path and poster image in the menuItems array.

PRODUCE PHOTO CREDITS
---------------------
- Tomato photo adapted from "Ripe Tomatoes in Their Prime" by Mhmd.abdrzg,
  CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Ripe_Tomatoes_in_Their_Prime.jpg
- Garlic photo adapted from "Garlic Bulbs and Cloves" by HaJunkiyada,
  CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Garlic_Bulbs_and_Cloves.jpg
- The transparent cutouts are adapted versions of both photos and are shared under CC BY-SA 4.0.

VILLAGE BACKGROUND
------------------
The website uses assets/village-background.svg as a subtle village landscape behind the
homepage and digital menu. The supplied Palle Vindu logo is stored in assets/palle-vindu-logo.png.


OFFLINE IMAGE FIX: Menu visuals are stored locally in assets/menu-photos/. No remote food-image service is used.


MENU IMAGE UPDATE (2026-11-15)
- All 55 menu items use separate local image files in assets/menu-photos/ (01.webp through 55.webp).
- Menu cards and cart rows select the image by that item's numeric ID; no shared image URL is used.
- Items 29-35 were updated with the food photos supplied by the restaurant owner.
- Items 36-37 use two separate existing chicken dish photos because dedicated uploads for those two dishes were not included.
- See MENU-PHOTO-MAPPING.txt for the requested item-to-image mapping.


ADDITIONAL MENU PHOTO UPDATE (2026-11-15)
- Added the nine newly supplied dish photos to menu items 20-28:
  Chicken 65, Chicken Manchuria, Hong Kong Chicken, Chicken Crunchy,
  Apollo Fish, Fish 65, Dragon Chicken, Chicken Hyderabadi and Chicken Tai Pai.
- Each photo is stored separately in assets/menu-photos/20.webp through 28.webp.
- See MENU-PHOTO-MAPPING.txt for the exact item-to-photo mapping.


ADDITIONAL MENU PHOTO UPDATE (2026-11-15)
- Added nine supplied photos to menu items 38, 43-50.
- Chicken Mughlai Biryani, Apollo Fish Biryani, Special Chicken Biryani,
  Chittimutyala Biryani, Mixed Biryani, Goat Biryani, Prawn Pot Biryani,
  Fish Pot Biryani and Chicken Fried Rice now use their corresponding uploaded photos.
- See MENU-PHOTO-MAPPING.txt for the exact item-to-photo mapping.
