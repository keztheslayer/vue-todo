<template>
    <footer class="todo__counters">
        <div class="todo__counter">
            Total: {{ total }}
        </div>
        <button
            class="btn btn-primary btn-sm todo__clean-btn"
            @click="emitCleanEvent"
        >
            Remove all finished tasks
        </button>
        <div class="todo__counter">
            Finished: {{ finished }}
        </div>
    </footer>
</template>

<script>
export default {
    props : {
        total : {
            type    : Number,
            default : 0,
        },
        finished : {
            type    : Number,
            default : 0,
        },
    },
    methods : {
        emitCleanEvent() {
            this.$emit('listCleaned');
        },
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

    &__clean-btn {
      @media (max-width: 768px){
        order: -1;
        flex-grow: 1;
        margin-bottom: 12px;
      }
    }
}

</style>
