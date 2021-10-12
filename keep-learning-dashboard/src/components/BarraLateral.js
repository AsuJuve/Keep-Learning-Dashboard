import React from 'react';
import logo from '../assets/images/kllogo.png'

function BarraLateral(){
    return(
        <div>
            {/*<!-- Inicio de Barra Lateral -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Barra Lateral - Logo -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={logo} alt="Keep Learning"/>
                    </div>
                </a>

                {/*<!-- Divisor -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-tachometer-alt"></i>
                        <span>Dashboard - Keep Learning</span></a>
                </li>

                {/*<!-- Divisor -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Encabezado -->*/}
                <div className="sidebar-heading">Listados</div>

                {/*<!-- Nav Item - Categorías de Productos -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-tags"></i>
                        <span>Categorías de Productos</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Listado de Productos -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-shopping-basket"></i>
                        <span>Listado de Productos</span></a>
                </li>

                {/*<!-- Divisor -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>

            </ul>
            {/*<!-- Fin de la Barra Lateral -->*/}
            
        </div>
    )
}
export default BarraLateral;