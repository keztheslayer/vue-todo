<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-12 mx-auto">
                <div class="todo">
                    <h1 class="todo__title">
                        {{ title }}
                    </h1>
                    <transition-group
                        name="slide"
                        tag="div"
                        mode="in-out"
                    >
                        <app-item
                            v-for="(item, index) in tasksList"
                            :key="`item ${index}`"
                            :index="index"
                            :text="item.text"
                            :is-checked="item.isChecked"
                            :hide-divider="index < tasksList.length - 1"
                        />
                    </transition-group>
                    <app-form />
                    <hr>
                    <app-footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppFooter from './components/Footer.vue';
import AppForm from './components/Form.vue';
import AppItem from './components/Item.vue';
import { mapGetters } from 'vuex';

const STORAGE_KEY = 'todo-storage';

export default {
    components : {
        AppFooter,
        AppForm,
        AppItem,
    },
    computed : {
        ...mapGetters( [
            'tasksList',
            'title',
            'finishedTasks',
        ] ),
    },
    updated() {
        this.saveToLocal();
    },
    methods : {
        saveToLocal() {
            localStorage.setItem( STORAGE_KEY, JSON.stringify( this.tasksList ) );
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

    .slide-enter-active, .slide-leave-active {
        transition: all 0.3s;
    }

    .slide-enter {
        opacity: 0;
        transform: translateY(30px);
    }

    .slide-leave-to {
        opacity: 0;
    }

    .slide-move {
        transition: 0.3s;
    }

    @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css";
</style>
