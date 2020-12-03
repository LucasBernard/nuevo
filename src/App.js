import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Inicio from './Componentes/Inicio';
import 'semantic-ui-css/semantic.min.css';
import Principal from './Componentes/Principal';
import Registro from './Componentes/Registro';

function App() {
	return (
		<Router>
			<div className="Inicial">
				<Switch>
					<Route path="/" exact>
						<Inicio />
					</Route>
					<Route path="/Registro">
						<Registro />
					</Route>
				</Switch>
			</div>
			<Switch>
				<Route path="/Principal">
					<Principal />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
