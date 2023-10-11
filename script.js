function anglais(){
    let anglais = "hello"
    document.getElementById("title").innerHTML=anglais;
}
function french(){
    let french= "bonjour"
    document.getElementById("title").innerHTML=french
}
document.getElementById("en").addEventListener("click",anglais)
document.getElementById("fr").addEventListener("click",french)