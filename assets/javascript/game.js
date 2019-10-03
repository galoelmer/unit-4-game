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

var playerCharacterData;
var defenderData;

$("#attack-button").hide();
$("#restart-button").hide();

//jQuery selector add click event to each character
$(".card-character").on("click", function () {

	// Fetch clicked element data-attribute to reference the key in 
	// the object mainCharacters and store its value in a local variable
	var characterData = mainCharacters[$(this).data("character-name")];

	// If Player character section has any children elements and the Defender Section 
	// has none, then append the click character to Defender section
	if ($("#my-character").children().length > 0 &&
		$("#defender").children().length == 0) {

		$(this).appendTo("#defender");
		$("#attack-button").show();

		// Makes a deep copy of characterData and store it in a global variable
		defenderData = jQuery.extend(true, {}, characterData);
	}

	// If Player character section has no children elements,then append the 
	// the click character to Player character section
	if ($("#my-character").children().length == 0) {
		$(this).appendTo("#my-character");

		// Makes a deep copy of characterData and store it in a global variable
		playerCharacterData = jQuery.extend(true, {}, characterData);
	}

	// All children elements in the choose-character-section will be append it to
	// the enemies-available-section
	$("#characters")
		.children()
		.appendTo("#enemies");
});

//jQuery selector add click event to Attack button 
$("#attack-button").click(function () {

	// Defender character lose Health Points
	defenderData["Health Points"] -= playerCharacterData["Attack Power"];

	// Player character lose Health Points
	playerCharacterData["Health Points"] -= defenderData["Counter Attack"];

	// Player character increase Attack Power by adding original 
	// Attack Power from character data
	playerCharacterData["Attack Power"] += mainCharacters[$("#my-character > *")
		.data('character-name')]["Attack Power"];

	// Replace HP value on Player character element
	$("#my-character #hp").text(playerCharacterData["Health Points"]);

	// Replace HP value on Defender character
	$("#defender #hp").text(defenderData["Health Points"]);

	// If Defender character HP is less than zero, remove Defender character from DOM
	if (defenderData["Health Points"] < 0) {

		$("#attack-button").hide();
		$("#defender").empty();

	}

	// If Player character HP is less than zero, player lose and 
	// restart button becomes visible
	if (playerCharacterData["Health Points"] < 0) {

		$("#attack-button").hide();
		$("#restart-button").show();
		$("#my-character-area > h3").text("Defeated");

	}

	// If enemies section has no children elements, player wins and
	// restart button becomes visible
	if ($("#enemies").children().length == 0 &&
		$("#defender").children().length == 0) {

		$("#my-character-area > h3").text("Winner!!!");
		$("#restart-button").show();

	}
});