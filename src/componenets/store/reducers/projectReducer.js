const initState = {
    projects : [
        {id : '1', titile : 'hello i am kashif sheikh', content : 'etc etc etc'},
        {id : '1', titile : 'hello i am kashif sheikh', content : 'etc etc etc'},
        {id : '1', titile : 'hello i am kashif sheikh', content : 'etc etc etc'}
    ]
}

const projectReducer = (state = initState , action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project err', action.err);
            return state;
        default :
            return state    
    }
}

export default projectReducer;