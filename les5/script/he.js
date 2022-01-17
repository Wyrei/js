const mytitel = document.getElementById("mytitel");
const myimage = document.getElementById("myimage");
const input = document.getElementById("input");

let directionsbuttons = {
    "noord": document.getElementById('knopnoord'),
    "zuid": document.getElementById('knopzuid'),
    "oost": document.getElementById('knopoost'),
    "west": document.getElementById('knopwest')
}

let current_index = 0;

let locaties = [ //array
    { //0 = object
        "titel":"plaats 0",
        "image":"img/0.jpg",
        "directions": {
            "zuid": 1
        }
    },
    { //1 = object
        "titel":"plaats 1",
        "image":"img/1.jpg",
        "directions": {
            "west": 2,
            "oost": 5,
            "zuid": 4,
            "noord": 0
        }
    },
    { //2 = object
        "titel":"plaats 2",
        "image":"img/2.jpg",
        "directions": {
            "oost":  1,
            "zuid":  3
        }
    },
    {
        "titel":"plaats 3",
        "image":"img/3.jpg",
        "directions": {
            "noord":  2
        }

    },
    {
        "titel":"plaats 4",
        "image":"img/4.jpg",
        "directions": {
            "noord":  1
        }
    },
    {
        "titel":"plaats 5",
        "image":"img/5.jpg",
        "directions": {
            "west":  1,
            "noord":  10,
            "oost":  6
        }
    },
    {
        "titel":"plaats 6",
        "image":"img/6.jpg",
        "directions": {
            "zuid":  11,
            "oost":  7,
            "west":  6
        }
    },
    {
        "titel":"plaats 7",
        "image":"img/7.jpg",
        "directions": {
            "zuid":  8,
            "noord":  9,
            "west":  6
        }
    },
    {
        "titel":"plaats 8",
        "image":"img/8.jpg",
        "directions": {
            "noord":  7
        }
    },
    {
        "titel":"plaats 9",
        "image":"img/9.jpg",
        "directions": {
            "west":  10,
            "zuid":  7
        }
    },
    {
        "titel":"plaats 10",
        "image":"img/10.jpg",
        "directions": {
            "oost":  9,
            "zuid":  5
        }
    },
    {
        "titel":"plaats 11",
        "image":"img/11.jpg",
        "directions": {
            "noord":  6
        }
    }
];

//mytitel.innerHTML = "dit is door script toegevoegd";
//myimage.src = "img/1.jpg";

function show(index){
    mytitel.innerHTML = locaties[index].titel;
    myimage.src = locaties[index].image;
    current_index = index;
    updatedirections();
}




function updatedirections(){
    let possible = locaties[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionsbuttons);
    for(const key of button_keys){
        directionsbuttons[key].style.visibility = "hidden"}
    for(const key of possible_keys){
        directionsbuttons[key].style.visibility = 'visible'; 
    }
}

function getinput(){
    show(input.value);
   // console.log(input.value)
   input.value = "";
   input.focus();
}

function godirrection(direction){
    let punt_index = locaties[current_index].directions[direction];
    show(punt_index);
}

show(0);