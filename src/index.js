
module.exports = function makeExchange(currency) {
   let countcoins={};
    if (currency>10000){
    countcoins={
        error: "You are rich, my friend! We don't have so much coins for exchange"}
       }
    else if (currency===0 | currency<0)
    countcoins; 
    else {
    const H=50;
    const Q=25;
    const D=10;
    const N=5;
    const P=1;

    countcoins.H=currency/H|0;
    currency=currency%H;
    countcoins.Q=currency/Q|0;
    currency=currency%Q;
    countcoins.D=currency/D|0;
    currency=currency%D; 
    countcoins.N=currency/N|0;
    currency=currency%N;
    countcoins.P=currency;
    
    for (let key in countcoins){
        if (countcoins[key]==0){
        delete countcoins[key];
        } 
    }  
}
return countcoins;
}

     

