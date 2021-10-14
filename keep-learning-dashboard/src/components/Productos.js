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
        this.apiCall("http://localhost:3000/api/products",this.mostrarProducto);
    }

    mostrarProducto = (data) =>{
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
																					<th>Descripción corta</th>
																					<th>Precio</th>
																					<th>Número de estudiantes</th>
																					<th>Rating</th>
																					<th>Categoría</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
									<th>Id</th>
																					<th>Nombre</th>
																					<th>Descripción corta</th>
																					<th>Precio</th>
																					<th>Número de estudiantes</th>
																					<th>Rating</th>
																					<th>Categoría</th>
									</tr>
								</tfoot>
								{this.state.productos.forEach(producto => {
									<ListadoProductos productos={producto} />
								})}
							</table>
						</div>
					</div>
				</div>      
			</div>     
		)
	}
}

export default Productos;