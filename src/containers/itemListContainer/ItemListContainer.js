import React, { Component } from 'react'
import Button from '../../components/Button'
import ItemCount from '../../components/ItemCount/ItemCount';
import Product from '../../components/Product/Product'

export default class ItemListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productsList: []
        };
        this.addProductToList = this.addProductToList.bind(this)
    }

    addProductToList() {
        const productToAdd = { name: 'Test Name', price: 99 };

        this.setState({ productsList: [...this.state.productsList, productToAdd] });
    }

    render() {
        return (
            <div>

                <ItemCount stock={4} initial={1}></ItemCount>

                {/* <ul>
                    {
                        (this.state.productsList.length > 0) ?
                            this.state.productsList.map((item, index) => {
                                return <Product key={index} name={item.name} price={item.price} />
                            })
                            :
                            <h1>No hay productos en la lista</h1>
                    }
                </ul>
                <Button onClick={this.addProductToList} /> */}
            </div>
        );
    }
}
