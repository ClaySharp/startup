function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("author", nameEl.value);
    window.location.href = "read.html";
}