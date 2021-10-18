import React from 'react';

class Producto extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      producto : []
    }
  }

  apiCall(url, consecuencia){
    fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(e => console.log(e));
  }

  componentDidMount (){
    this.apiCall(this.props.producto.detail,this.mostrarProducto);
  }

  mostrarProducto = (data) =>{
    this.setState({producto : data})
    console.log(this.state.producto);
  }

  render(){
    return(
      <tr key={this.state.producto.id}>
        <td>{this.state.producto.id}</td>
        <td>{this.state.producto.name}</td>
        <td>{this.state.producto.shortDescription}</td>
        <td>{this.state.producto.category}</td>
        <td>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href={"https://grupo-3-keeplearning.herokuapp.com/productDetail/"+this.state.producto.id}>Ver detalle</a>
        </td>
      </tr>
    )
  }
}

export default Producto