/* ============================================================
   ELYU - La Union Tourism Website
   JavaScript v2: Hamburger Sidebar, Beach Carousel, Food
   Restaurants, Staycation Schedule+Review, Cafe Maps, Footer
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       HELPERS
    ============================================================ */
    const $ = id => document.getElementById(id);

    /* ============================================================
       DATA
    ============================================================ */
    const INFO_DATA = {

        /* ---- BEACHES ---- */
        beaches: [
            {
                title: 'San Juan Beach',
                category: 'Beach Destination',
                location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/San+Juan+Beach+La+Union+Philippines',
                images: [
                    "La Union 2024.jpg",
                    "surf1.jpg",
                    "surf2.jpg"
                ],
                desc: 'San Juan is the undisputed surfing capital of Northern Philippines. With consistent swells hitting the shore year-round, it attracts beginners and veteran surfers alike. The vibe here is laid-back and bohemian, with surf shacks, reggae music, and ocean sunsets that never get old.',
                facts: ['Best surf months: Oct–Feb', 'Consistent 3–6 ft waves', 'Beginner-friendly breaks', 'Annual surf competitions', 'Night market every weekend'],
                rating: 5
            },
            {
                title: 'Bauang Beach',
                category: 'Beach Destination',
                location: '📍 Bauang, La Union',
                mapUrl: 'https://www.google.com/maps/search/Bauang+Beach+La+Union+Philippines',
                images: [
                    "download (5).jpg",
                    "download (4).jpg",
                    "calm.jpg"
                ],
                desc: 'Bauang offers calm, family-friendly waters perfect for swimming and relaxed beach days. Lined with resorts and beach clubs, it\'s ideal for day trips or weekend staycations from Manila. The sunset here is absolutely breathtaking.',
                facts: ['Calm swimming waters', 'Multiple beach resorts', '5 hrs drive from Manila', 'Beachfront dining', 'Ideal for families'],
                rating: 4
            },
            {
                title: 'Darigayos Cove',
                category: 'Hidden Gem',
                location: '📍 Luna, La Union',
                mapUrl: 'https://www.google.com/maps/search/Darigayos+Cove+Luna+La+Union+Philippines',
                images: [
                    "Pebble Beach Elyu.jpg",
                    'stone.jpg',
                    'stones.jpg'
                ],
                desc: 'Darigayos Cove is a secluded paradise tucked away in Luna. The dramatic rock formations and crystal-clear emerald waters make it feel like a hidden world. It\'s perfect for snorkeling, cliff jumping, and exploring sea caves.',
                facts: ['Crystal-clear waters', 'Rock formation snorkeling', 'Sea cave exploration', 'Less crowded', 'Cliff jumping spots'],
                rating: 5
            },
            {
                title: 'Pebble Beach',
                category: 'Unique Beach',
                location: '📍 Santo Tomas, La Union',
                mapUrl: 'https://www.google.com/maps/search/Pebble+Beach+Santo+Tomas+La+Union+Philippines',
                images: [
                    "download (2).jpg",
                    'gg.jpg',
                    'ggs.jpg'
                ],
                desc: 'Unlike the typical sandy shores, Pebble Beach is covered with smooth, polished stones shaped by years of ocean waves. It\'s a truly unique experience — the sound of waves rolling over pebbles is incredibly soothing and meditative.',
                facts: ['Unique pebble shoreline', 'Ideal for photography', 'Calming wave sounds', 'Great for reflection walks', 'Accessible by vehicle'],
                rating: 4
            },
            {
                title: 'Luna Beach',
                category: 'Peaceful Retreat',
                location: '📍 Luna, La Union',
                mapUrl: 'https://www.google.com/maps/search/Luna+Beach+La+Union+Philippines',
                images: [
                    'luna.jpg',
                    'lunas.jpg',
                    'lunase.jpg'
                ],
                desc: 'Luna Beach is the serene escape you never knew you needed. Far from the bustling tourist crowds, it\'s the perfect spot for morning walks, yoga sessions by the water, or simply watching the world slow down.',
                facts: ['Quiet & uncrowded', 'Perfect for sunrise walks', 'Near Darigayos Cove', 'Great beach camping', 'Local fishermen vibes'],
                rating: 4
            }
        ],

        /* ---- FOOD ---- */
        food: [
            {
                title: 'Baluarte',
                category: 'Local Cuisine',
                location: '📍 Various spots, La Union',
                image: 'food.jpg',
                desc: 'Baluarte is a beloved La Union specialty — grilled meat (usually pork or chicken) marinated in a unique blend of native spices, citrus, and fermented ingredients. It\'s smoky, tangy, and absolutely addictive, best enjoyed with steaming white rice.',
                facts: ['Pork or chicken variants', 'Slow-grilled to perfection', 'Best paired with sinanglaw', 'Available in wet markets', 'Ilocano heritage dish'],
                rating: 5,
                restaurants: [
                    {
                        name: 'Sinanglawan ni Lola',
                        desc: 'Famous for traditional Ilocano grills and authentic baluarte cooked over live charcoal.',
                        address: '📍 Quezon Ave., San Fernando City, La Union'
                    },
                    {
                        name: 'Kusina ni Manang',
                        desc: 'A homestyle restaurant beloved by locals for its market-fresh baluarte marinated overnight.',
                        address: '📍 Brgy. Catbangen, San Fernando, La Union'
                    },
                    {
                        name: 'The Grill House La Union',
                        desc: 'Open-air barbecue spot serving various Ilocano grills including their signature baluarte platter.',
                        address: '📍 National Highway, San Juan, La Union'
                    }
                ]
            },
            {
                title: 'Pindang',
                category: 'Local Cuisine',
                location: '📍 San Fernando City, La Union',
                image: 'pindand f.jpg',
                desc: 'Pindang is salted and dried fish — a staple of the Ilocano breakfast table. Pan-fried to golden crispness and paired with garlic rice and tomatoes, it\'s the ultimate comfort food that locals and tourists crave.',
                facts: ['Classic Ilocano breakfast', 'Various fish varieties', 'Best with garlic sinangag', 'Sold in tiangge markets', 'Sun-dried traditional method'],
                rating: 4,
                restaurants: [
                    {
                        name: 'Amianan Breakfast Turo-Turo',
                        desc: 'Canteen-style eatery that serves an authentic silog breakfast with fresh-from-market pindang daily.',
                        address: '📍 Public Market Area, San Fernando City, La Union'
                    },
                    {
                        name: 'Lola Nena\'s Tapsilog House',
                        desc: 'A tiny but iconic spot run by a third-generation Ilocano family; their pindang is sun-dried in-house.',
                        address: '📍 Quezon St., Bauang, La Union'
                    }
                ]
            },
            {
                title: 'Basi Wine',
                category: 'Traditional Drink',
                location: '📍 San Fernando City, La Union',
                image: 'base wine.jpg',
                desc: 'Basi is an ancient fermented sugarcane wine that dates back to pre-colonial times. It has a unique sweet-sour taste with earthy undertones. The famous Basi Revolt of 1807 was sparked when Spanish colonizers monopolized its production — a testament to how deeply this drink runs in Ilocano culture.',
                facts: ['Pre-colonial origin', 'Sugarcane fermented', 'Symbol of Ilocano identity', 'Sparked the Basi Revolt', 'Available in souvenir shops'],
                rating: 5,
                restaurants: [
                    {
                        name: 'Bodega de Basi',
                        desc: 'A heritage wine house offering tastings and bottles of traditionally brewed basi alongside Ilocano dishes.',
                        address: '📍 Cabuloan, Paoay-inspired district, San Fernando, La Union'
                    },
                    {
                        name: 'La Union Heritage Resto-Bar',
                        desc: 'Craft cocktails and traditional basi served with a side of local history and live folk music.',
                        address: '📍 Quezon Ave., San Fernando City, La Union'
                    }
                ]
            },
            {
                title: 'Inasin',
                category: 'Local Cuisine',
                location: '📍 Coastal towns, La Union',
                image: 'inasin.jpg',
                desc: 'Inasin is fresh fish rubbed generously with coarse rock salt and grilled over open charcoal flames. The simple preparation lets the natural sweetness of fresh-catch La Union fish shine through. It\'s beach food at its purest.',
                facts: ['Fresh local catch', 'Rock salt seasoning only', 'Charcoal-grilled', 'Best eaten beachside', 'Often caught same day'],
                rating: 4,
                restaurants: [
                    {
                        name: 'Seaside Grill & Seafood',
                        desc: 'Beachfront restaurant where you pick your fish from a live display tank and watch it grilled to order.',
                        address: '📍 Urbiztondo Beach, San Juan, La Union'
                    },
                    {
                        name: 'Dalampasigan Seafood House',
                        desc: 'Famous for their inasin platter with four varieties of fresh catch, served with native vinegar dips.',
                        address: '📍 Brgy. Ili Norte, Bauang, La Union'
                    },
                    {
                        name: 'Bangkero\'s Fish Grill',
                        desc: 'Run by local fishermen families; the catch is harvested daily and served grilled on bamboo plates.',
                        address: '📍 Darigayos, Luna, La Union'
                    }
                ]
            }
        ],

        /* ---- STAYCATIONS ---- */
        stays: [
            {
                title: 'The Circle Hostel',
                category: 'Surf Hostel',
                location: '📍 San Juan, La Union',
                scheduleUrl: 'scheduling.html',
                reviewUrl: 'reviews.html',
                image: 'circle.jpg',
                desc: 'The Circle Hostel is where surf culture meets community living. Located right on the beachfront in San Juan, it offers surf lessons, board rentals, and a vibrant hostel atmosphere that attracts young travelers from all over. The rooftop social area is legendary.',
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
                desc: 'Aureo is the premium beach resort experience in La Union. With infinity pools overlooking the ocean, spa services, fine dining, and spacious rooms, it\'s the go-to destination for couples and families who want to indulge. Sunsets from the poolside bar are unmatched.',
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
                desc: 'Built for surfers, by surfers — San Juan Surf Resort combines comfortable accommodations with world-class wave access. Daily surf reports, certified instructors, and equipment rental make it the ultimate hub for anyone wanting to seriously improve their surfing.',
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
                desc: 'Thunderbird is a full-scale resort destination featuring a casino, 18-hole golf course, multiple dining venues, and stunning ocean views. It\'s the most complete resort experience in La Union, ideal for corporate events and luxury getaways.',
                facts: ['Casino & gaming', '18-hole golf course', 'Multiple restaurants', 'Conference facilities', 'Helipad access'],
                rating: 4
            }
        ],

        /* ---- CAFES ---- */
        cafes: [
            {
                title: 'El Union Coffee',
                category: 'Specialty Cafe',
                location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/El+Union+Coffee+San+Juan+La+Union+Philippines',
                image: 'El Union Coffee.jpg',
                desc: 'El Union is arguably the cafe that put La Union on the specialty coffee map. Famous for its dirty horchata — a blend of cold brew and rice milk — and its cool, artsy atmosphere, it draws coffee pilgrims from Manila and beyond. The vibe is bohemian surf-meets-third-wave coffee.',
                facts: ['Famous dirty horchata', 'Single-origin pour overs', 'Surf culture aesthetic', 'Alfresco & indoor seating', 'Coffee & merch shop'],
                rating: 5
            },
            {
                title: 'Little Yellow House',
                category: 'Dessert Cafe',
                location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/Little+Yellow+House+San+Juan+La+Union+Philippines',
                image: 'yellow.jpg',
                desc: 'Little Yellow House is a charming dessert cafe that became an Instagram sensation. Their unique creations — from ube lattes to buko pandan waffles — are as beautiful as they are delicious. The yellow facade and fairy lights make it incredibly photogenic.',
                facts: ['Instagram-famous spot', 'Creative dessert drinks', 'Ube & local flavor specials', 'Fairy-light ambiance', 'Cute outdoor seating'],
                rating: 4
            },
            {
                title: 'Great Northwest',
                category: 'View Cafe',
                location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/Great+Northwest+Cafe+San+Juan+La+Union+Philippines',
                image: 'great.jpg',
                desc: 'Great Northwest offers what might be the most spectacular sunset view in all of La Union. Perched with an unobstructed view of the South China Sea, it\'s the perfect place to end your day with a craft beer or cocktail as the sky transforms into a palette of orange and pink.',
                facts: ['Unobstructed sea views', 'Prime sunset seating', 'Craft beers & cocktails', 'Weekend live music', 'Full food menu'],
                rating: 5
            },
            {
                title: 'Surftown Cafe',
                category: 'All-Day Cafe',
                location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/Surftown+Cafe+San+Juan+La+Union+Philippines',
                image: 'surf cafe.jpg',
                desc: 'Surftown Cafe is the surfer\'s morning ritual spot. Open from early dawn, it serves hearty breakfast burritos, cold brew, and fresh açai bowls to fuel your session in the water. It\'s casual, energetic, and totally unpretentious.',
                facts: ['Open from 6AM', 'Post-surf breakfast spot', 'Açai bowls & burritos', 'Cold brew on tap', 'Surf community hangout'],
                rating: 4
            }
        ]
    };

    /* ============================================================
       1. HAMBURGER / MOBILE SIDEBAR
    ============================================================ */
    const hamburgerBtn  = $('hamburgerBtn');
    const sidebarEl     = $('sidebar');
    const overlayEl     = $('sidebarOverlay');

    function openMobileSidebar() {
        sidebarEl.classList.add('mobile-open');
        overlayEl.classList.add('active');
        hamburgerBtn.classList.add('open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileSidebar() {
        sidebarEl.classList.remove('mobile-open');
        overlayEl.classList.remove('active');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    hamburgerBtn.addEventListener('click', function () {
        sidebarEl.classList.contains('mobile-open') ? closeMobileSidebar() : openMobileSidebar();
    });

    overlayEl.addEventListener('click', closeMobileSidebar);

    // Close sidebar when a nav link is clicked on mobile
    document.querySelectorAll('.sidebar nav a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 900) closeMobileSidebar();
        });
    });

    /* ============================================================
       2. SIDEBAR COLLAPSE (desktop)
    ============================================================ */
    const mainEl      = $('main');
    const toggleBtn   = $('sidebarToggle');
    const toggleIcon  = $('toggleIcon');
    const toggleLabel = $('toggleLabel');
    let isCollapsed   = false;

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            isCollapsed = !isCollapsed;
            sidebarEl.classList.toggle('collapsed', isCollapsed);
            mainEl.classList.toggle('shifted', isCollapsed);
            toggleIcon.textContent  = isCollapsed ? '▶' : '◀';
            toggleLabel.textContent = isCollapsed ? 'Expand' : 'Collapse';
        });
    }

    
/* ============================================================
       3. DARK MODE
    ============================================================ */
    // Dark Mode Toggle
const darkToggleBtn = document.querySelector('.dark-toggle-btn');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update button text/icon if needed
    if (darkToggleBtn) {
        const iconSpan = darkToggleBtn.querySelector('.nav-icon');
        const labelSpan = darkToggleBtn.querySelector('.btn-label');
        if (isDarkMode) {
            if (iconSpan) iconSpan.textContent = '☀️';
            if (labelSpan) labelSpan.textContent = 'Light Mode';
        } else {
            if (iconSpan) iconSpan.textContent = '🌙';
            if (labelSpan) labelSpan.textContent = 'Dark Mode';
        }
    }
}

// Load saved preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    if (darkToggleBtn) {
        const iconSpan = darkToggleBtn.querySelector('.nav-icon');
        const labelSpan = darkToggleBtn.querySelector('.btn-label');
        if (iconSpan) iconSpan.textContent = '☀️';
        if (labelSpan) labelSpan.textContent = 'Light Mode';
    }
}

// Add click event
if (darkToggleBtn) {
    darkToggleBtn.addEventListener('click', toggleDarkMode);
}

    /* ============================================================
       4. SMOOTH NAV & ACTIVE HIGHLIGHT
    ============================================================ */
    const navLinks = document.querySelectorAll('.sidebar nav a');
    const sections = document.querySelectorAll('section');

    function setActiveLink(id) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
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
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target   = document.getElementById(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveLink(targetId);
        });
    });

    window.addEventListener('scroll', function () {
        let current   = '';
        const scrollPos = window.scrollY + 200;
        sections.forEach(sec => {
            if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.clientHeight)
                current = sec.getAttribute('id');
        });
        if (current) setActiveLink(current);
    });

    setTimeout(() => window.dispatchEvent(new Event('scroll')), 100);

    /* ============================================================
       5. INFO MODAL
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

    /* --- Carousel helpers --- */
    function goToSlide(index) {
        currentSlide = Math.max(0, Math.min(index, slideTotal - 1));
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update dots
        document.querySelectorAll('.carousel-dot-sm').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    carouselPrev.addEventListener('click', function (e) {
        e.stopPropagation();
        goToSlide(currentSlide > 0 ? currentSlide - 1 : slideTotal - 1);
    });

    carouselNext.addEventListener('click', function (e) {
        e.stopPropagation();
        goToSlide(currentSlide < slideTotal - 1 ? currentSlide + 1 : 0);
    });

    /* --- Build carousel slides --- */
    function buildCarousel(images) {
        carouselTrack.innerHTML    = '';
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

        modalCarousel.classList.add('active');
        modalBanner.classList.remove('active');
    }

    /* --- Build single banner --- */
    function buildBanner(imgUrl) {
        modalBanner.style.backgroundImage = `url('${imgUrl}')`;
        modalBanner.style.height          = '260px';
        modalBanner.style.width           = '100%';
        modalBanner.style.backgroundSize  = 'cover';
        modalBanner.style.backgroundPosition = 'center';

        modalBanner.classList.add('active');
        modalCarousel.classList.remove('active');
    }

    /* --- Build restaurant cards (food) --- */
    function buildRestaurants(restaurants) {
        if (!restaurants || restaurants.length === 0) {
            modalRestaurants.innerHTML = '';
            return;
        }

        const cardsHTML = restaurants.map(r => `
            <div class="restaurant-card">
                <div class="restaurant-name">🍽️ ${r.name}</div>
                <div class="restaurant-desc">${r.desc}</div>
                <div class="restaurant-addr">${r.address}</div>
            </div>
        `).join('');

        modalRestaurants.innerHTML = `
            <div class="restaurants-label">🏪 Where to Find It</div>
            <div class="restaurant-cards">${cardsHTML}</div>
        `;
    }

    /* --- Build action buttons --- */
    function buildActions(type, data) {
        modalActions.innerHTML = '';

        if (type === 'beaches' && data.mapUrl) {
            const btn = document.createElement('a');
            btn.href       = data.mapUrl;
            btn.target     = '_blank';
            btn.rel        = 'noopener noreferrer';
            btn.className  = 'btn-ocean';
            btn.innerHTML  = '🗺️ View Location';
            modalActions.appendChild(btn);
        }

        if (type === 'cafes' && data.mapUrl) {
            const btn = document.createElement('a');
            btn.href      = data.mapUrl;
            btn.target    = '_blank';
            btn.rel       = 'noopener noreferrer';
            btn.className = 'btn-ocean';
            btn.innerHTML = '🗺️ View Location';
            modalActions.appendChild(btn);
        }

        if (type === 'stays') {
            if (data.scheduleUrl) {
                const schedBtn = document.createElement('button');
                schedBtn.className  = 'btn-small';
                schedBtn.innerHTML  = '📅 Schedule Now';
                schedBtn.addEventListener('click', function () {
                    window.open(data.scheduleUrl, '_blank');
                });
                modalActions.appendChild(schedBtn);
            }

            if (data.reviewUrl) {
                const revBtn = document.createElement('button');
                revBtn.className  = 'btn-ocean';
                revBtn.innerHTML  = '⭐ Review';
                revBtn.addEventListener('click', function () {
                    window.open(data.reviewUrl, '_blank');
                });
                modalActions.appendChild(revBtn);
            }
        }
    }

    /* --- Open modal --- */
    function openModal(type, index) {
        const data = INFO_DATA[type][index];
        if (!data) return;

        // Image area
        if (type === 'beaches' && data.images && data.images.length > 0) {
            buildCarousel(data.images);
        } else {
            buildBanner(data.image);
        }

        // Text content
        modalCategory.textContent = data.category;
        modalTitle.textContent    = data.title;
        modalLocation.textContent = data.location;
        modalDesc.textContent     = data.desc;

        // Restaurants (food only)
        buildRestaurants(data.restaurants || null);

        // Facts
        modalFacts.innerHTML = (data.facts || [])
            .map(f => `<span class="fact-tag">${f}</span>`)
            .join('');

        // Stars
        const stars = '★'.repeat(data.rating) + '☆'.repeat(5 - data.rating);
        modalRating.innerHTML = `<span class="stars">${stars}</span> ${data.rating}.0 / 5.0 &nbsp;·&nbsp; Highly Recommended`;

        // Action buttons
        buildActions(type, data);

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    /* --- Close modal --- */
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    /* --- Wire up beach slides --- */
    document.querySelectorAll('.slides li').forEach(li => {
        li.addEventListener('click', function () {
            openModal(this.dataset.info, parseInt(this.dataset.index));
        });
    });

    /* --- Wire up gallery cards --- */
    document.querySelectorAll('.gallery-card').forEach(card => {
        card.addEventListener('click', function () {
            openModal(this.dataset.info, parseInt(this.dataset.index));
        });
    });
}); // end DOMContentLoaded