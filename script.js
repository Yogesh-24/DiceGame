function rollDice(){
    let random1= Math.floor(Math.random() * 6) +1;
    let random2= Math.floor(Math.random() * 6) +1;

    let path1="images/dice"+random1+".png";
    let path2="images/dice"+random2+".png";

    document.querySelectorAll("img")[0].setAttribute("src",path1);
    document.querySelectorAll("img")[1].setAttribute("src",path2);



    if(random1>random2){
    document.querySelector(".heading").innerHTML="Player - 1 Won🚩"
}
else if(random1<random2){
    document.querySelector(".heading").innerHTML="Player - 2 Won🚩"
}
else{
    document.querySelector(".heading").innerHTML="Draw";
}
}