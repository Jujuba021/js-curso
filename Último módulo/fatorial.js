// O conceito apresentadoi a seguir se chama recursiviade.

function fatorial(n){
    if(n == 1){
        return 1 
    }
    else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(9))