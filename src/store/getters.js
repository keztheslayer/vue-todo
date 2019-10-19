export const tasksList = ( state ) => {
    return state.tasks;
};

export const title = ( state ) => {
    return state.title;
};

export const totalItems = ( state, getters ) => {
    return getters.tasksList.length;
};

export const finishedTasks = ( state, getters ) => {
    let done = 0;

    getters.tasksList.forEach( ( item ) => {
        if ( item.isChecked ) {
            done++;
        }
    } );

    return done;
};
