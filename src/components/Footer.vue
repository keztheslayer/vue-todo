<template>
    <footer class="todo__counters">
        <div class="todo__counter todo__counter_type_total">
            Total: {{ totalItems }}
        </div>
        <button
            class="btn btn-primary btn-sm todo__clean-button"
            @click="removeFinishedTasks"
        >
            Remove all finished tasks
        </button>
        <div class="todo__counter todo__counter_type_finished">
            Finished: {{ finishedTasks }}
        </div>
    </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed : {
        ...mapGetters( [
            'finishedTasks',
            'totalItems',
        ] ),
    },
    methods : {
        ...mapActions( [
            'removeFinishedTasks',
        ] ),
    },
};
</script>

<style lang="less">
.todo {
    &__counters {
      color: #333;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 768px){
        flex-direction: column;
      }
    }

    &__clean-button {
      @media (max-width: 768px){
        order: -1;
        flex-grow: 1;
        margin-bottom: 12px;
      }
    }
}

</style>
