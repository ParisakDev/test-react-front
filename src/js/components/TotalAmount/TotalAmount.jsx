import React from 'react'

const TotalAmount = ({data}) => {
    return (
        <div className="total-amount d-f fd-c ff-bebas c-b fs-3">
            <p>Total : <span>{data.sum}€</span></p>
            <p>Réduction spéciale Ron : <span>-{data.offerResult.reduce}€</span></p>
            
            <p>Total à payer : <span>{data.offerResult.total}€</span></p>
        </div>
    )
}

export default TotalAmount