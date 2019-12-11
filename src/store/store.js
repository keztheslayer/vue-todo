import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use( Vuex );

const STORAGE_KEY     = 'todo-storage';
const LIST_IN_STORAGE = localStorage.getItem( STORAGE_KEY );
const exampleTasks    = [
    {
        text      : 'Add something',
        isChecked : false,
    },
    {
        text      : 'Remove this',
        isChecked : false,
    },
    {
        text      : 'This task is already finished',
        isChecked : true,
    },
];

export const store = new Vuex.Store( {
    state : {
        title : 'To-Do list made on Vue.js',
        tasks : LIST_IN_STORAGE ? JSON.parse( LIST_IN_STORAGE ) : exampleTasks,
    },
    getters,
    mutations,
    actions,
} );
