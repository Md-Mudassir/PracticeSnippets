function testJS() {
  var name = jQuery("#name").val();
  jQuery.load("next.html", function() {
    jQuery("#here").html(name);
  });
}
