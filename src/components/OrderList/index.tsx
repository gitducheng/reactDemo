import React, { Component } from 'react'
import OrderItem from '../OrderItem'

// type Props = Object
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
                product: '',
                detail: '',
                price: ''
            }
        ]
    }

    componentDidMount() {
        fetch('/mock/orders.json').then((res) => {
            if(res.ok){
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
                        return <OrderItem key={item.detail} data={item}/>
                    })
                }
            </div>
        )
    }
}
