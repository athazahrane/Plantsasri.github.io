// navbar color tab
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  var sections = document.querySelectorAll("section");

  function removeTextClasses() {
    navLinks.forEach(function (link) {
      link.classList.remove("text-success", "text-muted", "active");
    });
  }

  function highlightNavLink(link) {
    removeTextClasses();
    link.classList.add("text-success", "active");
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  function setActiveNavLink() {
    var activeLinkFound = false; // Flag untuk menandakan apakah link yang sesuai ditemukan

    sections.forEach(function (section) {
      var link = document.querySelector(`.navbar-nav .nav-link[href="#${section.id}"]`);
      if (link && isElementInViewport(section)) {
        highlightNavLink(link);
        activeLinkFound = true; // Set flag menjadi true ketika link ditemukan
      }
    });

    // Matikan link jika tidak ada link yang sesuai dengan ID
    if (!activeLinkFound) {
      removeTextClasses();
    }
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = link.getAttribute("href").substring(1);
      var targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth"
        });
      }
    });
  });

  window.addEventListener("scroll", function () {
    setActiveNavLink();
  });

  setActiveNavLink();
});
// end  



// parallax effects
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // about plantsasri
  if (wScroll > $('.content-about').offset().top - 500) {
    $('.content-about').addClass('muncul');
  };

  // services
  if (wScroll > $('.item').offset().top - 550) {
    $('.item').each(function (i) {
      setTimeout(function () {
        $('.item').eq(i).addClass('muncul');
      }, 300 * (i + 1));
    })
  };

  // countries
  if (wScroll > $('.item-satu').offset().top - 500) {
    $('.item-satu').addClass('muncul');
  };
  if (wScroll > $('.item-dua').offset().top - 500) {
    $('.item-dua').addClass('muncul');
  };

  // banner
  if (wScroll > $('.content-banner').offset().top - 500) {
    $('.content-banner').addClass('muncul');
  };

  // testimoni
  if (wScroll > $('.testimoni-parallax').offset().top - 500) {
    $('.testimoni-parallax').addClass('muncul');
  };

  // partnership
  if (wScroll > $('.item-parallax').offset().top - 650) {
    $('.item-parallax').each(function (i) {
      setTimeout(function () {
        $('.item-parallax').eq(i).addClass('muncul');
      }, 300 * (i + 1));
    })
  };
})