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
});
