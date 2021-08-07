import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Pages/Hero/Hero";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
import Envios from "./components/Pages/Envios/Envios";
import Footer from "./components/Pages/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";
import CartProvider from "./context/context";
import Negros from "./components/categorias/Negros";
import Transparente from "./components/categorias/Transparente";
import Otros from "./components/categorias/Otros";
function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<Navbar />
				<Switch>

					<Route path="/" exact>
						<Hero />
						<ItemListContainer />
						<Footer/>
					</Route>

					<Route path="/productos">
						<ItemListContainer />
						<Footer/>
					</Route>
					<Route path="/ItemsDetailContainer/:id">
						<ItemDetailContainer />
						
					</Route>
					
						<Route path="/negros">
							<Negros/>
						</Route>
						
						<Route path="/transparentes">
							<Transparente/>
						</Route>
						<Route path="/otros">
							<Otros/>
						</Route>

					<Route path="/checkout">
						<Checkout/>
					</Route>
					<Route path="/Envios">
						<Envios />
					</Route>

					<Route path="/carrito">
						<Carrito />
					</Route>
				</Switch>
				
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
