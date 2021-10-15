import React from 'react';

import ListadoCategorias from './ListadoCategorias';

class Categorias extends React.Component{
	constructor(){
        super()
        this.state = {
            categorias: []
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e));
    }

    componentDidMount (){
        this.apiCall("http://grupo-3-keeplearning.herokuapp.com/api/products",this.mostrarProducto);
    }

    mostrarProducto = (data) =>{
        this.setState({categorias : data.countByCategory})
		console.log(this.state.categorias);
    }
	
	render(){	
		return(
			<div>
				<h1 className="h3 mb-2 text-gray-800">Categorias en la Base de Datos</h1>
				
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
																					<th>Nombre</th>
																					<th>Número de cursos</th>
									</tr>
								</thead>
								<ListadoCategorias categorias={this.state.categorias} />
							</table>
						</div>
					</div>
				</div>      
			</div>     
		)
	}
}

export default Categorias;