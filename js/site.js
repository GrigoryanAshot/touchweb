"use strict";

// Language management
let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
	currentLanguage = lang;
	localStorage.setItem('language', lang);
	updatePageLanguage();
	updateLanguageDisplay();
}

function updateLanguageDisplay() {
	const langNames = {
		'en': 'Eng',
		'hy': 'Հայ',
		'ru': 'Рус'
	};
	const langFlags = {
		'en': 'images/flags/uk.png',
		'hy': 'images/flags/armenia.png',
		'ru': 'images/flags/russia.png'
	};
	$('.current-lang').text(langNames[currentLanguage] || 'EN');
	$('.current-flag').attr('src', langFlags[currentLanguage] || 'images/flags/uk.png');
}

function updatePageLanguage() {
	if (typeof translations === 'undefined') {
		console.error('Translations not loaded');
		return;
	}
	
	const t = translations[currentLanguage];
	if (!t) {
		console.error('Language not found:', currentLanguage);
		return;
	}
	
	// Update navigation
	$('[data-translate="nav.home"]').text(t.nav.home);
	$('[data-translate="nav.about"]').text(t.nav.about);
	$('[data-translate="nav.gallery"]').text(t.nav.gallery);
	$('[data-translate="nav.services"]').text(t.nav.services);
	$('[data-translate="nav.testimonials"]').text(t.nav.testimonials);
	$('[data-translate="nav.clients"]').text(t.nav.clients);
	$('[data-translate="nav.pricing"]').text(t.nav.pricing);
	$('[data-translate="nav.contact"]').text(t.nav.contact);
	
	// Update banner
	$('[data-translate="banner.title"]').text(t.banner.title);
	$('[data-translate="banner.subtitle"]').text(t.banner.subtitle);
	$('[data-translate="banner.cta"]').text(t.banner.cta);
	
	// Update about section
	$('[data-translate="about.title"]').text(t.about.title);
	$('[data-translate="about.heading"]').text(t.about.heading);
	$('[data-translate="about.subtitle"]').text(t.about.subtitle);
	$('[data-translate="about.html5.title"]').text(t.about.html5.title);
	$('[data-translate="about.html5.desc"]').text(t.about.html5.desc);
	$('[data-translate="about.easy.title"]').text(t.about.easy.title);
	$('[data-translate="about.easy.desc"]').text(t.about.easy.desc);
	$('[data-translate="about.responsive.title"]').text(t.about.responsive.title);
	$('[data-translate="about.responsive.desc"]').text(t.about.responsive.desc);
	$('[data-translate="about.rocket.title"]').text(t.about.rocket.title);
	$('[data-translate="about.rocket.desc"]').text(t.about.rocket.desc);
	
	// Tech Stack
	$('[data-translate="about.techStack.title"]').text(t.about.techStack.title);
	$('[data-translate="about.techStack.heading"]').text(t.about.techStack.heading);
	$('[data-translate="about.techStack.subtitle"]').text(t.about.techStack.subtitle);
	$('[data-translate="about.techStack.frontend.title"]').text(t.about.techStack.frontend.title);
	$('[data-translate="about.techStack.frontend.desc"]').text(t.about.techStack.frontend.desc);
	$('[data-translate="about.techStack.backend.title"]').text(t.about.techStack.backend.title);
	$('[data-translate="about.techStack.backend.desc"]').text(t.about.techStack.backend.desc);
	$('[data-translate="about.techStack.data.title"]').text(t.about.techStack.data.title);
	$('[data-translate="about.techStack.data.desc"]').text(t.about.techStack.data.desc);
	$('[data-translate="about.techStack.quality.title"]').text(t.about.techStack.quality.title);
	$('[data-translate="about.techStack.quality.desc"]').text(t.about.techStack.quality.desc);
	
	// Our Story
	$('[data-translate="about.ourStory.title"]').text(t.about.ourStory.title);
	$('[data-translate="about.ourStory.heading"]').text(t.about.ourStory.heading);
	$('[data-translate="about.ourStory.subtitle"]').text(t.about.ourStory.subtitle);
	$('[data-translate="about.ourStory.paragraph1"]').text(t.about.ourStory.paragraph1);
	$('[data-translate="about.ourStory.paragraph2"]').text(t.about.ourStory.paragraph2);
	
	// Our Values
	$('[data-translate="about.ourValues.title"]').text(t.about.ourValues.title);
	$('[data-translate="about.ourValues.heading"]').text(t.about.ourValues.heading);
	$('[data-translate="about.ourValues.care.title"]').text(t.about.ourValues.care.title);
	$('[data-translate="about.ourValues.care.desc"]').text(t.about.ourValues.care.desc);
	$('[data-translate="about.ourValues.smart.title"]').text(t.about.ourValues.smart.title);
	$('[data-translate="about.ourValues.smart.desc"]').text(t.about.ourValues.smart.desc);
	$('[data-translate="about.ourValues.teamwork.title"]').text(t.about.ourValues.teamwork.title);
	$('[data-translate="about.ourValues.teamwork.desc"]').text(t.about.ourValues.teamwork.desc);
	$('[data-translate="about.ourValues.results.title"]').text(t.about.ourValues.results.title);
	$('[data-translate="about.ourValues.results.desc"]').text(t.about.ourValues.results.desc);
	
	// Our Process
	$('[data-translate="about.ourProcess.title"]').text(t.about.ourProcess.title);
	$('[data-translate="about.ourProcess.heading"]').text(t.about.ourProcess.heading);
	$('[data-translate="about.ourProcess.subtitle"]').text(t.about.ourProcess.subtitle);
	$('[data-translate="about.ourProcess.discover.title"]').text(t.about.ourProcess.discover.title);
	$('[data-translate="about.ourProcess.discover.desc"]').text(t.about.ourProcess.discover.desc);
	$('[data-translate="about.ourProcess.design.title"]').text(t.about.ourProcess.design.title);
	$('[data-translate="about.ourProcess.design.desc"]').text(t.about.ourProcess.design.desc);
	$('[data-translate="about.ourProcess.develop.title"]').text(t.about.ourProcess.develop.title);
	$('[data-translate="about.ourProcess.develop.desc"]').text(t.about.ourProcess.develop.desc);
	$('[data-translate="about.ourProcess.launch.title"]').text(t.about.ourProcess.launch.title);
	$('[data-translate="about.ourProcess.launch.desc"]').text(t.about.ourProcess.launch.desc);
	
	// In Numbers
	$('[data-translate="about.inNumbers.title"]').text(t.about.inNumbers.title);
	$('[data-translate="about.inNumbers.heading"]').text(t.about.inNumbers.heading);
	$('[data-translate="about.inNumbers.projectsNumber"]').text(t.about.inNumbers.projectsNumber);
	$('[data-translate="about.inNumbers.projects"]').text(t.about.inNumbers.projects);
	$('[data-translate="about.inNumbers.clientsNumber"]').text(t.about.inNumbers.clientsNumber);
	$('[data-translate="about.inNumbers.clients"]').text(t.about.inNumbers.clients);
	$('[data-translate="about.inNumbers.yearsNumber"]').text(t.about.inNumbers.yearsNumber);
	$('[data-translate="about.inNumbers.years"]').text(t.about.inNumbers.years);
	$('[data-translate="about.inNumbers.focus"]').text(t.about.inNumbers.focus);
	
	// Update services section
	$('[data-translate="services.testimonial"]').text(t.services.testimonial);
	$('[data-translate="services.author"]').text(t.services.author);
	$('[data-translate="services.title"]').text(t.services.title);
	$('[data-translate="services.heading"]').text(t.services.heading);
	$('[data-translate="services.subtitle"]').text(t.services.subtitle);
	$('[data-translate="services.text1"]').text(t.services.text1);
	$('[data-translate="services.text2"]').text(t.services.text2);
	$('[data-translate="services.watchVideo"]').text(t.services.watchVideo);
	
	// Update testimonials
	$('[data-translate="testimonials.title"]').text(t.testimonials.title);
	$('[data-translate="testimonials.heading"]').text(t.testimonials.heading);
	$('[data-translate="testimonials.testimonial1.quote"]').text(t.testimonials.testimonial1.quote);
	$('[data-translate="testimonials.testimonial1.author"]').text(t.testimonials.testimonial1.author);
	$('[data-translate="testimonials.testimonial2.quote"]').text(t.testimonials.testimonial2.quote);
	$('[data-translate="testimonials.testimonial2.author"]').text(t.testimonials.testimonial2.author);
	$('[data-translate="testimonials.testimonial3.quote"]').text(t.testimonials.testimonial3.quote);
	$('[data-translate="testimonials.testimonial3.author"]').text(t.testimonials.testimonial3.author);
	
	// Update clients
	$('[data-translate="clients.title"]').text(t.clients.title);
	$('[data-translate="clients.heading"]').text(t.clients.heading);
	$('[data-translate="clients.subtitle"]').text(t.clients.subtitle);
	
	// Update pricing
	$('[data-translate="pricing.title"]').text(t.pricing.title);
	$('[data-translate="pricing.heading"]').text(t.pricing.heading);
	$('[data-translate="pricing.subtitle"]').text(t.pricing.subtitle);
	$('[data-translate="pricing.startingFrom"]').text(t.pricing.startingFrom);
	
	// Landing Pages
	$('[data-translate="pricing.landing.name"]').text(t.pricing.landing.name);
	$('[data-translate="pricing.landing.subtitle"]').text(t.pricing.landing.subtitle);
	$('[data-translate="pricing.landing.description"]').text(t.pricing.landing.description);
	$('[data-translate="pricing.landing.amount"]').text(t.pricing.landing.amount);
	$('[data-translate="pricing.landing.cta"]').text(t.pricing.landing.cta);
	
	// Business Website
	$('[data-translate="pricing.business.name"]').text(t.pricing.business.name);
	$('[data-translate="pricing.business.subtitle"]').text(t.pricing.business.subtitle);
	$('[data-translate="pricing.business.description"]').text(t.pricing.business.description);
	$('[data-translate="pricing.business.amount"]').text(t.pricing.business.amount);
	$('[data-translate="pricing.business.cta"]').text(t.pricing.business.cta);
	
	// E-Commerce
	$('[data-translate="pricing.ecommerce.name"]').text(t.pricing.ecommerce.name);
	$('[data-translate="pricing.ecommerce.subtitle"]').text(t.pricing.ecommerce.subtitle);
	$('[data-translate="pricing.ecommerce.description"]').text(t.pricing.ecommerce.description);
	$('[data-translate="pricing.ecommerce.amount"]').text(t.pricing.ecommerce.amount);
	$('[data-translate="pricing.ecommerce.cta"]').text(t.pricing.ecommerce.cta);
	
	// Update pricing features
	const landingFeatures = t.pricing.landing.features;
	$('[data-translate="pricing.landing.features"]').find('li').each(function(index) {
		if (landingFeatures[index]) {
			$(this).text(landingFeatures[index]);
		}
	});
	
	const businessFeatures = t.pricing.business.features;
	$('[data-translate="pricing.business.features"]').find('li').each(function(index) {
		if (businessFeatures[index]) {
			$(this).text(businessFeatures[index]);
		}
	});
	
	const ecommerceFeatures = t.pricing.ecommerce.features;
	$('[data-translate="pricing.ecommerce.features"]').find('li').each(function(index) {
		if (ecommerceFeatures[index]) {
			$(this).text(ecommerceFeatures[index]);
		}
	});
	
	// Update footer
	$('[data-translate="footer.copyright"]').html(t.footer.copyright);
	$('[data-translate="footer.companyName"]').text(t.footer.companyName);
	$('[data-translate="footer.companyDescription"]').text(t.footer.companyDescription);
	$('[data-translate="footer.quickLinks"]').text(t.footer.quickLinks);
	$('[data-translate="footer.ourServices"]').text(t.footer.ourServices);
	$('[data-translate="footer.getInTouch"]').text(t.footer.getInTouch);
	$('[data-translate="footer.services.webDevelopment"]').text(t.footer.services.webDevelopment);
	$('[data-translate="footer.services.webDesign"]').text(t.footer.services.webDesign);
	$('[data-translate="footer.services.ecommerce"]').text(t.footer.services.ecommerce);
	$('[data-translate="footer.services.mobileResponsive"]').text(t.footer.services.mobileResponsive);
	$('[data-translate="footer.services.seoOptimization"]').text(t.footer.services.seoOptimization);
	$('[data-translate="footer.services.maintenanceSupport"]').text(t.footer.services.maintenanceSupport);
	$('[data-translate="footer.location"]').text(t.footer.location);
	$('[data-translate="footer.allRightsReserved"]').text(t.footer.allRightsReserved);
	
	// Update contact form
	if (t.contact) {
		$('[data-translate="contact.getInTouch"]').text(t.contact.getInTouch);
		$('[data-translate="contact.heading"]').text(t.contact.heading);
		$('[data-translate="contact.subtitle"]').text(t.contact.subtitle);
		$('[data-translate-placeholder="contact.namePlaceholder"]').attr('placeholder', t.contact.namePlaceholder);
		$('[data-translate-placeholder="contact.emailPlaceholder"]').attr('placeholder', t.contact.emailPlaceholder);
		$('[data-translate-placeholder="contact.subjectPlaceholder"]').attr('placeholder', t.contact.subjectPlaceholder);
		$('[data-translate-placeholder="contact.messagePlaceholder"]').attr('placeholder', t.contact.messagePlaceholder);
		$('[data-translate="contact.sendButton"]').text(t.contact.sendButton);
		$('[data-translate="contact.address"]').text(t.contact.address);
		$('[data-translate="contact.phone"]').text(t.contact.phone);
		$('[data-translate="contact.email"]').text(t.contact.email);
	}
	
	// Update document language
	document.documentElement.lang = currentLanguage;
}

$(document).ready(function () {
	// Initialize language
	updatePageLanguage();
	
	// Language switcher dropdown
	$('.language-switcher-btn').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).closest('.language-switcher').toggleClass('active');
	});
	
	// Close dropdown when clicking outside
	$(document).on('click', function(e) {
		if (!$(e.target).closest('.language-switcher').length) {
			$('.language-switcher').removeClass('active');
		}
	});
	
	// Language selection
	$('.language-dropdown a').on('click', function(e) {
		e.preventDefault();
		const lang = $(this).data('lang');
		const flag = $(this).data('flag');
		setLanguage(lang);
		if (flag) {
			$('.current-flag').attr('src', flag);
		}
		$('.language-switcher').removeClass('active');
	});
	
	// Set initial language display
	updateLanguageDisplay();

	/* Set active navigation link based on current page */
	function setActiveNavLink() {
		// Get current page filename
		var currentPage = window.location.pathname.split('/').pop() || 'index.html';
		
		// Remove active class from all nav links
		$('#nav-main a, #nav-mobile a').removeClass('active');
		
		// Add active class to matching link
		$('#nav-main a[href="' + currentPage + '"], #nav-mobile a[href="' + currentPage + '"]').addClass('active');
		
		// Special case for index.html - also check for empty or just "/"
		if (currentPage === '' || currentPage === 'index.html' || currentPage === '/') {
			$('#nav-main a[href="index.html"], #nav-mobile a[href="index.html"]').addClass('active');
		}
	}

	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Navbar - Always fixed and static at the top */
	if ($('#header').length) {
		// Make navbar always fixed and solid from the start
		$('#header').addClass('nav-solid');
		
		// Ensure it stays fixed - safeguard
		setInterval(function() {
			if (!$('#header').hasClass('nav-solid')) {
				$('#header').addClass('nav-solid');
			}
		}, 1000);
	}

	// Set active nav link on page load
	setActiveNavLink();

	/* Clients Carousel - Enhanced with JavaScript for seamless loop */
	function initClientsCarousel() {
		var $carousel = $('.clients-carousel');
		if ($carousel.length) {
			var items = $carousel.find('.client-logo-item');
			if (items.length > 0) {
				var $wrapper = $carousel.parent();
				
				function calculateAndSetWidths() {
					var containerWidth = $wrapper.width();
					if (containerWidth === 0) return; // Not ready yet
					
					// Set item width to 12.5% of container (8 items visible)
					var itemWidth = containerWidth * 0.125; // 12.5%
					items.css({
						'flex': '0 0 ' + itemWidth + 'px',
						'width': itemWidth + 'px'
					});
					
					// Set carousel width to accommodate all items
					var totalItems = items.length;
					var carouselWidth = itemWidth * totalItems;
					$carousel.css('width', carouselWidth + 'px');
					
					// Calculate animation distance (exactly 10 items = 125% of container)
					var animationDistance = containerWidth * 1.25; // 125% = 10 items
					
					// Update animation to move exactly this distance
					var animationDuration = 10; // seconds
					var keyframes = '@keyframes slide { ' +
						'0% { transform: translateX(0); } ' +
						'100% { transform: translateX(-' + animationDistance + 'px); } ' +
					'}';
					
					// Remove old style if exists
					$('#carousel-keyframes').remove();
					
					// Add new keyframes
					$('<style id="carousel-keyframes">' + keyframes + '</style>').appendTo('head');
					
					console.log('=== CAROUSEL RECALCULATED ===');
					console.log('Container width:', containerWidth, 'px');
					console.log('Item width:', itemWidth, 'px');
					console.log('Carousel width:', carouselWidth, 'px');
					console.log('Animation distance:', animationDistance, 'px (10 items)');
					console.log('Items per visible set: 8');
			}
				
				// Calculate on load and resize
				calculateAndSetWidths();
				$(window).on('resize', function() {
					$carousel.css('animation', 'none');
					setTimeout(function() {
						calculateAndSetWidths();
						setTimeout(function() {
							$carousel.css('animation', 'slide ' + 10 + 's linear infinite');
						}, 50);
					}, 10);
				});
			}
		}
	}
	
	// Initialize carousel
	initClientsCarousel();

	// Set current year in footer
	if ($('#current-year').length) {
		$('#current-year').text(new Date().getFullYear());
	}

	/* 3D Pricing Carousel */
	function initPricingCarousel3D() {
		var $carousel = $('.pricing-carousel-3d');
		var $items = $('.pricing-block-carousel-item');
		var $arrowLeft = $('.pricing-arrow.arrow-left');
		var $arrowRight = $('.pricing-arrow.arrow-right');
		var currentIndex = 1; // Start with middle item (Professional)
		var totalItems = $items.length;
		var isAnimating = false;
		var autoSlideInterval;
		var autoSlideDelay = 5000; // 5 seconds

		if ($items.length === 0) return;

		// Initialize carousel
		function updateCarousel() {
			$items.removeClass('active prev next');
			
			$items.each(function(index) {
				var $item = $(this);
				var diff = index - currentIndex;
				
				if (diff === 0) {
					$item.addClass('active');
				} else if (diff === -1 || (currentIndex === 0 && index === totalItems - 1)) {
					$item.addClass('prev');
				} else if (diff === 1 || (currentIndex === totalItems - 1 && index === 0)) {
					$item.addClass('next');
				}
			});
		}

		// Navigate to specific index
		function goToIndex(index, direction) {
			if (isAnimating) return;
			
			isAnimating = true;
			currentIndex = index;
			
			// Ensure index is within bounds
			if (currentIndex < 0) {
				currentIndex = totalItems - 1;
			} else if (currentIndex >= totalItems) {
				currentIndex = 0;
			}
			
			updateCarousel();
			
			// Reset animation flag after transition
			setTimeout(function() {
				isAnimating = false;
			}, 800);
		}

		// Next slide
		function nextSlide() {
			goToIndex(currentIndex + 1, 'next');
		}

		// Previous slide
		function prevSlide() {
			goToIndex(currentIndex - 1, 'prev');
		}

		// Drag (click and move) support
		var dragStartX = 0;
		var dragEndX = 0;
		var isDragging = false;
		var minDragDistance = 50;

		function handleDragStart(clientX) {
			isDragging = true;
			dragStartX = clientX;
			stopAutoSlide();
		}

		function handleDragMove(clientX) {
			if (!isDragging) return;
			dragEndX = clientX;
		}

		function handleDragEnd() {
			if (!isDragging) return;
			var delta = dragStartX - dragEndX;
			if (Math.abs(delta) > minDragDistance) {
				if (delta > 0) {
					nextSlide();
				} else {
					prevSlide();
				}
			}
			isDragging = false;
			startAutoSlide();
		}

		$('.pricing-carousel-3d-wrapper')
			.on('mousedown', function(e) {
				handleDragStart(e.clientX);
			})
			.on('mousemove', function(e) {
				handleDragMove(e.clientX);
			})
			.on('mouseup mouseleave', function() {
				handleDragEnd();
			});

		// Touch support for mobile swipe
		var touchStartX = 0;
		var touchEndX = 0;
		var minSwipeDistance = 50;

		$('.pricing-carousel-3d-wrapper').on('touchstart', function(e) {
			touchStartX = e.originalEvent.touches[0].clientX;
			stopAutoSlide();
		});

		$('.pricing-carousel-3d-wrapper').on('touchend', function(e) {
			touchEndX = e.originalEvent.changedTouches[0].clientX;
			var swipeDistance = touchStartX - touchEndX;
			
			if (Math.abs(swipeDistance) > minSwipeDistance) {
				if (swipeDistance > 0) {
					// Swipe left - next
					nextSlide();
				} else {
					// Swipe right - previous
					prevSlide();
				}
			}
			
			startAutoSlide();
		});

		// Arrow navigation
		$arrowLeft.on('click', function() {
			stopAutoSlide();
			prevSlide();
			startAutoSlide();
		});

		$arrowRight.on('click', function() {
			stopAutoSlide();
			nextSlide();
			startAutoSlide();
		});

		// Auto-slider
		function startAutoSlide() {
			stopAutoSlide();
			autoSlideInterval = setInterval(function() {
				nextSlide();
			}, autoSlideDelay);
		}

		function stopAutoSlide() {
			if (autoSlideInterval) {
				clearInterval(autoSlideInterval);
				autoSlideInterval = null;
			}
		}

		// Pause on hover
		$('.pricing-carousel-3d-wrapper').hover(
			function() {
				stopAutoSlide();
			},
			function() {
				startAutoSlide();
			}
		);

		// Initialize
		updateCarousel();
		startAutoSlide();

		// Cleanup on page unload
		$(window).on('beforeunload', function() {
			stopAutoSlide();
		});
	}

	// Initialize 3D carousel
	initPricingCarousel3D();

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});
