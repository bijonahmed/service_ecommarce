//------------ Table of Contents -----------------

// Section
// --- Header ----
// ------ Add fixed header ------
// ------ Open menu mobile ------
// --- Map ---
// ------ Initial leaflet map ------
// ------ Initial marker array ------
// --- Brand ----
// ------ List brand ------
// --- Categories ----
// ------ Popular categories home3 ------
// --- Freelancers ----
// ------ Expert Freelancers home5 ------
// --- Projects ----
// ------ Projects home6 ------
// --- Services ----
// ------ Active menu tab ------
// ------ Popular services home2 ------
// ------ Feature services home3 ------
// ------ List thumb images service detail ------
// --- Testimonials ----
// ------ List testimonials 2 item ------
// ------ List testimonials 3 item ------
// ------ List testimonials center home3 ------
// ------ List testimonials home5 ------
// ------ List testimonials home6 ------
// --- FAQs ----
// --- List location ----
// ------ List location home10 ------
// ------ List location home11 ------
// --- Modal ----
// ------ Open popup ------
// ------ Close popup ------
// ------ Sidebar ------
// ------ Add filter to screen when click ------
// ------ Price range ------
// ------ Age range ------
// ------ Radius range ------
// ------ Handle number delivery popup Apply ------
// ------ Handle change cols number ------

// --- Dashboard ----
// ------ Chart Dashboard ------
// ------ Remove item dashboard ------
// ------ Remove active message ------
// ------ Display preview image when choose file ------
// ------ Handle select category, tool, language ------
// ------ Text editor ------
// ------ Candidates Dashboard: My Portfolio ------

// Components
// --- Select ---
// --- Active Wishlist icon ---
// --- Toggle button ---

// Animation
// --- Toastify ---
// --- Scroll reveal ---


; (function (win, $) {
    // Header 
    // Add fixed header
    const handleFixedHeader = function () {
        const header = $(".header")

        if (window.scrollY > 200) {
            header.addClass("fixed");
            $('.scroll-to-top-btn').addClass("active");
        } else {
            header.removeClass("fixed");
            $('.scroll-to-top-btn').removeClass("active");
        }
    }

    // Open menu mobile
    const handleOpenHeaderMobile = function () {
        const menuMobile = $(".menu_mobile")

        $(".humburger_btn").on("click", function () {
            menuMobile.toggleClass('open')
            $('body').addClass('scroll_locked')
        })

        $(".menu_mobile_close").on("click", function () {
            menuMobile.removeClass('open')
            $('body').removeClass('scroll_locked')
        })

        $('.nav_mobile .nav_item').on("click", function () {
            if (!$(this).hasClass("open")) {
                $(this).addClass("open")
            }
        });

        $('.nav_mobile .sub_nav_mobile .nav_item').on("click", function () {
            if (!$(this).hasClass("open")) {
                $(this).addClass("open")
            }
        });

        $('.sub_nav_mobile .back_btn').on("click", function (e) {
            e.stopPropagation()
            $(this).closest('.nav_item').removeClass('open')
        });
    }

    // Map
    // Initial leaflet map
    if ($('#map').length > 0) {
        var map = L.map('map').setView([51.505, -0.09], 13);

        // Street
        // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     maxZoom: 19,
        //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        // }).addTo(map);

        // CartoDB Positron (Light colors, bright tones):
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://carto.com">CartoDB</a>'
        }).addTo(map);

        // CartoDB Dark Matter (Dark color, dark tone):
        // L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        //     attribution: '&copy; <a href="https://carto.com">CartoDB</a>'
        // }).addTo(map);

        var locateIcon = L.icon({
            iconUrl: '/assets/images/location/icon.png',
            iconSize: [60, 60], // size of the icon
            popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
        });

        // Initial marker array
        const markers = [
            {
                lat: 51.5001,
                lng: -0.0999,
                companyImg: "./assets/images/company/1.png",
                companyName: "rockstar games london",
                jobName: "Full Stack Developer",
                address: "367 king james street, london, UK"
            },
            {
                lat: 51.5101,
                lng: -0.1555,
                companyImg: "./assets/images/company/2.png",
                companyName: "tech innovators",
                jobName: "frontend developer",
                address: "13 upper grovest, london, United Kingdom"
            },
            {
                lat: 51.5225,
                lng: -0.0111,
                companyImg: "./assets/images/company/3.png",
                companyName: "creative solutions",
                jobName: "UI/UX designer",
                address: "24D3 empson road, west ham, UK"
            }
        ];

        markers.forEach(function (item) {
            var marker = L.marker([item.lat, item.lng], { icon: locateIcon }).addTo(map);

            marker.bindPopup(`
                <a href="jobs-detail1.html" class="jobs_info flex gap-4">
                    <img src=${item.companyImg} alt=${item.companyName} class="jobs_avatar flex-shrink-0 w-15 h-15 rounded-full" />
                    <div href="jobs-detail1.html" class="jobs_detail flex flex-col gap-0.5">
                        <span class="jobs_company text-sm font-semibold text-primary capitalize">${item.companyName}</span>
                        <strong class="jobs_name text-title -style-1 text-black capitalize">${item.jobName}</strong>
                        <div class="jobs_address -style-1 text-secondary">
                            <span class="ph ph-map-pin text-lg"></span>
                            <span class="address caption1 align-top capitalize">${item.address}</span>
                        </div>
                    </div>
                </a>`
            );
        })
    }

    // List brand
    var swiperListBrand = new Swiper(".swiper-list-brand", {
        pagination: { clickable: true, el: ".swiper-pagination" },
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 12,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
            1280: {
                slidesPerView: 6,
                spaceBetween: 0,
            },
        },
    });

    // Popular categories home3
    var swiperPopularCategories = new Swiper(".swiper-popular-categories", {
        navigation: {
            prevEl: ".custom-button-prev",
            nextEl: ".custom-button-next",
        },
        loop: true,
        freeMode: false,
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1320: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });

    // Expert Freelancers home5
    var swiperExpertFreelancers = new Swiper(".swiper-expert_freelancers", {
        navigation: {
            prevEl: ".custom-button-prev3",
            nextEl: ".custom-button-next3",
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1320: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

    // Projects home6
    var swiperProjects6 = new Swiper(".swiper-projects6", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });

    // Active menu tab
    const handleActiveMenu = function () {
        $(".tab_btn").each(function () {
            if ($(this).hasClass("active")) {
                let indicator = $(this).closest('.menu_tab').find(".indicator");
                if (indicator.length > 0) {
                    indicator.css('width', $(this)[0].getBoundingClientRect().width + "px")
                    indicator.css('left', $(this)[0].getBoundingClientRect().left - $(this)[0].closest('.menu').getBoundingClientRect().left + "px")
                }
            }
        })

        $('.tab_btn').on('click', function () {
            // Find parent section include menu, tabs
            const $section = $(this).closest('section, .list_category, .list_tags, .list_pagination');

            // active menu
            if ($section.length > 0) {
                $section.find('.tab_btn').removeClass('active');
                $(this).addClass('active');

                // change indicator
                $(".tab_btn").each(function () {
                    if ($(this).hasClass("active")) {
                        let indicator = $(this).closest('.menu_tab').find(".indicator");
                        if (indicator.length > 0) {
                            indicator.css('width', $(this)[0].getBoundingClientRect().width + "px")
                            indicator.css('left', $(this)[0].getBoundingClientRect().left - $(this)[0].closest('.menu').getBoundingClientRect().left + "px")
                        }
                    }
                })

                // change aria-selected menu
                $section.find('.tab_btn').attr('aria-selected', 'false')
                $(this).attr('aria-selected', 'true')

                // show loading
                $section.find('.tab_list.active').addClass('loading');

                // active tabs
                const $ariaControl = '#' + $(this).attr('aria-controls');

                setTimeout(function () {
                    $($ariaControl).addClass('active').siblings().removeClass('active');

                    // change aria-hidden tabs
                    $section.find('.tab_list').attr('aria-hidden', 'true');
                    $($ariaControl).attr('aria-hidden', 'false');

                    // remove loading
                    $section.find('.tab_list.active').removeClass('loading');
                }, 200)
            }
        })

        // category header when hover
        $('.category_link').on('mouseenter', function () {
            // active menu
            $('.category_block').find('.category_link').removeClass('active');
            $(this).addClass('active');

            // change aria-selected menu
            $('.category_block').find('.category_link').attr('aria-selected', 'false')
            $(this).attr('aria-selected', 'true')

            // active tabs
            const $ariaControl = '#' + $(this).attr('aria-controls');
            $($ariaControl).addClass('active').siblings().removeClass('active');

            // change aria-hidden tabs
            $('.category_block').find('.tab_list').attr('aria-hidden', 'true');
            $($ariaControl).attr('aria-hidden', 'false');
        })
    }

    // Popular services home2
    var swiperPopularServices = new Swiper(".swiper-popular_services", {
        navigation: {
            prevEl: ".custom-button-prev",
            nextEl: ".custom-button-next",
        },
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });

    // Feature services home3
    var swiperPopularCategories = new Swiper(".swiper-feature_services", {
        navigation: {
            prevEl: ".custom-button-prev2",
            nextEl: ".custom-button-next2",
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

    // List thumb images service detail
    var swiperListServiceDetail = new Swiper(".swiper-list-images", {
        loop: true,
        spaceBetween: 12,
        slidesPerView: 3,
        watchSlidesProgress: true,
        breakpoints: {
            640: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
        },
    });

    var swiperThumbServiceDetail = new Swiper(".swiper-thumb-images", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".custom-button-next",
            prevEl: ".custom-button-prev",
        },
        thumbs: {
            swiper: swiperListServiceDetail,
        },
    });

    // List testimonials 2 item
    var swiperListTestimonials = new Swiper(".swiper-list-testimonials.style-2", {
        pagination: { clickable: true, el: ".swiper-pagination" },
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });

    // List testimonials 3 item
    var swiperListTestimonials = new Swiper(".swiper-list-testimonials.style-3", {
        pagination: { clickable: true, el: ".swiper-pagination" },
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    // List testimonials center home3
    $('.list-testimonials.-style-3').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        touchThreshold: 100,
        swipe: true,
        swipeToSlide: true,
        speed: 500,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // List testimonials home5
    var swiperListTestimonials5 = new Swiper(".swiper-list-testimonials5", {
        navigation: {
            prevEl: ".custom-button-prev4",
            nextEl: ".custom-button-next4",
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
    });

    // List testimonials home6
    const handleActiveAvatar6 = function (swiper) {
        const currentSlideIndex = swiper.activeIndex;
        $('.testimonials_avatar').each(function () {
            if (Number($(this).attr('data-item')) === (currentSlideIndex + 1)) {
                $(this).fadeIn(250);
            } else {
                $(this).fadeOut(250);
            }
        })
    }

    var swiperListTestimonials6 = new Swiper(".swiper-list-testimonials6", {
        navigation: {
            prevEl: ".custom-button-testimonials-prev",
            nextEl: ".custom-button-testimonials-next",
        },
        slidesPerView: 1,
        spaceBetween: 24,
        on: {
            init: function () {
                handleActiveAvatar6(this)
            },
            slideChange: function () {
                handleActiveAvatar6(this)
            }
        }
    });

    // List testimonials center home12
    $('.list-testimonials.-style-12').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 100,
        swipe: true,
        swipeToSlide: true,
        speed: 500,
        centerMode: true,
        centerPadding: '250px',
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '150px',
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: '150px',
                }
            },
        ]
    });

    // FAQs
    const handleFaq = function () {
        $(".faq_item .heading, .toggle_item .heading").on('click', function () {
            $(this).closest('.faq_item, .toggle_item').toggleClass('active').siblings('.faq_item, .toggle_item').removeClass('active');
            $(this).closest('.faq_item, .toggle_item').find('.answer, .toggle_menu').slideToggle(300)
            $(this).closest('.faq_item, .toggle_item').siblings('.faq_item, .toggle_item').find('.answer, .toggle_menu').slideUp(300);
        })
    }

    // List location home10
    var swiperLocation = new Swiper(".swiper-location", {
        navigation: {
            prevEl: ".custom-button-prev",
            nextEl: ".custom-button-next",
        },
        loop: true,
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

    // List location home11
    $('.slick-list-location').slick({
        dots: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        touchThreshold: 100,
        swipe: true,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '200px',
        speed: 500,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1840,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    centerPadding: '200px',
                }
            },
        ]
    });

    // Countdown time
    const countDownTime = function (hours, minutes, seconds, infinite) {
        // Set time to countdown
        var duration = (hours * 60 * 60) + (minutes * 60) + (seconds); // change to seconds

        var timer = setInterval(function () {
            var hoursLeft = Math.floor(duration / 3600);
            var minutesLeft = Math.floor((duration % 3600) / 60);
            var secondsLeft = duration % 60;

            // Show time
            $('.countdown_time .hour').text(hoursLeft + "h");
            $('.countdown_time .minute').text(minutesLeft + "m");
            $('.countdown_time .second').text(secondsLeft + "s");

            // decrease time
            duration--;

            if (duration < 0) {
                if (infinite === true) {
                    // reset countdown
                    countDownTime(hours, minutes, seconds, infinite);
                } else {
                    // stop countdown
                    clearInterval(timer);
                }
            }
        }, 1000);
    }

    // Open popup
    const handleOpenPopup = function () {
        const btnOpenPopup = $('.btn_open_popup')

        btnOpenPopup.on("click", function (e) {
            e.preventDefault()

            const popupType = $(this).data('type')
            $('.modal_item').each(function (e) {
                if ($(this).data('type') === popupType) {
                    $(this).addClass('open')
                    $('body').addClass('scroll_locked')
                }
            })
        })

        $('.modal_item').on("click", function (e) {
            e.stopPropagation()
        })
    }

    // Close popup
    const handleClosePopup = function () {
        const modal = $(".modal")

        modal.on('click', function () {
            modal.find('>.open').removeClass('open')
            $('body').removeClass('scroll_locked')
        })

        $('.close_popup_btn').on('click', function () {
            modal.find('>.open').removeClass('open')
            $('body').removeClass('scroll_locked')
        })
    }

    // Sidebar
    const handleOpenSidebar = function () {
        const sidebar = $(".sidebar")

        $(".filter_btn").on("click", function () {
            sidebar.toggleClass('open')
            $('body').addClass('scroll_locked')
        })

        sidebar.on("click", function (e) {
            e.stopPropagation()
        })
    }

    // Add filter to screen when click
    const handleAddFilter = function () {
        const optionItems = $(".select_block .list_option li");
        const checkboxItems = $(".filter_section .checkbox_block .checkbox");

        optionItems.on('click', function () {
            let dataItem = $(this).attr('data-item');
            const filterSection = $(this).closest('.filter_section');

            if (filterSection.length > 0) {
                const filterType = filterSection.attr('class').split(' ')[1];

                // Check and remove old items in $('.list_filtered .list') for current filter_section
                $('.list_filtered .list .selected_item[data-type="' + filterType + '"]').remove();

                // Create new item and add to $('.list_filtered .list')
                const selectedItem = `
                    <button class="selected_item inline-flex items-center gap-1 py-1 px-2 border border-line rounded-full capitalize duration-300 hover:border-black" data-type="${filterType}">
                        <span class="ph ph-x text-sm"></span>
                        <span class="caption1">${dataItem}</span>
                    </button>
                `

                // Add item to $('.list_filtered .list')
                $('.list_filtered .list').append(selectedItem)

                handleOpenListFiltered()
            }
        })

        checkboxItems.change(function () {
            var selectedId = $(this).attr('id');
            var selectedLabel = $(this).data('label');

            if ($(this).is(':checked')) {
                // Create new item and add to $('.list_filtered .list')
                const selectedItem = `
                    <button class="selected_item inline-flex items-center gap-1 py-1 px-2 border border-line rounded-full capitalize duration-300 hover:border-black" data-id="${selectedId}">
                        <span class="ph ph-x text-sm"></span>
                        <span class="caption1">${selectedLabel}</span>
                    </button>
                `

                // Add item to $('.list_filtered .list')
                $('.list_filtered .list').append(selectedItem)
            } else {
                // Remove selected item
                $('.list_filtered .list').find(`.selected_item[data-id="${selectedId}"]`).remove();
            }

            handleOpenListFiltered()
        })

        // Remove item
        $(document).on('click', '.selected_item', function () {
            $(this).remove();

            // checkbox
            var itemId = $(this).data('id');
            $('#' + itemId).prop('checked', false);

            handleOpenListFiltered()
        });

        // Remove all item
        $(document).on('click', '.clear_all_btn', function () {
            $('.list_filtered .list').text('');
            $('.checkbox_block .checkbox').prop('checked', false);
            handleOpenListFiltered()
        });

        // Toggle list_filtered
        const handleOpenListFiltered = function () {
            if ($('.list_filtered .list .selected_item').length < 1) {
                $('.list_filtered').removeClass('open')
            } else {
                $('.list_filtered').addClass('open')
            }
        }
    }

    // Price range
    const handlePriceRange = function () {
        const rangeInput = $('.filter_price .range_input .input')
        const progress = $('.filter_price .tow_bar_block .progress')
        const minPrice = $('.filter_price .price_min input')
        const maxPrice = $('.filter_price .price_max input')
        let priceGap = 200

        rangeInput.on('input', function () {
            let minValue = parseInt(rangeInput.eq(0).val())
            let maxValue = parseInt(rangeInput.eq(1).val())

            if (maxValue - minValue <= priceGap) {
                if ($(this).hasClass('range_min')) {
                    rangeInput.eq(0).val(maxValue - priceGap)
                    minValue = maxValue - priceGap
                } else {
                    rangeInput.eq(1).val(minValue + priceGap)
                    maxValue = minValue + priceGap
                }
            } else {
                progress.css({
                    'left': (minValue / rangeInput.eq(0).attr('max')) * 100 + "%",
                    'right': 100 - (maxValue / rangeInput.eq(1).attr('max')) * 100 + "%"
                });
            }

            minPrice.val(minValue)
            maxPrice.val(maxValue)
        })

        minPrice.on('change', function () {
            let maxValue = parseInt(rangeInput.eq(1).val())

            if ($(this).val() < 0) {
                $(this).val(0)
                rangeInput.eq(0).val(0)
                progress.css({ 'left': "0%" });
            } else if ($(this).val() < maxValue - priceGap) {
                rangeInput.eq(0).val($(this).val())
                progress.css({ 'left': ($(this).val() / rangeInput.eq(0).attr('max')) * 100 + "%" });
            } else if ($(this).val() >= maxValue - priceGap) {
                $(this).val(maxValue - priceGap)
                rangeInput.eq(0).val(maxValue - priceGap)
                progress.css({ 'left': ((maxValue - priceGap) / rangeInput.eq(0).attr('max')) * 100 + "%" });
            }
        })

        minPrice.on('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault()
                maxPrice.focus()
            }
        })

        maxPrice.on('change', function () {
            let minValue = parseInt(rangeInput.eq(0).val())

            if (parseInt($(this).val()) > rangeInput.eq(1).attr('max')) {
                $(this).val(rangeInput.eq(1).attr('max'))
                rangeInput.eq(1).val(rangeInput.eq(1).attr('max'))
                progress.css({ 'right': "0%" });
            } else if (parseInt($(this).val()) > minValue + priceGap && parseInt($(this).val()) <= rangeInput.eq(1).attr('max')) {
                rangeInput.eq(1).val($(this).val())
                progress.css({ 'right': 100 - ($(this).val() / rangeInput.eq(1).attr('max')) * 100 + "%" });
            } else if (parseInt($(this).val()) <= minValue + priceGap) {
                $(this).val(minValue + priceGap)
                rangeInput.eq(1).val(minValue + priceGap)
                progress.css({ 'right': 100 - ((minValue + priceGap) / rangeInput.eq(1).attr('max')) * 100 + "%" });
            }
        })

        maxPrice.on('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault()
                $(this).blur()
            }
        })
    }

    // Age range
    const handleAgeRange = function () {
        const rangeInput = $('.filter_age .range_input .input')
        const progress = $('.filter_age .tow_bar_block .progress')
        const minAge = $('.filter_age .age_min')
        const maxAge = $('.filter_age .age_max')
        let ageGap = 5

        rangeInput.on('input', function () {
            let minValue = parseInt(rangeInput.eq(0).val())
            let maxValue = parseInt(rangeInput.eq(1).val())

            if (maxValue - minValue <= ageGap) {
                if ($(this).hasClass('range_min')) {
                    rangeInput.eq(0).val(maxValue - ageGap)
                    minValue = maxValue - ageGap
                } else {
                    rangeInput.eq(1).val(minValue + ageGap)
                    maxValue = minValue + ageGap
                }
            } else {
                progress.css({
                    'left': (minValue / rangeInput.eq(0).attr('max')) * 100 + "%",
                    'right': 100 - (maxValue / rangeInput.eq(1).attr('max')) * 100 + "%"
                });
            }

            minAge.text(minValue)
            maxAge.text(maxValue)
        })
    }

    // Radius range
    const handleRadius = function () {
        const rangeInput = $('.filter_radius .range_input .input')
        const progress = $('.filter_radius .tow_bar_block .progress')

        rangeInput.on('input', function () {
            let radiusValue = parseInt(rangeInput.val());
            progress.css({ 'right': 100 - (radiusValue / rangeInput.attr('max')) * 100 + "%" });
            $('.filter_radius .radius').text(radiusValue + 'km');
        })
    }

    // Handle number delivery popup Apply
    const handleNumberDeliveryPopupApply = function () {
        $('.delivery .minus_btn').on('click', function (e) {
            e.preventDefault()
            let currentValue = parseInt($('.delivery input').val())
            $('.delivery input').val(currentValue - 1)

            if (parseInt($('.delivery input').val()) < 2) {
                $(this).addClass('disabled')
            }
        })

        $('.delivery .plus_btn').on('click', function (e) {
            e.preventDefault()
            let currentValue = parseInt($('.delivery input').val())
            $('.delivery input').val(currentValue + 1)

            if (parseInt($('.delivery input').val()) > 1) {
                $('.delivery .minus_btn').removeClass('disabled')
            }
        })
    }

    // Handle change layout cols number
    const handleLayoutColsNumber = function () {
        $('.layout_btn').on('click', function (e) {
            e.preventDefault()

            if ($(this).hasClass('cols_5') && !$(this).hasClass('active')) {
                // add class active
                $('.layout_btn').removeClass('active')
                $(this).addClass('active')

                // Remove all class start with cols_
                $('.list_layout_cols').removeClass(function (index, className) {
                    return (className.match(/(^|\s)cols_\S+/g) || []).join(' ');
                });

                // add class
                $('.list_layout_cols').addClass('cols_5');
            }
            else if ($(this).hasClass('cols_4') && !$(this).hasClass('active')) {
                // add class active
                $('.layout_btn').removeClass('active')
                $(this).addClass('active')

                // Remove all class start with cols_
                $('.list_layout_cols').removeClass(function (index, className) {
                    return (className.match(/(^|\s)cols_\S+/g) || []).join(' ');
                });

                // add class
                $('.list_layout_cols').addClass('cols_4')
            }
            else if ($(this).hasClass('cols_3') && !$(this).hasClass('active')) {
                // add class active
                $('.layout_btn').removeClass('active')
                $(this).addClass('active')

                // Remove all class start with cols_
                $('.list_layout_cols').removeClass(function (index, className) {
                    return (className.match(/(^|\s)cols_\S+/g) || []).join(' ');
                });

                // add class
                $('.list_layout_cols').addClass('cols_3')
            }
            else if ($(this).hasClass('cols_2') && !$(this).hasClass('active')) {
                // add class active
                $('.layout_btn').removeClass('active')
                $(this).addClass('active')
                
                // Remove all class start with cols_
                $('.list_layout_cols').removeClass(function (index, className) {
                    return (className.match(/(^|\s)cols_\S+/g) || []).join(' ');
                });

                // add class
                $('.list_layout_cols').addClass('cols_2')
            }
            else if ($(this).hasClass('cols_1') && !$(this).hasClass('active')) {
                // add class active
                $('.layout_btn').removeClass('active')
                $(this).addClass('active')

                // Remove all class start with cols_
                $('.list_layout_cols').removeClass(function (index, className) {
                    return (className.match(/(^|\s)cols_\S+/g) || []).join(' ');
                });

                // add class
                $('.list_layout_cols').addClass('cols_1')
            }
        })
    }

    // Chart dashboard
    const handleChartDashboard = function () {
        var options = {
            series: [{
                data: [
                    [1327359600000, 30.95],
                    [1327446000000, 31.34],
                    [1327532400000, 31.18],
                    [1327618800000, 31.05],
                    [1327878000000, 31.00],
                    [1327964400000, 30.95],
                    [1328050800000, 31.24],
                    [1328137200000, 31.29],
                    [1328223600000, 31.85],
                    [1328482800000, 31.86],
                    [1328569200000, 32.28],
                    [1328655600000, 32.10],
                    [1328742000000, 32.65],
                    [1328828400000, 32.21],
                    [1329087600000, 32.35],
                    [1329174000000, 32.44],
                    [1329260400000, 32.46],
                    [1329346800000, 32.86],
                    [1329433200000, 32.75],
                    [1329778800000, 32.54],
                    [1329865200000, 32.33],
                    [1329951600000, 32.97],
                    [1330038000000, 33.41],
                    [1330297200000, 33.27],
                    [1330383600000, 33.27],
                    [1330470000000, 32.89],
                    [1330556400000, 33.10],
                    [1330642800000, 33.73],
                    [1330902000000, 33.22],
                    [1330988400000, 31.99],
                    [1331074800000, 32.41],
                    [1331161200000, 33.05],
                    [1331247600000, 33.64],
                    [1331506800000, 33.56],
                    [1331593200000, 34.22],
                    [1331679600000, 33.77],
                    [1331766000000, 34.17],
                    [1331852400000, 33.82],
                    [1332111600000, 34.51],
                    [1332198000000, 33.16],
                    [1332284400000, 33.56],
                    [1332370800000, 33.71],
                    [1332457200000, 33.81],
                    [1332712800000, 34.40],
                    [1332799200000, 34.63],
                    [1332885600000, 34.46],
                    [1332972000000, 34.48],
                    [1333058400000, 34.31],
                    [1333317600000, 34.70],
                    [1333404000000, 34.31],
                    [1333490400000, 33.46],
                    [1333576800000, 33.59],
                    [1333922400000, 33.22],
                    [1334008800000, 32.61],
                    [1334095200000, 33.01],
                    [1334181600000, 33.55],
                    [1334268000000, 33.18],
                    [1334527200000, 32.84],
                    [1334613600000, 33.84],
                    [1334700000000, 33.39],
                    [1334786400000, 32.91],
                    [1334872800000, 33.06],
                    [1335132000000, 32.62],
                    [1335218400000, 32.40],
                    [1335304800000, 33.13],
                    [1335391200000, 33.26],
                    [1335477600000, 33.58],
                    [1335736800000, 33.55],
                    [1335823200000, 33.77],
                    [1335909600000, 33.76],
                    [1335996000000, 33.32],
                    [1336082400000, 32.61],
                    [1336341600000, 32.52],
                    [1336428000000, 32.67],
                    [1336514400000, 32.52],
                    [1336600800000, 31.92],
                    [1336687200000, 32.20],
                    [1336946400000, 32.23],
                    [1337032800000, 32.33],
                    [1337119200000, 32.36],
                    [1337205600000, 32.01],
                    [1337292000000, 31.31],
                    [1337551200000, 32.01],
                    [1337637600000, 32.01],
                    [1337724000000, 32.18],
                    [1337810400000, 31.54],
                    [1337896800000, 31.60],
                    [1338242400000, 32.05],
                    [1338328800000, 31.29],
                    [1338415200000, 31.05],
                    [1338501600000, 29.82],
                    [1338760800000, 30.31],
                    [1338847200000, 30.70],
                    [1338933600000, 31.69],
                    [1339020000000, 31.32],
                    [1339106400000, 31.65],
                    [1339365600000, 31.13],
                    [1339452000000, 31.77],
                    [1339538400000, 31.79],
                    [1339624800000, 31.67],
                    [1339711200000, 32.39],
                    [1339970400000, 32.63],
                    [1340056800000, 32.89],
                    [1340143200000, 31.99],
                    [1340229600000, 31.23],
                    [1340316000000, 31.57],
                    [1340575200000, 30.84],
                    [1340661600000, 31.07],
                    [1340748000000, 31.41],
                    [1340834400000, 31.17],
                    [1340920800000, 32.37],
                    [1341180000000, 32.19],
                    [1341266400000, 32.51],
                    [1341439200000, 32.53],
                    [1341525600000, 31.37],
                    [1341784800000, 30.43],
                    [1341871200000, 30.44],
                    [1341957600000, 30.20],
                    [1342044000000, 30.14],
                    [1342130400000, 30.65],
                    [1342389600000, 30.40],
                    [1342476000000, 30.65],
                    [1342562400000, 31.43],
                    [1342648800000, 31.89],
                    [1342735200000, 31.38],
                    [1342994400000, 30.64],
                    [1343080800000, 30.02],
                    [1343167200000, 30.33],
                    [1343253600000, 30.95],
                    [1343340000000, 31.89],
                    [1343599200000, 31.01],
                    [1343685600000, 30.88],
                    [1343772000000, 30.69],
                    [1343858400000, 30.58],
                    [1343944800000, 32.02],
                    [1344204000000, 32.14],
                    [1344290400000, 32.37],
                    [1344376800000, 32.51],
                    [1344463200000, 32.65],
                    [1344549600000, 32.64],
                    [1344808800000, 32.27],
                    [1344895200000, 32.10],
                    [1344981600000, 32.91],
                    [1345068000000, 33.65],
                    [1345154400000, 33.80],
                    [1345413600000, 33.92],
                    [1345500000000, 33.75],
                    [1345586400000, 33.84],
                    [1345672800000, 33.50],
                    [1345759200000, 32.26],
                    [1346018400000, 32.32],
                    [1346104800000, 32.06],
                    [1346191200000, 31.96],
                    [1346277600000, 31.46],
                    [1346364000000, 31.27],
                    [1346709600000, 31.43],
                    [1346796000000, 32.26],
                    [1346882400000, 32.79],
                    [1346968800000, 32.46],
                    [1347228000000, 32.13],
                    [1347314400000, 32.43],
                    [1347400800000, 32.42],
                    [1347487200000, 32.81],
                    [1347573600000, 33.34],
                    [1347832800000, 33.41],
                    [1347919200000, 32.57],
                    [1348005600000, 33.12],
                    [1348092000000, 34.53],
                    [1348178400000, 33.83],
                    [1348437600000, 33.41],
                    [1348524000000, 32.90],
                    [1348610400000, 32.53],
                    [1348696800000, 32.80],
                    [1348783200000, 32.44],
                    [1349042400000, 32.62],
                    [1349128800000, 32.57],
                    [1349215200000, 32.60],
                    [1349301600000, 32.68],
                    [1349388000000, 32.47],
                    [1349647200000, 32.23],
                    [1349733600000, 31.68],
                    [1349820000000, 31.51],
                    [1349906400000, 31.78],
                    [1349992800000, 31.94],
                    [1350252000000, 32.33],
                    [1350338400000, 33.24],
                    [1350424800000, 33.44],
                    [1350511200000, 33.48],
                    [1350597600000, 33.24],
                    [1350856800000, 33.49],
                    [1350943200000, 33.31],
                    [1351029600000, 33.36],
                    [1351116000000, 33.40],
                    [1351202400000, 34.01],
                    [1351638000000, 34.02],
                    [1351724400000, 34.36],
                    [1351810800000, 34.39],
                    [1352070000000, 34.24],
                    [1352156400000, 34.39],
                    [1352242800000, 33.47],
                    [1352329200000, 32.98],
                    [1352415600000, 32.90],
                    [1352674800000, 32.70],
                    [1352761200000, 32.54],
                    [1352847600000, 32.23],
                    [1352934000000, 32.64],
                    [1353020400000, 32.65],
                    [1353279600000, 32.92],
                    [1353366000000, 32.64],
                    [1353452400000, 32.84],
                    [1353625200000, 33.40],
                    [1353884400000, 33.30],
                    [1353970800000, 33.18],
                    [1354057200000, 33.88],
                    [1354143600000, 34.09],
                    [1354230000000, 34.61],
                    [1354489200000, 34.70],
                    [1354575600000, 35.30],
                    [1354662000000, 35.40],
                    [1354748400000, 35.14],
                    [1354834800000, 35.48],
                    [1355094000000, 35.75],
                    [1355180400000, 35.54],
                    [1355266800000, 35.96],
                    [1355353200000, 35.53],
                    [1355439600000, 37.56],
                    [1355698800000, 37.42],
                    [1355785200000, 37.49],
                    [1355871600000, 38.09],
                    [1355958000000, 37.87],
                    [1356044400000, 37.71],
                    [1356303600000, 37.53],
                    [1356476400000, 37.55],
                    [1356562800000, 37.30],
                    [1356649200000, 36.90],
                    [1356908400000, 37.68],
                    [1357081200000, 38.34],
                    [1357167600000, 37.75],
                    [1357254000000, 38.13],
                    [1357513200000, 37.94],
                    [1357599600000, 38.14],
                    [1357686000000, 38.66],
                    [1357772400000, 38.62],
                    [1357858800000, 38.09],
                    [1358118000000, 38.16],
                    [1358204400000, 38.15],
                    [1358290800000, 37.88],
                    [1358377200000, 37.73],
                    [1358463600000, 37.98],
                    [1358809200000, 37.95],
                    [1358895600000, 38.25],
                    [1358982000000, 38.10],
                    [1359068400000, 38.32],
                    [1359327600000, 38.24],
                    [1359414000000, 38.52],
                    [1359500400000, 37.94],
                    [1359586800000, 37.83],
                    [1359673200000, 38.34],
                    [1359932400000, 38.10],
                    [1360018800000, 38.51],
                    [1360105200000, 38.40],
                    [1360191600000, 38.07],
                    [1360278000000, 39.12],
                    [1360537200000, 38.64],
                    [1360623600000, 38.89],
                    [1360710000000, 38.81],
                    [1360796400000, 38.61],
                    [1360882800000, 38.63],
                    [1361228400000, 38.99],
                    [1361314800000, 38.77],
                    [1361401200000, 38.34],
                    [1361487600000, 38.55],
                    [1361746800000, 38.11],
                    [1361833200000, 38.59],
                    [1361919600000, 39.60],
                ]
            }],
            chart: {
                id: 'area-datetime',
                type: 'area',
                height: 400,
                toolbar: {
                    show: false,
                },
                zoom: {
                    autoScaleYaxis: true
                }
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis: {
                type: 'datetime',
                min: new Date('01 Mar 2012').getTime(),
                tickAmount: 6,
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            },
        };

        if ($('#chart-timeline').length > 0) {
            var chart = new ApexCharts(document.querySelector("#chart-timeline"), options);
            chart.render();

            var resetCssClasses = function (activeEl) {
                var els = document.querySelectorAll('button')
                Array.prototype.forEach.call(els, function (el) {
                    el.classList.remove('active')
                })

                activeEl.target.classList.add('active')
            }

            document
                .querySelector('#one_month')
                .addEventListener('click', function (e) {
                    resetCssClasses(e)
                    chart.zoomX(
                        new Date('28 Jan 2013').getTime(),
                        new Date('27 Feb 2013').getTime()
                    )
                })

            document
                .querySelector('#one_week')
                .addEventListener('click', function (e) {
                    resetCssClasses(e)
                    chart.zoomX(
                        new Date('20 Sep 2012').getTime(),
                        new Date('27 Sep 2012').getTime()
                    )
                })

            document
                .querySelector('#one_year')
                .addEventListener('click', function (e) {
                    resetCssClasses(e)
                    chart.zoomX(
                        new Date('27 Feb 2012').getTime(),
                        new Date('27 Feb 2013').getTime()
                    )
                })
        }
    }

    // Remove item dashboard
    const handleRemoveItemDashboard = function () {
        let itemToDelete;

        $('.btn_delete').on('click', function (e) {
            e.preventDefault()

            itemToDelete = $(this).closest('tr.item, li.item');

            if ($('.modal_delete').length <= 0) {
                itemToDelete.remove();
            }
        });

        $('.btn_confirm_delete').on('click', function () {
            itemToDelete.remove();
            $('.modal_delete').removeClass('open')
        });
    }

    // Remove active message
    const handleActiveMessage = function () {
        $('.chat_item').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active')

            let dataPerson = $(this).data('chat')
            $('.chat_box').each(function () {
                if ($(this).data('chat') === dataPerson) {
                    $(this).addClass('open').siblings().removeClass('open')
                }
            })
        })

        $('.back_to_list_btn').on('click', function () {
            $('.chat_item').removeClass('active')
            $('.chat_box').removeClass('open')
        })
    }

    // Display preview image when choose file
    const handleDisplayPreviewImage = function () {
        $('#uploadImage, #uploadLogo, #uploadBanner').on('change', function (event) {
            const file = event.target.files[0];
            let img = $(this).closest('.upload_image').find('.upload_img')

            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    img.attr('src', e.target.result).show();
                }
                reader.readAsDataURL(file);
            }
        });

        // Portfolio Multiple Images Preview
        $('#multipleImages').on('change', function (event) {
            const files = event.target.files;
            const $imagePreviews = $('.image-previews');

            // Loop through each selected file
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const $preview = $(`
                            <div class="image-preview">
                                <img src="${e.target.result}">
                                <button class="remove-image shadow-md">x</button>
                            </div>
                        `);
                        $imagePreviews.append($preview);
                    }
                    reader.readAsDataURL(file);
                }
            }
        });

        // Handle image removal
        $('.image-previews').on('click', '.remove-image', function () {
            $(this).closest('.image-preview').remove();
        });
    }

    // Handle select category, tool, language
    const handleInputSelect = function () {
        var categories = ['UX Design', 'UI Design', 'Web Development', 'Graphic Design', 'Content Writing', 'SEO', 'Marketing', 'Data Science'];
        var languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean'];
        var tools = ['Photoshop', 'Illustrator', 'Figma', 'Sketch', 'VSCode', 'Sublime Text', 'Atom'];

        function setupAutocomplete(inputClass, data) {
            $('.' + inputClass).each(function () {
                var $input = $(this);
                var $categoryList = $input.siblings('.categoryList');
                var $selectedCategories = $input.siblings('.selectedCategories');

                $input.on('keyup', function () {
                    var inputValue = $input.val().toLowerCase();
                    var filteredCategories = data.filter(function (item) {
                        return item.toLowerCase().includes(inputValue);
                    });
                    displayCategoryList(filteredCategories, $categoryList);
                });

                function displayCategoryList(items, list) {
                    list.empty();
                    if (items.length > 0) {
                        items.forEach(function (item) {
                            list.append('<li>' + item + '</li>');
                        });
                        list.show();
                    } else {
                        list.append('<li class="no-data">No data</li>');
                        list.show();
                    }
                }

                $categoryList.on('click', 'li', function () {
                    if ($(this).hasClass('no-data')) {
                        return;
                    }
                    var selectedItem = $(this).text();
                    if (!$selectedCategories.text().includes(selectedItem)) {
                        $selectedCategories.append('<span class="selected-category">' + selectedItem + '</span>');
                    }
                    $input.val('');
                    $categoryList.hide();
                });

                $selectedCategories.on('click', '.selected-category', function () {
                    $(this).remove();
                });

                $(document).click(function (event) {
                    if (!$(event.target).closest('.category-selector').length) {
                        $categoryList.hide();
                    }
                });
            });
        }

        setupAutocomplete('categoryInput', categories);
        setupAutocomplete('languageInput', languages);
        setupAutocomplete('toolsInput', tools);
    }

    // Text editor
    if ($('#editor').length > 0) {
        const quill = new Quill('#editor', {
            theme: 'snow'
        });
    }

    // Candidates Dashboard: My Portfolio
    var swiperListPortfolio = new Swiper(".swiper-list-portfolio", {
        navigation: {
            prevEl: ".custom-button-prev",
            nextEl: ".custom-button-next",
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1320: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });

    // Select
    const handleSelectBlock = function () {
        const selectBlock = $(".select_block");
        const listOption = $(".select_block .list_option");
        const optionItems = $(".select_block .list_option li");
        const formInput = $(".select_block .form_input");

        if (selectBlock.length > 0) {
            selectBlock.on('click', function () {
                let list = $(this).find('.list_option');
                let isOpen = list.hasClass('open');

                $('.list_option').removeClass('open');

                if (!isOpen) {
                    list.addClass('open');
                }
            })

            optionItems.on('click', function (e) {
                e.stopPropagation()
                listOption.removeClass('open');
                let dataItem = $(this).attr('data-item')
                $(this).closest('.select_block').find('.selected').text(dataItem)
            })

            formInput.on('click', function (e) {
                e.stopPropagation()
            })

            $(window).on('click', function (e) {
                if (!$(e.target).closest('.select_block').length) {
                    listOption.removeClass('open');
                }
            })
        }
    }

    // Active wishlist icon
    const handleActiveWishlistIcon = function () {
        $('.add_wishlist_btn').on('click', function (e) {
            e.preventDefault()
            $(this).toggleClass('active')
        })
    }

    // Toggle button
    const handleToggleButton = function () {
        $('.toggle_btn').on('click', function () {
            if (!$(this).hasClass('disabled')) {
                $(this).toggleClass('active');
            }
        });
    }

    // Rate
    const handleRate = function () {
        var selectedRating = 0;

        // Handle mouse enter (hover) event
        $('.user_rating .star').on('mouseenter', function () {
            var rating = $(this).data('value');
            highlightStars(rating);
        });

        // Handle mouse leave event
        $('.user_rating .list_rate').on('mouseleave', function () {
            highlightStars(selectedRating);
        });

        // Handle click event
        $('.user_rating .star').on('click', function () {
            selectedRating = $(this).data('value');
            highlightStars(selectedRating);
        });

        // Function to highlight stars
        function highlightStars(rating) {
            $('.user_rating .star').each(function () {
                var starValue = $(this).data('value');
                if (starValue <= rating) {
                    $(this).css('color', 'var(--yellow)');
                } else {
                    $(this).css('color', 'var(--line)');
                }
            });
        }

        // Handle form submission
        $('#form-review .form').on('submit', function (e) {
            if (selectedRating === 0) {
                e.preventDefault(); // Prevent form submission
                alert('Please select your rating before submit the comment.');
            } else {
                $('#form-review .form').append('<input type="hidden" name="rating" value="' + selectedRating + '">');
            }
        });
    }

    // Toastify
    const handleToastify = function () {
        const showToastify = function () {
            setTimeout(function () {
                $('.toastify').addClass('active')
            }, [300])

            setTimeout(function () {
                $('.toastify').removeClass('active')
            }, [5000])
        }

        if ($('#map').length > 0) {
            showToastify()
        }

        $('.add_bookmark_btn').on('click', function () {
            showToastify()
        })

        $('.toastify_close_btn').on('click', function () {
            $('.toastify').removeClass('active')
        })
    }

    // Scroll reveal
    const handleReveal = function () {
        var reveal = $(".animate");

        reveal.each(function (index, element) {
            const windowHeight = window.innerHeight;
            const revealTop = element.getBoundingClientRect().top;
            const revealpoint = 400 * 100 / 1920;

            if (revealTop < windowHeight - revealpoint) {
                $(element).addClass("animate_active");
            }
        });
    }

    // Scroll to top
    const handleScrollTop = function () {
        $('.scroll-to-top-btn').on('click', function (e) {
            e.preventDefault()
            $("html, body").animate({ scrollTop: 0 }, 500);
            return false;
        })
    }

    $(win).scroll(function () {
        handleFixedHeader()
        handleReveal()
    }).scroll();

    $(win).on('load', function () {
        handleOpenHeaderMobile()
        handleActiveMenu()
        handleFaq()
        countDownTime(40, 32, 30, false)
        handleClosePopup()
        handleOpenPopup()
        handleOpenSidebar()
        handleAddFilter()
        handlePriceRange()
        handleAgeRange()
        handleRadius()
        handleNumberDeliveryPopupApply()
        handleLayoutColsNumber()
        handleChartDashboard()
        handleRemoveItemDashboard()
        handleActiveMessage()
        handleDisplayPreviewImage()
        handleInputSelect()
        handleSelectBlock()
        handleActiveWishlistIcon()
        handleToggleButton()
        handleRate()
        handleToastify()
        handleScrollTop()
    });
})(window, window.jQuery);