import Form from '../components/Form.vue';
import { mount } from '@vue/test-utils';
import Vue from 'vue';

describe( 'Form.vue', () => {
    it( 'renders correct markup', () => {
        const wrapper = mount( Form );

        expect( wrapper.element ).toMatchSnapshot();
    } );

    describe( 'Disabling add-button', () => {

        describe( 'Syncs data.newTask with input (v-model)', () => {

            it( 'Makes data.newTask equal to input value', async () => {
                const wrapper = mount( Form );
                const input = wrapper.find('.todo__add-input');

                beforeEach( () => {
                    wrapper.setData(
                        {
                            newTask : '',
                        }
                    );
                } );

                input.setValue('Some input value');

                await Vue.nextTick();

                expect( wrapper.vm.$data.newTask ).toBe('Some input value');

            } );

            it( 'Makes input value equal to data.newTask', async () => {
                const wrapper = mount( Form );
                const input = wrapper.find('.todo__add-input');

                wrapper.setData(
                    {
                        newTask : 'Some task in data',
                    }
                );

                await Vue.nextTick();

                expect( input.element.value ).toBe('Some task in data');

            } );
        } );


        describe( 'Button disabling depends on input value', () => {

            it( 'Removes button disabled-attribute on input', async () => {
                const wrapper = mount( Form );
                const input = wrapper.find('.todo__add-input');
                const button = wrapper.find('.todo__add-button');

                input.setValue('test');

                await Vue.nextTick();

                expect( button.html() ).not.toContain('disabled');

            } );

            it( 'Disabled button on input', async () => {
                const wrapper = mount( Form );
                const input = wrapper.find('.todo__add-input');
                const button = wrapper.find('.todo__add-button');

                input.setValue('');

                await Vue.nextTick();

                expect( button.html() ).toContain('disabled');

            } );

        } );

        describe( 'Button disabling depends on newTask data-key', () => {

            it( 'Enables add-button if newTask is set', async () => {
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

            it( 'Disables add-button if newTask is empty', async () => {
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
    } );
} );
