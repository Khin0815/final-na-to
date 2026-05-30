/* ============================================================
   ELYU — LAUNION.js
   Fixed for mobile GitHub Pages — all cards clickable
============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    const $ = id => document.getElementById(id);

    /* ============================================================
       DATA
    ============================================================ */
    const INFO_DATA = {

        beaches: [
            {
                title: 'San Juan Beach',
                category: 'Beach Destination',
                location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/San+Juan+Beach+La+Union+Philippines',
                images: ['La Union 2024.jpg', 'surf1.jpg', 'surf2.jpg'],
                desc: 'San Juan is the undisputed surfing capital of Northern Philippines. With consistent swells hitting the shore year-round, it attracts beginners and veteran surfers alike. The vibe is laid-back and bohemian, with surf shacks, reggae music, and ocean sunsets that never get old.',
                facts: ['Best surf months: Oct–Feb', 'Consistent 3–6 ft waves', 'Beginner-friendly breaks', 'Annual surf competitions', 'Night market every weekend'],
                rating: 5
            },
            {
                title: 'Bauang Beach',
                category: 'Beach Destination',
                location: '📍 Bauang, La Union',
                mapUrl: 'https://www.google.com/maps/search/Bauang+Beach+La+Union+Philippines',
                images: ['download (5).jpg', 'download (4).jpg', 'calm.jpg'],
                desc: 'Bauang offers calm, family-friendly waters perfect for swimming and relaxed beach days. Lined with resorts and beach clubs, ideal for day trips or weekend staycations from Manila.',
                facts: ['Calm swimming waters', 'Multiple beach resorts', '5 hrs drive from Manila', 'Beachfront dining', 'Ideal for families'],
                rating: 4
            },
            {
                title: 'Darigayos Cove',
                category: 'Hidden Gem',
                location: '📍 Luna, La Union',
                mapUrl: 'https://www.google.com/maps/search/Darigayos+Cove+Luna+La+Union+Philippines',
                images: ['Pebble Beach Elyu.jpg', 'stone.jpg', 'stones.jpg'],
                desc: 'Darigayos Cove is a secluded paradise tucked away in Luna. Dramatic rock formations and crystal-clear emerald waters make it feel like a hidden world. Perfect for snorkeling, cliff jumping, and sea caves.',
                facts: ['Crystal-clear waters', 'Rock formation snorkeling', 'Sea cave exploration', 'Less crowded', 'Cliff jumping spots'],
                rating: 5
            },
            {
                title: 'Pebble Beach',
                category: 'Unique Beach',
                location: '📍 Santo Tomas, La Union',
                mapUrl: 'https://www.google.com/maps/search/Pebble+Beach+Santo+Tomas+La+Union+Philippines',
                images: ['download (2).jpg', 'gg.jpg', 'ggs.jpg'],
                desc: 'Unlike typical sandy shores, Pebble Beach is covered with smooth, polished stones shaped by years of ocean waves. The sound of waves rolling over pebbles is incredibly soothing.',
                facts: ['Unique pebble shoreline', 'Ideal for photography', 'Calming wave sounds', 'Great for reflection walks', 'Accessible by vehicle'],
                rating: 4
            },
            {
                title: 'Luna Beach',
                category: 'Peaceful Retreat',
                location: '📍 Luna, La Union',
                mapUrl: 'https://www.google.com/maps/search/Luna+Beach+La+Union+Philippines',
                images: ['luna.jpg', 'lunas.jpg', 'lunase.jpg'],
                desc: 'Luna Beach is the serene escape you never knew you needed. Far from the tourist crowds, perfect for morning walks, yoga by the water, or simply watching the world slow down.',
                facts: ['Quiet & uncrowded', 'Perfect for sunrise walks', 'Near Darigayos Cove', 'Great beach camping', 'Local fishermen vibes'],
                rating: 4
            }
        ],

        food: [
            {
                title: 'Baluarte',
                category: 'Local Cuisine',
                location: '📍 Various spots, La Union',
                image: 'food.jpg',
                desc: 'Baluarte is grilled meat marinated in a unique blend of native spices, citrus, and fermented ingredients. Smoky, tangy, and absolutely addictive — best enjoyed with steaming white rice.',
                facts: ['Pork or chicken variants', 'Slow-grilled to perfection', 'Best paired with sinanglaw', 'Available in wet markets', 'Ilocano heritage dish'],
                rating: 5,
                restaurants: [
                    { name: 'Sinanglawan ni Lola', desc: 'Traditional Ilocano grills cooked over live charcoal.', address: '📍 Quezon Ave., San Fernando City' },
                    { name: 'Kusina ni Manang', desc: 'Homestyle restaurant with market-fresh baluarte.', address: '📍 Brgy. Catbangen, San Fernando' },
                    { name: 'The Grill House La Union', desc: 'Open-air barbecue with signature baluarte platter.', address: '📍 National Highway, San Juan' }
                ]
            },
            {
                title: 'Pindang',
                category: 'Local Cuisine',
                location: '📍 San Fernando City, La Union',
                image: 'pindand f.jpg',
                desc: 'Pindang is salted and dried fish — a staple of the Ilocano breakfast table. Pan-fried to golden crispness and paired with garlic rice and tomatoes.',
                facts: ['Classic Ilocano breakfast', 'Various fish varieties', 'Best with garlic sinangag', 'Sold in tiangge markets', 'Sun-dried traditional method'],
                rating: 4,
                restaurants: [
                    { name: 'Amianan Breakfast Turo-Turo', desc: 'Authentic silog breakfast with fresh pindang daily.', address: '📍 Public Market Area, San Fernando' },
                    { name: "Lola Nena's Tapsilog House", desc: 'Third-generation family; pindang sun-dried in-house.', address: '📍 Quezon St., Bauang' }
                ]
            },
            {
                title: 'Basi Wine',
                category: 'Traditional Drink',
                location: '📍 San Fernando City, La Union',
                image: 'base wine.jpg',
                desc: 'Basi is an ancient fermented sugarcane wine dating back to pre-colonial times. Sweet-sour with earthy undertones. The Basi Revolt of 1807 was sparked when colonizers monopolized its production.',
                facts: ['Pre-colonial origin', 'Sugarcane fermented', 'Symbol of Ilocano identity', 'Sparked the Basi Revolt', 'Available in souvenir shops'],
                rating: 5,
                restaurants: [
                    { name: 'Bodega de Basi', desc: 'Heritage wine house with tastings and Ilocano dishes.', address: '📍 Cabuloan, San Fernando' },
                    { name: 'La Union Heritage Resto-Bar', desc: 'Traditional basi with live folk music.', address: '📍 Quezon Ave., San Fernando' }
                ]
            },
            {
                title: 'Inasin',
                category: 'Local Cuisine',
                location: '📍 Coastal towns, La Union',
                image: 'inasin.jpg',
                desc: 'Inasin is fresh fish rubbed with coarse rock salt and grilled over open charcoal flames. Simple preparation lets the natural sweetness of fresh-catch fish shine through.',
                facts: ['Fresh local catch', 'Rock salt seasoning only', 'Charcoal-grilled', 'Best eaten beachside', 'Often caught same day'],
                rating: 4,
                restaurants: [
                    { name: 'Seaside Grill & Seafood', desc: 'Pick your fish from a live tank, grilled to order.', address: '📍 Urbiztondo Beach, San Juan' },
                    { name: 'Dalampasigan Seafood House', desc: 'Inasin platter with four fresh catch varieties.', address: '📍 Brgy. Ili Norte, Bauang' },
                    { name: "Bangkero's Fish Grill", desc: 'Daily-harvested catch served on bamboo plates.', address: '📍 Darigayos, Luna' }
                ]
            }
        ],

        stays: [
            {
                title: 'The Circle Hostel',
                category: 'Surf Hostel',
                location: '📍 San Juan, La Union',
                scheduleUrl: 'scheduling.html',
                reviewUrl: 'reviews.html',
                image: 'circle.jpg',
                desc: 'The Circle Hostel is where surf culture meets community living. Beachfront in San Juan with surf lessons, board rentals, and a vibrant atmosphere that attracts young travelers from all over.',
                facts: ['Beachfront location', 'Surf lesson packages', 'Board & gear rental', 'Social rooftop deck', 'Budget-friendly dorms'],
                rating: 5
            },
            {
                title: 'Aureo Resort',
                category: 'Luxury Resort',
                location: '📍 San Fernando City, La Union',
                scheduleUrl: 'scheduling.html',
                reviewUrl: 'reviews.html',
                image: 'aureo.jpg',
                desc: 'Aureo is the premium beach resort in La Union. Infinity pools overlooking the ocean, spa services, fine dining, and spacious rooms — the go-to for couples and families.',
                facts: ['Infinity pool', 'Full-service spa', 'Fine dining restaurant', 'Ocean-view rooms', 'Wedding venue'],
                rating: 5
            },
            {
                title: 'San Juan Surf Resort',
                category: 'Surf Resort',
                location: '📍 San Juan, La Union',
                scheduleUrl: 'scheduling.html',
                reviewUrl: 'reviews.html',
                image: 'san juan.jpg',
                desc: 'Built for surfers, by surfers. Daily surf reports, certified instructors, and equipment rental make it the ultimate surf hub in La Union.',
                facts: ['Steps from the break', 'Certified surf instructors', 'Daily surf forecasts', 'Longboard & shortboard rental', 'Video surf analysis'],
                rating: 4
            },
            {
                title: 'Thunderbird Resort',
                category: 'Premium Resort',
                location: '📍 Poro Point, San Fernando',
                scheduleUrl: 'scheduling.html',
                reviewUrl: 'reviews.html',
                image: 'thunderbird.jpg',
                desc: 'Thunderbird is a full-scale resort with a casino, 18-hole golf course, multiple dining venues, and stunning ocean views.',
                facts: ['Casino & gaming', '18-hole golf course', 'Multiple restaurants', 'Conference facilities', 'Helipad access'],
                rating: 4
            }
        ],

        cafes: [
            {
                title: 'El Union Coffee',
                category: 'Specialty Cafe',
                location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/El+Union+Coffee+San+Juan+La+Union+Philippines',
                image: 'El Union Coffee.jpg',
                desc: 'El Union put La Union on the specialty coffee map. Famous for its dirty horchata and cool artsy atmosphere, it draws coffee pilgrims from Manila and beyond.',
                facts: ['Famous dirty horchata', 'Single-origin pour overs', 'Surf culture aesthetic', 'Alfresco & indoor seating', 'Coffee & merch shop'],
                rating: 5
            },
            {
                title: 'Little Yellow House',
                category: 'Dessert Cafe',
                location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/Little+Yellow+House+San+Juan+La+Union+Philippines',
                image: 'yellow.jpg',
                desc: 'An Instagram sensation with unique creations — from ube lattes to buko pandan waffles. The yellow facade and fairy lights make it incredibly photogenic.',
                facts: ['Instagram-famous spot', 'Creative dessert drinks', 'Ube & local flavor specials', 'Fairy-light ambiance', 'Cute outdoor seating'],
                rating: 4
            },
            {
                title: 'Great Northwest',
                category: 'View Cafe',
                location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/Great+Northwest+Cafe+San+Juan+La+Union+Philippines',
                image: 'great.jpg',
                desc: 'The most spectacular sunset view in La Union. Perched with an unobstructed view of the South China Sea — perfect for craft beers as the sky turns orange and pink.',
                facts: ['Unobstructed sea views', 'Prime sunset seating', 'Craft beers & cocktails', 'Weekend live music', 'Full food menu'],
                rating: 5
            },
            {
                title: 'Surftown Cafe',
                category: 'All-Day Cafe',
                location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/Surftown+Cafe+San+Juan+La+Union+Philippines',
                image: 'surf cafe.jpg',
                desc: 'The surfer\'s morning ritual spot. Open from early dawn with hearty breakfast burritos, cold brew, and fresh acai bowls to fuel your session.',
                facts: ['Open from 6AM', 'Post-surf breakfast spot', 'Acai bowls & burritos', 'Cold brew on tap', 'Surf community hangout'],
                rating: 4
            }
        ]
    };

    /* ============================================================
       1. HAMBURGER / MOBILE SIDEBAR
    ============================================================ */
    const hamburgerBtn = $('hamburgerBtn');
    const sidebarEl    = $('sidebar');
    const overlayEl    = $('sidebarOverlay');

    function openMobileSidebar() {
        if (!sidebarEl) return;
        sidebarEl.classList.add('mobile-open');
        if (overlayEl)    overlayEl.classList.add('active');
        if (hamburgerBtn) {
            hamburgerBtn.classList.add('open');
            hamburgerBtn.setAttribute('aria-expanded', 'true');
        }
        document.body.style.overflow = 'hidden';
    }

    function closeMobileSidebar() {
        if (!sidebarEl) return;
        sidebarEl.classList.remove('mobile-open');
        if (overlayEl)    overlayEl.classList.remove('active');
        if (hamburgerBtn) {
            hamburgerBtn.classList.remove('open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function () {
            sidebarEl.classList.contains('mobile-open')
                ? closeMobileSidebar()
                : openMobileSidebar();
        });
    }

    if (overlayEl) overlayEl.addEventListener('click', closeMobileSidebar);

    document.querySelectorAll('.sidebar nav a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 900) closeMobileSidebar();
        });
    });

    /* ============================================================
       2. SIDEBAR COLLAPSE (desktop only)
    ============================================================ */
    const mainEl      = $('main');
    const toggleBtn   = $('sidebarToggle');
    const toggleIcon  = $('toggleIcon');
    const toggleLabel = $('toggleLabel');
    let isCollapsed   = false;

    if (toggleBtn && sidebarEl && mainEl) {
        toggleBtn.addEventListener('click', function () {
            isCollapsed = !isCollapsed;
            sidebarEl.classList.toggle('collapsed', isCollapsed);
            mainEl.classList.toggle('shifted', isCollapsed);
            if (toggleIcon)  toggleIcon.textContent  = isCollapsed ? '▶' : '◀';
            if (toggleLabel) toggleLabel.textContent = isCollapsed ? 'Expand' : 'Collapse';
        });
    }

    /* ============================================================
       3. DARK MODE
    ============================================================ */
    const darkToggleBtn = document.querySelector('.dark-toggle-btn');

    function applyDarkMode(on) {
        document.body.classList.toggle('dark-mode', on);
        if (darkToggleBtn) {
            const iconSpan  = darkToggleBtn.querySelector('.nav-icon');
            const labelSpan = darkToggleBtn.querySelector('.btn-label');
            if (iconSpan)  iconSpan.textContent  = on ? '☀️' : '🌙';
            if (labelSpan) labelSpan.textContent = on ? 'Light Mode' : 'Dark Mode';
        }
    }

    applyDarkMode(localStorage.getItem('elyu-dark') === 'true');

    if (darkToggleBtn) {
        darkToggleBtn.addEventListener('click', function () {
            const nowDark = !document.body.classList.contains('dark-mode');
            applyDarkMode(nowDark);
            localStorage.setItem('elyu-dark', nowDark);
        });
    }

    /* ============================================================
       4. SMOOTH NAV & ACTIVE HIGHLIGHT
    ============================================================ */
    const navLinks = document.querySelectorAll('.sidebar nav a');
    const sections = document.querySelectorAll('section');

    function setActiveLink(id) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === id) {
                link.style.background = 'var(--sunset-orange)';
                link.style.color      = 'white';
                link.style.transform  = 'translateX(8px)';
            } else {
                link.style.background = 'rgba(255,255,255,0.06)';
                link.style.color      = 'var(--ocean-mist)';
                link.style.transform  = 'translateX(0)';
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            e.preventDefault();
            const target = document.getElementById(href.replace('#', ''));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveLink(href.replace('#', ''));
        });
    });

    window.addEventListener('scroll', function () {
        let current  = '';
        const scroll = window.scrollY + 200;
        sections.forEach(sec => {
            if (scroll >= sec.offsetTop && scroll < sec.offsetTop + sec.clientHeight)
                current = sec.getAttribute('id');
        });
        if (current) setActiveLink(current);
    }, { passive: true });

    setTimeout(() => window.dispatchEvent(new Event('scroll')), 100);

    /* ============================================================
       5. MODAL
    ============================================================ */
    const modal              = $('infoModal');
    const modalCarousel      = $('modalCarousel');
    const carouselTrack      = $('carouselTrack');
    const carouselPrev       = $('carouselPrev');
    const carouselNext       = $('carouselNext');
    const carouselIndicators = $('carouselIndicators');
    const modalBanner        = $('modalBanner');
    const modalCategory      = $('modalCategory');
    const modalTitle         = $('modalTitle');
    const modalLocation      = $('modalLocation');
    const modalDesc          = $('modalDesc');
    const modalRestaurants   = $('modalRestaurants');
    const modalFacts         = $('modalFacts');
    const modalRating        = $('modalRating');
    const modalActions       = $('modalActions');
    const modalClose         = $('modalClose');

    let currentSlide = 0;
    let slideTotal   = 0;

    function goToSlide(index) {
        if (!carouselTrack) return;
        currentSlide = Math.max(0, Math.min(index, slideTotal - 1));
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        document.querySelectorAll('.carousel-dot-sm').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    if (carouselPrev) carouselPrev.addEventListener('click', e => { e.stopPropagation(); goToSlide(currentSlide > 0 ? currentSlide - 1 : slideTotal - 1); });
    if (carouselNext) carouselNext.addEventListener('click', e => { e.stopPropagation(); goToSlide(currentSlide < slideTotal - 1 ? currentSlide + 1 : 0); });

    function buildCarousel(images) {
        if (!carouselTrack || !carouselIndicators) return;
        carouselTrack.innerHTML      = '';
        carouselIndicators.innerHTML = '';
        slideTotal   = images.length;
        currentSlide = 0;
        images.forEach((src, i) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.style.backgroundImage = `url('${src}')`;
            carouselTrack.appendChild(slide);
            const dot = document.createElement('button');
            dot.className = 'carousel-dot-sm' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', e => { e.stopPropagation(); goToSlide(i); });
            carouselIndicators.appendChild(dot);
        });
        carouselTrack.style.transform = 'translateX(0)';
        if (modalCarousel) modalCarousel.classList.add('active');
        if (modalBanner)   modalBanner.classList.remove('active');
    }

    function buildBanner(imgUrl) {
        if (!modalBanner) return;
        modalBanner.style.backgroundImage    = `url('${imgUrl}')`;
        modalBanner.style.height             = '260px';
        modalBanner.style.width              = '100%';
        modalBanner.style.backgroundSize     = 'cover';
        modalBanner.style.backgroundPosition = 'center';
        modalBanner.classList.add('active');
        if (modalCarousel) modalCarousel.classList.remove('active');
    }

    function buildRestaurants(restaurants) {
        if (!modalRestaurants) return;
        if (!restaurants || restaurants.length === 0) { modalRestaurants.innerHTML = ''; return; }
        const cards = restaurants.map(r => `
            <div class="restaurant-card">
                <div class="restaurant-name">🍽️ ${r.name}</div>
                <div class="restaurant-desc">${r.desc}</div>
                <div class="restaurant-addr">${r.address}</div>
            </div>`).join('');
        modalRestaurants.innerHTML = `<div class="restaurants-label">🏪 Where to Find It</div><div class="restaurant-cards">${cards}</div>`;
    }

    function buildActions(type, data) {
        if (!modalActions) return;
        modalActions.innerHTML = '';
        if ((type === 'beaches' || type === 'cafes') && data.mapUrl) {
            const a = document.createElement('a');
            a.href = data.mapUrl; a.target = '_blank'; a.rel = 'noopener noreferrer';
            a.className = 'btn-ocean'; a.innerHTML = '🗺️ View Location';
            modalActions.appendChild(a);
        }
        if (type === 'stays') {
            if (data.scheduleUrl) {
                const b = document.createElement('button');
                b.className = 'btn-small'; b.innerHTML = '📅 Schedule Now';
                b.addEventListener('click', () => { window.location.href = data.scheduleUrl; });
                modalActions.appendChild(b);
            }
            if (data.reviewUrl) {
                const b = document.createElement('button');
                b.className = 'btn-ocean'; b.innerHTML = '⭐ Review';
                b.addEventListener('click', () => { window.location.href = data.reviewUrl; });
                modalActions.appendChild(b);
            }
        }
    }

    function openModal(type, index) {
        const data = INFO_DATA[type] && INFO_DATA[type][index];
        if (!data) return;
        type === 'beaches' && data.images ? buildCarousel(data.images) : buildBanner(data.image);
        if (modalCategory) modalCategory.textContent = data.category;
        if (modalTitle)    modalTitle.textContent    = data.title;
        if (modalLocation) modalLocation.textContent = data.location;
        if (modalDesc)     modalDesc.textContent     = data.desc;
        buildRestaurants(data.restaurants || null);
        if (modalFacts) modalFacts.innerHTML = (data.facts || []).map(f => `<span class="fact-tag">${f}</span>`).join('');
        if (modalRating) {
            const stars = '★'.repeat(data.rating) + '☆'.repeat(5 - data.rating);
            modalRating.innerHTML = `<span class="stars">${stars}</span> ${data.rating}.0 / 5.0 &nbsp;·&nbsp; Highly Recommended`;
        }
        buildActions(type, data);
        if (modal) { modal.classList.add('active'); document.body.style.overflow = 'hidden'; }
    }

    function closeModal() {
        if (modal) modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modal)      modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    /* ============================================================
       6. CARD CLICKS — works on mobile and desktop
    ============================================================ */
    document.addEventListener('click', function (e) {
        const slide = e.target.closest('.slides li[data-info]');
        if (slide) { openModal(slide.dataset.info, parseInt(slide.dataset.index)); return; }

        const card = e.target.closest('.gallery-card[data-info]');
        if (card) { openModal(card.dataset.info, parseInt(card.dataset.index)); return; }
    });

}); // end DOMContentLoaded
