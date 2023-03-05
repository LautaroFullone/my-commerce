import React, {useState} from 'react'
import './ItemCount.css'

export default function ItemCount({ stock, initial }) {

    const[counter, setCounter] = useState(initial);

    const increase = () => {
        if(counter+1 <= stock)
            setCounter(counter + 1)
        else  
            window.alert(`There is only ${stock} products in stock`);
    }

    const decrease = () => {
        if(counter-1 >= 0)
            setCounter(counter - 1)
    }

    return (
        <div>
            
            <div className="container main-grid ">
                <div className=''>Camisa Tiger</div>

                <div className='counter-container'> 
                    <div className='counter-operator' onClick={decrease} >-</div>
                    <div className='counter-number'>{counter}</div>
                    <div className='counter-operator' onClick={increase}>+</div>
                </div>

                <button type="button" className="btn btn-outline-primary">Add to Cart</button>
            </div>

            

        </div>
    )
}