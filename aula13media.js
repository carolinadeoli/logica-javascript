function mediaNotas(ar){   
    var n = ar.length; // o n é o tamanho da array que será usado no loop for para somar
    var soma = 0;

    for(var i =0; i < n; i++){
        soma+= ar[i]; // números de dentro da array passando pela soma 
    }

    return soma/n;
}

var ar = [6,7,8,7]; //declarar valores da array
var media = mediaNotas(ar); //declarar função
console.log('Média: ', media);