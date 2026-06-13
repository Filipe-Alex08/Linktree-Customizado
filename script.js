document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.boxShadow =
                "0 10px 25px rgba(37,99,235,0.4)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });

    });

});