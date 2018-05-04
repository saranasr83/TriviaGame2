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
        unAswered: 0,
        count: 0,
        timer: null
    }

    $("#start").on("click", function () {
        console.log("start game!");

        // hide start button 
        $("#start").addClass("hide");
        // start and display timer
        startTimer()
        // show questions
        displayQuestion();
    });

    function startTimer() {
        // set initial time
        var remainingTime = 120;
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
        }
        // Now printing the questions all added up:
        $("#container").append(arr);
        // console.log(arr);

        //printing the options on screen and create a button
        for (i = 0; i < questionList.length; i++) {

            //     var optionButton = $("<button>");
            //     optionButton.addClass("btn btn-primary option");
            //     optionButton.attr("data-group", gameData.count);
            //     optionButton.text("<h5>"+questionList[i].opts+"</h5>");
            // }

            // console.log(questionList[i].opts)
            // $("#container").append(optionButton);

        }


    }  //write a function to evaluate your answers


});
