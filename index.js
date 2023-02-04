var randomnumber1 = Math.floor(Math.random()*10)+1;
var imagehalf = "img" + randomnumber1 +".jpg";
var randomimage ="images/" + imagehalf ;
var implement=document.querySelectorAll("img")[0];
implement.setAttribute("src", randomimage );
if(randomnumber1< 5){
    document.querySelector("h1").innerHTML =" Lord Swayam wins.😎";
    document.querySelector("body").style.background ="deepskyblue";
}
else if ((randomnumber1>4)&&(randomnumber1<8)){
    document.querySelector("h1").innerHTML="ladai ladai maaf👅";
    document.querySelector("body").style.background ="rgb(247, 85, 64)";
}

