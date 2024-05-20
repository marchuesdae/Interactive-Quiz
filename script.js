var currentQuestion = 1; 

function wrongAns() {
    alert("Oops wrong answer, think again!");
    startQuiz(); 
}

function startQuiz() {
    document.getElementById('buttonStart').hidden = true;
    document.getElementById('question').innerHTML = 'How many legs does a spider have? <br><br> <input type="text" id="answer" placeholder="Your answer"> <button onclick="checkAnswer()" style="background-color: #f08080; border-radius: 8px; border-color: #c7a0d2;">Submit</button>';
    currentQuestion = 1; 
}

function q2() {
    alert("Correct! Now proceed to the next question");
    document.getElementById('question').innerHTML = 'What is the name of the fairy in Peter Pan? <br><br> <input type="text" id="answer" placeholder="Your answer"> <button onclick="checkAnswer()" style="background-color: #f08080; border-radius: 8px; border-color: #c7a0d2;">Submit</button>';
    currentQuestion++;
}

function q3() {
    alert("Correct! Now proceed to the next question");
    document.getElementById('question').innerHTML = 'What is the name of the first planet from the sun? <br><br> <input type="text" id="answer" placeholder="Your answer"> <button onclick="checkAnswer()" style="background-color: #f08080; border-radius: 8px; border-color: #c7a0d2;">Submit</button>';
    currentQuestion++;
}

function q4() {
    alert("Correct! Now proceed to the next question");
    document.getElementById('question').innerHTML = 'What is the name of the third planet from the sun? <br><br> <input type="text" id="answer" placeholder="Your answer"> <button onclick="checkAnswer()" style="background-color: #f08080; border-radius: 8px; border-color: #c7a0d2;">Submit</button>';
    currentQuestion++;
}

function q5() {
    alert("Correct! Now proceed to the next question");
    document.getElementById('question').innerHTML = 'Who is the God of the SEA? <br><br> <input type="text" id="answer" placeholder="Your answer"> <button onclick="checkAnswer()" style="background-color: #f08080; border-radius: 8px; border-color: #c7a0d2;">Submit</button>';
    currentQuestion++;
}
function q6() {
    alert("Correct! Congratulations, you've completed the quiz!");
    document.getElementById('question').innerHTML = '<h2> CONGRATULATIONS! </h2> <h3>You completed the quiz!</h3> <p>Do you wish to go back?</p> <br> <button onclick="startQuiz()" style="background-color: #f08080; border-radius: 8px; border-color: #c7a0d2;">Okay</button>';
}

function success() {
    startQuiz(); 
}

function checkAnswer() {
    var userAnswer = document.getElementById('answer').value;
    
    if (currentQuestion === 1 && userAnswer === '8' || userAnswer === 'eight' || userAnswer === 'EIGHT') {
        q2();
    } else if (currentQuestion === 2 && userAnswer === 'TinkerBell' || userAnswer === 'tinkerbell' || userAnswer === 'TINKERBELL') {
        q3();
    } else if (currentQuestion === 3 && userAnswer === 'Mercury' || userAnswer === 'mercury' || userAnswer === 'MERCURY') {
        q4();
    } else if (currentQuestion === 4 && userAnswer === 'Earth' || userAnswer === 'earth' || userAnswer === 'EARTH') {
        q5();
    } else if (currentQuestion === 5 && userAnswer === 'Poseidon' || userAnswer === 'POSEIDON' || userAnswer === 'poseidon') {
        q6();
    } else {
        wrongAns();
    }
}
