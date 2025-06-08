(function ($, Drupal) {
  Drupal.behaviors.changeMembersToSubscribersClaro = {
    attach: function (context, settings) {		
		
		$("body.path-group div#block-claro-lalg-local-tasks ul li a").each(function(index, value) {
			if ($(this).text() == "members") {
				$(this).text("subscribers");
			};
			if ($(this).text() == "Members") {
				$(this).text("Subscribers");
			};
		});			
		
    }
  }
})(jQuery, Drupal);
