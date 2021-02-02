document.querySelector("h1").classList.remove("glow");
document.querySelector("button").addEventListener("click",function(){
  var randomNumber1=Math.floor(Math.random()*6)+1;
  var randomNumber2=Math.floor(Math.random()*6)+1;
  var sound=new Audio("roll.wav");
  sound.play();
  var s1="dice"+randomNumber1+".png";
  document.querySelectorAll("img")[0].setAttribute("src",s1);
  var s2="dice"+randomNumber2+".png";
  document.querySelectorAll("img")[1].setAttribute("src",s2);
  var res="";
  if(s1>s2)
  {
    res="🤩Player 1 Wins!";
  }
  else if(s1<s2)
  {
    res="Player 2 Wins!‍🤩";
  }
  else
  res="🤷‍♀️Draw";

  document.querySelector("h1").innerHTML=res;
  document.querySelector("button").innerHTML="Roll Us Again !";
});
