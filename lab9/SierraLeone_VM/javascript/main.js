function addTooltips() {
	$('.thumbs, .thumbArray').each(function() {
		$(this).find('img').each(function() {
			objectName = $(this).attr('alt');
			if ( objectName != '' && !$(this).hasClass('tooltiped') ) {
				position = $(this).position();
				$(this).after('<div class="tooltip"><p>' + objectName + '</p></div>');
				$(this).next('.tooltip').css({'top' : position.top}).css({'left' : position.left});
				$(this).addClass('tooltiped');
				$(this).parent().attr('title', 'View item information').hover(function() {
					$(this).find('.tooltip').show();	
				}, function () {
					$(this).find('.tooltip').hide();	
				});
			}
		});
	});
}

$(window).load(function() {

	// Add tooltips from the alt attr and show/hide on hover 
	// Window.load function to allow images to download before acted upon
	addTooltips();

});

$(document).ready(function() {
     
	
		  $(".furtherinfo_hide").click(function(){
			$(".furtherinfo_body").slideUp();
			$(".furtherinfo_view").show();
			$(".furtherinfo_hide").hide();
		  });
		  $(".furtherinfo_view").click(function(){
			$(".furtherinfo_body").slideDown();
			$(".furtherinfo_view").hide();
			$(".furtherinfo_hide").show();
		  });
		






	// Sub nav down arrow colour tweak
		$('ul#mainNav li a').each(function() {
			$(this).parent().next('ul').attr('class', 'colour' + $(this).attr('class').slice(-1));
		});

	// Clear input box on focus
		value = $('input.text').attr('value');
		$('input.text').focus(function() {
			$(this).attr('value', '');							   
		});
//		$('input.text').blur(function() {
//			$(this).attr('value', value);							   
//		});
		
	// checkboxes
		$('.checkboxList').each(function() {
			$(this).parent().find('p.shuntRight').find('a').click(function() {
				allOrNone = $(this).attr('class');
				$(this).parent().parent().find('.checkboxList').find(':checkbox').each(function() {
					if ( allOrNone == 'none' ) {
						$(this).attr('checked', '');
						
						$('ul.cultureGroups li a').addClass('unchecked');
					} else if (  allOrNone == 'all' ) {
						$(this).attr('checked', 'checked');
						$('ul.cultureGroups li a').removeClass('unchecked');
					}
				});
				return false;
			});
		});
		
		//This will tick / untick on map.. please note I have changed its values to m_all and m_none
		$('.checkboxList').each(function() {
			$(this).parent().find('p.shuntRight').find('a').click(function() {
				allOrNone = $(this).attr('class');
				$(this).parent().parent().find('.checkboxList').find(':checkbox').each(function() {
					if ( allOrNone == 'n_none' ) {
						$(this).attr('checked', '');
						
						//$('ul.cultureGroups li a').addClass('unchecked');
					} else if (  allOrNone == 'n_all' ) {
						$(this).attr('checked', 'checked');
						//$('ul.cultureGroups li a').removeClass('unchecked');
					}
				});
				return false;
			});
		});
		// Culture group map links - check boxes on click
			$('ul.cultureGroups li a').click(function() {
				group = $(this).parent().attr('class');
				input = $('ul.mapCheckboxes').find('input#' + group);
				if (input.is(':checked')) {
					input.attr('checked', '');
					$(this).addClass('unchecked');
				} else {
					input.attr('checked', 'checked');
					$(this).removeClass('unchecked');
				}
				return false;
			});
		/* 
		   Make sure at least 1 is ticked for pre defined groups.
		   USAGE: add class 'required' to the checkboxList ul for any checkbox groups that need at least 1 box checked.
		*/
		function checkSearch() {
			checkboxGroupNames = [];
			$('.required').each(function() {
				numberOfChecked = $(this).find('input:checked').length;
				if ( numberOfChecked == 0 ) {
					checkboxGroupName = $(this).parent('div').find('h3').text();
					checkboxGroupNames.push(checkboxGroupName);
					if (checkboxGroupNames.length == 1) {
						$('span.moreThanOne').html('');
						$('span.group').html('<em>' + checkboxGroupNames + '</em>').parent().find('.plural').html('').parent().slideDown('fast');
					} else if (checkboxGroupNames.length == 2) {
						$('span.moreThanOne').html('from each group');
						$('span.group').html('<em>' + checkboxGroupNames.join(' and ') + '</em>').parent().find('.plural').html('s').parent().slideDown('fast');
					} else if (checkboxGroupNames.length > 2) {
						names = checkboxGroupNames.join(', ').replace(/,\s([^,]+)$/, ' and $1');
						$('span.moreThanOne').html('from each group');
						$('span.group').html('<em>' + names + '</em>').parent().find('.plural').html('s').parent().slideDown('fast');
					}
					halt = true;
				}
			});	
		}
		$('input.go').live('click', function() {
			checkSearch();
			if ( halt == true ) {
				halt = false;
				return false;
			} else {
				return true;
			}
		});
			
	// slideshow
		$('#homeSlideshow ul li:first-child').show();
		play();
		$('#homeSlideshow a.play').click(function() {
			$(this).hide().parent().find('a.pause').show();
			play();
			return false;
		});
		$('#homeSlideshow a.pause').click(function() {
			$(this).hide().parent().find('a.play').show();
			pause();
			return false;
		});
		function play() {
			i = 0;
			run = setInterval(function(){$($('#homeSlideshow li:visible').fadeOut(500).siblings().andSelf().get(++i % $('#homeSlideshow li').length)).fadeIn(1000);}, 4000);
		}
		function pause() {
			if( run ) {clearInterval(run);}
		}
		$(window).resize(function() {
			$('#homeSlideshow').css('height', $('#homeSlideshow').width()/2.9166);
		});
		
	// Related item thumb margin
		$('.relatedThumbs img:odd').css({'margin' : '0 0 20px 0'});
		noOfItems = $('.relatedThumbs img').length;
		if ( noOfItems % 2 ) {
			// odd
			$('.relatedThumbs img:last').css({'margin-bottom' : '0'});
		} else {
			// even
			$('.relatedThumbs img:last').css({'margin' : '0'}).parent().prev().find('img').css({'margin' : '0 20px 0 0'});
		}	

	// thumbnail browser
		// Animate thumb slider
		$('.thumbBrowse').each(function() {
			var rootDiv = $(this);
			var itemsPerPanel = 5;
			var itemWidth = 120;
			var curItem = 1;
		
			rootDiv.data('currentlyMoving', false);
		
			function change(direction) {
				if((direction && !(curItem + itemsPerPanel - 1 < rootDiv.find('.thumbs a').length)) || (!direction && (curItem <= 1))) {return false;}	        
				if (rootDiv.data('currentlyMoving') == false) {            
					rootDiv.data('currentlyMoving', true);			
					var next = direction ? curItem + itemsPerPanel : curItem - itemsPerPanel;
					if(next < 1) {next = 1;}
					if(next > rootDiv.find('.thumbs a').length) {next = rootDiv.find('.thumbs a').length;}
					var movingDistance = (next - curItem) * itemWidth; 
					var leftValue  = rootDiv.find('.thumbs').css('left');
					var movement = parseFloat(leftValue) - movingDistance;
					animateTo(movement);
					curItem = next;
				}
			}
			function animateTo(left) {
				rootDiv.find('.thumbs').stop().animate({'left' : left}, function() {
					rootDiv.data('currentlyMoving', false);
				});
			}
			function loadImages() {
                            rootDiv.find('.right').addClass('loadingIcon');
                            offset = rootDiv.find('.thumbs a').length;
                            url = rootDiv.find('.right').attr('rel') + "/5/" + offset;
                            $.get(url, function(data) {
                                rootDiv.find('.thumbs').append(data);	
                                change(true);
                                rootDiv.find('.right').removeClass('loadingIcon');
                                setTimeout("addTooltips()", 200);
                            });
			}
			rootDiv.find('a.right').click(function() {
                            if (!(curItem + itemsPerPanel - 1 < rootDiv.find('.thumbs a').length)) {
                                    if (!(rootDiv.find('.thumbs a').length < 5)) {
                                            loadImages();
                                    }
                            } else {
                                    change(true);
                            }
                            return false;
			});	
			rootDiv.find('a.left').click(function() { 
				change(false);
				return false;
			});
		});
		
	// Further infomation slidy things
		$('a.furtherinfo').each(function() {
			$(this).html('');
			$(this).toggle(function() {
				$(this).addClass('close').parent().parent().find('.furtherinfoText').show();
				return false;
			}, function() {
				$(this).removeClass('close').parent().parent().find('.furtherinfoText').hide();
				return false;
			});
		});

	// Fancybox
		$('.lightbox').fancybox({titlePosition : 'over'});

	// Cut strings (Community box on front page)
		text = $('.cutString').text();
		
		
	// Tabs
		$('#tabs').children('div').hide().parent().find('div:first').show();
		$('#tabs .menu').addClass('activated').find('a:first').addClass('active');
		$('#tabs .menu a').click(function() {
			$('#tabs').children('div').hide().parent().find($(this).attr('href')).show();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			return false;
		});
		
	// Dropdown toggle content
		$('a.fullInformation2').parent().css({'margin' : '0'})/*.parent().append('<div class="ellipsis center"></div>')*/;
		$('a.fullInformation2').click(function() {
			if ($(this).hasClass('showing2')) {
				$(this).parent().css({'margin' : '0'}).parent().find('.hide2').slideUp()/*.parent().append('<div class="ellipsis center"></div>')*/;
				$(this).removeClass('showing2').html('View &#8595;');
			} else {
				$(this).parent().css({'margin-bottom' : '10px'}).parent().find('.hide2').slideDown().parent().find('.ellipsis').remove();
				$(this).addClass('showing2').html('Hide &#8593;');				 
			}
			return false;
		});
	
	// Fix for IE6 thumb browser containing box padding
		/*if (jQuery.browser.msie) {
			if (parseInt(jQuery.browser.version) == 6) {
				if ( $('.thumbBrowse').parents('.box').length > 0 ) {
					$('.box').css({'padding' : '0'});
					$('.boxedTitle').css({'padding' : '10px 30px', 'margin-top' : '0'});
				}
			}
		}*/


});