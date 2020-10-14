
        document.getElementById("btnGrow").addEventListener("click", function(){

            document.getElementById("box").style.height = "250px";

        });
        document.getElementById("btnBlue").addEventListener("click", function(){

            document.getElementById("box").style.backgroundColor = "blue";

        });
        document.getElementById("btnFade").addEventListener("click", function(){

            document.getElementById("box").style.opacity = .5;

        });
        document.getElementById("btnBorder").addEventListener("click", function(){

            document.getElementById("box").style.border = "thick solid #0000FF";
            

        });
        document.getElementById("btnReset").addEventListener("click", function(){

            document.getElementById("box").style.height = "150px";
            document.getElementById("box").style.backgroundColor = "orange";
            document.getElementById("box").style.opacity = 1;
            document.getElementById("box").style.borderColor = "orange";

        });