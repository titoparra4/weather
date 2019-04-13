import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {
	mostrarResultado = () => {
		const { name, weather, main } = this.props.resultado;
		if (!name || !weather || !main) return null;

		const kelvin = 273.15;

		const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

		const alt = `weather ${name}`;

		return (
			<div className="row">
				<div className="resultado col s12 m8 l6 offset-m2 offset-l3">
					<div className="card-panel light-blue align-center">
						<span className="white-text">
							<h2>Your weather for today: {name}</h2>
							<p className="temperatura">
								Now: {(main.temp - kelvin).toFixed(0)} &deg;C
								<img src={urlIcono} alt={alt} />
							</p>

							<p>Max. {(main.temp_max - kelvin).toFixed(0)} &deg;C</p>
							<p>Min. {(main.temp_min - kelvin).toFixed(0)} &deg;C</p>
							<p>Humidity. {main.humidity.toFixed(0)} %</p>
						</span>
					</div>
				</div>
			</div>
		);
	};

	render() {
		return <div className="container">{this.mostrarResultado()}</div>;
	}
}
Clima.propTypes = {
	resultado: PropTypes.object.isRequired
};

export default Clima;
