export default {
    addTask( { commit }, payload ) {
        commit( 'addTask', payload );
    },
    checkItem( { commit }, payload ) {
        commit( 'checkItem', payload );
    },
    removeFinishedTasks( { commit }, payload ) {
        commit( 'removeFinishedTasks', payload );
    },
    editTask( { commit }, payload ) {
        commit( 'editTask', payload );
    },
    removeTask( { commit }, payload ) {
        commit( 'removeTask', payload );
    },
};
