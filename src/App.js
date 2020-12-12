import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './Componentes/Login';
import 'semantic-ui-css/semantic.min.css';
import Principal from './Componentes/Principal';
import Registro from './Componentes/Registro';

function App() {
	return (
		<Router>
			<div>
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
						<Principal />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
