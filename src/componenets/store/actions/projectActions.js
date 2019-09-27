export const createProject = (project) => {
    return (dispatach, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : 'pro',
            authorLastName : 'player',
            authorid : 12345,
            createdAt : new Date()
        }).then(() => {
            dispatach({type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatach({type: 'CREATE_PROJECT_ERROR', err });
        })
    }
};