function ticketP(age) {

    if (age <= 12) { 
        return "vous allez payés 10$"; 
    }
    else if (age <= 17) { 
        return "vous allez payés 15$"; 
    }
    else return "vous allez payés 20$";
}
console.log(ticketP(10));