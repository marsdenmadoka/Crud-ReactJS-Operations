//taking the action
const initState={
    projects:[
        {id:'1',title:'help me find preach',content:'blan qqqqblan blan'},
        {id:'2',title:'find preach',content:'blan blan qqqblan'},
        {id:'3',title:'me preach',content:'blan blan hhhhblan'},
    ]
}

const projectReducer = (state=initState,action) => {
switch(action.type){
    case 'CREATE_PROJECT':
        console.log('created project', action.project)
        return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error'+action.err)
            return state;
            default:
                return state;
}
}

export default projectReducer