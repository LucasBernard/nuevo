import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './Componentes/Login';
import Principal from './Componentes/Principal';
import Registro from './Componentes/Registro';
import MenuLateral from "./Componentes/MenuLateral";
import Perfil from './Componentes/Perfil';
import BuscarGrupos from './Componentes/BuscarGrupos';
import Login from './Componentes/Login';
import CrearGrupos from './Componentes/CrearGrupo';
import MisGrupos from './Componentes/MisGrupos';
import Sala from './Componentes/Sala';
import AgregarUsuario from './Componentes/AgregarUsuario';
import TodosLosGrupos from './Componentes/TodosLosGrupos';

function App() {
	return (
		<Router>
			<Switch>
				<Route component={Login} path="/" exact>
					<Login />
				</Route>
				<Route component={Registro} path="/registro">
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
				<Route path="/BuscarGrupos">
					<MenuLateral />
					<BuscarGrupos />
				</Route>
				<Route path="/CrearGrupos">
					<MenuLateral />
					<CrearGrupos />
				</Route>
				<Route path="/MisGrupos">
					<MenuLateral />
					<MisGrupos/>
				</Route>
				<Route path="/Sala">
					<MenuLateral />
					<Sala/>
				</Route>
				<Route path="/AgregarUsuario">
					<MenuLateral />
					<AgregarUsuario/>
				</Route>
				<Route path="/TodosLosGrupos">
					<MenuLateral />
					<TodosLosGrupos/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
