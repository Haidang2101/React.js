import React, { Component } from 'react'
interface Props{
    id: number;
     name: string;
    price: string;
    quantity:number
}
export default class ProductChild extends Component<Props> {
  render() {
    return (
        <div>
            <p>ID: {this.props.id}</p>
            <p>Product name: {this.props.name}</p>
            <p>Price: {this.props.price}</p>
            <p>Quantity: {this.props.quantity}</p>
      </div>
    )
  }
}