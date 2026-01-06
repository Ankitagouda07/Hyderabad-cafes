function searchCafes() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cafes = document.getElementsByClassName("cafe");

    for (let i = 0; i < cafes.length; i++) {
        let text = cafes[i].innerText.toLowerCase();
        cafes[i].style.display = text.includes(input) ? "block" : "none";
    }
}
