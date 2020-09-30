import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Acta from './components/votaciones/Actas/Acta'
import PaginaPresidente from './components/votaciones/Candidatos/Presidentes/PaginaPresidente'
import PaginaAsambleista from './components/votaciones/Candidatos/Asambleistas/PaginaAsambleista'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/actas" component={Acta} />
          <Route exact path="/presidentes" component={PaginaPresidente} />
          <Route exact path="/asambleistas" component={PaginaAsambleista} /> 
      </Switch>
    </Router>
    
  );
}

export default App;
