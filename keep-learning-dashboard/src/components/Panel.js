import React from 'react';

class Panel extends React.Component{

    constructor(props) {
		super(props)
		this.state = {
            cantidad: 0,
		}
	}

    apiCall(url,consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e));
    }

    elegirUrl(){
        switch(this.props.entidad){
            case "productos":
            case "categorias":
                return "https://grupo-3-keeplearning.herokuapp.com/api/products";
            case "usuarios":
                return "https://grupo-3-keeplearning.herokuapp.com/api/users";
            default:
                return "";
        }
    }

    componentDidMount(){
        this.apiCall(this.elegirUrl(),this.mostrarCantidad);
    }

    //Como necesitare setState, es necesario usar una arrow function
    mostrarCantidad = (data) =>{
        switch(this.props.entidad){
            case "productos":
            case "usuarios":
                this.setState({cantidad:data.count});
                break;
            case "categorias":
                this.setState({cantidad: Object.keys(data.countByCategory).length});
                break;
            default:
                this.setState({cantidad: 0});
                break;
        }
    }

    render(){
        return(
            <div className="col-md-4 mb-4">
                <div className={`card border-left-${this.props.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${this.props.color} text-uppercase mb-1`}> {this.props.titulo}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.cantidad}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${this.props.icono} fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Panel;