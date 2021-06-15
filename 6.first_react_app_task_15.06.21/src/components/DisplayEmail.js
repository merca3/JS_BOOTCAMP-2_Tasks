import React from 'react';

class DisplayEmail extends React.Component {
    render() {
        return (
            <div>
                <h3>Your email is {this.props.email}</h3>
            </div>
        )
    }
}

export default DisplayEmail;