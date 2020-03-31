//JQuery document.ready function (the ready event) is used to run the jQuery script as soon as the DOM hierarchy has been fully constructed
$(document).ready(function() {
	
	//Intilise the mobile web page on load
	var objID = 0;
	update(objID);
	
	//Update HTML page with new cultural object data from the AJAX request
	$( "#object1" ).click(function() {
		update(objID=0);
	});
	$( "#object2" ).click(function() {
		update(objID=1);
	});
	$( "#object3" ).click(function() {
		update(objID=2);
	});
	$( "#object4" ).click(function() {
		update(objID=3);
	});
	
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
});
	
function update(objID)  {
    //Read the JSON file as an AJAX request 
	$.getJSON('./model/codata1.json', function(jsonObj) {
		console.log(jsonObj);
		//Assign the AJAX requested data in to appropriate <div> tag wrapped in HTML
		//Start by selecting the object name and its description

		$('#name').html('<h4 >' + jsonObj.culturalObjects[objID].name + '</h4>');
		$('#description').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].description + '</p>');
		//Then select information based on the object's metadata
		$('#object').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].object + '</p>');
		$('#materials').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].materials + '</p>');
		$('#cultureGroup').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].cultureGroup + '</p>');
		$('#dimensions').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].dimensions + '</p>');
		$('#productionDate').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].productionDate + '</p>');
		$('#associatedPlaces').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].associatedPlaces + '</p>');
		$('#associatedPeople').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].associatedPeople + '</p>');
		$('#museum').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].museum + '</p>');
		$('#accessionNumber').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].accessionNumber + '</p>');
	
		//Then  make further AJAX requests for all the media objects belonging to the requested cultural objects, starting with an image of the cultural object, 
		//for no other reason than in actual fact the orginal dtabase only contains 1 to 3 images of each object in large, medium and small formats
		$('#imageUrl').html('<a href="' + jsonObj.culturalObjects[objID].imageLargeUrl + '" class="lightbox">' + '<img src="' + jsonObj.culturalObjects[objID].imageLargeUrl + '" alt="Object Image"/>');
		
		//Next grab (AJAX request) the thumbnails for each object to create the links to each cultural object, note that we are only dealing with 4 objects here.  
		//In reality, if we had multple cultural objects, for example being returned by a search for 'bowl', we would be building a 'gallery' selector to browse the multiple objects
		//So in this particular case, we have hard wired each object 0 to 3
		$('#object1').attr('src', jsonObj.culturalObjects[0].imageSmallUrl);
		$('#object2').attr('src', jsonObj.culturalObjects[1].imageSmallUrl);
		$('#object3').attr('src', jsonObj.culturalObjects[2].imageSmallUrl);
		$('#object4').attr('src', jsonObj.culturalObjects[3].imageSmallUrl);
		
		//Then grab (AJAX request) any video for the objects requested
		$('#videoUrl').html('<video width=100% controls>' + '<source src="' + jsonObj.culturalObjects[objID].videoUrl + '"'+  ' type=' + '"video/mp4"' + '/>' + '</video> ');

		//And grab any 3D media objects
		//Every time the user clicks on a X3DOM object
		var file = jsonObj.culturalObjects[objID].x3domUrl;
		//Replace the x3d file in the context (if not already loaded)
		if(file != $('#x3domUrl').attr('url'))
			$('#x3domUrl').attr('url', file);
			
		//Not forgetting to grab the remaining medie objects, e.g. audio and AR trigger images
		$('#soundUrl').html('<audio width=100% controls>' + '<source src="' + jsonObj.culturalObjects[objID].soundUrl + '"'+  ' type=' + '"audio/mpeg"' + '/>' + '</audio> ');
		$('#arImgUrl').html('<img src="' + jsonObj.culturalObjects[objID].arImageUrl + '"/>')  	
	})
}


