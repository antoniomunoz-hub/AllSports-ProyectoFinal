import './App.css'; 
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import EditPerfil from "./Pages/EditPerfil";
import "./StylesPages/ComunPages.css";
import "./Components/Footer";
import Footer from './Components/Footer';



export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route path="/home" component={Home}/> 
          <Route path="/perfil" component={Perfil}/>
          <Route exact path="/" component={Login}/>
          <Route path="/create-account" component={CreateAccount}/>
          <Route path="/editperfil" component={EditPerfil}/>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}
