import React, { Component } from 'react';
import "./User.css";
import PropTypes from 'prop-types';


class User extends Component {
    static defaultProps = {
        companyName : "Not Specified",
        duration : "Not Specified",
        position : "Not Specified"
    }

    constructor(props){
        super(props);
        this.state = {
            test : true
        }
    }

    clickHandler = (event) =>{
        this.setState({
            test : !this.state.test
        })
    }

    render() {
        const {companyName, position, duration} = this.props;
        const {test} = this.state;
        return (
            <div className="boxTitle">
                <h4 onClick = {this.clickHandler}>{companyName}</h4>
                {
                    test ? <div className="boxInner">
                        <ul>
                            <li>{position}</li>
                            <li>{duration}</li>
                        </ul>
                    </div> : null
                }

            </div> 

        )
    }
}

User.propTypes = {
    companyName : PropTypes.string.isRequired,
    duration : PropTypes.string.isRequired,
    position : PropTypes.string.isRequired
}

export default User;