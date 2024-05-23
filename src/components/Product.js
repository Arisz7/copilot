import { Component } from "react";
import Button from './Button';

const styles = {
    product: {
        border: 'solid 1px #eee',
        boxShadow: '0 30px 30px rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding: '20px 25px',
        borderRadius: '10px',
    },
    img: {
        width: '100%',
    }
}

class Product extends Component {
    render() {
        const {product, agregarAlCarro} = this.props;

        return (
        <div style={styles.product}>
            <img style={styles.img} alt={product.name} src={product.img} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Button onClick={() => agregarAlCarro(product)}>
             Agregar al carro
            </Button>
        </div>
        )
    }
}

export default Product