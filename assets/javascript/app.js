$(document).ready(function () {

    //create your list of questions and correct answers

    var questionList = [
        {
            q: "The cool down after exercise is important because it:",
            opts: ["Improves oxygen uptake1", "Regulates breathing", "Speeds the removal of lactic acid", "Decreases adrenaline"],
            a: "Speeds the removal of lactic acid"
        },
        {
            q: "Why is warming up before exercise important?",
            opts: ["It improves flexibility", "It improves heart rate", "It decreases the removal of lactic acid", "It slows adrenaline release"],
            a: "It improves flexibility"
        },
        {
            q: "Which one of the following is a health screening test?",
            opts: ["Sit and reach test", "30m sprint test", "Blood pressure test", "Cooper’s 12 minute run test"],
            a: "Blood pressure test"

        },
        {
            q: "Which one of the following pairs of fitness components is yoga likely to develop?",
            opts: ["Flexibility and cardiovascular endurance", "Speed and flexibility", "Strength and flexibility", "Muscular endurance and cardio vascular endurance"],
            a: "Strength and flexibility"

        },
        {
            q: "Which one of the following pairs shows two good examples of characteristics of a balanced, healthy lifestyle?",
            opts: ["Non smoking and non active", "Nutritional diet and regular water drinking", "Non alcohol and low protein diet", "Physically active and smoking only a limited number of cigarettes."],
            a: "Nutritional diet and regular water drinking"

        },
        {
            q: "Which one of the following is an example of a performance goal?",
            opts: ["To win the competition", "To improve your technique", "To beat your personal best", "To please your coach "],
            a: "To improve your technique"
        },
        {
            q: "Which one of the following is a reason for not participating in physical activities?",
            opts: ["improving fitness", "developing personal skills", "improving mental health", "increasing risk of injury"],
            a: "increasing risk of injury"
        },
        {
            q: "Which one of the following is an example of a food high in carbohydrates?",
            opts: ["Fish", "Bananas", "Meat", "Eggs"],
            a: "Bananas"
        },
        {
            q: "Which one of the following would be a good method of exercise to improve your stamina?",
            opts: ["Yoga", "Pilates", "Sprinting", "Aerobics"],
            a: "It improves flexibility"
        },
        {
            q: "Which one of the following is an essential component of a healthy diet?",
            opts: ["Pasta", "Fish", "Water", "Bread"],
            a: "Water"
        }

    ];
    //create an object for your variables
    var gameData = {
        correctAnswer: 0,
        inCorrectAnswer: 0,
        unAnswered: 0,
        count: 0,
        timer: null
    }


    $("#start").on("click", function () {
        console.log("start game!");

        // hide start button 
        $("#start").addClass("hide");
        //hide the done button
        $("#done").removeClass("hide")
        // start and display timer
        startTimer();
        // show questions
        displayQuestion();

    });

    $("#done").on("click", function () {
        endGame();
        evaluation();
    });



    function endGame() {
        console.log("finish game!")
        //hide done button
        $("#done").addClass("hide");
        //hide the questions
        $("#container").addClass("hide");
        //hide the timer
        $("#timer").addClass("hide");
        //print all done on the screen
        $("#done-msg").removeClass("hide");
        //show the results
        $("#correct").removeClass("hide");
        $("#incorrect").removeClass("hide");
        $("#unanswered").removeClass("hide");

    }


    function startTimer() {
        // set initial time
        var remainingTime = 60;
        // show the existing text on the page by remove the hide class
        $("#timer").removeClass("hide");
        // display the initial time in the text that was show on the page after the hide class was removed.
        $("#remainingTime").text(remainingTime);

        gameData.timer = setInterval(function () {
            $("#remainingTime").empty();
            // time (initial value 120) is 0 stop that function
            if (remainingTime === 0) {
                //The clearInterval() method clears a timer set with the setInterval() method.
                clearInterval(gameData.timer);
                endGame();
                evaluation();
            }

            else {
                // reduce time by 1 every second
                remainingTime--;
                // redisplay time on page after its value is updated
                $("#remainingTime").text(remainingTime);

            }
        }, 1000);
    }

    function displayQuestion() {
        //console.log("displayQuestion() IS NOW RUNNING");
        var arr = "";
        //iterate through questionlist and display the questions on the screen
        for (i = 0; i < questionList.length; i++) {

            arr += "<h4>" + questionList[i].q + "</h4>"

            var radio1 = '<label>' + questionList[i].opts[0] + '<input type="radio" value="' + questionList[i].opts[0] + '" class="' + questionList[i].q + '" name="' + questionList[i].q + '"></label>'

            var radio2 = '<label>' + questionList[i].opts[1] + '<input type="radio" value="' + questionList[i].opts[1] + '" class="' + questionList[i].q + '" name="' + questionList[i].q + '"> </label>'

            var radio3 = '<label>' + questionList[i].opts[2] + '<input type="radio" value="' + questionList[i].opts[2] + '" class="' + questionList[i].q + '" name="' + questionList[i].q + '"> </label>'

            var radio4 = '<label>' + questionList[i].opts[3] + '<input type="radio" value="' + questionList[i].opts[3] + '" class="' + questionList[i].q + '" name="' + questionList[i].q + '"></label>'

            arr += radio1
            arr += radio2
            arr += radio3
            arr += radio4
        }
        // Now printing the questions all added up:
        $("#container").append(arr);
        // console.log(arr);




    }
    //write a function to evaluate your answers

    //To check right answers: if  $(".class:checked").val()===questionList[i].answer{wins++}
    function evaluation() {

        //evaluate user input:
        for (i = 0; i < questionList.length; i++) {

            //  console.log("question " + i +
            //      " nameOneQ:" + questionList[i].q +
            //      " user selected item:" + $('input[name="' + questionList[i].q + '"]:checked').val() + 
            //      " user selected item is checked:" + $('input[name="' + questionList[i].q + '"]').is(':checked') + 
            //      " the correct answer is: " + questionList[i].a
            //  );
            // if no answer is selected:
            if ( !$('input[name="' + questionList[i].q + '"]:checked').is(':checked')) {
                console.log("No answer selected case...");
                gameData.unAnswered++
                $("#result-3").html(gameData.unAnswered)
            } 
            else if ($('input[name="' + questionList[i].q + '"]:checked').val() === questionList[i].a) {
                console.log("correct answer");
                gameData.correctAnswer++
                $("#result-1").html(gameData.correctAnswer)
                
            }
            else if ($('input[name="' + questionList[i].q + '"]:checked').val() !== questionList[i].a) {
                console.log("wrong answer");
                gameData.inCorrectAnswer++
                $("#result-2").html(gameData.inCorrectAnswer)
                
            }
        }


    }

});

