function postToFacebook( redirect_uri, link, picture, caption, description){
	var facebook_app_id = 102124966826290
	var post_string = "https://www.facebook.com/dialog/feed?app_id=" + facebook_app_id + "&redirect_uri=" + redirect_uri + "&link=" + link + "&picture=" + picture + "&caption=" + encodeURIComponent(caption) + "&description=" + encodeURIComponent(description);
	window.location = post_string;
}