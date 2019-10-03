var mainCharacters = {
	obiwan: {
		name: "Obi-Wan Kenobi",
		"Health Points": 120,
		"Attack Power": 6,
		"Counter Attack": 4
	},

	grievous: {
		name: "General Grievous",
		"Health Points": 150,
		"Attack Power": 5,
		"Counter Attack": 4
	},

	dooku: {
		name: "Count Dooku",
		"Health Points": 200,
		"Attack Power": 8,
		"Counter Attack": 6
	},
	anakin: {
		name: "Anakin Skywalker",
		"Health Points": 130,
		"Attack Power": 8,
		"Counter Attack": 4
	}
}

var myCharacterData;
var defenderData;

//jQuery selector add click event to each character
$(".card-character").on("click", function () {

	// Fetch clicked element data-attribute to reference the key in 
	// the object mainCharacter and store its value in a local variable
	var characterData = mainCharacters[$(this).data("character-name")];

	// If My-Character section has any children elements and the Defender Section 
	// has none, then append the click character to Defender section
	if ($("#my-character").children().length > 0 && 
		$("#defender").children().length == 0) {
		
			$(this).appendTo("#defender");

		// Makes a deep copy of characterData and store it in a global variable
		defenderData = jQuery.extend(true, {}, characterData);
	}

	// If My-Character section has no children elements,then append the 
	// the click character to My-Character section
	if ($("#my-character").children().length == 0) {
		$(this).appendTo("#my-character");

		// Makes a deep copy of characterData and store it in a global variable
		myCharacterData = jQuery.extend(true, {}, characterData);
	}

	// All children elements in the choose-character-section will be append it to
	// the enemies-available-section
	$("#characters")
		.children()
		.appendTo("#enemies");
	
	console.log(myCharacterData, defenderData); //Test var log
});

