
//jQuery selector add click event to each character
$(".card-character").on("click", function () {

	// If My-Character section has any children elements and the Defender Section 
	// has none, then append the click character to Defender section
	if ($("#my-character").children() && $("#defender").children().length == 0) {
		$(this).appendTo("#defender");
	}

	// If My-Character section has no children elements,then append the 
	// the click character to My-Character section
	if ($("#my-character").children().length == 0) {
		$(this).appendTo("#my-character");
	}

	// All children elements in the choose Character section will be append it to
	// the enemies available section
	$("#characters")
		.children()
		.appendTo("#enemies");
});

