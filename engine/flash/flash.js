const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
        el: ".swiper-pagination"
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});

document.querySelector(".pix-key").addEventListener("click", function () {
    const textToCopy = this.textContent;
    navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
            alert("Texto copiado: " + textToCopy);
        })
        .catch((err) => {
            console.error("Erro ao copiar: ", err);
        });
});