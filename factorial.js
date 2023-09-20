
/*var n;
n=prompt("ingrese el numero a calcular factorial: ");*/
function factorial(n){
    if (n==0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
    document.write()
}
console.log(factorial(5));