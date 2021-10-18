import React from "react";

class UltimoProductoAgregado extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            producto: {}
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let p = data.products.at(-1).detail
                fetch(p)
                    .then(response => response.json())
                    .then(data => consecuencia(data))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }

    componentDidMount(){
        this.apiCall("https://grupo-3-keeplearning.herokuapp.com/api/products",this.mostrarProducto);
    }

    mostrarProducto = (data) =>{
        this.setState({producto : data})
    }

    render(){
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                    </div>
                    <div className="card-body">
                        <h6 className="m-0 font-weight-bold text-gray-700">{this.state.producto.name}</h6>
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={this.state.producto.productImage} alt="Curso" />
                        </div>
                        <h7 className="m-0 font-weight-bold text-gray-700">Categoría: </h7>
                        <h7 className="m-0 font-weight-bold text-gray-600">{this.state.producto.category}</h7><br/>
                        <p>{this.state.producto.shortDescription}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href={"https://grupo-3-keeplearning.herokuapp.com/productDetail/"+this.state.producto.id}>Ver detalle</a>
                    </div>
                </div>
            </div> 
        )
    }
}

export default UltimoProductoAgregado;