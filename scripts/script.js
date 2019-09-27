const main = document.getElementById("container");

for (let i = 0; i < 100; i++) {
    const newD = document.createElement("div");
    const newP = document.createElement("p");
    newD.appendChild(newP);
    main.appendChild(newD).setAttribute("id", "div-" +i);

    if (i % 15 === 0) {
        newP.appendChild(document.createTextNode(i + "= FizzBuzz"));
        main.appendChild(newD).setAttribute("class", "fizzbuzz");
    }
    else if (i % 3 === 0) {
        newP.appendChild(document.createTextNode(i + "= Fizz"));
        main.appendChild(newD).setAttribute("class", "fizz");    
    } 
    else if (i % 5 === 0) {
        newP.appendChild(document.createTextNode(i + "= Buzz"));
        main.appendChild(newD).setAttribute("class", "buzz");
    }
    else {
        newP.appendChild(document.createTextNode(i));
        main.appendChild(newD).setAttribute("class", "fbz");
    }
}
