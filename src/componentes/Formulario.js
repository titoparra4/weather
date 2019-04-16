import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Fomulario extends Component {
	ciudadRef = React.createRef();
	paisRef = React.createRef();

	buscarClima = (e) => {
		e.preventDefault();

		const respuesta = {
			ciudad: this.ciudadRef.current.value,
			pais: this.paisRef.current.value
		};
		//console.log(respuesta);

		this.props.datosConsulta(respuesta);
	};

	render() {
		return (
			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<form onSubmit={this.buscarClima}>
							<div className="input-field col s12 m8 l4 offset-m2">
								<input id="ciudad" ref={this.ciudadRef} type="text" />
								<label htmlFor="ciudad">City:</label>
							</div>
							<div className="input-field col s12 m8 l4 offset-m2">
								<select ref={this.paisRef}>
									<option value="" defaultValue>
										Select a country
									</option>
									<option value="PL">Poland</option>
									<option value="CO">Colombia</option>
									<option value="US">USA</option>
									<option value="CN">China</option>
									<option value="JP">Japan</option>
									<option value="IT">Italy</option>
									<option value="GB">England</option>
									<option value="FR">France</option>
									<option value="DE">Germany</option>
									<option value="CH">Switzerland</option>
									<option value="IE">Ireland</option>
								</select>
								<label htmlFor="pais">Country:</label>
							</div>
							<div className="input-field col s12 m8 l4 offset-2 buscador">
								<input
									type="submit"
									className="waves-effect waves-light btn-large yellow accent-4"
									value="Search....."
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
Fomulario.propTypes = {
	datosConsulta: PropTypes.func.isRequired
};

export default Fomulario;
