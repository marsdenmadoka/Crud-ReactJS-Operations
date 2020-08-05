//making the actions send them to reducers to take and use the actons
export const createProject=(project)=>{
    return (dispatch,getState,{ getFirebase,getFirestore })=>{ // the dispatch is want dispatches the action to the reducer the getState is what we use to change our state     when we use thunk we can return a function
       //make async call to database
       const firestore = getFirestore();
       firestore.collection('projects').add({ //projects our firestore collection
       ...project, //title and content
     authorFirstName:"marsden",
     authorSecondName:"madoka",
     authorId:1234,
     createdAt:new Date()
       }).then(() => {
        dispatch({type:'CREATE_PROJECT',project});
       }).catch((err) => {
    dispatch({type:"CREATE_PROJECT_ERROR",err});
       })
    }
};


