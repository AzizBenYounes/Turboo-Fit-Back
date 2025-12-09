const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product"); // adjust path if needed

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected for seeding..."))
  .catch(err => console.error(err));

const products = [
  // ---------------------- SHOES ----------------------
  { name: 'Nike Mercurial Superfly', price: 120, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a7af1728-0efb-4111-8ed2-816f9e00fb67/ZM+SUPERFLY+10+ELITE+KM+FG.png', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },
  { name: 'Adidas Predator Edge', price: 110, image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/27dc662c3dc84ad7a0b5aceecb0c2e99_9366/chaussure-predator-languette-rabattue-terrain-souple-multi-surfaces.jpg', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },
  { name: 'Puma Ultra Ultimate', price: 105, image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/107163/01/sv01/fnd/PNA/fmt/png', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },
  { name: 'Nike Phantom GX', price: 130, image: 'https://www.tuttosport.com.tn/48299-large_default/nike-chaussures-phantom-gx-ii-club-fg-mg.jpg', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },
  { name: 'Adidas F50', price: 115, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVs-djSCqqHpzT2a7-7wSypl8Fs16lnK0PA&s', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },
  { name: 'Puma Future Z', price: 100, image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/106989/01/sv01/fnd/PNA/fmt/png', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },
  { name: 'Nike LeBron 20', price: 160, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9a5012dc-d154-4088-b94e-82def711ae27/LEBRON+XXII.png', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },
  { name: 'Adidas Harden Vol. 7', price: 150, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1f8962150ceb4eeb9ca6afd201454a3f_9366/Harden_Vol._7_Shoes_Blue_IE9249_01_standard.jpg', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },
  { name: 'Puma MB.02 Rick and Morty', price: 140, image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/378287/01/sv01/fnd/PNA/fmt/png', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },
  { name: 'Under Armour Curry Flow 10', price: 130, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYi8TYaNiJx9H-YB-lIFXb08FF3fI_WPEWg&s', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },
  { name: 'Jordan Luka 2', price: 145, image: 'https://cdn-images.farfetch-contents.com/23/64/33/67/23643367_57211174_1000.jpg', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },
  { name: 'Nike Zoom Freak 5', price: 135, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93ce3d01-faa6-4a7a-936e-353378c7f1ea/GIANNIS+FREAK+6+NRG.png', category: 'Shoes', sizes: [38,39,40,41,42,43,44,45] },

  // ---------------------- FOOTBALL JERSEYS/T-SHIRTS ----------------------
  { name: 'Real Madrid Home 23/24', price: 90, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUi1hPt4i11W2vAsc_5sBiQchCM6BduBWWeA&s', category: 'Tshirts', sizes: ['S','M','L','XL'] },
  { name: 'FC Barcelona Away 23/24', price: 85, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiRsYRuqtc_9ha1fbYD4ct9BnDZy9NLBz2Q&s', category: 'Tshirts', sizes: ['S','M','L','XL'] },
  { name: 'AC Milan Home 23/24', price: 88, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwa4qY4ORcoG5QkOta2mBlCKVEcLxppa_HA&s', category: 'Tshirts', sizes: ['S','M','L','XL'] },
  { name: 'Arsenal Away 23/24', price: 87, image: 'https://www.stripe3.com/cdn/shop/files/HR6927_1_APPAREL_Photography_FrontView_grey.jpg?v=1698268736', category: 'Tshirts', sizes: ['S','M','L','XL'] },
  { name: 'Juventus Home 23/24', price: 82, image: 'https://kitnation.co.za/cdn/shop/files/image_63627d16-e24f-4e1b-862e-1ba96f92f019_250x.jpg?v=1690023755', category: 'Tshirts', sizes: ['S','M','L','XL'] },
  { name: 'PSG Jordan Home 23/24', price: 92, image: 'https://images.prodirectsport.com/ProductImages/Main/1002400_Main_Thumb_1677026.jpg', category: 'Tshirts', sizes: ['S','M','L','XL'] },
  { name: 'Real Madrid Away Shorts 23/24', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDbjWdqRnt9reL_GExVsbmD0cvjP1P0pOng&s', category: 'Tshirts', sizes: ['S','M','L','XL'] },
  { name: 'FC Barcelona Home Shorts 23/24', price: 42, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7h6Daang7tSGWmtFzFE_QkxwMOMAqAq_MaH89S7twMBk3rRh_DWqx2MohKySZl-soqdu7rvKagre74EZBueIU2AoNMapESPZMBZDgjozgwZd8To4ucgtrGR47-NyAQwxC_h4I9PB6rXslWmNfajDS5UlwyhW7oB6r7P6uDgV70wbyC4yf8-fwagxt/s1600/fc%20b.jpg', category: 'Tshirts', sizes: ['S','M','L','XL'] },
  { name: 'AC Milan Home Shorts 23/24', price: 41, image: 'https://store.acmilan.com/cdn/shop/files/770409-A82_01.jpg?v=1744422987', category: 'Tshirts', sizes: ['S','M','L','XL'] },
  { name: 'Arsenal Home Shorts 23/24', price: 39, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLipl2nGiiRRmeoWht8DoDG2QM-KnScWbAYQ&s', category: 'Tshirts', sizes: ['S','M','L','XL'] },
  { name: 'Juventus Away Shorts 23/24', price: 45, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFg4Rlg2hRxaNO2oiSroEPt3vm3SvyUhz5g&s', category: 'Tshirts', sizes: ['S','M','L','XL'] },
  { name: 'PSG Jordan Away Shorts 23/24', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNbUi5fx8ps1UdNJdlK2s6N-A7Up6bAqDGw&s', category: 'Tshirts', sizes: ['S','M','L','XL'] },

  // ---------------------- BASKETBALL JERSEYS ----------------------
  { name: 'Lakers Jersey', price: 110, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJVoxSYBp-jpGWIVOgEjYeSGEhFtfqk9zmQ&s', category: 'BasketBall-Jersey', sizes: ['S','M','L','XL'] },
  { name: 'Chicago Bulls Jersey', price: 105, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UXyR6ir3AZz5FKHcprmzqJ7yIHlGCmAdvA&s', category: 'BasketBall-Jersey', sizes: ['S','M','L','XL'] },
  { name: 'Warriors Jersey', price: 108, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCD3GuXqmAtu0H71EJOPMnhmFSnLIvN09U6w&s', category: 'BasketBall-Jersey', sizes: ['S','M','L','XL'] },
  { name: 'Celtics Jersey', price: 102, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatmmTuiwhtCoK_PpIwSTrFiVVx1Z7NDASUA&s', category: 'BasketBall-Jersey', sizes: ['S','M','L','XL'] },
  { name: 'Brooklyn Nets Jersey', price: 100, image: 'https://m.media-amazon.com/images/I/811kP1GquqL._AC_SL1500_.jpg', category: 'BasketBall-Jersey', sizes: ['S','M','L','XL'] },
  { name: 'Phoenix Suns Jersey', price: 103, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEO3w5EK3kaiYbn_wFp50tT5hqb2mN86giQ&s', category: 'BasketBall-Jersey', sizes: ['S','M','L','XL'] },
  { name: 'Bulls Shorts', price: 53, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PCbgz40xdvNpfYiWyvOytt7yR0OQ-hon0A&s', category: 'BasketBall-Jersey', sizes: ['S','M','L','XL'] },
  { name: 'Warriors Shorts', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAuQzkVpbjAcTjFptipPT8OAXe3diUvWkj6Q&s', category: 'BasketBall-Jersey', sizes: ['S','M','L','XL'] },
  { name: 'Celtics Shorts', price: 52, image: 'https://m.media-amazon.com/images/I/41-fQ8+WYGL._AC_.jpg', category: 'BasketBall-Jersey', sizes: ['S','M','L','XL'] },
  { name: 'Nets Shorts', price: 51, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFD0fxYaX2sHOJ7_plf5qgHZ-mHwQVjmwGbA&s', category: 'BasketBall-Jersey', sizes: ['S','M','L','XL'] },
  { name: 'Phoenix Suns Shorts', price: 54, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfxZRh5dYFut1JHNoWKi1s2sv-u1eIkZe9Q&s', category: 'BasketBall-Jersey', sizes: ['S','M','L','XL'] },

  // ---------------------- BALLS ----------------------
  { name: 'Adidas UEFA Champions League Pro', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8odUY7ybSch9l1c9gELcmSjTCLsIKXZnoQ&s', category: 'Balls' },
  { name: 'Puma Orbita La Liga Ball', price: 55, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR87OQ-RbmTXac2lemG_hz5OEFGhMIuq_hQ&s', category: 'Balls' },
  { name: 'Nike Premier League Flight Ball', price: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhX3yJ7FGadx88sOQCA9blNrRhBsXvtUNMBg&s', category: 'Balls' },
  { name: 'Adidas Al Rihla World Cup Ball', price: 65, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXAPbtNnn-Nb2lBPGVcR7MiChDsTrxk3F_A&s', category: 'Balls' },
  { name: 'Mitre Delta Max FA Cup Ball', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRtKQw_TMhs8QW8EV_Bi_oxlKWrjqCtb8Uw&s', category: 'Balls' },
  { name: 'Nike Strike Football', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9S5Xod9EBDVb1rk5N7_KKNWSgfM41jrs7w&s', category: 'Balls' },
  { name: 'Spalding NBA Official Game Ball', price: 95, image: 'https://images-cdn.ubuy.co.in/6632e6054ddceb6ba530fc36-spalding-nba-game-ball-replica.jpg', category: 'Balls' },
  { name: 'Wilson Evolution Indoor Ball', price: 75, image: 'https://m.media-amazon.com/images/I/91OpxTC21VS._AC_SL1500_.jpg', category: 'Balls' },
  { name: 'Nike Elite Tournament Ball', price: 85, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWIOIeeqpllGN_FE0sTKlHPzzkJ2-a7MDXg&s', category: 'Balls' },
  { name: 'Airless Basketball', price: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCs5lY-IDf8ti2pEhR6HO95uUA_LtDgqpR3w&s', category: 'Balls' },
  { name: 'Wilson NCAA Replica Game Ball', price: 60, image: 'https://www.wilson.com/en-us/media/catalog/product/article_images/WTB0927IS_/WTB0927IS__482eda21e91b571c01d094dc3ccd0753.png', category: 'Balls' },
  { name: 'Spalding Street Outdoor Ball', price: 45, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyXMSX806c4IC8bO_Okd2LCPaD-ptGz58xg&s', category: 'Balls' },

  // ---------------------- ACCESSORIES ----------------------
  { name: 'Sports Water Bottle', price: 15, image: 'https://example.com/water-bottle.jpg', category: 'Accessories' },
  { name: 'Gym Gloves', price: 25, image: 'https://example.com/gym-gloves.jpg', category: 'Accessories' },
  { name: 'Fitness Band', price: 20, image: 'https://example.com/fitness-band.jpg', category: 'Accessories' },
  { name: 'Headband', price: 10, image: 'https://example.com/headband.jpg', category: 'Accessories' },
  { name: 'Jump Rope', price: 12, image: 'https://example.com/jump-rope.jpg', category: 'Accessories' },
  { name: 'Yoga Mat', price: 35, image: 'https://example.com/yoga-mat.jpg', category: 'Accessories' },
  { name: 'Socks', price: 8, image: 'https://example.com/socks.jpg', category: 'Accessories' },
  { name: 'Waterproof Bag', price: 28, image: 'https://example.com/waterproof-bag.jpg', category: 'Accessories' },
  { name: 'Knee Sleeve', price: 22, image: 'https://example.com/knee-sleeve.jpg', category: 'Accessories' },
  { name: 'Sports Cap', price: 18, image: 'https://example.com/sports-cap.jpg', category: 'Accessories' },
  { name: 'Ankle Support', price: 20, image: 'https://example.com/ankle-support.jpg', category: 'Accessories' },
  { name: 'Resistance Bands', price: 25, image: 'https://example.com/resistance-bands.jpg', category: 'Accessories' },
];

const seedDB = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products seeded!");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seedDB();
