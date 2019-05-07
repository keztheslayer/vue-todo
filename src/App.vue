<template>
  <div class="container">
      <div class="row">
          <div class="col-lg-8 col-12 mx-auto">
            <div class="todo">
              <h1 class="todo__title">Todo-list on Vue.js</h1>
              <div v-for="(item, index) in list" :key="index" :isChecked="item.isChecked">
                <div class="todo__list-item" :class="item.isChecked ? 'todo__list-item_state_finished' : ''">
                  <div class="todo__list-item-wrapper">
                    <label class="todo__label">
                      <input class="todo__checkbox" type="checkbox" v-model="item.isChecked">
                      <span class="todo__list-item-text">{{ item.text }}</span>
                    </label>
                    <button type="button" class="close todo__remove-btn" @click="remove(index)">
                      <span>&times;</span>
                    </button>
                  </div>
                  <hr v-if="index < list.length - 1">
                </div>
              </div>
              <form class="todo__add" @submit.prevent="add">
                <input v-model="newItem" type="text" class="todo__add-input" placeholder="Type something here..." required>
                <input type="submit" class="btn btn-primary btn-sm todo__add-btn" value="Add" :disabled="!newItem.length">
              </form>
              <hr>
              <div class="todo__counters">
                <div class="todo__counter">Total: {{ total }}</div>
                <button class="btn btn-primary btn-sm todo__clean-btn" @click="clean">Remove all finished tasks</button>
                <div class="todo__counter">Finished: {{ finished }}</div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
const STORAGE_KEY = 'todo-storage'

export default {
  data () {
    return {
      list: [
        {
          text: 'Add something',
          isChecked: false
        },
        {
          text: 'Remove this',
          isChecked: false
        },
        {
          text: 'This task is already finished',
          isChecked: true
        }
      ],
      newItem: ''
    }
  },
  created () {
    this.list = JSON.parse(localStorage.getItem(STORAGE_KEY) || this.list)
  },
  computed: {
    total () {
      return this.list.length
    },
    finished () {
      let done = 0

      this.list.forEach((item) => {
        if (item.isChecked) {
          done++
        }
      })

      return done
    }
  },
  methods: {
    add () {
      let item = this.newItem

      if (item) {
        this.list.push({
          text: item,
          isChecked: false
        })
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.list))
      }

      this.newItem = ''
    },
    remove (i) {
      this.list.splice(i, 1)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.list))
    },
    clean () {
      this.list = this.list.filter((item) => {
        return !item.isChecked
      })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.list))
    },
    saveToLocal () {
      localStorage.setItem('list', this.list)
    }
  }
}
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

    &__remove-btn {
      display: block;
      padding-left: 6px;

      &:focus {
        outline: none;
      }
    }

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

  &__label {
    cursor: pointer;
    color: #333;
    font-size: 18px;
    margin: 0;
    display: block;
    flex-grow: 1;
  }
  &__list-item {
    position: relative;
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__list-item-text {
    transition: .15s ease-in;
  }

  &__list-item-wrapper {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  &__checkbox + &__list-item-text:hover:before {
    color: #fe4365;
  }
  &__checkbox {
    display: none;
  }
  &__checkbox + &__list-item-text:before {
    content: "";
    color: #dddfe6;
    font-family: "fontAwesome";
    line-height: 1;
    width: 1em;
    display: inline-block;
    margin-right: 8px;
  }
  &__checkbox:checked + &__list-item-text:before {
    content: "";
    color: #fe4365;
    animation: tick 150ms ease-in;
  }
  &__checkbox:checked + &__list-item-text {
    color: #7e7e7e;
  }
  &__checkbox:disabled + &__list-item-text:before {
    content: "";
    color: #dddfe6;
  }
  }

  @keyframes tick {
    0% {
      transform: scale(0);
    }
    90% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css";
</style>
