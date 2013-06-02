var isVisible_j = false;
var clickedAway_j = false;

var isVisible_c = false;
var clickedAway_c = false;

$('.popj').each(function() {
	var $pElem = $(this);

	$pElem.popover({ 
		html: true,
		placement: 'bottom',
		title: getPopTitle($pElem.attr('id')),
		content: getPopContent($pElem.attr('id'))
	}).click(function(e) {
		if (!isVisible_j) {
			$(this).popover('show');
			isVisible_j = true
			clickedAway_j = false
			e.preventDefault();
		}
	})
});

$('.popc').each(function() {
	var $pElem = $(this);

	$pElem.popover({ 
		html: true,
		placement: 'bottom',
		title: getPopTitle($pElem.attr('id')),
		content: getPopContent($pElem.attr('id'))
	}).click(function(e) {
		if (!isVisible_c) {
			$(this).popover('show');
			isVisible_c = true
			clickedAway_c = false
			e.preventDefault();
		}
	})
});

$(document).click(function(e) {
	if(isVisible_j & clickedAway_j) {
		if (e.target.className != "popover-content" & e.target.className != "popover-title") {
			$('.popj').popover('hide');
			isVisible_j = clickedAway_j = false
		}
	} else {		
		clickedAway_j = true
	}
	if(isVisible_c & clickedAway_c) {
		if (e.target.className != "popover-content" & e.target.className != "popover-title") {
			$('.popc').popover('hide');
			isVisible_c = clickedAway_c = false
		}
	} else {		
		clickedAway_c = true
	}
});


function getPopTitle(target) {
	return $("#" + target + "-content > div.popTitle").html();
};

function getPopContent(target) {
	return $("#" + target + "-content > div.popContent").html();
};
