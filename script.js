function anglais(){
    
    document.getElementById("title").innerHTML="hello";
    document.getElementById("paragra").innerHTML="Text of paragraph";
}
function french(){
    
    document.getElementById("title").innerHTML="bonjour";
    document.getElementById("paragra").innerHTML="texte de mon pragrapghe";
}

document.getElementById("en").addEventListener("click",anglais)
document.getElementById("fr").addEventListener("click",french)