const navToggle = document.querySelectorAll("button");
const nav = document.querySelector(".nav");

navToggle.forEach((button) => {
    button.addEventListener("click", () => {
        nav.classList.toggle("nav--visible");
        const currentState = button.getAttribute("data-state");

        if (!currentState || currentState === "closed") {
            button.setAttribute("data-state", "opened");
            button.setAttribute("aria-expanded", "true");
        } else {
            button.setAttribute("data-state", "closed");
            button.setAttribute("aria-expanded", "false");
        }
    });
});
