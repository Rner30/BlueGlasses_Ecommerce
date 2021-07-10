import React from "react";

const Formcheckout = ({manejarCompra,setNombre,setTelefono,setEmail,nombre,telefono,email}) => {
	return (
		<div className="col-lg-8 mt-5">
			<div>
				<h3>Checkout</h3>

				<form onSubmit={manejarCompra}>
					<div>
						<label htmlFor="nombre" className="fs-4">
							Nombre y apellido
						</label>
						<input
							value={nombre}
							onChange={(e) => {
								setNombre(e.target.value);
							}}
							type="text"
							required
							className="form-control"
							placeholder="Nombre y Apellido"
						/>
					</div>
					<div>
						<label htmlFor="telefono" className="fs-4">
							Telefono
						</label>
						<input
							value={telefono}
							onChange={(e) => {
								setTelefono(e.target.value);
							}}
							type="text"
							required
							className="form-control"
							placeholder="1112345678"
						/>
					</div>
					<div>
						<label htmlFor="email" className="fs-4">
							Correo Electrónico:
						</label>
						<input
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type="email"
							required
							className="form-control"
							placeholder="email@email.com"
						/>
					</div>
					<div className="d-flex mt-4">
						<button type="submit" className="btn btn-success btn-lg ms-auto ">
							Finalizar compra
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Formcheckout;
