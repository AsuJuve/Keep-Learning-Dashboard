import React from 'react';
import ApartadoInicial from './ApartadoInicial';
import Productos from './Productos';
import Categorias from './Categorias';
import BarraSuperior from './BarraSuperior';
import Footer from './Footer';
import NoEncontrada from './NoEncontrada';
import {Route, Switch} from 'react-router-dom';

function Dashboard(){
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Contenido principal -->*/}
            <div id="content">

                <BarraSuperior/>
                
                <Switch>
                    <Route exact path="/" component={ApartadoInicial}/>
                    <Route exact path="/productos" component={Productos}/>
                    <Route exact path="/categorias" component={Categorias}/>
                    <Route component={NoEncontrada}/>
                </Switch>

                <Footer/>

            </div>
        </div>    
    )
}
export default Dashboard;