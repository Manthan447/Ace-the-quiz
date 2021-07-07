var p1 = localStorage.getItem("name_1")
var p2 = localStorage.getItem("name_2")

var p1_score = 0;
var p2_score = 0;

document.getElementById("question_turn").innerHTML = "Question turn:  " + p1;
document.getElementById("answer_turn").innerHTML = "Answer turn:  " + p2;

document.getElementById("player_1").innerHTML = p1;
document.getElementById("player_2").innerHTML = p2;

function send(){
    number_1 = document.getElementById("number1").value;
    number_2 = document.getElementById("number2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2)
    question = "<h4>" + number_1 + "X" + number_2 + "</h4>"
    Answer_input = "<br><input class='form-control' id = 'input_box' type = 'text'>"
    Check = "<br><br><button class='btn btn-info' onclick='check-it'>Check!!!</button>"
    Row = question + Answer_input + Check;
    document.getElementById("output").innerHTML = Row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}