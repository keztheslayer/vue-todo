export default {
    tasksList( state ) {
        return state.tasks;
    },
    title( state ) {
        return state.title;
    },
    totalItems( state, getters ) {
        return getters.tasksList.length;
    },
    finishedTasks( state, getters ) {
        return getters.tasksList.filter( item => item.isChecked ).length;
    },
};
