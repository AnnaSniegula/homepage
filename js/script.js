
{
    const welcome = () => {
        console.log("Czołem przyszli programiści!")
    }

    const removeHeaderButton = document.querySelector(".removeHeaderButton");
    const removeImageButton = document.querySelector(".removeImageButton");
    const changeColorButton = document.querySelector(".changeColorButton");

    const removeImage = () => {
        const main__photo = document.querySelector(".main__photo");
        main__photo.classList.toggle("main__photo--hidden");
        removeImageButton.innerText = main__photo.classList.contains("main__photo--hidden") ? "Przywróć zdjęcie" :
            "Usuń zdjęcie"
    };

    const removeHeader = () => {
        const main__header = document.querySelector(".main__header");
        main__header.classList.toggle("main__photo--hidden");
        removeHeaderButton.innerText = main__header.classList.contains("main__photo--hidden") ?
            "Przywróć nagłówek" : "Usuń nagłówek"

    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        body.classList.toggle("body--newBackground");
        changeColorButton.innerText = body.classList.contains("body--newBackground") ?
            "Przywróć tło" : "Zmień kolor tła"
    };

    const init = () => {
        changeColorButton.addEventListener("click", toggleBackground);
        removeHeaderButton.addEventListener("click", removeHeader);
        removeImageButton.addEventListener("click", removeImage);

    welcome();
    };


    init();

}