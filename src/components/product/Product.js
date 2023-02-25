import React from 'react'

export default function Product({ name, price }) {

    return (
        <div className='container-list'>

            <li>Product -&gt; {name} (${price})</li>

        </div>
    )
}
