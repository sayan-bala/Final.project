

      var r = false; 
      var m = false;
      var s = false;
      function  func(){
        var c = document.getElementById("img1").style.opacity;
        var c1 = document.getElementById("img2").style.opacity;
        var ct = document.getElementById("modal").style.opacity;
        
          document.getElementById("img2").style.opacity = "0.3";
          document.getElementById("img3").style.opacity = "0.3";
          document.getElementById("img1").style.opacity = "3";
          document.getElementById("img2").style.transition = "0.5s";
          document.getElementById("img3").style.transition = "0.5s";
          document.getElementById("modal").style.display = "block";
          document.getElementById("modal").style.opacity = "1";
          document.getElementById("modal").style.transition = "1s";
          m = false, s = false;
        if(r){
          document.getElementById("img2").style.opacity = "1";
          document.getElementById("img3").style.opacity = "1";
          document.getElementById("modal").style.display = "none";
          document.getElementById("modal").style.transition = "0.5s";
          r = false
        }
        else
        r = true;
       
      }
      function  func2(){
        var a = document.getElementById("img1").style.opacity
        var c = document.getElementById("img2").style.opacity;
        var c1 = document.getElementById("img3").style.opacity;
        
          document.getElementById("img1").style.opacity = "0.3";
          document.getElementById("img3").style.opacity = "0.3";
          document.getElementById("img2").style.opacity = "3";
          document.getElementById("img1").style.transition = "0.5s";
          document.getElementById("img3").style.transition = "0.5s";
          document.getElementById("modal1").style.display = "block";
          document.getElementById("modal").style.display = "none";
          document.getElementById("modal1").style.opacity = "1";
          document.getElementById("modal1").style.transition = "1s";
          r = false, s = false;
         
        if(m){
          document.getElementById("img1").style.opacity = "1";
          document.getElementById("img3").style.opacity = "1";
          document.getElementById("modal1").style.display = "none";
          document.getElementById("modal1").style.opacity = "0";
          document.getElementById("modal1").style.transition = "0.5s";
          m = false;
        }
        else{
          m = true;
        }
       
      }
      function  func3(){
        var c = document.getElementById("img3").style.opacity;
        var c1 = document.getElementById("img2").style.opacity;
          document.getElementById("img2").style.opacity = "0.3";
          document.getElementById("img1").style.opacity = "0.3";
          document.getElementById("img3").style.opacity = "3";
          document.getElementById("img2").style.transition = "0.5s";
          document.getElementById("img1").style.transition = "0.5s";
          document.getElementById("modal3").style.display = "block";
          document.getElementById("modal").style.display = "none";
          document.getElementById("modal1").style.display = "none";
          document.getElementById("modal3").style.opacity = "1";
          document.getElementById("modal3").style.transition = "1s";
          m = false, r = false;
        if(s){
          document.getElementById("img2").style.opacity = "1";
          document.getElementById("img1").style.opacity = "1";
          document.getElementById("modal3").style.display = "none";
          document.getElementById("modal3").style.opacity = "0";
          document.getElementById("modal3").style.transition = "0.5s";
          s = false;
        }
        else 
        s = true;
        function close(){
          document.getElementById("modal3").style.display = "none";
        }
       
      }
      function secondpage(){
        document.getElementById("bigimg11").style.display = "none";
        document.getElementById("bigimg111").style.display = "flex";
        document.getElementById("bigimg111").style.opacity = "1";
        document.getElementById("bigimg111").style.transition = "1s";
        document.getElementById("open").style.display = "none";
        document.getElementById("book").style.display = "none";
        document.getElementById("form").style.display = "none";
        document.getElementById("stepping").style.display = "none";
        document.getElementById("ourvision").style.display = "none";
        document.getElementById("ourvision_buttons").style.display = "none";
        document.getElementById("restaurants").style.display = "block";

      }
      function firstpage(){
        document.getElementById("bigimg11").style.display = "block";
        document.getElementById("bigimg111").style.display = "none";
        document.getElementById("ourvision").style.display = "block";
        document.getElementById("ourvision_buttons").style.display = "block";
        document.getElementById("restaurants").style.display = "block";
        document.getElementById("open").style.display = "none";
        document.getElementById("book").style.display = "none";
        document.getElementById("form").style.display = "block";
        document.getElementById("stepping").style.display = "block";
      }
      function thirdpage(){
        document.getElementById("bigimg11").style.display = "block";
        document.getElementById("bigimg111").style.display = "none";
        document.getElementById("open").style.display = "block";
        document.getElementById("form").style.display = "block";
        document.getElementById("book").style.display = "none";
        document.getElementById("stepping").style.display = "none";
        document.getElementById("restaurants").style.display = "none";
        document.getElementById("ourvision").style.display = "none";
        document.getElementById("ourvision_buttons").style.display = "none";

      }
      function fourthpage(){
        document.getElementById("bigimg11").style.display = "block";
        document.getElementById("bigimg111").style.display = "none";
        document.getElementById("open").style.display = "none";
        document.getElementById("form").style.display = "block";
        document.getElementById("book").style.display = "none";
        document.getElementById("stepping").style.display = "none";
        document.getElementById("restaurants").style.display = "block";
        document.getElementById("ourvision").style.display = "none";
        document.getElementById("ourvision_buttons").style.display = "none";

      }
      function fivthpage(){
        document.getElementById("bigimg11").style.display = "none";
        document.getElementById("bigimg111").style.display = "none";
        document.getElementById("open").style.display = "none";
        document.getElementById("form").style.display = "none";
        document.getElementById("book").style.display = "block";
        document.getElementById("stepping").style.display = "none";
        document.getElementById("restaurants").style.display = "block";
        document.getElementById("ourvision").style.display = "none";
        document.getElementById("ourvision_buttons").style.display = "none";
        document.getElementsByTagName("body").style.margin = "0";
      }







      

    

function create_card( img, name ){
    var c = '<div id="card" onclick="func2()" style="opacity: 1;">\
    <button class="rt" id="rt2"><img src="'+img+'" alt="" height="300" width="430" id="img2" style="opacity:1;"></button>\
    <h1 class="me">'+ name +'</h2>\
            </div>'

    return c;
}