import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect

} from 'react-router-dom';
import { login } from '../actions/auth';
import { startLoaderNotes } from '../actions/notes';
import { JournalScreen } from '../components/journal/JournalScreen';
import { auth } from '../firebase/firebase-config';
import {AuthRouter} from './AuthRouter'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const RouterApp = () => {

  const dispatch = useDispatch()

  const [ globalLoading, setGlobalLoading ] = useState(true);
  const [ isLogged, setIsLogged ] = useState( false )

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user?.uid){
        
        dispatch( login( user.uid, user.displayName ) )
        dispatch( startLoaderNotes(user.uid) )
        setIsLogged(true)
        setGlobalLoading(false)
      }else{
        setIsLogged(false)
        setGlobalLoading(false)
      } 
    })

    
  },[dispatch])

  if(globalLoading){
    return <p>Waiting...</p>
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute isAuthenticated={isLogged} path="/auth" component={AuthRouter} />
          <PrivateRoute isAuthenticated={isLogged} exact path="/" component={JournalScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
};
