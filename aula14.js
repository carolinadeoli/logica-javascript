function retornarPositivos(ar){ //cria a função da array
    var ar2 = []; // cria array vazia para armazenar os valores positivos
    for (var i = 0; i < ar.length; i++) { // percorre os elementos da array original
        var el = ar[i]; // cria variável para cada elemento da array
        if (el >= 0) { // se o elemento da array for maior ou igual a zero o elemento é acrescentado na array 2
            ar2.push(el);
        }
    }
    return ar2;
   }
   var ar = [-8, -5, -3, 0, -7, 2, 6, 11, 12]; //cria a array
   var ar2 = retornarPositivos(ar);
   
   console.log(ar2);