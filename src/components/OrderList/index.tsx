import React, { Component } from 'react'
import OrderItem from '../OrderItem'

export default class OrderList extends Component {
    // constructor(props: Props) {
    //     super(props)
    //     this.state = {
    //         data: []
    //     }
    // }
    state = {
        data: [
            {
                id: 1,
                product: '',
                detail: '',
                price: '',
                isComment: false
            }
        ]
    }

    componentDidMount() {
        fetch('/mock/orders.json').then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    //console.log(data)
                    this.setState({
                        data: data
                    })
                })
            }
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((item) => {
                        return <OrderItem onSubmit={this.handleSubmit} key={item.detail} data={item} />
                    })
                }
            </div>
        )
    }

    handleSubmit = (id: number) => {
        const newData = this.state.data.map((item) => {
            return item.id === id ? { ...item, isComment: true } : item
        })
        console.log(newData)
        this.setState({
            data: newData
        })
    }
}
