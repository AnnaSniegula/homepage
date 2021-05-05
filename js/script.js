
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

    const removeHeader = () => {
        const main__header = document.querySelector(".main__header");
        main__header.classList.toggle("hidden");
        main__buttonRemoveHeader.innerText = main__header.classList.contains("hidden") ?
            "Przywróć nagłówek" : "Usuń nagłówek"

    };

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