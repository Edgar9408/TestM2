import React from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AppContext from './Context/Context';
import Home from './Components/home/index.jsx';
import Details from './Components/Details/index.jsx';
import Create from './Components/Create/Create';
import Header from './Components/Header/header';
import Update from './Components/Update/Update';

function App() {
  return (
    <AppContext>
      <div>
        <Route
          path='/'
          render={() => <Header />}
        />
        <Route
          exact path='/'
          render={() => <Home />}
        />
        <Route
          exact path='/:id'
          render={({ match }) => <Details id={match.params.id} />}
        />
        <Route
          path='/publications/create'
          render={() => <Create />}
        />
        <Route
          exact path='/publications/update/:id'
          render={({ match }) => <Update id={match.params.id} />}
        />
      </div>
      <ToastContainer autoClose={2500} />
    </AppContext>
  );
}

export default App;
