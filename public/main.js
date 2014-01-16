function twitterEmbed(data){

	$('[data-url="' + data["url"] + '"]').each(function(){
		$(this).attr("data-url", "");
		$(this).html(data["html"]);
		$(this).css('visibility', 'hidden');
	})
	twttr.widgets.load();
	
}
