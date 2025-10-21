        
        
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
            }
            previousScrool = currentScrool;

            
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

        document.querySelector(".sandbox").addEventListener("click", () => {
            window.location.href = "uso.html";
        })

        function menuAtivar(){
            document.getElementById("menux").classList.toggle("ocultomenu");
        }

document.querySelectorAll(".as").forEach(el => {
    el.addEventListener("click", () => {
        document.getElementById("menux").classList.add("ocultomenu");
    });
});
        

        

