import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';

class App extends Component {
	state = {
		error: '',
		consulta: {},
		resultado: {}
	};

	componentDidUpdate() {
		this.consultarApi();
	}

	componentDidMount() {
		this.setState({
			error: false
		});
	}

	consultarApi = () => {
		const { ciudad, pais } = this.state.consulta;
		if (!ciudad || !pais) return null;

		const appId = '3e114dfec79e505e09d7c5ab1f4eeaa3';
		let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

		fetch(url)
			.then((respuesta) => {
				return respuesta.json();
			})
			.then((datos) => {
				this.setState({
					resultado: datos
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	datosConsulta = (respuesta) => {
		if (respuesta.ciudad === '' || respuesta.pais === '') {
			this.setState({
				error: true
			});
		} else {
			this.setState({
				consulta: respuesta
			});
		}
	};

	render() {
		const error = this.state.error;

		let resultado;

		if (error) {
			resultado = <Error mensaje="The two fields are obligatory" />;
		}

		return (
			<div className="app">
				<Header titulo="Weather React" />
				<Formulario datosConsulta={this.datosConsulta} />
				{resultado}
			</div>
		);
	}
}

export default App;
