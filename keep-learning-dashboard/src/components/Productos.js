import React from 'react';

import ListadoProductos from './ListadoProductos';

function Productos(){
	/*
		fetch('http://localhost:3001/api/productos')
		.then(response => response.json())
		.then(res => {
				this.setState({ listaProductos: res.data})
		})
		*/
	
	return(
		<div>
			<h1 className="h3 mb-2 text-gray-800">Productos en la Base de Datos</h1>
			
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
							<thead>
								<tr>
																				<th>{/*Atributos*/}</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
																				<th>{/*Atributos*/}</th>
								</tr>
							</tfoot>
							<ListadoProductos productos={/*this.state.listaProductos*/} />
						</table>
					</div>
				</div>
			</div>      
		</div>     
	)
}

export default Productos;