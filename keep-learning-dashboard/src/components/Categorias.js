import React from 'react';

import ListadoCategorias from './ListadoCategorias';

function Categorias(){
	/*
		fetch('http://localhost:3001/api/categorias')
		.then(response => response.json())
		.then(res => {
				this.setState({ listaCategorias: res.data})
		})
		*/
	
	return(
		<div>
			<h1 className="h3 mb-2 text-gray-800">Categorias en la Base de Datos</h1>
			
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
							<ListadoCategorias categorias={/*this.state.listaCategorias*/} />
						</table>
					</div>
				</div>
			</div>      
		</div>     
	)
}

export default Categorias;