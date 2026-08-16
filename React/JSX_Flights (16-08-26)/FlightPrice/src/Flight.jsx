
function Flight() {
    const flights = [
        {
            price:4500,
            seats: 2,
            typeofSeat: ['Business class'],
            airlinename: 'Indigo'
        },
        {
            price:6700,
            seats: 10,
            typeofSeat: ['Business class', 'Economy'],
            airlinename: 'Vistara'
        },
        {
            price:4800,
            seats: 10,
            typeofSeat: ['Business class', 'Economy', "Prime"],
            airlinename: 'Spice Jet'
        }
    ]
    

    const minSeatNeeded = 2;

    const seatForIndigo = 2;
    const seatForVistaraBusiness = 2;
    const seatForVistaraEconomy = 2;
    const seatForSpiceJet = 2;

    const indigoDiscount = flights[0].price - (flights[0].price * (10/100))
    const vistaraDiscountBusiness = flights[1].price - (flights[1].price * (10/100))
    const vistaraDiscountEconomy = flights[1].price - (flights[1].price * (5/100))
    const spiceJetDiscountBusiness = flights[2].price - (flights[2].price * (10/100))

    
    const indigoFinalPrice = (seatForIndigo >= minSeatNeeded  ?  
        (indigoDiscount * seatForIndigo) 
        : (flights[0].price * seatForIndigo))

    const vistaraFinalPrice = (seatForVistaraBusiness >= minSeatNeeded ? 
        (vistaraDiscountBusiness * seatForVistaraBusiness) 
        : (flights[1].price * seatForVistaraBusiness)) + 
        (seatForVistaraEconomy >= minSeatNeeded ? 
            (vistaraDiscountEconomy * seatForVistaraEconomy) 
            : (flights[1].price * seatForVistaraEconomy) )

    const spiceJetFinalPrice = (seatForSpiceJet >= minSeatNeeded ? 
        (spiceJetDiscountBusiness * seatForSpiceJet) 
        : (flights[2].price * seatForSpiceJet))




  return (
    <>
        <h2 id='flight'>Total seats booked: {seatForIndigo + (seatForVistaraBusiness + seatForVistaraEconomy) + seatForSpiceJet}</h2>
        <p>Total price: {indigoFinalPrice + vistaraFinalPrice + spiceJetFinalPrice}</p>
    </>
  )
}

export default Flight