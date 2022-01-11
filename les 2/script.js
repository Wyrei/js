console.log("script")

 const groentevak = document.getElementById('groente');
 const fruitvak = document.getElementById('fruit');

 function zetinfruitla(fruit){
     console.log(fruit);

     const nieuwElement = document.createElement('h2');
     nieuwElement.innerHTML = fruit;
     nieuwElement.className = 'red';
     fruitvak.appendChild(nieuwElement);
 }

 function zetingroentela(groente){
    console.log(groente);
    
    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = groente;
    nieuwElement.className = 'green';
    groentevak.appendChild(nieuwElement);
}