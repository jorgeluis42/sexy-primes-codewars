function isPrime(n)
{
    if(n===1)return false;
    if(n===2)return true;
    if(n%2===0)return false;
    var i=3;
    while(i<=n/2)
    {
        if(n%i===0)return false;
        i++;
    }
    return true;
}

function sexy_prime(x, y){
    if(isPrime(x) && isPrime(y))
    {
        if(x-y===6 || y-x===6)
        {
            return true;
        }
    }
    return false;
}