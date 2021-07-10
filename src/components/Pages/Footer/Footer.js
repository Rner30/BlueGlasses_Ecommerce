import React from "react";
import { SiFirebase, SiReact, SiBootstrap } from "react-icons/si";
import styled from "styled-components";
import {
	AiOutlineInstagram,
	AiFillFacebook,
	AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
	return (
		<div>
			<footer className="text-center text-lg-start bg-light">
				<SectionFooter>
					<div className="container text-center text-md-start mt-5">
						<div className="row mt-3">
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4 mt-2">
									BlueGlasses
								</h6>
								<p>
									Fotos y titulos sacados de{" "}
									<a href="https://bluthanteojos.com/" target="blank">
										Bluth Anteojos
									</a>
								</p>
							</div>

							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto ">
								<h6 className="text-uppercase fw-bold mb-4 mt-2">
									Tecnologias usadas
								</h6>
								<p>
									<SiReact color="#61DBFB" /> React,Context,hooks
								</p>
								<p>
									<SiBootstrap color="purple" /> Bootstrap
								</p>
								<p>
									<SiFirebase color="orange" /> Firebase
								</p>
							</div>

							<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4 mt-2">
									Redes Sociales
								</h6>
								<p>
									<a href="#!" className="text-reset text-decoration-none">
										<AiOutlineInstagram /> Instagram
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset text-decoration-none">
										<AiFillFacebook /> Facebook
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset text-decoration-none">
										<AiFillLinkedin /> Linkedin
									</a>
								</p>
							</div>

							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								<h6 className="text-uppercase fw-bold mb-4 mt-2">Contacto</h6>
								<p>New York, NY 10012, US</p>
								<p>info@example.com</p>
								<p>+ 01 234 567 88</p>
							</div>
						</div>
					</div>
				</SectionFooter>

				<DivFooter className="text-center p-4 bg-grey">
					Pagina creada por Dario Aguirre
				</DivFooter>
			</footer>
		</div>
	);
};

export default Footer;
const SectionFooter = styled.section`
	background-color: rgba(0, 0, 0, 0.03);
`;
const DivFooter = styled.div`
	background-color: rgba(0, 0, 0, 0.1);
`;
