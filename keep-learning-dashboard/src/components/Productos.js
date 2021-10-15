import React from 'react';
import ListadoProductos from './ListadoProductos';

class Productos extends React.Component{
	constructor(){
        super()
        this.state = {
            productos: []
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e));
    }

    componentDidMount (){
        this.apiCall("https://grupo-3-keeplearning.herokuapp.com/api/products",this.mostrarProducto);
    }

    mostrarProducto = (data) =>{
        this.setState({productos : data.products})
		console.log("aaaa")
		console.log(this.state.productos);
    }
	
	render(){
		return(
			<div>
				<h1 className="h3 mb-2 text-gray-800">Productos en la Base de Datos</h1>
				
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
																					<th>Id</th>
																					<th>Nombre</th>
																					<th>Descripción</th>
																					<th>Categoría</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
																					<th>Id</th>
																					<th>Nombre</th>
																					<th>Descripción</th>
																					<th>Categoría</th>
									</tr>
								</tfoot>
									<ListadoProductos productos={this.state.productos} />
							</table>
						</div>
					</div>
				</div>      
			</div>     
		)
	}
}

export default Productos;