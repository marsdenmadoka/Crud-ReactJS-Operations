import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//creating our redux(central data store)
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux' //help us to bind redux with our reactApp
import thunk from 'redux-thunk'//middle ware for dispathicng action
import {reduxFirestore,getFirestore } from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
const store=createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), 
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsready:true})
  )
  ); 

  // store.firebaseAuthIsReady.then(() => {
   
  // })

  ReactDOM.render(<Provider store={store}><App /></Provider> ,document.getElementById('root')); // this <Provider store={store}><App /></Provider> binds our redux to reactApp
  serviceWorker.unregister();
  

  // https://reactfirebaseapp-ae65a.web.app