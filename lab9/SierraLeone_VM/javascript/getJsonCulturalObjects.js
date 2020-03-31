//JQuery document.ready function (the ready event) is used to run the jQuery script as soon as the DOM hierarchy has been fully constructed
$(document).ready(function() {

	//Initilise the mobile web page with an initial cultural object on load
	var coid = 2370; //change the coid to choose an initial object
	var moid = 0; //Not forgetiting to set tit associated media object id
	update(coid,moid);
	
	//Select the cultural object using the thumbnail gallery selector
	selectCulturalObject();
	
	//Fade out the old cultural object and fade in the new cultural object
	fadeCulturalObject();

});
	
function update(coid,moid)  {

	//Populate the thumbnail selector
	populateThumbnails();

	//Setup the RCH API URL for the AJAX request
	var rch_API_url = 'http://www.sierraleoneheritage.com/api/search_service/fetch_item/coid/'+ coid + '/format/json';
	
	//Make an AJAX request with the rch_API to get the object metadata, media and description
	$.getJSON(rch_API_url, function(jsonObj) {
		console.log(jsonObj);
		//Assign the AJAX requested data in to appropriate <div> tag wrapped in HTML
		//Start by selecting the object name and its description
		$('#name').html('<h4 >' + jsonObj.data.Object + '</h4>');
		$('#description').html('<p style="display:inline">' + jsonObj.data.Description + '</p>');
		//Then select information based on the object's metadata
		$('#object').html('<p style="display:inline">' + jsonObj.data.Object + '</p>');
		$('#materials').html('<p style="display:inline">' + jsonObj.data.Materials + '</p>');	
		$('#cultureGroup').html('<p style="display:inline">' + jsonObj.data.CultureGroup + '</p>');
		$('#dimensions').html('<p style="display:inline">' + jsonObj.data.Dimensions + '</p>');
		$('#productionDate').html('<p style="display:inline">' + jsonObj.data.ProductionDate + '</p>');
		$('#associatedPlaces').html('<p style="display:inline">' + jsonObj.data.AssociatedPlaces + '</p>');
		$('#associatedPeople').html('<p style="display:inline">' + jsonObj.data.AssociatedPeople + '</p>');
		$('#museum').html('<p style="display:inline">' + jsonObj.data.Museum + '</p>');
		$('#accessionNumber').html('<p style="display:inline">' + jsonObj.data.AccessionNumber + '</p>');

		//Next select all the media objects belonging to the requested cultural objects, starting with an image of the cultural object, 
		//for no other reason than in actual fact the orginal database only contains 1 to 3 images of each object in large, medium and small formats
		$('#imageUrl').html('<a href="' + jsonObj.data.Media[0].Media.large + '" class="lightbox">' + '<img src="' + jsonObj.data.Media[0].Media.large + '" alt="Object Image"/>');

	})
	
	//Setup the RCH MEDIA API URL for the AJAX request - as test we are simly access a JSON file, but it could easilly be an API call
	var rch_media_API_url = './model/codata1.json';
	
	//Make an another AJAX request with the rch_media_API to get the object's media (3D, video and audio — this media is not integrated with the original object in the RCH database)
	//So we are effectively aggregating contents by mashing up APIs
	$.getJSON(rch_media_API_url, function(jsonObj) {
		console.log(jsonObj);

		//Then grab any video for the objects requested
		$('#videoUrl').html('<video width=100% controls>' + '<source src="' + jsonObj.culturalObjects[moid].videoUrl + '"'+  ' type=' + '"video/mp4"' + '/>' + '</video> ');
	
		//And grab any 3D media objects
		//Every time the user clicks on a X3DOM object
		var file = jsonObj.culturalObjects[moid].x3domUrl;
		//Replace the x3d file in the context (if not already loaded)
		if(file != $('#x3domUrl').attr('url'))
			$('#x3domUrl').attr('url', file);
			
		//Not forgetting to grab the remaining media objects, e.g. audio and AR trigger images
		$('#soundUrl').html('<audio width=100% controls>' + '<source src="' + jsonObj.culturalObjects[moid].soundUrl + '"'+  ' type=' + '"audio/mpeg"' + '/>' + '</audio> ');
		$('#arImgUrl').html('<img src="' + jsonObj.culturalObjects[moid].arImageUrl + '"/>');

	})
}

function populateThumbnails()  {
	
	//Setup the URL for the AJAX requests to grab thumbnails - in this case we are getting thumbnails from both a JSON file, but it could easilly be an API call, and an API call
	var rch_media_API_url = './model/codata1.json';	
	var rch_API_url = 'http://www.sierraleoneheritage.com/api/search_service/fetch_item/coid/' + 2370 + '/format/json';

	//Make an AJAX request(s) to grab the thumbnails for each object to create the links to each cultural object, note that we are only dealing with 4 objects here.  
	$.getJSON(rch_API_url, function(jsonObj) {
		console.log(jsonObj);
		
		$('#object1').attr('src', jsonObj.data.Media[0].Media.small); //Cultural object 1

	});

	$.getJSON(rch_media_API_url, function(jsonObj) {
		console.log(jsonObj);
		
		$('#object2').attr('src', jsonObj.culturalObjects[1].imageSmallUrl); //Cultural object 2
		$('#object3').attr('src', jsonObj.culturalObjects[2].imageSmallUrl); //Cultural object 3
		$('#object4').attr('src', jsonObj.culturalObjects[3].imageSmallUrl); //Cultural object 4

	});
}

function selectCulturalObject() {

	//Update HTML page with new cultural object data from the AJAX request, for a pre-planned exhibition we can already know the coid and moid
	$( "#object1" ).click(function() {
		update(coid=2370, moid=0);
	});
	$( "#object2" ).click(function() {
		update(coid=2371, moid=1);
	});
	$( "#object3" ).click(function() {
		update(coid=2372, moid=2);
	});
	$( "#object4" ).click(function() {
		update(coid=2373, moid=3);
	});
}

function fadeCulturalObject() {

	//Select the desired cultural object's media objects
	$('.objImage').show(); //Initially show the image of the object first
    $('.objVideo').hide(); 
    $('.obj3D').hide();
	$('.objSound').hide();
	$('.objArx3d').hide();
   	$('#objImage').click(function(){
      $('.objImage').delay(500).fadeIn(500);
      $('.objVideo').fadeOut(500);
      $('.obj3D').fadeOut(500);
      $('.objSound').fadeOut(500);
      $('.objArx3d').fadeOut(500);	  
  	});
   	$('#objVideo').click(function(){
      $('.objVideo').delay(500).fadeIn(500);
      $('.objImage').fadeOut(500);
      $('.obj3D').fadeOut(500);
      $('.objSound').fadeOut(500);
      $('.objArx3d').fadeOut(500);	  
  	});
    $('#obj3D').click(function(){
      $('.obj3D').delay(500).fadeIn(500);
      $('.objImage').fadeOut(500);
      $('.objVideo').fadeOut(500);
	  $('.objSound').fadeOut(500);
      $('.objArx3d').fadeOut(500);	  
  	});
   	$('#objSound').click(function(){
      $('.objSound').delay(500).fadeIn(500);
      $('.objImage').fadeOut(500);
      $('.obj3D').fadeOut(500);
	  $('.objVideo').fadeOut(500);
      $('.objArx3d').fadeOut(500);
  	});
    $('#objArx3d').click(function(){
      $('.objArx3d').delay(500).fadeIn(500);
      $('.objImage').fadeOut(500);
      $('.objVideo').fadeOut(500);
      $('.objSound').fadeOut(500);
      $('.obj3D').fadeOut(500);	  
  	});
}
