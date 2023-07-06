var elements = [];
const input = document.querySelectorAll('.blank');

var id = [];
const paragraph = document.querySelectorAll('.element_id');

var i = 0;
input.forEach(element => {
    elements[i]=element.value;
    i++;
});

i = 0;
paragraph.forEach(element => {
    id[i]=element.value;
    i++;
});

var answers = ["H","He","Li","Be","B"]

input.addEventListener('change', CheckAnswers);
function CheckAnswers(e) {
    i = 0;

    input.forEach(element => {
        if(elements[i] == answers[id[i]-1]){
            document.getElementById(id[i]).style.backgroundColor = "green";
        }
    });
}