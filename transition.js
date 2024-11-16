document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.body.classList.add("fade-out");

        const targetUrl = this.href;

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 200);
    });
});

document.querySelectorAll(".index").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.body.classList.add("fade-out");

        const targetUrl = this.href;

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 200);
    });
});