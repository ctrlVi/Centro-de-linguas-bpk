window.addEventListener("load", () => {
    const btnToTop = document.getElementById("btnToTop");
    btnToTop.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
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