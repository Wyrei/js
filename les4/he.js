const mytitle = document.getElementById('mytitle');
const myimage = document.getElementById('myimage');

let seizoenen = [
    {
        "titel":"seizoenen",
        "image":"img/seasons.jpg",
        "background":"grey"
    },
    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "background":"green"
    },
    {
        "titel":"winter",
        "image":"img/winter.jpg",
        "background":"orange"
    },
    {
        "titel":"zomer",
        "image":"img/summer.jpg",
        "background":"white"
    },
    {
        "titel":"autumn",
        "image":"img/autumn.jpg",
        "background":"brown"
    }
];

// let seizoen = {
//         "titel":"lente",
//         "image":"spring.jpg"
// };

function show(index){
    mytitle.innerHTML = seizoenen[index].titel;
    myimage.scr = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].background;
}