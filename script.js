var elements = [];

var buttion = document.querySelector("#btn");

var input = document.querySelector('input');


window.onload = function () {
    if (JSON.parse(localStorage.getItem("elements")) != null)
        elements = JSON.parse(localStorage.getItem("elements"));
    console.log(elements);
    display();
};

function del(index) {
    elements.splice(index, 1);
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}

function display() {
    document.querySelector(".list").innerHTML = "";
    for (var i = 0; i < elements.length; i++)
        document.querySelector(".list").innerHTML +=
            "<center><div class='element'>" +
            elements[i] +
        "<img class='dustbin' src = 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png' onclick='del(" +
            i +
            ")'></div></center><br>";
}


function addElement(){

    if (input.value.trim() != "") {
        elements.push(input.value.trim());
        if (localStorage.getItem("elements") == null) {
            localStorage.setItem("elements", JSON.stringify(elements));
        } else {
            localStorage.setItem("elements", JSON.stringify(elements));
        }

        display();



    }
}






buttion.addEventListener('click',addElement);

