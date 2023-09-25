window.addEventListener("load", () => {
    const answers = document.querySelectorAll(".accordion");
    answers.forEach((event) => {
        event.addEventListener("click", () => {
            event.classList.toggle("active");
        });
    });
});

