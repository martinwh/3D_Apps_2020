// JavaScript Document
$(document).ready(function ( ) {

	//Build a lightbox function exploiting Bootstrap's Modal function — based on: http://jsfiddle.net/5b01x6g2/2/
	 $('#myModal').on('show.bs.modal', function (e) {
	    var image = $(e.relatedTarget).attr('src');
	    $(".img-responsive").attr("src", image);
	 });
});