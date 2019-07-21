<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-12 mx-auto">
                <div class="todo">
                    <h1 class="todo__title">
                        {{ title }}
                    </h1>
                    <app-item
                        v-for="(item, index) in list"
                        :key="index"
                        :index="index"
                        :text="item.text"
                        :is-checked="item.isChecked"
                        :hide-divider="index < list.length - 1"
                        @itemRemoved="remove"
                        @itemChecked="check"
                        @itemTextChanged="edit"
                    />
                    <app-form
                        @itemAdded="add"
                    />
                    <hr>
                    <app-footer
                        :total="total"
                        :finished="finished"
                        @listCleaned="clean"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppFooter from './components/Footer.vue';
import AppForm from './components/Form.vue';
import AppItem from './components/Item.vue';

const STORAGE_KEY = 'todo-storage';
const LIST_IN_STORAGE = localStorage.getItem( STORAGE_KEY );

export default {
    components : {
        AppFooter,
        AppForm,
        AppItem,
    },
    data() {
        return {
            title : 'To-Do list made on Vue.js',
            list  : [
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
            ],
        };
    },
    computed : {
        total() {
            return this.list.length;
        },
        finished() {
            let done = 0;

            this.list.forEach( ( item ) => {
                if ( item.isChecked ) {
                    done++;
                }
            } );

            return done;
        },
    },
    created() {
        this.list = LIST_IN_STORAGE ? JSON.parse( LIST_IN_STORAGE ) : this.list;
    },
    updated() {
        this.saveToLocal();
    },
    methods : {
        add( item ) {
            this.list.push( {
                text      : item,
                isChecked : false,
            } );
        },
        check( i ) {
            let item = this.list[ i ];

            item.isChecked = !item.isChecked;
        },
        clean() {
            this.list = this.list.filter( ( item ) => {
                return !item.isChecked;
            } );
        },
        edit( newText, i ) {
            let item = this.list[ i ];

            item.text = newText;
        },
        remove( i ) {
            this.list.splice( i, 1 );
        },
        saveToLocal() {
            localStorage.setItem( STORAGE_KEY, JSON.stringify( this.list ) );
        },
    },
};
</script>

<style lang="less">
    body {
        background-image: linear-gradient( 135deg, #FFD26F 10%, #3677FF 100%);
        min-height: 100vh;
    }
    .todo {
        background: #fff;
        box-shadow: 0px 3px 3px rgba(17, 56, 86, 0.05);
        margin-top: 24px;
        border: 1px solid #eee;
        padding: 24px;
        border-radius: 10px;

        &__title {
            font-size: 36px;
            color: #333;
            margin-bottom: 24px;

            @media (max-width: 768px){
                font-size: 26px;
            }
        }
    }
    @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css";
</style>
