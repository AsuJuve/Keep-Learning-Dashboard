import React from 'react';
import foto from '../assets/images/usuario.png';

function BarraSuperior(){
    return(
		<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

			<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
				<i className="fa fa-bars"></i>
			</button>

			<ul className="navbar-nav ml-auto">

				{/*<!-- Notificaciones -->*/}
				<li className="nav-item dropdown no-arrow mx-1">
					<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
						<i className="fas fa-bell fa-fw"></i>
						{/*<!-- Contador de notificaciones -->*/}
						<span className="badge badge-danger badge-counter">3+</span>
					</a>
				</li>

				<div className="topbar-divider d-none d-sm-block"></div>

				{/*<!-- Información del usuario -->*/}
				<li className="nav-item dropdown no-arrow">
					<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
						<span className="mr-2 d-none d-lg-inline text-gray-600 small">Juventino Aguilar</span>
						<img className="img-profile rounded-circle" src={foto} alt="Juventino Aguilar" width="60"/>
					</a>
				</li>

			</ul>

		</nav>
    )
}
export default BarraSuperior;