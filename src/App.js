import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './Componentes/Login';
import Principal from './Componentes/Principal';
import Registro from './Componentes/Registro';
import MenuLateral from "./Componentes/MenuLateral";
import Perfil from './Componentes/Perfil';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<LoginForm />
				</Route>
				<Route path="/Registro">
					<Registro />
				</Route>
			</Switch>
			<Switch>
				<Route path="/Principal">
					<MenuLateral />
					<Principal />
				</Route>
				<Route path="/Perfil">
					<MenuLateral />
					<Perfil />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
