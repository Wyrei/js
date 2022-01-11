const myImage = document.getElementById('myImage');

let paintings = ["img/painting0.jpg", 
                 "img/painting1.jpg",
                 "img/painting2.jpg",
                 "img/painting3.jpg",
                 "img/painting4.jpg",
                 "img/painting5.jpg"
                ]


function changeImage(index){
   myImage.src = paintings[index];
}
