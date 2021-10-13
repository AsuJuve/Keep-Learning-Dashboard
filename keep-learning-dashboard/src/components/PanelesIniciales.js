import React from 'react';
import Panel from './Panel';

let totalProductos = {
    color:   "primary",
    titulo: "Total de Productos",
    valor: 21,
    icono: "fas fa-shopping-cart",
}

let totalUsuarios ={
    color:   "info",
    titulo: "Total de Usuarios",
    valor: 79,
    icono: "fas fa-users",
}

let totalCategorias = {
    color:   "danger",
    titulo: "Total de Categorias",
    valor: 49,
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