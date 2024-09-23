document.addEventListener("DOMContentLoaded", (event) => {
    cleanLocalStorage()
})
document.getElementById("buttonText").addEventListener("click", () => {

let input = document.getElementById("inputText");

    if (input.value !== ""){
    localStorage.setItem("newData", input.value);
    
}
input.value="";
});

console.log(localStorage);

function cleanLocalStorage() {
    localStorage.clear();
};