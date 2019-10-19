export const addTask = ( { commit }, payload ) => {
    commit( 'addTask', payload );
};

export const checkItem = ( { commit }, payload ) => {
    commit( 'checkItem', payload );
};

export const removeFinishedTasks = ( { commit }, payload ) => {
    commit( 'removeFinishedTasks', payload );
};

export const editTask = ( { commit }, payload ) => {
    commit( 'editTask', payload );
};

export const removeTask = ( { commit }, payload ) => {
    commit( 'removeTask', payload );
};
