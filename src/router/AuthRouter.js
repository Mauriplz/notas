import React  from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from "../components/auth/login/LoginScreen";
import { RegisterScreen } from "../components/auth/register/RegisterScreen";

export const AuthRouter = () =>{
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route exact path="/auth/register" component={RegisterScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
      </div>
    ) 
}