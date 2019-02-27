let OnClick = (selector, event) => {
    let tag = document.querySelector(selector);
    tag.addEventListener("click", event);
    return tag;
}


document.addEventListener("DOMContentLoaded", () => {
    //onclick();
});