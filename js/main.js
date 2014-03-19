/*** Attention:

 - For all the projects that has an overflown image, give its button top:14px, and description wrapper 21%
 - Put them in index.html, and here

 *** bxSlider:
 - Looks like 20px fix is necessary again.

***/

var sliders = new Array();

$( document ).ready(function() {

	/*
	** bxSlider Init & Setup
	*/

	sliders.push(
		$('#slider1').bxSlider({
			pause: 3000,
			slideMargin: 100,
			controls: false,
		})
	);
	sliders.push(
		$('#slider2').bxSlider({
			pause: 3000,
			slideMargin: 100,
			controls: false,
		})
	);
	sliders.push(
		$('#slider3').bxSlider({
			pause: 3000,
			slideMargin: 100,
			controls: false,
		})
	);
	sliders.push(
		$('#slider4').bxSlider({
			pause: 3000,
			slideMargin: 100,
			controls: false,
		})
	);
	sliders.push(
		$('#slider5').bxSlider({
			pause: 3000,
			slideMargin: 100,
			controls: false,
		})
	);
	

	/*
	// [TODO]Stops the sliding when video's playin'
	var vimeoFrame = $("#testvimeo")[0];
	console.log(vimeoFrame);
	var vimeoPlayer = $f(vimeoFrame);
	console.log(vimeoPlayer);
	vimeoPlayer.addEvent('ready', function(){
		vimeoPlayer.addEvent('play', onPlay(id));
		vimeoPlayer.addEvent('finish', onFinish(id));
	});

	function onPlay(id) {
		// find the index of the slider that contains it
		console.log($(vimeoFrame));
		//stop();
	}
	
	function onFinish(id) {
		// find the slider that contains it, and gets to its control level
		//var sliderControl = $(vimeoFrame).parent().parent().parent().unslider().data('unslider');
		//sliderControl.play();
	}
	*/


	/*
	** 'View Project' ==> Project expands
	*/
	$(".button div").click(function(){
		if ($(this).html() == "VIEW PROCESS") 
		{
			return;
		} else {
			var tButtonDiv = $(this);
			// Change button's text to viewing process,
			tButtonDiv.html("VIEW PROCESS");
			
			// .project
			var tProject = tButtonDiv.parent().parent().parent();

			// If this project has an overflown image,
			// do the animations that reveal such image
			var imageOverflow = false;
			if(tProject.find(".image_overflower").length > 0) // Find returns an... array? that contains the result
			{
				imageOverflow = true;
				tProject.find(".image_overflower").animate({height:650},"slow");
				tProject.find(".image_overflower").find(".slider_wrapper").animate({top:0},"slow");
				// .description wrapper top distance for the two overflown projects
				tProject.find(".description_wrapper").animate({top:'30%'}, "slow");
			} else {
				if (tProject.find(".sliderChangesSize").length > 0) {
					// .description wrapper
					tProject.find(".description_wrapper").animate({top:'15%'}, "slow");
				} else {
					tProject.find(".description_wrapper").animate({top:'10%'}, "slow");
				}
			}
			
			tProject.animate({height:650},"slow",function(){
				// When done expanding,

				// Show exit button
				tProject.parent().parent().find(".x_button_wrapper").css("display", "block");
				// Switch to extended content
				tProject.find(".description_wrapper").find(".description").find(".brief").css("display", "none");
				tProject.find(".description_wrapper").find(".description").find(".extended").css("display", "block");
				// Show icon of what's used
				tButtonDiv.parent().parent().find(".programs_used").css("display", "inline-block");
				// Link to PDF
				tButtonDiv.bind('click.myEvent', function(){window.open(tButtonDiv.attr('id'), "_blank")});
				// if imageOverflow, reposition button
				if (imageOverflow) tButtonDiv.css("top", "30px");
				// Resizes slider after expand, if needed *cough cough Greatest Hotel
				if(tProject.find(".sliderChangesSize").length > 0)
				{
					tProject.find(".sliderChangesSize").css("width", "530px");
					tProject.find(".sliderChangesSize").find('.bx-viewport').css("height", "422px");
					sliders[1].reloadSlider();
					// aww yeah, hard coding to the max
				}
				// No sliding for projects with video. For now.
				if (tProject.find('.vimeoFrame').length = 0)
				{
					// Start Slidin'
					var sliderIndex = tProject.find(".sliderUL").attr("id");
					sliderIndex = sliderIndex[sliderIndex.length - 1]; // get the last character of that id
					sliders[sliderIndex - 1].startAuto(); // array index starts at 0
				}
			});
		}
	});

	// When the x button is pressed
	$(".x_button_wrapper img").click(function(){		
		// .projects_wrapper
		var tProjectWrapper = $(this).parent().parent();
		var tProject = tProjectWrapper.find(".project_width_modifier").find(".project");

		// If this project has an overflown image,
		// do the animations that overflows such image
		// and turn the project div to its original height
		var originalHeight;
		var imageOverflow = false;
		if(tProject.find(".image_overflower").length > 0) // Find returns an... array? that contains the result
		{
			imageOverflow = true;
			originalHeight = 320;
			tProject.find(".image_overflower").animate({height:originalHeight},"slow");
			tProject.find(".image_overflower").find(".slider_wrapper").animate({top:40},"slow");
			// .description wrapper top distance for the two overflown projects
			tProject.find(".description_wrapper").animate({top:'21%'}, "slow");
		} else {
			originalHeight = 390;
			if (tProject.find(".sliderChangesSize").length > 0) {
				// .description wrapper
				tProject.find(".description_wrapper").animate({top:'20%'}, "slow");
			} else {
				tProject.find(".description_wrapper").animate({top:'20%'}, "slow");
			}
		}

		tProject.animate({height:originalHeight},"slow",function(){
			// When done shrinking,
			// Change button's text to viewing project,
			var tButtonDiv = tProject.find(".description_wrapper").find(".button div");
			tButtonDiv.html("VIEW PROJECT");
			tButtonDiv.unbind('.myEvent');
			// hide exit button
			tProject.parent().parent().find(".x_button_wrapper").css("display", "none");
			// Switch to brief content
			tProject.find(".description_wrapper").find(".description").find(".extended").css("display", "none");
			tProject.find(".description_wrapper").find(".description").find(".brief").css("display", "block");
			// Show icon of what's used
			tProject.find(".description_wrapper").find(".programs_used").css("display", "none");
			// if imageOverflow, reposition button
			if (imageOverflow) tProject.find(".description_wrapper").find(".button div").css("top", "14px");
			// Change size of slider if necessary
			if(tProject.find(".sliderChangesSize").length > 0)
			{
				tProject.find(".sliderChangesSize").css("width", "417px");
				tProject.find(".sliderChangesSize").find('.bx-viewport').css("height", "335px");
				sliders[1].reloadSlider();
				// aww yeah, hard coding to the max
			}
			// No sliding for projects with video. For now.
			if (tProject.find('.vimeoFrame').length = 0)
			{
				// Stop Slidin'
				var sliderIndex = tProject.find(".sliderUL").attr("id");
				sliderIndex = sliderIndex[sliderIndex.length - 1]; // get the last character of that id
				sliders[sliderIndex - 1].stopAuto(); // array index starts at 0
			}
		});
	});

});