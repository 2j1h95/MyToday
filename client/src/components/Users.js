import React, {Component} from 'react';


class Users extends Component{
    render(){
        return(
            <div>
                <p>{this.props.id}</p>
                <p>{this.props.password}</p>
                <p>{this.props.email}</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Users;