let modo= false;

function ModoNoturno()
        {
           if(modo==false ){
            modo= true;
            
            root.style.setProperty('--cor-principal', '#fff'); //altera as variaveis/elementos do css
            root.style.setProperty('--cor-segundaria', '#000');//altera as variaveis/elementos do css
           }
           else{
            modo=false;
            
            root.style.setProperty('--cor-principal', '#000');//altera as variaveis/elementos do css
            root.style.setProperty('--cor-segundaria', '#fff');//altera as variaveis/elementos do css
           }
        }
 
         
        var noturno = document.getElementById("noturno");
        noturno.addEventListener("click", ModoNoturno);

        var root = document.documentElement;//obtem as variaveis/elmentos do css 