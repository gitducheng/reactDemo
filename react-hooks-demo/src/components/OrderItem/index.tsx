import React, { Component } from 'react'
import './style.css'
import img from '../../logo.svg'

interface Props {
    data: {
        id: number,
        product: string,
        detail: string,
        price: string,
        isComment: boolean
    },
    onSubmit: Function
}
interface State {
    isEditing: boolean,
    starNum: number
}
export default class OrderItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        // this.handleCannelComment = this.handleCannelComment.bind(this)
        this.state = {
            isEditing: false,
            starNum: 0
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
                    {
                        this.props.data.isComment
                        ? <button className="orderItem_button_grey">已评价</button>
                        : <button onClick={this.handleOpenComment.bind(this)}>评价</button>
                    }
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
                <button onClick={this.handleSubmitComment.bind(this, this.props.data.id)}>提交</button>
                <button onClick={this.handleCannelComment.bind(this, false)}>取消</button>
            </div>
        )
    }

    renderStars() {
        const starNum = this.state.starNum
        return (
            <div>
                {
                    [1,2,3,4,5].map((item, index) => {
                        return <span className={item>starNum? "orderItem_star_grey": "orderItem_star_light"} onClick={this.handleClickStar.bind(this, item)} key={index}>★</span>
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

    handleSubmitComment = (id: number) => {
        this.props.onSubmit(id)
        this.setState({
            isEditing: false
        })
    }

    handleCannelComment(status: boolean) {
        this.setState({
            isEditing: status
        })
    }

    handleClickStar = (starNum: number) => {
        this.setState({
            starNum: starNum
        })
    }
}
