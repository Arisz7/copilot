import { Component } from "react";

const styles ={
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        width: '1200px',
    }
}

class Layout extends Component {
    render() {
        return (
            <div styles={styles.layout}>    
                <div style={styles.layout}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout