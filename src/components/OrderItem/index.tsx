import React, { Component } from 'react'
import './style.css'
import img from '../../logo.svg'

type Props = {
    data: {
        product: string,
        detail: string,
        price: string
    }
}
export default class OrderItem extends Component<Props> {
    render() {
        const { product, detail, price } = this.props.data
        return (
            <div className="orderItem">
                <div className="orderItem_picContext">
                    <img src={img} alt=""/>
                </div>
                <div className="orderItem_context">
                    <p>product：{product}</p>
                    <p>detail：{detail}</p>
                    <p>price：{price}</p>
                </div>
                <div className="orderItem_button">
                    <button>评价</button>
                </div>
            </div>
        )
    }
}
