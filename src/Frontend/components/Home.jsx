import React, { Component } from "react";
import NavMenu from './Nabvar'
import Inicio from '../pages/Inicio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SobreNosotros from '../pages/SobreNosotros';
import Ministerios from '../pages/Ministerios';
import Donaciones from '../pages/Donaciones';
import Contacto from '../pages/Contacto';
import Slider from "./Slider"


export default class Homepage extends Component {
  render() {
    return (
      <div>
        
       <Router>
      <NavMenu />

        <Switch>
        {/*   <Route path='/' exact component={Inicio} /> */}
          <Route path='/sobre-nosotros' component={SobreNosotros} />
      {/*     <Route path='/ministerios' component={Ministerios} />
          <Route path='/donaciones' component={Donaciones} /> */}
          <Route path='/contacto' component={Contacto} />

        </Switch>
      </Router>



        <Slider/>
        
      </div>
    );
  }
}
