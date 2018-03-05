import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userAction';
import { getOrders } from '../actions/ordersAction';

class LoadingComponent extends Component {
    componentWillMount(){
        const { userLoading, ordersLoading} = this.props;

        if (userLoading === undefined ){
            this.props.getUser();
        }

        if (ordersLoading === undefined) {
            this.props.getOrders();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps === -1 && nextProps.user !== null) {
            this.props.getOrders();
        }
    }

    render() {
        const { userLoading, ordersLoading, children } = this.props;
        if ( (!userLoading && !ordersLoading) || this.props.user === null ) {
            return <div>{children}</div>
        }else{
            return <h2>Loading...</h2>
        }
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.user,
        userLoading: state.loading.user,
        ordersLoading: state.loading.orders
    }
}

export default withRouter(connect(mapStateToProps, {getUser, getOrders})(LoadingComponent));