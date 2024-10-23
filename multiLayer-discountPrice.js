function ticketPrice(ticketQuantity){
    const first100rate = 100;
    const second100rate= 90;
    const restTicketrate = 70;

    if(ticketQuantity<100){
        const price = first100rate*ticketQuantity;
        return price;
    }
    else if(ticketQuantity<200){
        const first100price = first100rate*100;
        const restTicketQuantity = ticketQuantity-100;
        const restTicketprice = restTicketQuantity*second100rate;
        const totalPrice = first100price+restTicketprice;

        return totalPrice;
    }
    else{
        const first100price = 100*first100rate;
        const second100price = 100*second100rate;
        const restTicketQuantity = ticketQuantity-200;
        const restTicketprice = restTicketQuantity*restTicketrate;
        const totalCost = first100price+second100price+restTicketprice;
        
        return totalCost;
    }
}
const totalticket = ticketPrice(270);
console.log(totalticket);