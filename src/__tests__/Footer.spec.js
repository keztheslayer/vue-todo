import Footer from '../components/Footer.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use( Vuex );

describe( 'Footer.vue', () => {
    let getters;

    let store;

    let actions;

    beforeEach( () => {
        actions = {
            removeFinishedTasks : jest.fn(),
        };

        getters = {
            totalItems    : () => 3,
            finishedTasks : () => 1,
        };

        store = new Vuex.Store( {
            getters,
            actions,
        } );
    } );

    it( 'renders correct markup', () => {
        const wrapper = mount(
            Footer,
            {
                store,
                localVue,
            }
        );

        const total    = wrapper.find('.todo__counter_type_total');
        const finished = wrapper.find('.todo__counter_type_finished');

        expect( total.text() ).toEqual( expect.stringContaining( getters.totalItems().toString() ) );

        expect( finished.text() ).toEqual( expect.stringContaining( getters.finishedTasks().toString() ) );


        expect( wrapper.element ).toMatchSnapshot();
    } );

    it( 'dispatches "removeFinishedTasks" when clicking on clean-btn', () => {
        const wrapper = mount(
            Footer,
            {
                store,
                localVue,
            }, );
        const cleanButton = wrapper.find('.todo__clean-button');

        cleanButton.trigger('click');
        expect( actions.removeFinishedTasks ).toHaveBeenCalled();
    } );
} );
