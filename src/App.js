import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';

class App extends Component {
	state = {
		error: '',
		consulta: {},
		resultado: {}
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.consulta !== this.state.consulta) {
			this.consultarApi();
		}
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
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

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
				consulta: respuesta,
				error: false
			});
		}
	};

	render() {
		const { error } = this.state.error,
			{ cod } = this.state.resultado;

		let resultado;

		if (error) {
			resultado = <Error mensaje="The two fields are obligatory" />;
		} else if (cod === '404') {
			resultado = <Error mensaje="City not found" />;
		} else {
			resultado = <Clima resultado={this.state.resultado} />;
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
