/**
 * Created by lukedowell on 8/6/15.
 */

//The values in our adjectives JSON file
var adj = [];

//The values in our modadjectives JSON file
var modadj = [];

//The values in our topics JSON file
var topics = [];

/**
 * Populates our word arrays. Throws an error if an array isn't populated.
 */
function populatePhraseData() {
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data) {
            data.map(function(item) {
                console.log(item);
                switch(item.key) {
                    case "adjectives":
                        adj = item.values;
                        break;
                    case "modadjectives":
                        modadj = item.values;
                        break;
                    case "topics":
                        topics = item.values;
                        break;
                }
            });
            console.log(adj);
            console.log(modadj);
            console.log(topics);
        },
        error: function() {
            console.log("ERROR");
        }
    });
}

/**
 * Generates a random phrase
 */
function generatePhrase() {
    var randomModAdj = modadj[getRandomNum(0, modadj.length-1)];
    var randomAdj = adj[getRandomNum(0, adj.length-1)];
    var randomTopic = topics[getRandomNum(0, topics.length-1)];

    return randomModAdj + " " + randomAdj + " " + randomTopic;
}

/**
 * Returns a random number
 * @param min
 *      The minimum value our random number can be
 * @param max
 *      The max value our random number can be
 */
function getRandomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


/**
 * Entry point
 */
$(document).ready(function() {
    var audioEl = document.createElement('audio');
    audioEl.setAttribute('src', '../assets/audio/woooop.mp3');
    audioEl.setAttribute('autoplay', 'autoplay');

    populatePhraseData();

    $("#generatePhraseBtn").on('click', function() {
        $(".phrase").remove();
        var el = "<h2 class='phrase'>" + generatePhrase() + "</h2>";
        $('.phrase-wrapper').append(el);
        audioEl.play();

        $(this).animate({
            left: getRandomNum(0, window.innerWidth),
            right: getRandomNum(0, window.innerWidth),
            top: getRandomNum(0, window.innerHeight),
            bottom: getRandomNum(0, window.innerHeight)
        });
    });

    var toggled = false;
    setInterval(function() {
        if(toggled) {
            $("#generatePhraseBtn").css("background-color", "yellow");
            toggled = false;
        } else {
            $("#generatePhraseBtn").css("background-color", "green");
            toggled = true;
        }
    }, 1000)

    var textToggle = false;
    setInterval(function() {
        if(textToggle) {
            $("h1, h2").animate({
                'font-size': '50px'
            });
            textToggle = false;
        } else {
            $("h1, h2").animate({
                'font-size': '20px'
            });
            textToggle = true;
        }
    }, 1500);
});