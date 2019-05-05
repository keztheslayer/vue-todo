<template>
  <div class="container">
      <div class="row">
          <div class="col-lg-8 col-12 mx-auto">
            <div class="todo">
              <h1 class="todo__title">Todo-list on Vue.js</h1>
              <list-item v-for="(item, index) in list" :key="index" :isChecked="item.isChecked">
                <div class="todo__list-item-wrapper">
                  <label>
                    <input class="todo__checkbox" type="checkbox" v-model="item.isChecked">
                    <span class="todo__list-item-text">{{ item.text }}</span>
                  </label>
                  <button type="button" class="close todo__remove-btn" @click="remove(index)">
                    <span>&times;</span>
                  </button>
                </div>
                <hr v-if="index < list.length - 1">
              </list-item>
              <form class="todo__add" @submit.prevent="add">
                <input v-model="newItem" type="text" class="todo__add-input" placeholder="Type something here..." required>
                <input type="submit" class="todo__add-btn" value="Add" :disabled="!newItem.length">
              </form>
              <hr>
              <div class="todo__counters">
                <div class="todo__counter">Total: {{ total }}</div>
                <div class="todo__counter">Finished: {{ finished }}</div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import ListItem from './components/ListItem.vue'
export default {
  components: {
    ListItem: ListItem
  },
  data () {
    return {
      list: [
        {
          text: 'Finish this',
          isChecked: false
        },
        {
          text: 'Add something new',
          isChecked: false
        },
        {
          text: 'This task is already done!',
          isChecked: true
        }
      ],
      newItem: ''
    }
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
      }

      this.newItem = ''
    },
    remove (i) {
      this.list.splice(i, 1)
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
    }

    &__add-btn {
      font-size: 17px;
      line-height: 1.52947;
      font-weight: 400;
      letter-spacing: -.021em;
      font-family: "SF Pro Text","Myriad Set Pro",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","SF Pro Icons","Apple Legacy Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
      background: linear-gradient(#42a1ec, #0070c9);
      border-color: #ced4da;
      border-width: 1px;
      border-style: solid;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
      display: block;
      min-width: 30px;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 3px;
      padding-bottom: 4px;
      text-align: center;
      white-space: nowrap;

      &:active, &:focus {
        background: linear-gradient(#3d94d9, #0067b9);
        border-color: #006dbc;
        outline: none;
      }

      &:disabled {
        background: #00b05a;
        opacity: 0.4;
      }

      @media (max-width: 768px){
        margin-top: 12px;
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
    }
  }
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css";
</style>
