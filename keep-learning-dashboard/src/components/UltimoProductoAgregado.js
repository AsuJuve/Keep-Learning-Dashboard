import React from "react";
import cursoPrueba from '../assets/images/curso-prueba.png'

function UltimoProductoAgregado(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                </div>
                <div className="card-body">
                <h6 className="m-0 font-weight-bold text-gray-700">{/* titulo */}</h6>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={cursoPrueba} alt="Curso" />
                    </div>
                    <p>{/* descripcion*/}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de producto</a>
                </div>
            </div>
        </div> 
    )
}

export default UltimoProductoAgregado;