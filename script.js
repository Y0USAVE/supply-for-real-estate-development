$(document).ready(function () {
  // 1. Navbar Scroll Effect (Glassmorphism)
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("#navbar").addClass("scrolled");
    } else {
      $("#navbar").removeClass("scrolled");
    }
  });

  // Trigger on load in case the user refreshes midway down the page
  $(window).trigger("scroll");

  // 2. Mobile Menu Toggle (Hamburger)
  $("#hamburger-menu").on("click", function () {
    $(this).toggleClass("active");
    $(".nav-links").toggleClass("active");

    // Optional: Change icon to 'X' when open
    var icon = $(this).find("i");
    if ($(this).hasClass("active")) {
      icon.removeClass("fa-bars").addClass("fa-times");
    } else {
      icon.removeClass("fa-times").addClass("fa-bars");
    }
  });

  // Close mobile menu when clicking a link
  $(".nav-links li a").on("click", function () {
    $(".nav-links").removeClass("active");
    $("#hamburger-menu").removeClass("active");
    $("#hamburger-menu").find("i").removeClass("fa-times").addClass("fa-bars");
  });

  // 3. Smooth Scrolling for Anchor Links
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();

      // Adjust scroll position to account for fixed navbar height
      var navbarHeight = $("#navbar").outerHeight();

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - navbarHeight + 2, // +2px buffer
          },
          800,
        ); // 800ms duration
    }
  });

  // 4. Scroll Reveal Animations
  function reveal() {
    var windowHeight = $(window).height();
    var elementVisible = 100; // threshold before element appears
    var scrollTop = $(window).scrollTop();

    $("[data-animation]").each(function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      // check if element is in viewport
      if (elementTop < scrollTop + windowHeight - elementVisible) {
        // Read optional delay attribute
        var delay = $(this).attr("data-delay") || "0s";
        $(this).css("transition-delay", delay);

        $(this).addClass("animated");
      }
    });
  }

  // Trigger reveal on scroll
  $(window).on("scroll", reveal);

  // Trigger outline on initial load
  setTimeout(reveal, 100);

  // Update active nav link based on scroll section
  $(window).on("scroll", function () {
    var scrollPos = $(window).scrollTop();
    var navbarHeight = $("#navbar").outerHeight();

    $(".nav-links li a").each(function () {
      var target = $($(this).attr("href"));
      if (target.length) {
        var topPos = target.offset().top - navbarHeight - 10;
        var bottomPos = topPos + target.outerHeight();

        if (scrollPos >= topPos && scrollPos < bottomPos) {
          $(".nav-links li a").removeClass("active");
          $(this).addClass("active");
        }
      }
    });
  });

  // ==========================================================================
  // 5. Bilingual Support (AR / EN)
  // ==========================================================================
  const langSwitchBtn = $('#lang-switch');
  const langText = $('#lang-text');
  
  // Set default language or retrieve from localStorage
  let currentLang = localStorage.getItem('website_lang') || 'ar';
  
  // Apply language on initial load
  applyLanguage(currentLang);

  // Toggle Language on Click
  langSwitchBtn.on('click', function() {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('website_lang', currentLang);
      applyLanguage(currentLang);
  });

  function applyLanguage(lang) {
      // 1. Update HTML attributes
      $('html').attr('lang', lang);
      $('html').attr('dir', lang === 'ar' ? 'rtl' : 'ltr');

      // 2. Update toggle button text (Show opposite of current)
      langText.text(lang === 'ar' ? 'EN' : 'AR');

      // 3. Update all elements with data-tr
      $('[data-tr]').each(function() {
          const key = $(this).attr('data-tr');
          if (translations[lang] && translations[lang][key]) {
              // Only replace text, keeping children like <i> tags intact if we use .html() or carefully use text()
              // For elements with mixed content (like buttons with icons), it's safer to have an inner span.
              // We added spans in the HTML specifically for this.
              $(this).html(translations[lang][key]);
          }
      });

      // 4. Update placeholders (data-tr-ph)
      $('[data-tr-ph]').each(function() {
          const key = $(this).attr('data-tr-ph');
          if (translations[lang] && translations[lang][key]) {
              $(this).attr('placeholder', translations[lang][key]);
          }
      });

      // 5. Hard refresh Scroll Reveal coordinates due to potentially changed text height
      setTimeout(function() {
          $(window).trigger('scroll');
      }, 100);
  }

  // ==========================================================================
  // 6. Dark Mode Support
  // ==========================================================================
  const themeSwitchBtn = $('#theme-switch');
  const themeIcon = themeSwitchBtn.find('i');
  
  // Retrieve saved theme or default to light
  let currentTheme = localStorage.getItem('website_theme') || 'light';
  
  // Apply theme on initial load
  applyTheme(currentTheme);

  // Toggle Theme on Click
  themeSwitchBtn.on('click', function() {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('website_theme', currentTheme);
      applyTheme(currentTheme);
  });

  function applyTheme(theme) {
      if (theme === 'dark') {
          $('html').attr('data-theme', 'dark');
          themeIcon.removeClass('fa-moon').addClass('fa-sun');
      } else {
          $('html').removeAttr('data-theme');
          themeIcon.removeClass('fa-sun').addClass('fa-moon');
      }
  }

  // ==========================================================================
  // 7. Fix Rotated Videos (Mobile CSS Fallback & Safari Aspect Ratio Fix)
  // ==========================================================================
  function fixRotatedVideos() {
      $('.expand-card .rotate-fixed-90').each(function() {
          const card = $(this).closest('.expand-card');
          const w = card.outerWidth();
          const h = card.outerHeight();
          if (w > 0 && h > 0) {
              if (!$(this).parent().hasClass('video-rotator-wrapper')) {
                  $(this).wrap('<div class="video-rotator-wrapper" style="position: absolute; overflow: hidden; top: 50%; left: 50%; padding: 0; margin: 0;"></div>');
              }
              const wrapper = $(this).parent();
              
              wrapper.css({
                  'width': h + 'px',
                  'height': w + 'px',
                  'transform': 'translate(-50%, -50%) rotate(90deg)'
              });
              
              $(this)[0].style.setProperty('position', 'absolute', 'important');
              $(this)[0].style.setProperty('top', '0', 'important');
              $(this)[0].style.setProperty('left', '0', 'important');
              $(this)[0].style.setProperty('width', '100%', 'important');
              $(this)[0].style.setProperty('height', '100%', 'important');
              $(this)[0].style.setProperty('transform', 'none', 'important');
              $(this)[0].style.setProperty('object-fit', 'cover', 'important');
          }
      });
  }
  
  // Run initially and on window resize
  fixRotatedVideos();
  $(window).on('resize', fixRotatedVideos);
  
  // Also run after CSS transitions (600ms) when cards expand/collapse
  $('.expand-card').on('click mouseenter mouseleave', function() {
      setTimeout(fixRotatedVideos, 610); 
  });

  // ==========================================================================
  // 8. Dynamic Project Modal Logic
  // ==========================================================================
  const $projectModal = $("#projectModal");
  const $modalContent = $("#modal-dynamic-content");

  // Open Modal
  $(document).on("click", ".view-project-details", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const projectId = $(this).data("project-id");
    if (typeof projectsData === 'undefined' || !projectsData[projectId]) {
      console.error("Project data not found for ID:", projectId);
      return;
    }

    const data = projectsData[projectId];
    // Check global lang or default to ar
    const currentLangEl = document.querySelector('html').getAttribute('lang');
    const isAr = currentLangEl === 'ar'; 

    let htmlPayload = `
      <div class="modal-header-sec">
          <span class="modal-badge">${isAr ? data.badge.ar : data.badge.en}</span>
          <h2>${isAr ? data.title.ar : data.title.en}</h2>
          <div class="modal-meta">
              ${data.client ? `<span><i class="fas fa-building"></i> ${isAr ? data.client.ar : data.client.en}</span>` : ""}
              ${data.duration ? `<span><i class="fas fa-clock"></i> ${isAr ? data.duration.ar : data.duration.en}</span>` : ""}
          </div>
          <p class="modal-desc">${isAr ? data.description.ar : data.description.en}</p>
      </div>
    `;

    // 1. Before/After Slider (Single)
    if (data.beforeAfter) {
      htmlPayload += `
        <div class="before-after-wrapper">
            <img src="${data.beforeAfter.before}" class="ba-img ba-before" alt="Before">
            <img src="${data.beforeAfter.after}" class="ba-img ba-after" alt="After">
            <input type="range" dir="ltr" min="0" max="100" value="50" class="ba-slider-input" aria-label="Slider">
            <div class="ba-slider-line"></div>
            <div class="ba-slider-button"><i class="fas fa-arrows-alt-h"></i></div>
        </div>
      `;
    }

    // 1.5 Before/After Sliders (Multiple)
    if (data.multiBeforeAfter && Array.isArray(data.multiBeforeAfter) && data.multiBeforeAfter.length > 0) {
      let multiBaHtml = `
        <div class="modal-multi-ba-container" style="display:flex; flex-direction:column; gap:40px; margin-bottom: 50px; width: 100%;">
          <h4 style="text-align:center; color:var(--primary-color); font-size:1.6rem;">${isAr ? 'مراحل التطوير والمقارنة' : 'Development Stages & Comparison'}</h4>
      `;
      data.multiBeforeAfter.forEach((ba, index) => {
          multiBaHtml += `
            <div class="before-after-wrapper" style="width: 100%; max-width: 900px; margin: 0 auto; position: relative;">
                <img src="${ba.before}" class="ba-img ba-before" alt="Before ${index+1}" style="display:block; width:100%;">
                <img src="${ba.after}" class="ba-img ba-after" alt="After ${index+1}" style="display:block; width:100%;">
                <input type="range" dir="ltr" min="0" max="100" value="50" class="ba-slider-input" aria-label="Slider">
                <div class="ba-slider-line"></div>
                <div class="ba-slider-button"><i class="fas fa-arrows-alt-h"></i></div>
            </div>
          `;
      });
      multiBaHtml += `</div>`;
      htmlPayload += multiBaHtml;
    }

    // 2. Video Player (YouTube/Iframe)
    if (data.videoUrl) {
      htmlPayload += `
        <div class="modal-video-container">
            <iframe src="${data.videoUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      `;
    }

    // 3. Raw Videos (HTML5)
    if (data.rawVideos && data.rawVideos.length > 0) {
      htmlPayload += '<div class="modal-raw-videos-container" style="display:flex; flex-direction:column; gap:30px; align-items:center; margin-bottom: 50px;">';
      data.rawVideos.forEach(vid => {
          htmlPayload += `
            <div class="raw-video-wrapper ${vid.rotate ? 'rotated-wrapper' : ''}" style="width:100%; max-width:900px; display:flex; flex-direction:column; align-items:center;">
                <h4 style="color:var(--primary-color); text-align:center; margin-bottom:15px; font-size:1.4rem;">${isAr ? vid.caption.ar : vid.caption.en}</h4>
                <video autoplay loop muted playsinline class="${vid.rotate ? 'rotate-fixed-90-modal' : ''}" style="width:auto; max-width:${vid.rotate ? '80vh' : '100%'}; height:auto; max-height:${vid.rotate ? '90vw' : '70vh'}; border-radius:12px; box-shadow:var(--shadow); cursor:pointer;" title="Click for Fullscreen">
                    <source src="${vid.url}" type="video/webm">
                    متصفحك لا يدعم تشغيل الفيديو. / Your browser does not support the video tag.
                </video>
            </div>
          `;
      });
      htmlPayload += '</div>';
    }

    // 4. Masonry Gallery
    if (data.gallery && data.gallery.length > 0) {
      const isSingleImage = data.gallery.length === 1;
      const galleryClass = isSingleImage ? "modal-gallery single-image-gallery" : "modal-gallery";
      htmlPayload += `
        <div class="${galleryClass}">
            ${data.gallery.map(imgSrc => `<a href="${imgSrc}" target="_blank" class="modal-gal-item"><img src="${imgSrc}" alt="${isAr ? data.title.ar : data.title.en}"></a>`).join('')}
        </div>
      `;
    }

    $modalContent.html(htmlPayload);
    
    // Fix overlapping for modal rotated videos once they load
    function fixModalOverlap() {
        $('#projectModal .rotate-fixed-90-modal').each(function() {
            const runFix = () => {
                const visualHeight = this.getBoundingClientRect().height;
                const layoutHeight = this.offsetHeight; 
                const diff = visualHeight - layoutHeight;
                if (diff > 0) {
                    $(this).css({
                        'margin-top': (diff / 2 + 35) + 'px',
                        'margin-bottom': (diff / 2 + 35) + 'px'
                    });
                }
            };
            if (this.readyState >= 1) {
                runFix();
            } else {
                $(this).on('loadedmetadata', runFix);
            }
        });
    }

    // Slight delay to ensure content is painted before animating in
    setTimeout(() => {
        $projectModal.addClass("active");
        $("body").css("overflow", "hidden");
        fixModalOverlap();
    }, 50);
  });

  // Modal Video Fullscreen Handler
  $(document).on("click", ".modal-raw-videos-container video", function() {
    const elem = this;
    elem.controls = true; // Show controls in fullscreen
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      elem.msRequestFullscreen();
    }
  });

  // Hide controls again when exiting fullscreen
  $(document).on('fullscreenchange webkitfullscreenchange msfullscreenchange', function() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.msFullscreenElement) {
        $('.modal-raw-videos-container video').prop('controls', false);
    }
  });

  // Close Modal
  $(".close-modal-btn, .modal-backdrop").on("click", function () {
    $projectModal.removeClass("active");
    $("body").css("overflow", "");
    setTimeout(() => {
        $modalContent.empty(); 
    }, 400); 
  });

  // Before/After Slider Interaction
  $(document).on("input", ".ba-slider-input", function () {
      const val = $(this).val();
      const $wrapper = $(this).closest(".before-after-wrapper");
      
      // In Arabic (RTL) mode, users usually want Before on the right and After on the left
      // We clip the top image (ba-after) to show from 0 (left) to val (mouse position)
      // This means the right side becomes transparent and shows ba-before beneath it.
      $wrapper.find(".ba-after").css("clip-path", `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`);
      $wrapper.find(".ba-slider-line").css("left", `${val}%`);
      $wrapper.find(".ba-slider-button").css("left", `${val}%`);
  });

  // ==========================================================================
  // 9. Contact Form (Formspree Integration)
  // ==========================================================================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
      contactForm.addEventListener("submit", async function(event) {
          event.preventDefault(); 
          const form = event.target;
          const data = new FormData(form);
          const statusText = document.getElementById("formStatus");
          const submitBtn = document.getElementById("submitBtn");

          const currentLangEl = document.querySelector('html').getAttribute('lang') || 'ar';
          const trStatus = translations[currentLangEl];

          submitBtn.innerHTML = trStatus['form_sending'];
          submitBtn.disabled = true;

          try {
              const response = await fetch("https://formspree.io/f/xaqpreew", {
                  method: form.method || "POST",
                  body: data,
                  headers: { 'Accept': 'application/json' }
              });

              if (response.ok) {
                  statusText.innerHTML = trStatus['form_success'];
                  statusText.style.color = "#38A845"; 
                  statusText.style.display = "block";
                  form.reset(); 
              } else {
                  statusText.innerHTML = trStatus['form_error'];
                  statusText.style.color = "red";
                  statusText.style.display = "block";
              }
          } catch (error) {
              statusText.innerHTML = trStatus['form_net_error'];
              statusText.style.color = "red";
              statusText.style.display = "block";
          }

          submitBtn.innerHTML = `<span>${trStatus['form_submit']}</span> <i class="fas fa-paper-plane"></i>`;
          submitBtn.disabled = false;
      });
  }

});
