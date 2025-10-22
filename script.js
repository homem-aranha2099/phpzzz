        
        
        addEventListener("load", () => {
            document.querySelector(".top").classList.remove("oculto");


        })


        let previousScrool = 0;
        document.addEventListener("scroll", () => {
            let currentScrool = window.pageYOffset;
            if(currentScrool < previousScrool){
                document.querySelector(".chapeu").classList.remove("oculto");
            }else{
                document.querySelector(".chapeu").classList.add("oculto");
                document.querySelector(".chapeu.menu").classList.add("oculto");
            }
            previousScrool = currentScrool;
        })

        document.querySelector(".pai-menu").addEventListener("click", () => {
            document.querySelector(".chapeu.menu").classList.toggle("oculto");
        })

        document.getElementById("sunmoon").addEventListener("click", () => {
            document.body.classList.toggle("dark");
            document.getElementById("moon").classList.toggle("dark");
            document.getElementById("sun").classList.toggle("dark");
        })


        function mostrarDescricao(){
            document.querySelector(".palavra").classList.remove("oculto");
        }
        function ocultarDescricao(){
            document.querySelector(".palavra").classList.add("oculto");
        }

        document.querySelectorAll(".a").forEach((el) => {
            el.addEventListener("click", () => {
                    setTimeout(() => {
                        document.querySelector(".chapeu").classList.add("oculto");
                        document.querySelector(".chapeu.menu").classList.add("oculto");
                    }, 500 + (window.pageYOffset / 2);
            });
        });


        
        document.querySelector(".som").addEventListener("click", () => {
            document.querySelector(".audio").currentTime = 0;
            document.querySelector(".audio").play();
        })

      
        

        


