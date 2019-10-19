<template>
    <form
        class="todo__add"
        @submit.prevent="addTaskWithReset()"
    >
        <input
            v-model="newTask"
            type="text"
            class="todo__add-input"
            placeholder="Type something here..."
            required
        >
        <input
            type="submit"
            class="btn btn-primary btn-sm todo__add-btn"
            value="Add"
            :disabled="!newTask.length"
        >
    </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            newTask : '',
        };
    },
    methods : {
        ...mapActions( [
            'addTask',
        ] ),
        addTaskWithReset() {
            let taskText = this.newTask.toString();

            if ( taskText ) {
                this.addTask( taskText );
            }

            this.newTask = '';
        }
    },
};
</script>

<style lang="less">
.todo {
    &__add {
      width: 100%;
      display: flex;
      margin-top: 36px;

      @media (max-width: 768px){
        flex-direction: column;
      }
    }

    &__add-btn {
      border-radius: 4px;

      @media (max-width: 768px){
        margin-top: 12px;
      }
    }

    &__add-input {
      display: block;
      flex-grow: 1;
      padding: 6px 12px;
      margin-right: 6px;
      font-size: 15px;
      line-height: 1.5;
      color: #333;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 4px;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

      &:focus {
        outline: none;
      }

      @media (max-width: 768px){
        margin-right: 0;
      }
    }
}
</style>
