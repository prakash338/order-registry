import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import {connect} from 'react-redux';
import { getOrders, saveOrder, deleteOrder } from '../actions/ordersAction';
import { getUser } from '../actions/userAction';
import OrderCard from './OrderCard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      type: 'clay',
      quantity: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderOrders = this.renderOrders.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const order = {
      name: this.state.name,
      type: this.state.type,
      quantity: this.state.quantity,
      uid: this.props.user.uid
    };
    //order.orderTs = moment();

    this.props.saveOrder(order);

    //clear state
    this.setState({
      name: '',
      type: 'clay',
      quantity: 0
    });
  }

  renderOrders() {    
    return _.map(this.props.orders, (order, key) => {
      return (
            <OrderCard key={key}>
                <h2>{order.name} {order.type} {order.quantity}</h2>
                {order.uid === this.props.user.uid && (
                    <button 
                    className="btn btn-danger btn-xs"
                    onClick={()=>this.props.deleteOrder(key)}>Delete</button>
                )}              
            </OrderCard>
      );
    }); 
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit} >
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  onChange={this.handleChange} 
                  value = {this.state.name}
                  className="form-control no-border" 
                  placeholder="Name ..." 
                  required />
              </div>

              <div className="form-group">
                <select 
                  name="type" 
                  onChange={this.handleChange} 
                  value = {this.state.type}
                  className="form-control no-border" 
                  placeholder="Brick Type ..." 
                  required>
                    <option value="clay">Clay</option>
                    <option value="flyash">Fly Ash</option>
                </select>
              </div>

              <div className="form-group">
                <input
                  type="number"
                  name="quantity"
                  onChange={this.handleChange} 
                  value = {this.state.quantity}
                  min="2000" step="500"
                  className="form-control no-border"
                  placeholder="Quantity ..."
                  required />
              </div>

              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Place Order</button>
              </div>

            </form>
            <br />
            <br />
            <br />
            {this.renderOrders()}

          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return { orders: state.orders, user: state.user }
}

export default connect(mapStateToProps, {getOrders, saveOrder, deleteOrder, getUser}) (App);
