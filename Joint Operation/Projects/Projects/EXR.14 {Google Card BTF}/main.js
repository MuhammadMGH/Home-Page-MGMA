const listbox = document.querySelector(".list-box");
const toggle = document.querySelector(".my-btn");

toggle.onclick = function () {
    listbox.classList.toggle('active')
}