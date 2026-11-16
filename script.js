// Palle Vindu Family Restaurant details.
const RESTAURANT = {
  name: "Palle Vindu Family Restaurant",
  address: "Opp. Shivalayam, Old Bus Stand, near YSR Junction, beside Dumpala Kamayya Petrol Bunk, Maruthi Nagar, Srikakulam, Andhra Pradesh 532421",
  phone: "+91 93928 50339",
  hours: "Monday – Sunday · 11:30 AM – 10:30 PM",
  mapQuery: "Urvasi Sweets & Bakery, Opp Shivalayam, Old Bus Stand, near YSR Junction, beside Dumpala Kamayya Petrol Bunk, Maruthi Nagar, Srikakulam, Andhra Pradesh 532421"
};

const menuItems = [
  {id:1,name:'Veg Manchuria',category:'Veg Starters',description:'Freshly prepared Veg Manchuria',price:150,discount:0,veg:true,emoji:'🥦'},
  {id:2,name:'Veg 65',category:'Veg Starters',description:'Freshly prepared Veg 65',price:150,discount:0,veg:true,emoji:'🥗'},
  {id:3,name:'Chilli Paneer',category:'Veg Starters',description:'Freshly prepared Chilli Paneer',price:200,discount:0,veg:true,emoji:'🧀'},
  {id:4,name:'Paneer Manchuria',category:'Veg Starters',description:'Freshly prepared Paneer Manchuria',price:200,discount:0,veg:true,emoji:'🧀'},
  {id:5,name:'Paneer 65',category:'Veg Starters',description:'Freshly prepared Paneer 65',price:200,discount:0,veg:true,emoji:'🧀'},
  {id:6,name:'Paneer Crunchy',category:'Veg Starters',description:'Freshly prepared Paneer Crunchy',price:200,discount:0,veg:true,emoji:'🧀'},
  {id:7,name:'Paneer Pakoda',category:'Veg Starters',description:'Freshly prepared Paneer Pakoda',price:200,discount:0,veg:true,emoji:'🧆'},
  {id:8,name:'Mushroom Chilli',category:'Veg Starters',description:'Freshly prepared Mushroom Chilli',price:200,discount:0,veg:true,emoji:'🍄'},
  {id:9,name:'Mushroom 65',category:'Veg Starters',description:'Freshly prepared Mushroom 65',price:200,discount:0,veg:true,emoji:'🍄'},
  {id:10,name:'Mushroom Manchuria',category:'Veg Starters',description:'Freshly prepared Mushroom Manchuria',price:200,discount:0,veg:true,emoji:'🍄'},
  {id:11,name:'Mushroom Salt & Pepper',category:'Veg Starters',description:'Freshly prepared Mushroom Salt & Pepper',price:200,discount:0,veg:true,emoji:'🍄'},
  {id:12,name:'Crispy Corn',category:'Veg Starters',description:'Freshly prepared Crispy Corn',price:150,discount:0,veg:true,emoji:'🌽'},
  {id:13,name:'Chilli Lollypop (6 pcs)',category:'Non Veg Starters',description:'Freshly prepared Chilli Lollypop (6 pcs)',price:200,discount:0,veg:false,emoji:'🍗'},
  {id:14,name:'Roasted Chicken (6 pcs)',category:'Non Veg Starters',description:'Freshly prepared Roasted Chicken (6 pcs)',price:200,discount:0,veg:false,emoji:'🍗'},
  {id:15,name:'Chilli Wings (8 pcs)',category:'Non Veg Starters',description:'Freshly prepared Chilli Wings (8 pcs)',price:200,discount:0,veg:false,emoji:'🍗'},
  {id:16,name:'Roasted Wings (8 pcs)',category:'Non Veg Starters',description:'Freshly prepared Roasted Wings (8 pcs)',price:200,discount:0,veg:false,emoji:'🍗'},
  {id:17,name:'Lase Fry',category:'Non Veg Starters',description:'Freshly prepared Lase Fry',price:250,discount:0,veg:false,emoji:'🍗'},
  {id:18,name:'Cashew Nut Chicken',category:'Non Veg Starters',description:'Freshly prepared Cashew Nut Chicken',price:300,discount:0,veg:false,emoji:'🥜'},
  {id:19,name:'Chilli Chicken',category:'Non Veg Starters',description:'Freshly prepared Chilli Chicken',price:200,discount:0,veg:false,emoji:'🌶️'},
  {id:20,name:'Chicken 65',category:'Non Veg Starters',description:'Freshly prepared Chicken 65',price:200,discount:0,veg:false,emoji:'🍗'},
  {id:21,name:'Chicken Manchuria',category:'Non Veg Starters',description:'Freshly prepared Chicken Manchuria',price:200,discount:0,veg:false,emoji:'🍗'},
  {id:22,name:'Hong Kong Chicken',category:'Non Veg Starters',description:'Freshly prepared Hong Kong Chicken',price:200,discount:0,veg:false,emoji:'🍗'},
  {id:23,name:'Chicken Crunchy',category:'Non Veg Starters',description:'Freshly prepared Chicken Crunchy',price:200,discount:0,veg:false,emoji:'🍗'},
  {id:24,name:'Apollo Fish',category:'Non Veg Starters',description:'Freshly prepared Apollo Fish',price:200,discount:0,veg:false,emoji:'🐟'},
  {id:25,name:'Fish 65',category:'Non Veg Starters',description:'Freshly prepared Fish 65',price:200,discount:0,veg:false,emoji:'🐟'},
  {id:26,name:'Dragon Chicken',category:'Non Veg Starters',description:'Freshly prepared Dragon Chicken',price:200,discount:0,veg:false,emoji:'🐉'},
  {id:27,name:'Chicken Hyderabadi',category:'Non Veg Starters',description:'Freshly prepared Chicken Hyderabadi',price:200,discount:0,veg:false,emoji:'🍗'},
  {id:28,name:'Chicken Tai Pai',category:'Non Veg Starters',description:'Freshly prepared Chicken Tai Pai',price:250,discount:0,veg:false,emoji:'🍗'},
  {id:29,name:'Chicken Majestic',category:'Non Veg Starters',description:'Freshly prepared Chicken Majestic',price:250,discount:0,veg:false,emoji:'👑'},
  {id:30,name:'Chicken 555',category:'Non Veg Starters',description:'Freshly prepared Chicken 555',price:250,discount:0,veg:false,emoji:'🍗'},
  {id:31,name:'Chilli Prawn',category:'Non Veg Starters',description:'Freshly prepared Chilli Prawn',price:250,discount:0,veg:false,emoji:'🦐'},
  {id:32,name:'Prawn Manchuria',category:'Non Veg Starters',description:'Freshly prepared Prawn Manchuria',price:250,discount:0,veg:false,emoji:'🦐'},
  {id:33,name:'Butter Garlic Prawn',category:'Non Veg Starters',description:'Freshly prepared Butter Garlic Prawn',price:280,discount:0,veg:false,emoji:'🦐'},
  {id:34,name:'Hyderabadi Dum Biryani',category:'Biryanis',description:'Freshly prepared Hyderabadi Dum Biryani',price:200,discount:0,veg:true,emoji:'🍛'},
  {id:35,name:'Chicken Fry Piece Biryani',category:'Biryanis',description:'Freshly prepared Chicken Fry Piece Biryani',price:250,discount:0,veg:false,emoji:'🍗'},
  {id:36,name:'Chicken Lollypop Biryani',category:'Biryanis',description:'Freshly prepared Chicken Lollypop Biryani',price:250,discount:0,veg:false,emoji:'🍗'},
  {id:37,name:'Chicken Wings Biryani',category:'Biryanis',description:'Freshly prepared Chicken Wings Biryani',price:250,discount:0,veg:false,emoji:'🍗'},
  {id:38,name:'Chicken Mughlai Biryani',category:'Biryanis',description:'Freshly prepared Chicken Mughlai Biryani',price:240,discount:0,veg:false,emoji:'🍛'},
  {id:39,name:'Mixed Mutton Biryani',category:'Biryanis',description:'Freshly prepared Mixed Mutton Biryani',price:350,discount:0,veg:false,emoji:'🥩'},
  {id:40,name:'Egg Biryani (3 Eggs)',category:'Biryanis',description:'Freshly prepared Egg Biryani (3 Eggs)',price:180,discount:0,veg:false,emoji:'🥚'},
  {id:41,name:'Prawn Biryani',category:'Biryanis',description:'Freshly prepared Prawn Biryani',price:300,discount:0,veg:false,emoji:'🦐'},
  {id:42,name:'Mughlai Biryani',category:'Biryanis',description:'Freshly prepared Mughlai Biryani',price:300,discount:0,veg:false,emoji:'🍛'},
  {id:43,name:'Apollo Fish Biryani',category:'Biryanis',description:'Freshly prepared Apollo Fish Biryani',price:250,discount:0,veg:false,emoji:'🐟'},
  {id:44,name:'Special Chicken Biryani',category:'Biryanis',description:'Freshly prepared Special Chicken Biryani',price:300,discount:0,veg:false,emoji:'🍗'},
  {id:45,name:'Chittimutyala Biryani',category:'Biryanis',description:'Freshly prepared Chittimutyala Biryani',price:350,discount:0,veg:false,emoji:'🍚'},
  {id:46,name:'Mixed Biryani',category:'Biryanis',description:'Freshly prepared Mixed Biryani',price:300,discount:0,veg:false,emoji:'🍛'},
  {id:47,name:'Goat Biryani',category:'Biryanis',description:'Freshly prepared Goat Biryani',price:350,discount:0,veg:false,emoji:'🥩'},
  {id:48,name:'Prawn Pot Biryani',category:'Biryanis',description:'Freshly prepared Prawn Pot Biryani',price:350,discount:0,veg:false,emoji:'🦐'},
  {id:49,name:'Fish Pot Biryani',category:'Biryanis',description:'Freshly prepared Fish Pot Biryani',price:350,discount:0,veg:false,emoji:'🐟'},
  {id:50,name:'Chicken Fried Rice',category:'Fried Rice',description:'Freshly prepared Chicken Fried Rice',price:200,discount:0,veg:false,emoji:'🍗'},
  {id:51,name:'Egg Fried Rice',category:'Fried Rice',description:'Freshly prepared Egg Fried Rice',price:170,discount:0,veg:false,emoji:'🥚'},
  {id:52,name:'Mixed Non-Veg Fried Rice',category:'Fried Rice',description:'Freshly prepared Mixed Non-Veg Fried Rice',price:250,discount:0,veg:false,emoji:'🍖'},
  {id:53,name:'Veg Fried Rice',category:'Fried Rice',description:'Freshly prepared Veg Fried Rice',price:150,discount:0,veg:true,emoji:'🥬'},
  {id:54,name:'Paneer Fried Rice',category:'Fried Rice',description:'Freshly prepared Paneer Fried Rice',price:200,discount:0,veg:true,emoji:'🧀'},
  {id:55,name:'Mushroom Fried Rice',category:'Fried Rice',description:'Freshly prepared Mushroom Fried Rice',price:200,discount:0,veg:true,emoji:'🍄'}
];

const money = value => "₹" + Math.round(value).toLocaleString("en-IN");
let activeCategory = "All";
let toastTimer;

function discountedPrice(item) {
  return Math.round(item.price * (1 - item.discount / 100));
}
const $ = id => document.getElementById(id);
function showToast(message) {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function renderMenu() {
  const grid = document.getElementById("foodGrid");
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const visible = menuItems.filter(item => {
    const categoryGroups = {
      "All": () => true,
      "Starters": i => /Starters/.test(i.category),
      "Indian Mains": i => /Indian|Main|Curry|Rice|Noodles|Fried Rice/.test(i.category),
      "Biryani": i => i.category === "Biryanis",
      "Fried Rice": i => i.category === "Fried Rice"
    };
    const categoryMatch = (categoryGroups[activeCategory] || (i => i.category === activeCategory))(item);
    const searchMatch = `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });
  if (!visible.length) { grid.innerHTML = '<div class="no-results">No dishes found. Try another search or category.</div>'; return; }
  // Every menu item has its own bundled local photo (works offline too).
  const dishImageFor = item => `assets/menu-photos/${String(item.id).padStart(2, '0')}.webp`;
  const fallbackImageFor = item => `assets/menu/${item.id}.svg`;
  grid.innerHTML = visible.map(item => {
    const img = dishImageFor(item);
    return `<article class="food-card">
      <button class="food-photo-wrap photo-button" type="button" data-photo="${img}" data-title="${item.name}" aria-label="Open photo of ${item.name}">
        <img class="food-photo" src="${img}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImageFor(item)}'">
        <span class="photo-hint">Tap to view 🔍</span>
      </button>
      <div class="food-info">
        <div class="food-meta"><span class="food-category">${item.category}</span><span class="veg-dot ${item.veg ? "veg" : "non-veg"}" title="${item.veg ? "Vegetarian" : "Non-vegetarian"}"></span></div>
        <h3>${item.emoji || '🍽️'} ${item.name}</h3><p class="food-description">${item.description}</p>
        <div class="food-bottom"><div class="price-group"><span class="current-price">${money(discountedPrice(item))}</span></div></div>
      </div>
    </article>`;
  }).join("");
  grid.querySelectorAll('.food-card').forEach((c,i)=>{c.classList.add('reveal');c.style.setProperty('--i',i%8);});
  observeReveals();
}

function initPhotoModal() {
  if (document.getElementById('photoModal')) return;
  const modal = document.createElement('div');
  modal.id = 'photoModal'; modal.className = 'photo-modal'; modal.hidden = true;
  modal.innerHTML = '<div class="photo-modal-backdrop"></div><div class="photo-modal-content" role="dialog" aria-modal="true"><button class="photo-modal-close" aria-label="Close photo">×</button><img id="modalFoodImage" alt="Food photo"><p id="modalFoodTitle"></p></div>';
  document.body.appendChild(modal);
  const close = () => { modal.hidden = true; document.body.style.overflow = ''; };
  modal.querySelector('.photo-modal-close').onclick = close; modal.querySelector('.photo-modal-backdrop').onclick = close;
  document.addEventListener('click', e => { const btn=e.target.closest('[data-photo]'); if(!btn) return; document.getElementById('modalFoodImage').src=btn.dataset.photo; document.getElementById('modalFoodImage').alt=btn.dataset.title; document.getElementById('modalFoodTitle').textContent=btn.dataset.title; modal.hidden=false; document.body.style.overflow='hidden'; });
}
// Play menu clips only while visible (saves data & battery); posters show otherwise.
let videoObserver;
function watchMenuVideos() {
  const clips = document.querySelectorAll(".food-video");
  if (videoObserver) videoObserver.disconnect();
  if (!clips.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const startPhotoMotion = video => {
    if (!video.dataset.motionImage || video.srcObject || video.querySelector("source")) return;
    if (!HTMLCanvasElement.prototype.captureStream) return;
    const canvas = document.createElement("canvas");
    canvas.width = 640; canvas.height = 480;
    const context = canvas.getContext("2d");
    const draw = now => {
      if (!video.isConnected || video.paused || !video.dataset.motionActive) return;
      const scale = 1.04 + (Math.sin(now / 4800) + 1) * 0.018;
      const ratio = Math.max(canvas.width / image.width, canvas.height / image.height) * scale;
      const w = image.width * ratio, h = image.height * ratio;
      const drift = (Math.sin(now / 3200) + 1) / 2;
      context.drawImage(image, (canvas.width - w) * drift, (canvas.height - h) * .5, w, h);
      video.dataset.motionFrame = String(requestAnimationFrame(draw));
    };
    video._drawMotion = draw;
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      if (!video.isConnected || video.srcObject) return;
      const stream = canvas.captureStream(12);
      video.srcObject = stream;
      video.dataset.motionReady = "true";
      video.play().then(() => draw(performance.now())).catch(() => {});
    };
    image.src = video.dataset.motionImage;
  };
  videoObserver = new IntersectionObserver(entries => entries.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) {
      v.dataset.motionActive = "true";
      if (v.dataset.motionImage && !v.querySelector("source")) {
        if (v.srcObject) v.play().then(() => v._drawMotion?.(performance.now())).catch(() => {});
        else startPhotoMotion(v);
      }
      else { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
    } else {
      v.dataset.motionActive = "false";
      cancelAnimationFrame(Number(v.dataset.motionFrame));
      v.pause();
    }
  }), {threshold: 0.45});
  clips.forEach(v => videoObserver.observe(v));
}
function createQr() {
  const qrBox = document.getElementById("qrcode");
  if (!qrBox || typeof QRCode === "undefined") {
    if (qrBox) qrBox.innerHTML = "<span>Connect to the internet to load QR code.</span>";
    return;
  }
  qrBox.innerHTML = "";
  // This QR opens the digital menu page on the current host.
  // Publish the website before printing the QR for real customers.
  const menuUrl = new URL("menu.html", window.location.href).href;
  new QRCode(qrBox, {text:menuUrl, width:150, height:150, colorDark:"#14382d", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.H});
}
function initHeroVideo() {
  const video = document.getElementById("heroVideo");
  const toggle = document.getElementById("heroVideoToggle");
  if (!video || !toggle) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let userPaused = false;
  const sync = () => {
    const paused = video.paused;
    toggle.classList.toggle("is-paused", paused);
    toggle.setAttribute("aria-label", paused ? "Play background video" : "Pause background video");
  };
  const play = () => { const p = video.play(); if (p && p.catch) p.catch(sync); };
  video.addEventListener("play", sync);
  video.addEventListener("pause", sync);
  toggle.addEventListener("click", () => {
    userPaused = !video.paused;
    if (video.paused) play(); else video.pause();
  });
  // Respect reduced-motion: show the poster frame until the visitor presses play.
  if (reduceMotion.matches) { video.pause(); userPaused = true; }
  // Save battery and bandwidth: pause while the hero is off-screen.
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      if (userPaused) return;
      if (entry.isIntersecting) play(); else video.pause();
    }, {threshold: 0.15}).observe(video);
  }
  sync();
}
function initHeroParallax() {
  const hero = document.querySelector(".hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
  let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
  const tick = () => {
    x += (tx - x) * 0.07; y += (ty - y) * 0.07;
    hero.style.setProperty("--mx", x.toFixed(3));
    hero.style.setProperty("--my", y.toFixed(3));
    raf = (Math.abs(tx - x) > 0.002 || Math.abs(ty - y) > 0.002) ? requestAnimationFrame(tick) : 0;
  };
  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width - 0.5) * -1.2;
    ty = ((e.clientY - r.top) / r.height - 0.5) * -1.2;
    if (!raf) raf = requestAnimationFrame(tick);
  }, {passive:true});
  hero.addEventListener("pointerleave", () => { tx = ty = 0; if (!raf) raf = requestAnimationFrame(tick); });
}
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const update = () => header.classList.toggle("scrolled", window.scrollY > 24);
  window.addEventListener("scroll", update, {passive:true});
  update();
}
function init() {
  initHeaderScroll();
  initHeroVideo();
  initHeroParallax();
  initPhotoModal();
  renderMenu();
  initReveal();
  const set = (id, fn) => { const el = $(id); if (el) fn(el); };
  set("year", el => el.textContent = new Date().getFullYear());
  set("addressText", el => el.textContent = RESTAURANT.address);
  set("phoneText", el => el.textContent = RESTAURANT.phone);
  set("hoursText", el => el.textContent = RESTAURANT.hours);
  set("mapLink", el => el.href = `https://maps.google.com/?q=${encodeURIComponent(RESTAURANT.mapQuery)}`);
  set("categoryRow", el => el.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    document.querySelectorAll(".category-chip").forEach(chip => chip.classList.toggle("active", chip === button));
    renderMenu();
  }));
  set("searchInput", el => el.addEventListener("input", renderMenu));
  set("showQr", el => el.addEventListener("click", () => {
    $("qrSection").scrollIntoView({behavior:"smooth"});
    createQr();
  }));
  set("menuToggle", el => el.addEventListener("click", () => $("navLinks").classList.toggle("open")));
  document.querySelectorAll("#navLinks a").forEach(link => link.addEventListener("click", () => $("navLinks").classList.remove("open")));
  createQr();
}
document.addEventListener("DOMContentLoaded", init);

/* ===== Scroll reveal animations ===== */
let revealObserver;
function observeReveals() {
  if (!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach(e => e.classList.add("in")); return; }
  if (!revealObserver) revealObserver = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
  }), {threshold: 0.12, rootMargin: "0px 0px -40px 0px"});
  document.querySelectorAll(".reveal:not(.in)").forEach(e => revealObserver.observe(e));
}
function initReveal() {
  document.querySelectorAll(".service-strip > div, .section-heading, .category-row, .offer-banner, .dine-image-wrap, .dine-content, .qr-section > *, .about-section > *, .site-footer, .digital-menu-main > .button")
    .forEach((el, i) => { el.classList.add("reveal"); el.style.setProperty("--i", i % 4); });
  observeReveals();
}
