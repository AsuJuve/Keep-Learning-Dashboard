import React from "react";

class UltimoUsuarioAgregado extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            usuario: {}
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let u = data.users.at(-1).detail
                fetch(u)
                    .then(response => response.json())
                    .then(data => consecuencia(data))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }

    componentDidMount (){
        this.apiCall("https://grupo-3-keeplearning.herokuapp.com/api/users",this.mostrarUsuario);
    }

    mostrarUsuario = (data) =>{
        this.setState({usuario : data})
    }

    render(){
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último usuario agregado</h5>
                    </div>
                    <div className="card-body">
                        <h6 className="m-0 font-weight-bold text-gray-700">{this.state.usuario.firstName} {this.state.usuario.lastName}</h6>
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={this.state.usuario.profileImage} alt="Curso" />
                        </div>
                        <h7 className="m-0 font-weight-bold text-gray-700">Correo Electrónico: </h7>
                        <h7 className="m-0 font-weight-bold text-gray-600">{this.state.usuario.email}</h7><br/>
                    </div>
                </div>
            </div> 
        )
    }
}

export default UltimoUsuarioAgregado;