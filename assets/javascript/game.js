// Globabl Variables
var avatars =  {
    avatar1 : {
        name: "Yoda",
        HP  : 100,
        AP  : 5,
        CAP : 6,
        Image : "assets/images/170px-Yoda_Attack_of_the_Clones.png"
    },

    avatar2 : {
        name: "Darth Maul",
        HP  : 120,
        AP  : 6,
        CAP : 5,
        Image : "assets/images/220px-Darth_Maul.png"
    },

    avatar3 : {
        name: "Obi-Wan Kenobi",
        HP  :   150,
        AP  :   8,
        CAP :   9,
        Image : "assets/images/obi-wan-kenobi-810x455.jpg"
    },

    avatar4 : {
        name: "Darth Vadar",
        HP  :   200,
        AP  :   10,
        CAP :   10,
        Image : "assets/images/Darth_Vader.jpg"
    }
};

// avatar1 = {
//     name: "Yoda",
//     HP  : 100,
//     AP  : 5,
//     CAP : 6
// };

// avatar2 = {
//     name: "Darth Maul",
//     HP  : 120,
//     AP  : 6,
//     CAP : 5
// };

// avatar3 = {
//     name: "Obi-Wan Kenobi",
//     HP  :   150,
//     AP  :   8,
//     CAP :   9
// };

// avatar4 = {
//     name: "Darth Vadar",
//     HP  :   200,
//     AP  :   10,
//     CAP :   10
// };

var playMode = false;

var playerHP = 0;
var playerAP = 0;
var attacks = 0;

var advisaryHP = 0;
var advisaryCAP = 0;

// At Start Fill the Card Detail with Data from Avatar Object.
for (var key in avatars) {
    // Create Elements
    var cardTitle = $("<h5>");
    var cardText = $("<p>");

    // 3. Add Class
    cardTitle.addClass("card-title");
    cardText.addClass("card-text");

    // 4. Add Data Attribute for Avatar Num...
    cardTitle.attr("data-avatarNum", "avatar1");

    // 5. Fill h5 tag with object's name value
    cardTitle.text(avatars[key].name);
    cardText.text(avatars[key].HP);

    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
    $("#avatar1").append(cardTitle);
    $("#avatar1").append(cardText);
}

// When User selects an avatar, move their HP & AP into global variables for tracking...
function initializePlayer (avatar) {
    switch (avatar) {
        case 'avatar1':
            playerHP = avatar1.HP;
            playerAP = avatar1.AP;
            break;
        case 'avatar2':
            playerHP = avatar2.HP;
            playerAP = avatar2.AP;
            break;
        case 'avatar3':
            playerHP = avatar3.HP;
            playerAP = avatar3.AP;
            break;
        case 'avatar4':
            playerHP = avatar4.HP;
            playerAP = avatar4.AP;
            break;
    }
    
    console.log("Player HP: " + playerHP + " Attack Pwr: " + playerAP);
}

// When user selects advisary, move their HP & CAP into global variables for tracking...
function initializeAdvisary (avatar) {
    switch (avatar) {
        case 'avatar1':
            advisaryHP  = avatar1.HP;
            advisaryCAP = avatar1.CAP;
            break;
        case 'avatar2':
            advisaryHP  = avatar2.HP;
            advisaryCAP = avatar2.CAP;
            break;
        case 'avatar3':
            advisaryHP  = avatar3.HP;
            advisaryCAP = avatar3.CAP;
            break;
        case 'avatar4':
            advisaryHP  = avatar4.HP;
            advisaryCAP = avatar4.CAP;
            break;
    }

    // console.log(advisaryHP);
    // console.log(advisaryCAP);
    console.log("Advisary HP: " + advisaryHP + " Attack Pwr: " + advisaryCAP);
}

// playerAttack calculates the AP for player
function playerAttack () {
    attacks++;
    var playerAttack = playerAP *attacks;
    // advisaryHP - playerAttack;
    return playerAttack;
}

// advisaryAttack calculates the CAP for the opponent
function advisaryAttack () {
    return advisaryCAP;
}

// Example Round:
// 1. Player Attacks, which reduces enemy HP,
// 2. Opponent will counter-attack, which reduces player's HP

// Win Conditions
// Game continues until player HP <= 0
// if Opponent's HP <= 0 then player has defeated them

$(".attack").on("click", function() {
    advisaryHP = advisaryHP - playerAttack();
    console.log(advisaryHP);
    $("#avatar2").text(advisaryHP);
    
    playerHP = playerHP - advisaryAttack();
    console.log(playerHP);
    $("#avatar1").text(playerHP);
    
    if (playerHP <= 0) {
        alert("GAME OVER!");
    } else if (advisaryHP <= 0) {
        alert("Congrats you have defeated your opponent!");
    }

});

$(".setup").on("click", function() {
    initializePlayer("avatar1");
    
    initializeAdvisary("avatar2");


    // Create Elements
    var cardTitle = $("<h5>");
    var cardText = $("<p>");

    // 3. Add Class
    cardTitle.addClass("card-title");
    cardText.addClass("card-text");

    // 4. Add Data Attribute for Avatar Num...
    cardTitle.attr("data-avatarNum", "avatar1");

    // 5. Fill h5 tag with object's name value
    cardTitle.text(avatar1.name);
    cardText.text(avatar1.HP);

    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
    $("#avatar1").append(cardTitle);
    $("#avatar1").append(cardText);
});

// Game Actions: 1) Select Avatar 2) Selected Opponent 3) Cyle through the attack phase...
// Click Avatar Card - Clicking an Avatar Card will select them as the Player's Avatar (i.e. player)
$(".avatarCard").on("click", function(){
    // console.log(this);
    createPlayerCard(this);
    // alert(this.attr('SRC'));
    // alert($("#Avatar1img").attr("src"));
    // alert($(this).attr("src"));
    // var imgsrc = $(this).attr('src'); 
    // console.log(imgsrc);
    // alert($('#myimg').attr('src'));
});

// $(document).on('click', ".avatarCard", function() {
//     createPlayerCard(this);
// });

// Create Player Card...characterClicked
function createPlayerCard (e) {
    var playerCard = $("<div>");
    var playerCardImage = $("<div>");
    var playerCardSrc = $(e).attr('src');
    console.log(e);
    console.log(playerCardSrc);
    console.log(this);


    playerCard.addClass("card bg-dark text-white player-card");
    playerCardImage.addClass("card-img-top");

    $("#playerAvatar").append(playerCard);
    //$("#playerAvatar").html("<img src='assets/images/220px-Darth_Maul.png' alt='' class='img-thumbnail avatarThumbnail' />");
    // playerCard.html("<img src='assets/images/220px-Darth_Maul.png' alt='' class='img-thumbnail avatarThumbnail' />");
    // <img src="assets/images/220px-Darth_Maul.png" class="card-img-top" alt="Darth Maul"></img>
    // playerCardImage.attr({


    // });
    // $( "img" ).attr({
    //     src: "/resources/hat.gif",
    //     title: "jQuery",
    //     alt: "jQuery Logo"
    //   });
    playerCard.append(playerCardImage);
    
    



    // var playerBtn = $("<button>");
    // playerBtn.addClass("player-Btn");
    // playerBtn.attr("data-letter", characterClicked);
    // playerBtn.text(characterClicked);
    // $("#playerCharacter").append(playerBtn);
}
// Create Opponent Cards...