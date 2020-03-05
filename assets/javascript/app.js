var valFilter;
var filtered;
var correct = 0;
var wrong = 0;
var timer;
var counter = 60;
var timeLeft = 60;
var message = [];
var pictures = [];

// var questions = [
//     {
//         q: "test1",
//         res: ["a", "b", "c"],
//         a: 1
//     },
//     {
//         q: "test2",
//         res: ["1", "2", "3"],
//         a: 2
//     },
// ]

correctText = $("#correct");
wrongText = $("#wrong");
unansweredText = $("#not-answered");

$("#finished").css("visibility", "hidden");
$("#quiz").css("visibility", "hidden");

function displayFinished() {
    $("#finished").css({
        "visibility": "visible", "position": "absolute", "top": "25%", "left": "30%",
        "text-align": "center"
    });
    $("#radio").css("visibility", "hidden");
    $("#timer").css("visibility", "hidden");

}

function displayMessage() {
    message = ["Eagle!!", "Nice Try! Have an Apple Martini!", "Wrong, Wrong, Wrong...Wrong, Wrong, Wrong. You're Wrong!"]
    pictures = ["assets/images/the-todd.jpg", "assets/images/martini.jpg", "assets/images/perry-cox.jpg"]

    if (correct === 5) {
        $("#message").text(message[0]);
        $("#image").attr("src", pictures[0]);
    }
    if (correct > 0 && correct < 5) {
        $("#message").text(message[1]);
        $("#image").attr("src", pictures[1]);
    }
    if (correct === 0) {
        $("#message").text(message[2]);
        $("#image").attr("src", pictures[2]);
    }

};




function startTime() {

    var timer = $("#timer");
    timer.text("1:00");

    function timeIt() {
        counter--;
        timer.text(counter);
        //  console.log(timeLeft, counter)
        if (counter === 0) {
            console.log("out of time")
            clearInterval();
            displayFinished();
        }
    }
    setInterval(timeIt, 1000)
}

// function showQuestions() {

//     for (var i = 0; i < questions.length; i++) {

//         $("#radio").append(`<p class="questions">${questions[i].q}</p>`)

//         for (var j = 0; j < questions[i].res.length; j++) {
//             console.log(questions[i].res[j])
//             $("#radio").append(`<input type="radio" class="q" name="question${i}" value=${questions[i].a}>${questions[i].res[j]}`)
//         }
//         //     `<input type="radio" class="q" name="question1" value="wrong">Turkleton`
//         //     `<input type="radio" class="q" name="question1" value="wrong">Dr. Jan Itor`
//     }
//     $("#radio").append(`<input id="button" type="button" value="Submit">`)
    
// }


$("#start-button").on("click", function () {
    $("#start-button").css("visibility", "hidden");
    $("#start-screen").css("visibility", "hidden");
    $("#finished").css("visibility", "hidden");
    $("#title").css("visibility", "hidden");
    $("#quiz").css({
        "visibility": "visible", "position": "absolute",
        "top": "10%"
    });


    startTime();
    //showQuestions()
});



$("#button").on("click", function () {
    console.log("submit");
    $(document).ready(function () {
        for (i = 1; i < 6; i++) {

            var radio = $("input[name='question" + i + "']");
            var filtered = radio.filter(":checked");
            console.log(filtered.val());
            var valFilter = filtered.val();

            if (valFilter === "answer") {
                correct++;
                console.log(correct)
            }
            if (valFilter === "wrong") {
                console.log(wrong);
                wrong++;
            }

        };

        displayFinished();
        $("#title").css("visibility", "visible");
        displayMessage();

        correctText.text(correct);
        wrongText.text(wrong);
    });

});
