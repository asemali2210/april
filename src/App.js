import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import { Route,Redirect } from 'react-router-dom';
import {auth, handleUserProfile} from './ulti';
function App(){
  const initstate = {
    currentUser: null
  }

  const [state, setState] = useState({
    ...initstate
  });

  useEffect(()=>{
    const authListener = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth);  
        userRef.onSnapshot(snapshot => {
          setState({
            currentUser:{
              id: snapshot,
              name: snapshot,
              ...snapshot.data()
            }
          })
        })  
      }
      setState({
        ...initstate
      })
    });
  }, [ ]);

  const {currentUser } = state;
  return (
      <div className="App">
        <Route exact path="/">
            <Home currentUser={currentUser}/>
          </Route>
        <Route  path="/login" render={()=>
        <Login   currentUser={currentUser} />
        } />
        <Route  path="/register" render={()=>
          currentUser? <Redirect to="/"/> :
          <Login   currentUser={currentUser}/>
        } />
        <Route   path="/about" component={About} />
      </div>
  );
}

export default App;
