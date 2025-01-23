function Puissance(num,pow) {
    
    if(pow===0)
    {
        return 1;
    }
    else{

        return num * Puissance(num,pow-1);
    }
}
console.log(Puissance(3,3));