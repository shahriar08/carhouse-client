import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Order from "./components/Dashboard/Order/Order";
import CarCollections from "./components/Home/CarCollections/CarCollections";
import Home from "./components/Home/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PurchaseCar from "./components/PurchaseCar/PurchaseCar";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Layout>
                <Login />
              </Layout>
            </Route>
            <Route path="/register">
              <layout>
                <Register />
              </layout>
            </Route>
            <Route path="/car-collection">
              <Layout>
                <CarCollections />
              </Layout>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <PrivateRoute path="/product/:carId">
              <Layout>
                <PurchaseCar />
              </Layout>
            </PrivateRoute>

            <PrivateRoute path="/dashboard/orders">
              <Order></Order>
            </PrivateRoute>

            <Route path="*">
              <Layout>
                <NotFound />
              </Layout>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
