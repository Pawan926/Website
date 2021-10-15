window.addEventListener('scroll', function () {
  let navbar = document.querySelector('nav');
  if((window.pageYOffset > 0 && window.pageYOffset < 600)|| (window.pageYOffset > 1258 && window.pageYOffset <1900)){
    document.getElementById('bugger4').style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    navbar.classList.add('sticky1');
    navbar.classList.remove('sticky2');
    document.getElementById('bugger1').style.backgroundColor = "white";
    document.getElementById('bugger2').style.backgroundColor = "white";
    document.getElementById('bugger3').style.backgroundColor = "white";
  }
  else if(window.pageYOffset > 600){
    document.getElementById('bugger4').style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    navbar.classList.add('sticky2');
    navbar.classList.remove('sticky1');
    document.getElementById('bugger1').style.backgroundColor = "black";
    document.getElementById('bugger2').style.backgroundColor = "black";
    document.getElementById('bugger3').style.backgroundColor = "black";
  }
  else{
    navbar.classList.remove('sticky1');
    navbar.classList.remove('sticky2');
    document.getElementById('bugger4').style.backgroundColor = null;
  }

  
  if(window.pageYOffset > 145 && window.pageYOffset <805 || window.pageYOffset > 1455 && window.pageYOffset <4000){
    document.getElementById("sty5").style.backgroundColor = "#0077B5";
    document.getElementById("sty5").querySelector("i").style.color = "white";
  }
  else{
    document.getElementById("sty5").style.backgroundColor = null ;
    document.getElementById("sty5").querySelector("i").style.color = null;
  }

  
  if(window.pageYOffset > 205 && window.pageYOffset < 865 || window.pageYOffset > 1515 && window.pageYOffset <4000){
    document.getElementById("sty4").style.backgroundColor = "#1DA1F2";
    document.getElementById("sty4").querySelector("i").style.color = "white";
  }
  else{
    document.getElementById("sty4").style.backgroundColor = null ;
    document.getElementById("sty4").querySelector("i").style.color = null ;
  }

  
  if(window.pageYOffset > 265 && window.pageYOffset <925 || window.pageYOffset > 1575 && window.pageYOffset <4000){
    document.getElementById("sty3").style.backgroundColor = "#FF0000";
    document.getElementById("sty3").querySelector("i").style.color = "white";
  }
  else{
    document.getElementById("sty3").style.backgroundColor = null ;
    document.getElementById("sty3").querySelector("i").style.color = null ;
  }

  if(window.pageYOffset > 325 && window.pageYOffset <985 || window.pageYOffset > 1635 && window.pageYOffset <4000){
    document.getElementById("sty2").style.background = "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)";
    document.getElementById("sty2").querySelector("i").style.color = "white";
  }
  else{
    document.getElementById("sty2").style.background = null ;
    document.getElementById("sty2").querySelector("i").style.color = null ;
  }

  if(window.pageYOffset > 385 && window.pageYOffset < 1045 || window.pageYOffset > 1695 && window.pageYOffset <4000){
    document.getElementById("sty1").style.backgroundColor = "#4267B2";
    document.getElementById("sty1").querySelector("i").style.color = "white";
  }
  else{
    document.getElementById("sty1").style.backgroundColor = null ;
    document.getElementById("sty1").querySelector("i").style.color = null ;
  }



});