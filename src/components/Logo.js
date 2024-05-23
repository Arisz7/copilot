import { Component } from "react"

const style = {
    logo: {
        fontSize: "2rem"
    }
}


class Logo extends Component {
    render() {
        return (
             <strong style={style.logo}>
                Shop
            </strong>
        )
    }
}


export default Logo;