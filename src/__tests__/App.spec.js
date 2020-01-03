import App from '../App.vue';
import Item from '../components/Item.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import { testTasks, STORAGE_KEY } from '../utils';

const localVue = createLocalVue();

localVue.use( Vuex );

describe( 'App.vue', () => {
    let getters;

    let store;

    let state;

    beforeEach( () => {
        state = {
            tasks : testTasks,
            title : 'Example app title',
        };

        getters = {
            tasksList() {
                return state.tasks;
            },
            title() {
                return state.title;
            },
            totalItems() {
                return state.tasks.length;
            },
            finishedTasks() {
                return state.tasks.filter( item => item.isChecked ).length;
            },
        };

        store = new Vuex.Store( {
            state,
            getters,
        } );
    } );

    describe( 'Correct visual rendering', () => {
        it( 'Displays one Item for 1 task in store', () => {
            const wrapper = shallowMount(
                App,
                {
                    store,
                    localVue,
                }
            );

            expect( wrapper.findAll( Item ) ).toHaveLength( getters.totalItems() );
        } );

        it( 'Renders correct markup', () => {
            const wrapper = shallowMount(
                App,
                {
                    store,
                    localVue,
                }
            );

            expect( wrapper.element ).toMatchSnapshot();
        } );
    } );

    describe( 'works with localStorage', () => {
        it( 'saveToLocal() method saves tasks list to localStorage', () => {
            const wrapper = shallowMount(
                App,
                {
                    store,
                    localVue,
                }
            );

            wrapper.vm.saveToLocal();

            const LOCAL_LIST = JSON.parse( localStorage.getItem( STORAGE_KEY ) );

            expect( LOCAL_LIST ).toEqual( getters.tasksList() );
        } );

        it( 'calls saveToLocal after an app-update hook', async () => {
            const saveToLocal = jest.fn();
            const wrapper = shallowMount(
                App,
                {
                    store,
                    localVue,
                    methods : {
                        saveToLocal,
                    },
                }
            );

            wrapper.vm.$forceUpdate();

            await Vue.nextTick();

            expect( saveToLocal ).toHaveBeenCalled();
        } );
    } );
} );
