$(document).ready(function () {
  $('[data-toggle="sidebar"]').click(function () {
    $('.sidebar').toggle('slow');
  });
  $('[data-toggle="aside"]').click(function () {
    $('.aside').toggle('slow');
  });
  $('[data-toggle="popover"]').popover({ trigger: "hover" });
});