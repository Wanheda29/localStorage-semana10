document.addEventListener("DOMContentLoaded", (event)=>{
   

     
function showData(){
    let localStorageData = localStorage.getItem("newData");
    if (localStorageData == null){
        localStorageData = "" ; 
    }else {
        document.getElementById("data").innerHTML += `${localStorageData}` ;
    }
   

}
showData();



/*const inputText = document.querySelector("#inputText")
inputText.innerText = inputText.innerText.replace("");*/
});