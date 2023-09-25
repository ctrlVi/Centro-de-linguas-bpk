window.addEventListener("load", () => {
    const btnToTop = document.getElementById("btnToTop");
    btnToTop.addEventListener("click", () => {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
    });

    window.addEventListener("scroll", () => {
        const valueMinScrollTop = 20;

        if (document.body.scrollTop > valueMinScrollTop || document.documentElement.scrollTop > valueMinScrollTop) {
            btnToTop.style.display = "block";
        } else {
            btnToTop.style.display = "none";
        }
    });
});