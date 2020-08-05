import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux' //help us to combine our reducers
import{ firestoreReducer } from 'redux-firestore' //syncing /fetching data from firestore
import { firebaseReducer} from 'react-redux-firebase'
//combining the reducers
const rootReducer = combineReducers({
    auth: authReducer, //this reducer will work and update for authencation property
    project:projectReducer, //this reducer will work and update for project creation property in the state
    firestore:firestoreReducer,
    firebase:firebaseReducer
});

export default  rootReducer //we will export this to index.js which is our main reducer/redux data store