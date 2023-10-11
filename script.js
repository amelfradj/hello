function anglais(){
    
    document.getElementById("title").innerHTML="hello";
    document.getElementById("paragra").innerHTML="Text of paragraph";
}
function french(){
    
    document.getElementById("title").innerHTML="bonjour";
    document.getElementById("paragra").innerHTML="texte de mon pragrapghe";
}
function sombre(){
    document.getElementById("fond").style.backgroundColor="black";
    document.getElementById("fond").style.color="white";
}
function clair(){
    document.getElementById("fond").style.backgroundColor="white";
    document.getElementById("fond").style.color="black";
}
document.getElementById("en").addEventListener("click",anglais)
document.getElementById("fr").addEventListener("click",french)
document.getElementById("noir").addEventListener("click",sombre)
document.getElementById("clairs").addEventListener("click",clair)