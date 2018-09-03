

/*  function iniciar() {
    console.log("Iniciado JS")
 }
 
 document.addEventListener('DOMContentLoaded', iniciar) */
 
/* escrita de forma clásica:
 document.addEventListener('DOMContentLoaded', function () {
    console.log("Iniciado JS, función anónima")
 })

 /* escrita de forma aún más moderna:
 document.addEventListener('DOMContentLoaded',  () => 
 console.log("Iniciado JS, función anónima")
) */

import { Main} from './main.js' 


/* document.addEventListener('DOMContentLoaded',
                        function () {
                              new Main()
                        }
)  */

document.addEventListener('DOMContentLoaded',
                          () => new Main()
) 