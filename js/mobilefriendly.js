$(document).ready(function() {
  function toggleDropdown() {
    $(".dropdown").toggleClass("open");
  }

  var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

  if (isTouchDevice) {
    $(".dropdown-toggle").on("click", function(e) {
      e.preventDefault();
      toggleDropdown();
    });

    $(".dropdown-menu a").click(function(e) {
      e.stopPropagation();
    });

    $(document).on("click", function(e) {
      if (!$(e.target).closest(".dropdown").length && !$(e.target).closest(".dropdown-toggle").length) {
        $(".dropdown").removeClass("open");
      }
    });
  }
});