$(document).ready(function() {

  $('a[href*="#"]')

    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {

      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {

        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {

          event.preventDefault();

          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1"); 
                $target.focus(); 
              }
            }
          );
        }
      }
    });
  const projects = Array.from(document.querySelectorAll(".project-wrap"));
  projects.forEach(function(project) {
    project.addEventListener("click", function() {
      let url = this.dataset.url;
      if ($(".iframe-wrap").hasClass("open")) {
        document.querySelector(".iframe-wrap iframe").src = url;
      }
      else {
        $(".iframe-wrap").addClass("open");
        document.querySelector(".iframe-wrap iframe").src = url;
      }
      if (document.querySelector(".iframe-wrap iframe").src == url){
        $(".iframe-wrap").hide();
      };
      else {
        $(".iframe-wrap").show();
      }
      ;
    });
  });

  function topInViewport(element) {
    return (
      $(element).offset().top >= $(window).scrollTop() &&
      $(element).offset().top <= $(window).scrollTop() + $(window).height()
    );
  }

  $(window).on("load resize scroll", function(e) {
    topInViewport($("#projects"));
  });

  $(".fa-chevron-right").click(function() {
    $(".side-nav").animate({ left: 0, width: "100%" }, 250, function() {
      $(this).toggleClass("in");
      $(".fa-chevron-right").toggleClass("hidden");
      $(".fa-times").toggleClass("hidden");
    });
  });

  $(".fa-times").click(function() {
    $(".side-nav").animate({ height: "0" }, 250, function() {
      $(this).toggleClass("in");
      $(".fa-chevron-right").toggleClass("hidden");
      $(".fa-times").toggleClass("hidden");
      $(".side-nav").animate({ left: 0, width: "100%" }, 250);
    });
  });
});