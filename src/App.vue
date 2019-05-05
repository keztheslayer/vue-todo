<template>
  <div class="container">
      <div class="row">
          <div class="col-8 mx-auto">
            <div class="todo">
              <h1 class="todo__title">The awesome to-do list on Vue.js</h1>
              <list-item v-for="(item, index) in list" :key="index" :isChecked="item.isChecked">
                <label>
                  <input class="todo__checkbox" type="checkbox" v-model="item.isChecked">
                  <span class="todo__list-item">{{ item.text }}</span>
                </label>
              </list-item>
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
          text: 'Random finished task',
          isChecked: true
        }
      ]
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
    }
  }
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css";
</style>
