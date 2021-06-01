$(document).ready(function () {
  $(".main_link").click(function () {
    anchorHandler(".header");
  });
  $(".services_link").click(function () {
    anchorHandler(".services");
  });
  $(".company_link").click(function () {
    anchorHandler(".company");
  });
  $(".rent_link").click(function () {
    anchorHandler(".rent");
  });
  $(".day_link").click(function () {
    anchorHandler(".day");
  });
  $(".sale_link").click(function () {
    anchorHandler(".sale");
  });
  function anchorHandler(target) {
    let hamburger = $(".hamburger");
    if (hamburger.hasClass("is-active")) {
      $(".hamburger").removeClass("is-active");
      $(".header__inner").removeClass("is-active");
      $(".header__container").removeClass("is-active");
      $(".wrapper").removeClass("is-active");
    }
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top + "px",
      }
      // 1000,
      // "swing"
    );
  }
});
