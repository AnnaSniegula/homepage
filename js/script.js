// console.log("Czołem przyszli programiści!");

// let main__buttonRemoveHeader = document.querySelector(".main__buttonRemoveHeader");
// let main__header = document.querySelector(".main__header");
// let main__buttonChangeColor = document.querySelector(".main__buttonChangeColor");
// let body = document.querySelector(".body");
// let main__buttonImageRemove = document.querySelector(".main__buttonImageRemove");
// let main__photo = document.querySelector(".main__photo");


// main__buttonRemoveHeader.addEventListener("click", () => {
//     main__header.classList.toggle("hidden");
//     if (main__buttonRemoveHeader.innerText === "Usuń nagłówek") {
//         main__buttonRemoveHeader.innerText = "Przywróć nagłówek";
//     }
//     else {

//         main__buttonRemoveHeader.innerText = "Usuń nagłówek"
//     }
// });

//stare
// main__buttonChangeColor.addEventListener("click", () => {
//    body.classList.toggle("body__newBackground ");
//    if (main__buttonChangeColor.innerText === "Zmień kolor tła") {
//      main__buttonChangeColor.innerText = "Przywróć tło";
//   }
//   else {

//       main__buttonChangeColor.innerText = "Zmień kolor tła";
//   }

// });


// main__buttonChangeColor.addEventListener("click", () => {
//     body.classList.toggle("body__newBackground");
//     main__buttonChangeColor.innerText = body.classList.contains("body__newBackground") ?
//         "Przywróć tło" : "Zmień kolor tła";
// });

//stare
//main__buttonImageRemove.addEventListener("click", () => {
//main__photo.remove();
//});



// main__buttonImageRemove.addEventListener("click", () => {
//     main__photo.classList.toggle("hidden");
//     if (main__photo.classList.contains("hidden")) {
//         main__buttonImageRemove.innerText = "Przywróć zdjęcie";
//     } else {
//         main__buttonImageRemove.innerText = "Usuń zdjęcie";
//     }
// });


// FUNKCJE

{
    const welcome = () => {
        console.log("Czołem przyszli programiści!")
    }

    const main__buttonRemoveHeader = document.querySelector(".main__buttonRemoveHeader");
    const main__buttonImageRemove = document.querySelector(".main__buttonImageRemove");
    const main__buttonChangeColor = document.querySelector(".main__buttonChangeColor");


    const removeImage = () => {
        const main__photo = document.querySelector(".main__photo");
        main__photo.classList.toggle("hidden");
        main__buttonImageRemove.innerText = main__photo.classList.contains("hidden") ? "Przywróć zdjęcie" :
            "Usuń zdjęcie"
    };


    // main__buttonImageRemove.addEventListener("click", () => {
    //     main__photo.classList.toggle("hidden");
    //     main__buttonImageRemove.innerText = main__photo.classList.contains("hidden") ? "Przywróć zdjęcie" :
    //     "Usuń zdjęcie"
    // });



    // main__buttonImageRemove.addEventListener("click", () => {
    //     main__photo.classList.toggle("hidden");
    //     if (main__photo.classList.contains("hidden")) {
    //         main__buttonImageRemove.innerText = "Przywróć zdjęcie";
    //     } else {
    //         main__buttonImageRemove.innerText = "Usuń zdjęcie";
    //     }
    // });


    // main__buttonChangeColor.addEventListener("click", () => {
    //     body.classList.toggle("body__newBackground");
    //     main__buttonChangeColor.innerText = body.classList.contains("body__newBackground") ?
    //         "Przywróć tło" : "Zmień kolor tła";
    // });


    // main__buttonRemoveHeader.addEventListener("click", () => {
    //     main__header.classList.toggle("hidden");
    //     main__buttonRemoveHeader.innerText = main__header.classList.contains("hidden") ?
    //      "Przywróć nagłówek" : "Usuń nagłówek"

    // });


    const removeHeader = () => {
        const main__header = document.querySelector(".main__header");
        main__header.classList.toggle("hidden");
        main__buttonRemoveHeader.innerText = main__header.classList.contains("hidden") ?
            "Przywróć nagłówek" : "Usuń nagłówek"

    };


    // main__buttonRemoveHeader.addEventListener("click", () => {
    //     main__header.classList.toggle("hidden");
    //     if (main__buttonRemoveHeader.innerText === "Usuń nagłówek") {
    //         main__buttonRemoveHeader.innerText = "Przywróć nagłówek";
    //     }
    //     else {

    //         main__buttonRemoveHeader.innerText = "Usuń nagłówek"
    //     }
    // });

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        body.classList.toggle("body__newBackground");
        main__buttonChangeColor.innerText = body.classList.contains("body__newBackground") ?
            "Przywróć tło" : "Zmień kolor tła"
    };

    const init = () => {
        main__buttonChangeColor.addEventListener("click", toggleBackground);
        main__buttonRemoveHeader.addEventListener("click", removeHeader);
        main__buttonImageRemove.addEventListener("click", removeImage);
    };

    welcome();


    init();

}