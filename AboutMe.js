document.getElementById("par1").addEventListener("mouseover",mouseOver);
document.getElementById("par1").addEventListener("mouseout",mouseOut);

function mouseOver(){
    document.getElementById("par1").style.color="red";
}

function mouseOut(){
    document.getElementById("par1").style.color="white";
}