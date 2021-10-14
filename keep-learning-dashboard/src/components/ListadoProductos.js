import React from "react"

class ListadoProductos extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        producto: {}
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
      this.setState({producto : data});
  }

  render(){
    return(
      <tbody>
          <tr key={this.state.producto.id}>
          <td>{this.state.producto.id}</td>
          <td>{this.state.producto.name}</td>
          <td>{this.state.producto.shortDescription}</td>
          <td>{this.state.producto.productPrice}</td>
          <td>{this.state.producto.enrolledStudents}</td>
          <td>{this.state.producto.valueRating}</td>
          <td>{this.state.producto.category}</td>
        </tr>
      </tbody>
    )
  }
}

export default ListadoProductos