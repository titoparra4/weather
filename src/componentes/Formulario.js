import React, { Component } from 'react';

class Fomulario extends Component {
	render() {
		return (
			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<form>
							<div className="input-field col s12 m8 l4 offset-m2">
								<input id="ciudad" type="text" />
								<label for="ciudad">City:</label>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Fomulario;
