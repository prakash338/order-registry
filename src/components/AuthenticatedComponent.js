import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userAction';
import { getOrders } from '../actions/ordersAction';

class AuthenticatedComponent extends Component {
    componentDidUpdate() {
        const {userLoading, user} = this.props;
        if ( userLoading === false && !user ) {
            this.props.history.push('/login');
        }
    }

    render() {
        const {userLoading, user, children} = this.props;
        return (userLoading === false && user ) ? <div>{children}</div> : null;
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.user,
        userLoading: state.loading.user
    }
}

export default withRouter(connect(mapStateToProps)(AuthenticatedComponent));