import { Component } from 'react';
import React from 'react';

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '1px 10px',
        fontSize: '0.9rem',
        width: '20px'
    },
}

class BubbleAlert extends Component {
    getNumber(n) {
        if(!n) {return ''}
        return  n > 9 ? '9+': n
    }

    render() {
        const { value } = this.props;
        return (
            <div>
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
            </div>
        )
    }
}




export default BubbleAlert;