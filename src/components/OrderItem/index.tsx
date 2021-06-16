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
interface State {
    isEditing: boolean
}
export default class OrderItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.handleCannelComment = this.handleCannelComment.bind(this)
        this.state = {
            isEditing: false
        }
    }
   
    render() {
        const { product, detail, price } = this.props.data
        return (
            <div>
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
                    <button onClick={this.handleOpenComment}>评价</button>
                </div>
            </div>
            { this.state.isEditing? this.renderComment(): null }
            </div>
        )
    }

    renderComment() {
        return (
            <div>
                <textarea cols={30} rows={10}></textarea>
                {this.renderStars()}
                <button>提交</button>
                <button onClick={this.handleCannelComment}>取消</button>
            </div>
        )
    }

    renderStars() {
        return (
            <div>
                {
                    [1,2,3,4,5].map((item, index) => {
                        return <span key={index}>★</span>
                    })
                }
            </div>
        )
    }

    handleOpenComment = () => {
        this.setState({
            isEditing: true
        })
    }

    handleCannelComment() {
        this.setState({
            isEditing: false
        })
    }
}
