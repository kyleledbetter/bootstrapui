$(document).ready(function () {
  $('[data-toggle="sidebar"]').click(function () {
    $('.sidebar').toggleClass('toggle');
  });
  $('[data-toggle="aside"]').click(function () {
    $('.aside').toggleClass('toggle');
  });
  $('[data-toggle="search"]').click(function () {
    $('.search form').toggle();
    $('.search .btn-group').toggle();
  });
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover({ trigger: "hover" });
});
// Animate progress bars
$(function(){
  $('.progress .progress-bar').each(function() {
    var bar = $(this);
    var perc = bar.attr("aria-valuenow");
    var current_perc = 0;
          var progress = setInterval(function() {
      if (current_perc>=perc) {
        clearInterval(progress);
      } else {
        current_perc +=1;
        bar.css('width', (current_perc)+'%');
      }
    }, 0);
  });
});