import Form from '../components/Form.vue';
import { mount } from '@vue/test-utils';
import Vue from 'vue';

describe( 'Form.vue', () => {
    it( 'renders correct markup', () => {
        const wrapper = mount( Form );

        expect( wrapper.element ).toMatchSnapshot();
    } );

    it( 'syncs data with input', async () => {
        const wrapper = mount( Form );
        const input = wrapper.find('.todo__add-input');

        beforeEach( () => {
            wrapper.setData(
                {
                    newTask : '',
                }
            );
        } );

        input.setValue('test');

        await Vue.nextTick();

        expect( wrapper.vm.$data.newTask ).toBe('test');

    } );

    it( 'enables add-button if newTask is set', async () => {
        const wrapper = mount( Form );
        const button = wrapper.find('.todo__add-button');

        beforeEach( () => {
            wrapper.vm.$data.newTask = '';
        } );

        wrapper.setData(
            {
                newTask : 'example',
            }
        );

        await Vue.nextTick();

        expect( button.html() ).not.toContain('disabled');

    } );

    it( 'disables add-button if newTask is empty', async () => {
        const wrapper = mount( Form );
        const button = wrapper.find('.todo__add-button');

        beforeEach( () => {
            wrapper.vm.$data.newTask = 'a random task name';
        } );

        wrapper.setData(
            {
                newTask : '',
            }
        );

        await Vue.nextTick();

        expect( button.html() ).toContain('disabled');
    } );
} );
