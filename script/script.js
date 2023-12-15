// navbar color tab
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua tautan di navbar
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Fungsi untuk menghapus kelas "text-success" dan "text-muted" dari semua tautan
  function removeTextClasses() {
    navLinks.forEach(function (link) {
      link.classList.remove("text-success", "text-muted");
    });
  }

  // Tambahkan event listener untuk setiap tautan
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      removeTextClasses();
      link.classList.add("text-success");
    });
  });
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