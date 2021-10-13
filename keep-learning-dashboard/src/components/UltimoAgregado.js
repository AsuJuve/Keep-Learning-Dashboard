import React from "react";

function UltimoAgregado(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último {props.entidad} agregado</h5>
                </div>
                <div className="card-body">
                <h6 className="m-0 font-weight-bold text-gray-700">{/* titulo */}</h6>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={/*imagen */} alt={/* titulo */} />
                    </div>
                    <p>{/* descripcion*/}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de {props.entidad}</a>
                </div>
            </div>
        </div> 
    )
}

export default UltimoAgregado;