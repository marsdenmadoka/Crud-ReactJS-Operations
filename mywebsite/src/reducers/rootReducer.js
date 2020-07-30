const initState={
posts:[
{id:'1',title:'madoka book',body:'hey there am fetched from the reducer'},
{id:'2',title:'the Storm of comfort',body:'hello all there am also fetched from the reducer'},
{id:'3',title:'The sunk ship',body:'were are also  there from the reducer'}
]
}

const rootReducer = (state=initState, action) =>{
    return state;
    
}

export default rootReducer //will export this to index.js
