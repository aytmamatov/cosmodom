$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("is-active");
    $(".header__inner").toggleClass("is-active");
    $(".header__container").toggleClass("is-active");
  });
});
