// JavaScript Document
$(document).ready(function(){

	 //AJAX service request to get the main text data from the json data store
	 $.getJSON('./model/data.json', function(jsonObj) {
		
		//Get the Lab 1 text data
		//$('#title_main').html('<h2 class ="drinksText">' + jsonObj.pageTextData[0].title + '</h2>');
		//$('#subTitle_main').html('<h3 class ="drinksText">' + jsonObj.pageTextData[0].subTitle + '</h3>');
		//$('#description_main').html('<p class ="drinksText">' + jsonObj.pageTextData[0].description + '</p>');		
		
		//Get the Lab 1 text data
		$('#title_lab1').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
		$('#subTitle_lab1').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
		$('#description_lab1').html('<p>' + jsonObj.pageTextData[0].description + '</p>');		
		
		//Get the Lab 2 text data
		$('#title_lab2').html('<h2>' + jsonObj.pageTextData[1].title + '</h2>');
		$('#subTitle_lab2').html('<h3>' + jsonObj.pageTextData[1].subTitle + '</h3>');
		$('#description_lab2').html('<p>' + jsonObj.pageTextData[1].description + '</p>');
 
 		//Get the Lab 3 text data
		$('#title_lab3').html('<h2>' + jsonObj.pageTextData[2].title + '</h2>');
		$('#subTitle_lab3').html('<h3>' + jsonObj.pageTextData[2].subTitle + '</h3>');
		$('#description_lab3').html('<p>' + jsonObj.pageTextData[2].description + '</p>');		

		//Get the Lab 4 text data
 		$('#title_lab4').html('<h2>' + jsonObj.pageTextData[3].title + '</h2>');
		$('#subTitle_lab4').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
		$('#description_lab4').html('<p>' + jsonObj.pageTextData[3].description + '</p>');
		
		//Get the Lab 5 text data
 		$('#title_lab5').html('<h2 class ="drinksText">' + jsonObj.pageTextData[4].title + '</h2>');
		$('#subTitle_lab5').html('<h3 class ="drinksText">' + jsonObj.pageTextData[4].subTitle + '</h3>');
		$('#description_lab5').html('<p class ="drinksText">' + jsonObj.pageTextData[4].description + '</p>');
		
		//Get the Lab 6 text data
		$('#title_lab6').html('<h2 class ="drinksText">' + jsonObj.pageTextData[5].title + '</h2>');
		$('#subTitle_lab6').html('<h3 class ="drinksText">' + jsonObj.pageTextData[5].subTitle + '</h3>');
		$('#description_lab6').html('<p class ="drinksText">' + jsonObj.pageTextData[5].description + '</p>');		

		//Get the Lab 7 text data
 		$('#title_lab7').html('<h2 class ="drinksText">' + jsonObj.pageTextData[6].title + '</h2>');
		$('#subTitle_lab7').html('<h3 class ="drinksText">' + jsonObj.pageTextData[6].subTitle + '</h3>');
		$('#description_lab7').html('<p class ="drinksText">' + jsonObj.pageTextData[6].description + '</p>');
		
		//Get the Lab 8 text data
 		$('#title_lab8').html('<h2 class ="drinksText">' + jsonObj.pageTextData[7].title + '</h2>');
		$('#subTitle_lab8').html('<h3 class ="drinksText">' + jsonObj.pageTextData[7].subTitle + '</h3>');
		$('#description_lab8').html('<p class ="drinksText">' + jsonObj.pageTextData[7].description + '</p>');
		
		//Get the Lab 9-12 text data
 		$('#title_lab9').html('<h2 class ="drinksText">' + jsonObj.pageTextData[8].title + '</h2>');
		$('#subTitle_lab9').html('<h3 class ="drinksText">' + jsonObj.pageTextData[8].subTitle + '</h3>');
		$('#description_lab9').html('<p class ="drinksText">' + jsonObj.pageTextData[8].description + '</p>');
		
		//Get the main text box data
 		$('#title_main').html('<h2 class ="drinksText">' + jsonObj.pageTextData[9].title + '</h2>');
		$('#subTitle_main').html('<h3 class ="drinksText">' + jsonObj.pageTextData[9].subTitle + '</h3>');
		$('#description_main').html('<p class ="drinksText">' + jsonObj.pageTextData[9].description + '</p>');
 	 
	 });
});