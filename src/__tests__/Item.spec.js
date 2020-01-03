import Item from '../components/Item.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use( Vuex );

describe( 'Item.vue', () => {

    describe( 'Divider visibility after each task', () => {
        it( 'A divider is shown if the task is last', () => {
            const wrapper = mount( Item, {
                propsData : {
                    hideDivider : true,
                },
            } );

            expect( wrapper.html() ).toContain('<hr>');
        } );

        it( 'A divider is hidden if the task is not last', () => {
            const wrapper = mount( Item, {
                propsData : {
                    hideDivider : false,
                },
            } );

            expect( wrapper.html() ).not.toContain('<hr>');
        } );
    } );

    describe( 'Vuex actions dispatching', () => {
        let actions;

        let store;

        beforeEach( () => {
            actions = {
                removeTask : jest.fn(),
                editTask   : jest.fn(),
            };
            store = new Vuex.Store( {
                actions,
            } );
        } );

        it( 'dispatches "removeTask" when clicking on remove-btn', () => {
            const wrapper = mount(
                Item,
                {
                    store,
                    localVue,
                }, );
            const removeButton = wrapper.find('.todo__remove-button');

            removeButton.trigger('click');
            expect( actions.removeTask ).toHaveBeenCalled();
        } );

        it( 'dispatches "editTask" when clicking on edit-button', () => {
            const wrapper = mount(
                Item,
                {
                    store,
                    localVue,
                }, );
            const editButton = wrapper.find('.todo__edit-button');

            editButton.trigger('click');
            expect( actions.editTask ).toHaveBeenCalled();
        } );
    } );

} );
