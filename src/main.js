// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  showStatus: false,
  mytodo: '',
  data: {
    todoList:
    [
      {text: '吃饭', done: false},
      {text: '睡觉', done: false},
      {text: '打豆豆', done: false}
    ]
  },
  computed: {
    remain () {
      return this.todoList.filter(v => !v.done).length
    }
  },
  methods: {
    handleClick () {
      this.todoList.push({text: this.mytodo, done: false})
      this.mytodo = ''
    },
    toggle (i) {
      this.todoList[i].done = !this.todoList[i].done
    },
    clean () {
      this.todoList = this.todoList.filter(v => !v.done)
    }
  }
})
