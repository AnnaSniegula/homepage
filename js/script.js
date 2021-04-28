console.log("Czołem przyszli programiści!");

let main__buttonRemoveHeader = document.querySelector(".main__buttonRemoveHeader");
let main__header = document.querySelector(".main__header");
let main__buttonChangeColor = document.querySelector(".main__buttonChangeColor");
let body = document.querySelector(".body");
let main__buttonImageRemove = document.querySelector(".main__buttonImageRemove");
let main__photo = document.querySelector(".main__photo");


main__buttonRemoveHeader.addEventListener("click", () => {
    main__header.classList.toggle("hidden");
    if (main__buttonRemoveHeader.innerText === "Usuń nagłówek") {
        main__buttonRemoveHeader.innerText = "Przywróć nagłówek";
    }
    else {

        main__buttonRemoveHeader.innerText = "Usuń nagłówek"
    }
});


// main__buttonChangeColor.addEventListener("click", () => {
//    body.classList.toggle("body__newBackground ");
//    if (main__buttonChangeColor.innerText === "Zmień kolor tła") {
//      main__buttonChangeColor.innerText = "Przywróć tło";
//   }
//   else {

//       main__buttonChangeColor.innerText = "Zmień kolor tła";
//   }

// });


main__buttonChangeColor.addEventListener("click", () => {
    body.classList.toggle("body__newBackground ");
    body__newBackground.innerText = body.classList.contains("body__newBackground ") ? 
    "Przywróć tło" : "Zmień kolor tła";
});


//main__buttonImageRemove.addEventListener("click", () => {
    //main__photo.remove();
//});



main__buttonImageRemove.addEventListener("click", () => {
    main__photo.classList.toggle ("hidden");
    if (main__photo.classList.contains("hidden")) {
        main__buttonImageRemove.innerText = "Przywróć zdjęcie";
    } else{
        main__buttonImageRemove.innerText = "Usuń zdjęcie";
    }
});
