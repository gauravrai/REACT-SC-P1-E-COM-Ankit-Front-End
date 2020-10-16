import React, { Component } from 'react'


import Dashboard from './Dashboard'
import Orders from './Orders'
import Coupons from './Coupons'
import Wallet from './Wallet'
import Wishlist from './Wishlist'

class Customer extends Component {
    state = {
        activeSidebar: "account",
        customerComponent: <Dashboard />
    }
    componentDidUpdate(prevState){
        if(this.props.match.params.tab !== prevState.match.params.tab){
            this.updateSideBar()
        }
    }
    componentDidMount(){
        this.updateSideBar()
    }
    updateSideBar = () => {
        if(this.props.match.params.tab === 'orders'){
            this.setState({
                ...this.state,
                customerComponent: <Orders sideActive="orders" />
            })
        }
        else if(this.props.match.params.tab === 'coupons'){
            this.setState({
                ...this.state,
                customerComponent: <Coupons sideActive="coupons" />
            })
        }
        else if(this.props.match.params.tab === 'wishlist'){
            this.setState({
                ...this.state,
                customerComponent: <Wishlist sideActive="wishlist" />
            })
        }
        else if(this.props.match.params.tab === 'wallet'){
            this.setState({
                ...this.state,
                customerComponent: <Wallet sideActive="wallet" />
            })
        }
        else{
            this.setState({
                ...this.state,
                customerComponent: <Dashboard sideActive="dashboard" />
            })
        }
    }
    render (){
        return this.state.customerComponent
    }
    
}

export default Customer
