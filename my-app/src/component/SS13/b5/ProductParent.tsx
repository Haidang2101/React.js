import React, { Component } from 'react'
import ProductChild from './b5/ProductChild';
interface State{
    id: number;
    name: string;
    price: string;
    quantity:number
}
export default class BT5 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            name: "Bưởi ba roi",
            price: "12.000đ",
            quantity: 6
        }
    }
  render() {
    return (
        <>
            <ProductChild id={this.state.id} name={this.state.name} price={this.state.price} quantity={this.state.quantity}></ProductChild>
        </>
    )
  }
}