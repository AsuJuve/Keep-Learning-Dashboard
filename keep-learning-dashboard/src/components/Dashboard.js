import React from 'react';
import ApartadoInicial from './ApartadoInicial';
/*import Movie from './Movie';
import Footer from './Footer';*/
function Dashboard(){
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Contenido principal -->*/}
                <div id="content">
                    <ApartadoInicial />
                    <Movie />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;