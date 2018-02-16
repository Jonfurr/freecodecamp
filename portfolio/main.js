$(document).ready(function() {
  /* ===================
        Smooth scrolling
    ======================*/
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          // $("body").addClass("blur");
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              // $("body").removeClass("blur");
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* ===================
        Project Viewer
    ======================*/
  const projects = Array.from(document.querySelectorAll(".project-wrap"));
  projects.forEach(function(project) {
    project.addEventListener("click", function() {
      $(".iframe-wrap").toggleClass("open");
      let url = this.dataset.url;
      document.querySelector(".iframe-wrap iframe").src = url;
      $(".iframe-wrap").show();

      //   $('.iframe-wrap iframe').attr("src", this.attr("data_url"));
    });
  });
  /* =======================
        Scroll to Top Button
    ==========================*/
  window.onscroll = function() {
    scrollFunction();
  };

  if ($(document).scrollTop() > 25) {
    document.getElementById("top-btn").style.display = "flex";
  }
  function scrollFunction() {
    if (
      document.body.scrollTop > 25 ||
      document.documentElement.scrollTop > 25
    ) {
      document.getElementById("top-btn").style.display = "flex";
    } else {
      document.getElementById("top-btn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  $("#top-btn").on("click", function() {
    $(".top-link").trigger("click");
  });
});

$(".side-button-wrap i").click(function() {
  $(".side-nav")
    .animate({ left: 0, width: "100%" }, 250)
    .addClass("in");
});
