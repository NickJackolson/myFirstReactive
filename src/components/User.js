import React, { Component } from 'react'

class User extends Component {

    render() {
        const {companyName, position, duration} = this.props;

        return (
            <div>
                <h4>{companyName}</h4>
                <ul>
                    <li>{position}</li>
                    <li>{duration}</li>
                </ul>
            </div>
        )
    }
}


export default User;