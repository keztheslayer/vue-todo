import Item from '../components/Item.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();

const checkedTaskWithDivider = {
    isChecked   : true,
    text        : 'Checked task',
    hideDivider : false,
};

const uncheckedTaskWithoutDivider = {
    isChecked   : false,
    text        : 'Unchecked task',
    hideDivider : true,
};

localVue.use( Vuex );

describe( 'Item.vue', () => {
    it( 'is a Vue instance', () => {
        const wrapper = mount( Item );

        wrapper.vm.$forceUpdate();

        expect( wrapper.isVueInstance() ).toBeTruthy();
    } );

    it( 'renders unchecked task with divider', () => {
        const wrapper = mount( Item, {
            propsData : checkedTaskWithDivider,
        } );

        expect( wrapper.element ).toMatchSnapshot();
    } );

    it( 'renders unchecked task without divider', () => {
        const wrapper = mount( Item, {
            propsData : uncheckedTaskWithoutDivider,
        } );

        expect( wrapper.element ).toMatchSnapshot();
    } );
} );

describe( 'Item\'s Vuex actions', () => {
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
