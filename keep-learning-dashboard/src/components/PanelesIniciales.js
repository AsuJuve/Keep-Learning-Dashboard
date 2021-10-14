import React from 'react';
import Panel from './Panel';

let totalProductos = {
    entidad: "productos",
    color:   "primary",
    titulo: "Total de Productos",
    icono: "fas fa-shopping-cart",
}

let totalUsuarios ={
    entidad: "usuarios",
    color:   "info",
    titulo: "Total de Usuarios",
    icono: "fas fa-users",
}

let totalCategorias = {
    entidad: "categorias",
    color:   "danger",
    titulo: "Total de Categorias",
    icono: "fas fa-tag",
}

let panelProps = [totalProductos,totalUsuarios,totalCategorias];

function PanelesIniciales(){
    return (
        <div className="row">
            {
                panelProps.map((panelInfo,index)=>{
                    return <Panel  {...panelInfo}  key= {index}/>
                })
            }      
        </div>
    )
}
export default PanelesIniciales;