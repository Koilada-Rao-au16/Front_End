hello = () => {
    document.getElementById("demo").innerHTML += this;
}

window.addEventListener("load",hello);
document.getElementById("btn").addEventListener("click",hello)