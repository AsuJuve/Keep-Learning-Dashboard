import React from 'react';
import PanelesPrincipales from './PanelesPrincipales';
import UltimoProductoAgregado from './UltimoProductoAgregado';
import UltimoUsuarioAgregado from './UltimoUsuarioAgregado';

function FilaInicial(){
    return(
		<div className="container-fluid">
			<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">Dashboard Keep Learning</h1>
			</div>
		
			{/*<!-- PanelesPrincipales-->*/}
			<PanelesPrincipales />

			{/*<!-- Ultimas instancias agregadas de usuarios y productos -->*/}
			<div className="row">
				
				<UltimoProductoAgregado entidad="producto"/>

				<UltimoUsuarioAgregado entidad="usuario"/>	
			</div>

		</div>
    )

}
export default FilaInicial;