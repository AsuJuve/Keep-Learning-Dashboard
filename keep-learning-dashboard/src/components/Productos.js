import React from 'react';
import Producto from './Producto';

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
        this.apiCall("https://grupo-3-keeplearning.herokuapp.com/api/products",this.mostrarProductos);
    }

    mostrarProductos = (data) =>{
        this.setState({productos : data.products})
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
																					<th>Detalle</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
																					<th>Id</th>
																					<th>Nombre</th>
																					<th>Descripción</th>
																					<th>Categoría</th>
																					<th>Detalle</th>
									</tr>
								</tfoot>
								<tbody>
										{this.state.productos.map(producto => (
											<Producto producto={producto} />
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>      
			</div>     
		)
	}
}

export default Productos;