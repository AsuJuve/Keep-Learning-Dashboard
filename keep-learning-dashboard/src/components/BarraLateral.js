import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/kllogo.png'

function BarraLateral(){
    return(
        <div>
            {/*<!-- Inicio de Barra Lateral -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Barra Lateral - Logo -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={logo} alt="Keep Learning"/>
                    </div>
                </Link>

                {/*<!-- Divisor -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-tachometer-alt"></i>
                        <span>Dashboard - Keep Learning</span></Link>
                </li>

                {/*<!-- Divisor -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Encabezado -->*/}
                <div className="sidebar-heading">Listados</div>

                {/*<!-- Nav Item - Categorías de Productos -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/categorias">
                        <i className="fas fa-fw fa-tags"></i>
                        <span>Categorías de Productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Listado de Productos -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/productos">
                        <i className="fas fa-shopping-basket"></i>
                        <span>Listado de Productos</span></Link>
                </li>

                {/*<!-- Divisor -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>

            </ul>
            {/*<!-- Fin de la Barra Lateral -->*/}
            
        </div>
    )
}
export default BarraLateral;