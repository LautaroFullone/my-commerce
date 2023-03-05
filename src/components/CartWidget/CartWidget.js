import React from 'react'
import './CartWidget.css'

export default function CartWidget({productsCount, ...props}) {
    
    return (
        <a href="/" className="act-button" {...props}>
            <i className="fa-solid fa-cart-shopping" style={{ margin: "0 5px" }}></i> Cart  
            {/* {(productsCount > 0) ? <span className='counter'>{productsCount}</span> : null} */}
            {(productsCount > 0) ?  <div className="circle-container" style={{display: "inline-block"}}>
                                        <span className="circle-number">{productsCount}</span>
                                    </div> 
                                 : null}
        </a> 
    )
    
}
