/* ============================================================
   ELYU - La Union Tourism Website
   Fixed for Mobile Clicks
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       HELPERS
    ============================================================ */
    const $ = id => document.getElementById(id);

    /* ============================================================
       DATA (Your existing data here - keep the same)
    ============================================================ */
    const INFO_DATA = {

        /* ---- BEACHES ---- */
        beaches: [
            {
                title: 'San Juan Beach',
                category: 'Beach Destination',
                location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/San+Juan+Beach+La+Union+Philippines',
                images: ["La Union 2024.jpg", "surf1.jpg", "surf2.jpg"],
                desc: 'San Juan is the undisputed surfing capital of Northern Philippines.',
                facts: ['Best surf months: Oct–Feb', 'Consistent 3–6 ft waves', 'Beginner-friendly breaks'],
                rating: 5
            },
            {
                title: 'Bauang Beach',
                category: 'Beach Destination',
                location: '📍 Bauang, La Union',
                mapUrl: 'https://www.google.com/maps/search/Bauang+Beach+La+Union+Philippines',
                images: ["download (5).jpg", "download (4).jpg", "calm.jpg"],
                desc: 'Bauang offers calm, family-friendly waters perfect for swimming.',
                facts: ['Calm swimming waters', 'Multiple beach resorts', 'Family-friendly'],
                rating: 4
            },
            {
                title: 'Darigayos Cove',
                category: 'Hidden Gem',
                location: '📍 Luna, La Union',
                mapUrl: 'https://www.google.com/maps/search/Darigayos+Cove+Luna+La+Union+Philippines',
                images: ["Pebble Beach Elyu.jpg", "stone.jpg", "stones.jpg"],
                desc: 'Darigayos Cove is a secluded paradise with dramatic rock formations.',
                facts: ['Crystal-clear waters', 'Rock formation snorkeling', 'Cliff jumping spots'],
                rating: 5
            },
            {
                title: 'Pebble Beach',
                category: 'Unique Beach',
                location: '📍 Santo Tomas, La Union',
                mapUrl: 'https://www.google.com/maps/search/Pebble+Beach+Santo+Tomas+La+Union+Philippines',
                images: ["download (2).jpg", "gg.jpg", "ggs.jpg"],
                desc: 'Covered with smooth, polished stones shaped by years of ocean waves.',
                facts: ['Unique pebble shoreline', 'Great for photography', 'Calming wave sounds'],
                rating: 4
            },
            {
                title: 'Luna Beach',
                category: 'Peaceful Retreat',
                location: '📍 Luna, La Union',
                mapUrl: 'https://www.google.com/maps/search/Luna+Beach+La+Union+Philippines',
                images: ["luna.jpg", "lunas.jpg", "lunase.jpg"],
                desc: 'Serene escape far from bustling tourist crowds.',
                facts: ['Quiet & uncrowded', 'Perfect for sunrise walks', 'Great beach camping'],
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
                desc: 'Grilled meat marinated in native spices.',
                facts: ['Pork or chicken variants', 'Slow-grilled to perfection', 'Ilocano heritage dish'],
                rating: 5,
                restaurants: [
                    {name: 'Sinanglawan ni Lola', desc: 'Traditional Ilocano grills', address: '📍 Quezon Ave., San Fernando'},
                    {name: 'Kusina ni Manang', desc: 'Homestyle restaurant', address: '📍 Brgy. Catbangen, San Fernando'}
                ]
            },
            {
                title: 'Pindang',
                category: 'Local Cuisine',
                location: '📍 San Fernando City, La Union',
                image: 'pindand f.jpg',
                desc: 'Salted and dried fish, breakfast staple.',
                facts: ['Classic Ilocano breakfast', 'Best with garlic sinangag', 'Sun-dried traditional method'],
                rating: 4,
                restaurants: [
                    {name: 'Amianan Breakfast Turo-Turo', desc: 'Authentic silog breakfast', address: '📍 Public Market Area'}
                ]
            },
            {
                title: 'Basi Wine',
                category: 'Traditional Drink',
                location: '📍 San Fernando City, La Union',
                image: 'base wine.jpg',
                desc: 'Ancient fermented sugarcane wine.',
                facts: ['Pre-colonial origin', 'Sugarcane fermented', 'Symbol of Ilocano identity'],
                rating: 5,
                restaurants: [
                    {name: 'Bodega de Basi', desc: 'Heritage wine house', address: '📍 Cabuloan, San Fernando'}
                ]
            },
            {
                title: 'Inasin',
                category: 'Local Cuisine',
                location: '📍 Coastal towns, La Union',
                image: 'inasin.jpg',
                desc: 'Fresh fish grilled with rock salt.',
                facts: ['Fresh local catch', 'Rock salt seasoning only', 'Charcoal-grilled'],
                rating: 4,
                restaurants: [
                    {name: 'Seaside Grill & Seafood', desc: 'Beachfront restaurant', address: '📍 Urbiztondo Beach, San Juan'}
                ]
            }
        ],

        /* ---- STAYCATIONS ---- */
        stays: [
            {
                title: 'The Circle Hostel', category: 'Surf Hostel', location: '📍 San Juan, La Union',
                scheduleUrl: 'scheduling.html', reviewUrl: 'reviews.html', image: 'circle.jpg',
                desc: 'Beachfront hostel with surf lessons.',
                facts: ['Beachfront location', 'Surf lesson packages', 'Social rooftop deck'],
                rating: 5
            },
            {
                title: 'Aureo Resort', category: 'Luxury Resort', location: '📍 San Fernando City, La Union',
                scheduleUrl: 'scheduling.html', reviewUrl: 'reviews.html', image: 'aureo.jpg',
                desc: 'Premium beach resort with infinity pool.',
                facts: ['Infinity pool', 'Full-service spa', 'Ocean-view rooms'],
                rating: 5
            },
            {
                title: 'San Juan Surf Resort', category: 'Surf Resort', location: '📍 San Juan, La Union',
                scheduleUrl: 'scheduling.html', reviewUrl: 'reviews.html', image: 'san juan.jpg',
                desc: 'Surf-focused resort with certified instructors.',
                facts: ['Steps from the break', 'Certified surf instructors', 'Daily surf forecasts'],
                rating: 4
            },
            {
                title: 'Thunderbird Resort', category: 'Premium Resort', location: '📍 Poro Point, San Fernando',
                scheduleUrl: 'scheduling.html', reviewUrl: 'reviews.html', image: 'thunderbird.jpg',
                desc: 'Full-scale resort with casino and golf course.',
                facts: ['Casino & gaming', '18-hole golf course', 'Helipad access'],
                rating: 4
            }
        ],

        /* ---- CAFES ---- */
        cafes: [
            {
                title: 'El Union Coffee', category: 'Specialty Cafe', location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/El+Union+Coffee+San+Juan+La+Union+Philippines',
                image: 'El Union Coffee.jpg',
                desc: 'Famous for dirty horchata and surf culture vibe.',
                facts: ['Famous dirty horchata', 'Single-origin pour overs', 'Surf culture aesthetic'],
                rating: 5
            },
            {
                title: 'Little Yellow House', category: 'Dessert Cafe', location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/Little+Yellow+House+San+Juan+La+Union+Philippines',
                image: 'yellow.jpg',
                desc: 'Instagram-worthy desserts and drinks.',
                facts: ['Instagram-famous spot', 'Creative dessert drinks', 'Ube specials'],
                rating: 4
            },
            {
                title: 'Great Northwest', category: 'View Cafe', location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/Great+Northwest+Cafe+San+Juan+La+Union+Philippines',
                image: 'great.jpg',
                desc: 'Best sunset view cafe in La Union.',
                facts: ['Unobstructed sea views', 'Prime sunset seating', 'Craft beers'],
                rating: 5
            },
            {
                title: 'Surftown Cafe', category: 'All-Day Cafe', location: '📍 San Juan, La Union',
                mapUrl: 'https://www.google.com/maps/search/Surftown+Cafe+San+Juan+La+Union+Philippines',
                image: 'surf cafe.jpg',
                desc: 'Morning ritual spot for surfers.',
                facts: ['Open from 6AM', 'Post-surf breakfast spot', 'Açai bowls'],
                rating: 4
            }
        ]
    };

    /* ============================================================
       1. HAMBURGER / MOBILE SIDEBAR
    ============================================================ */
    const hamburgerBtn = $('hamburgerBtn');
    const sidebarEl = $('sidebar');
    const overlayEl = $('sidebarOverlay');

    if (hamburgerBtn && sidebarEl && overlayEl) {
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

        document.querySelectorAll('.sidebar nav a').forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 900) closeMobileSidebar();
            });
        });
    }

    /* ============================================================
       2. SIDEBAR COLLAPSE (desktop)
    ============================================================ */
    const mainEl = $('main');
    const toggleBtn = $('sidebarToggle');
    const toggleIcon = $('toggleIcon');
    const toggleLabel = $('toggleLabel');
    let isCollapsed = false;

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            isCollapsed = !isCollapsed;
            sidebarEl.classList.toggle('collapsed', isCollapsed);
            mainEl.classList.toggle('shifted', isCollapsed);
            toggleIcon.textContent = isCollapsed ? '▶' : '◀';
            toggleLabel.textContent = isCollapsed ? 'Expand' : 'Collapse';
        });
    }

    /* ============================================================
       3. DARK MODE
    ============================================================ */
    const darkToggleBtn = document.querySelector('.dark-toggle-btn');

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
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
                link.style.color = 'white';
                link.style.transform = 'translateX(8px)';
            } else {
                link.style.background = 'rgba(255,255,255,0.06)';
                link.style.color = 'var(--ocean-mist)';
                link.style.transform = 'translateX(0)';
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveLink(targetId);
        });
    });

    window.addEventListener('scroll', function () {
        let current = '';
        const scrollPos = window.scrollY + 200;
        sections.forEach(sec => {
            if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.clientHeight)
                current = sec.getAttribute('id');
        });
        if (current) setActiveLink(current);
    });

    setTimeout(() => window.dispatchEvent(new Event('scroll')), 100);

    /* ============================================================
       5. INFO MODAL - FIXED FOR MOBILE
    ============================================================ */
    const modal = $('infoModal');
    const modalCarousel = $('modalCarousel');
    const carouselTrack = $('carouselTrack');
    const carouselPrev = $('carouselPrev');
    const carouselNext = $('carouselNext');
    const carouselIndicators = $('carouselIndicators');
    const modalBanner = $('modalBanner');
    const modalCategory = $('modalCategory');
    const modalTitle = $('modalTitle');
    const modalLocation = $('modalLocation');
    const modalDesc = $('modalDesc');
    const modalRestaurants = $('modalRestaurants');
    const modalFacts = $('modalFacts');
    const modalRating = $('modalRating');
    const modalActions = $('modalActions');
    const modalClose = $('modalClose');

    let currentSlide = 0;
    let slideTotal = 0;

    function goToSlide(index) {
        if (!carouselTrack) return;
        currentSlide = Math.max(0, Math.min(index, slideTotal - 1));
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        document.querySelectorAll('.carousel-dot-sm').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    if (carouselPrev) {
        carouselPrev.addEventListener('click', function (e) {
            e.stopPropagation();
            goToSlide(currentSlide > 0 ? currentSlide - 1 : slideTotal - 1);
        });
    }

    if (carouselNext) {
        carouselNext.addEventListener('click', function (e) {
            e.stopPropagation();
            goToSlide(currentSlide < slideTotal - 1 ? currentSlide + 1 : 0);
        });
    }

    function buildCarousel(images) {
        if (!carouselTrack || !carouselIndicators) return;
        carouselTrack.innerHTML = '';
        carouselIndicators.innerHTML = '';
        slideTotal = images.length;
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
        if (modalBanner) modalBanner.classList.remove('active');
    }

    function buildBanner(imgUrl) {
        if (!modalBanner) return;
        modalBanner.style.backgroundImage = `url('${imgUrl}')`;
        modalBanner.style.height = '260px';
        modalBanner.style.width = '100%';
        modalBanner.style.backgroundSize = 'cover';
        modalBanner.style.backgroundPosition = 'center';
        modalBanner.classList.add('active');
        if (modalCarousel) modalCarousel.classList.remove('active');
    }

    function buildRestaurants(restaurants) {
        if (!modalRestaurants) return;
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
        modalRestaurants.innerHTML = `<div class="restaurants-label">🏪 Where to Find It</div><div class="restaurant-cards">${cardsHTML}</div>`;
    }

    function buildActions(type, data) {
        if (!modalActions) return;
        modalActions.innerHTML = '';
        if ((type === 'beaches' || type === 'cafes') && data.mapUrl) {
            const btn = document.createElement('a');
            btn.href = data.mapUrl;
            btn.target = '_blank';
            btn.rel = 'noopener noreferrer';
            btn.className = 'btn-ocean';
            btn.innerHTML = '🗺️ View Location';
            modalActions.appendChild(btn);
        }
        if (type === 'stays') {
            if (data.scheduleUrl) {
                const schedBtn = document.createElement('button');
                schedBtn.className = 'btn-small';
                schedBtn.innerHTML = '📅 Schedule Now';
                schedBtn.addEventListener('click', () => window.open(data.scheduleUrl, '_blank'));
                modalActions.appendChild(schedBtn);
            }
            if (data.reviewUrl) {
                const revBtn = document.createElement('button');
                revBtn.className = 'btn-ocean';
                revBtn.innerHTML = '⭐ Review';
                revBtn.addEventListener('click', () => window.open(data.reviewUrl, '_blank'));
                modalActions.appendChild(revBtn);
            }
        }
    }

    function openModal(type, index) {
        const data = INFO_DATA[type][index];
        if (!data) return;

        if (type === 'beaches' && data.images && data.images.length > 0) {
            buildCarousel(data.images);
        } else {
            buildBanner(data.image);
        }

        if (modalCategory) modalCategory.textContent = data.category;
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalLocation) modalLocation.textContent = data.location;
        if (modalDesc) modalDesc.textContent = data.desc;

        buildRestaurants(data.restaurants || null);
        
        if (modalFacts) {
            modalFacts.innerHTML = (data.facts || []).map(f => `<span class="fact-tag">${f}</span>`).join('');
        }
        
        const stars = '★'.repeat(data.rating) + '☆'.repeat(5 - data.rating);
        if (modalRating) modalRating.innerHTML = `<span class="stars">${stars}</span> ${data.rating}.0 / 5.0 &nbsp;·&nbsp; Highly Recommended`;
        
        buildActions(type, data);
        
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    /* ============================================================
       6. FIXED MOBILE CLICK HANDLERS
    ============================================================ */
    
    // Use event delegation for better mobile performance
    const beachesContainer = document.getElementById('beaches');
    if (beachesContainer) {
        beachesContainer.addEventListener('click', function(e) {
            // Find the closest li element
            const slide = e.target.closest('.slides li');
            if (slide && slide.dataset.info === 'beaches') {
                e.preventDefault();
                e.stopPropagation();
                const index = parseInt(slide.dataset.index);
                console.log("Beach clicked on mobile:", index);
                openModal('beaches', index);
            }
        });
        
        // Also handle touch events for mobile
        beachesContainer.addEventListener('touchstart', function(e) {
            const slide = e.target.closest('.slides li');
            if (slide && slide.dataset.info === 'beaches') {
                e.preventDefault();
                const index = parseInt(slide.dataset.index);
                openModal('beaches', index);
            }
        });
    }

    // Gallery cards with event delegation
    const galleryContainer = document.querySelector('.gallery-list');
    if (galleryContainer) {
        galleryContainer.addEventListener('click', function(e) {
            const card = e.target.closest('.gallery-card');
            if (card && card.dataset.info) {
                e.preventDefault();
                e.stopPropagation();
                const info = card.dataset.info;
                const index = parseInt(card.dataset.index);
                console.log("Gallery clicked on mobile:", info, index);
                openModal(info, index);
            }
        });
        
        galleryContainer.addEventListener('touchstart', function(e) {
            const card = e.target.closest('.gallery-card');
            if (card && card.dataset.info) {
                e.preventDefault();
                const info = card.dataset.info;
                const index = parseInt(card.dataset.index);
                openModal(info, index);
            }
        });
    }

    console.log("JavaScript loaded - Mobile clicks should work!");
});
