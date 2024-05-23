import { Component } from 'react';
import Products from './components/Products';
import Layout from "./components/Layout";
import Navbar from './components/Navbar';
import Title from './components/Title';



class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1500, img: '/product/tomate.jpg'},
      { name: 'Arbejas', price: 2500, img: '/product/arbejas.jpg'},
      { name: 'Lechuga', price: 500, img: '/product/lechuga.jpg'}, 
    ],
    carro: [],
    esCarroVisible: false,

  }

    agregarAlCarro = (producto) => {
      const { carro } = this.state
      if(carro.find(x => x.name === producto.name)) {
        const newCarro = carro.map(x => x.name === producto.name
          ? ({
            ...x,
            cantidad: x.cantidad + 1

          })
        : x)
        return this.setState({carro: newCarro})
      }
      return this.setState({
        carro: this.state.carro.concat({
          ...producto,
          cantidad: 1,
        })
      })
    }

     mostrarCarro = () => { 
      this.setState({ esCarroVisible: !this.state.esCarroVisible })
     }


  render() {
    const { esCarroVisible} = this.state
      return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>    
        <Title />
        <Products
         agregarAlCarro={this.agregarAlCarro}
         products={this.state.products}
         />
        </Layout>
      </div>
    )
  }
}


export default App;
