export const addTask = ( state, text ) => {
    state.tasks.push( {
        text      : text,
        isChecked : false,
    } );
};

export const checkItem = ( state, index ) => {
    state.tasks[ index ].isChecked = !state.tasks[ index ].isChecked;
};

export const removeFinishedTasks = ( state, item ) => {
    state.tasks = state.tasks.filter( ( item ) => {
        return !item.isChecked;
    } );
};

export const editTask = ( state, index ) => {
    let itemText = state.tasks[ index ].text;

    state.tasks[ index ].text = window.prompt( 'Edit task', itemText ) || itemText;
};

export const removeTask = ( state, index ) => {
    state.tasks.splice( index, 1 );
};
