import { Switch, Route } from 'react-router-dom'
import React, { Component } from "react";
import NavMenu from "./nabVar";
import Inicio from "../pages/inicio";
import SobreNosotros from "../pages/sobreNosotros";
import Ministerios from "../pages/ministerios";
import Donaciones from "../pages/donaciones";
import Contacto from "../pages/contacto";


export default class Homepage extends Component {
  render() {
    return (
      <>
        <NavMenu />
        <Switch>
          <Route exact path="/"  component={Inicio} />
          <Route exact path="/sobre-nosotros" component={SobreNosotros} />
          <Route exact path="/ministerios" component={Ministerios} />
          <Route exact path="/donaciones" component={Donaciones} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
       
      </>
    );
  }
}
