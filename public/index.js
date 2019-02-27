let OnClick = (selector, event) => {
    let tag = document.querySelector(selector);
    tag.addEventListener("click", event);
    return tag;
}

let changeLocationOnClick = (selector, url) => {
    OnClick(selector, () => {
        window.location.href = url;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    changeLocationOnClick("linked-in","https://www.linkedin.com/in/daniel-rustrum-771506117");
    changeLocationOnClick("medium","https://medium.com/@danieltrustrum");
    changeLocationOnClick("github","https://github.com/DanielRustrum");
    changeLocationOnClick("hack-the-box","https://www.hackthebox.eu/home/users/profile/104385");
});