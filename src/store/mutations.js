export default {
    addTask( state, text ) {
        state.tasks.push( {
            text      : text,
            isChecked : false,
        } );
    },
    checkItem( state, index ) {
        state.tasks[ index ].isChecked = !state.tasks[ index ].isChecked;
    },
    removeFinishedTasks( state, item ) {
        state.tasks = state.tasks.filter( ( item ) => {
            return !item.isChecked;
        } );
    },
    editTask( state, index ) {
        let itemText = state.tasks[ index ].text;

        state.tasks[ index ].text = window.prompt( 'Edit task', itemText ) || itemText;
    },
    removeTask( state, index ) {
        state.tasks.splice( index, 1 );
    },
};
