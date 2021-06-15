import React from 'react';

class DisplayAge extends React.Component {
    render() {
        return (
            <div>
                <h2>Your age is {this.props.age}</h2>
            </div>
        )
    }
}

export default DisplayAge;