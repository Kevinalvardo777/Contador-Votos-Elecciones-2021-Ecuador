import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Acta from './components/votaciones/Acta'
import Presidentes from './components/votaciones/Presidentes'
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/actas" component={Acta} />
          <Route exact path="/presidentes" component={Presidentes} /> 
      </Switch>
    </Router>
    
  );
}

export default App;
