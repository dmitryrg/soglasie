<template lang="pug">
div
  div
    input(type="text" @input="search = $event.target.value")
    button(type="button" @click="findUsers") Найти
    p(v-show='users && users.length === 0') Не найдено
    table(v-show='users && users.length > 0')
      thead
        tr
          th
            span Имя
          th
            span Фамилия
          th
            span Эл. почта
          th
            span Аватар
      tbody
        tr(v-for='user of users' :key='user.id')
          td
            span  {{ user.firstName }}
          td
            span  {{ user.lastName }}
          td
            span  {{ user.email }}
          td
            img(:src='user.avatar')
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersTop',
  data: () => {
    return {
      users: null,
      search: ''
    }
  },
  methods: {
    findUsers() {
      const URL = 'http://localhost:3002/users'
      axios
        .post(URL, {search:this.search})
        .then(response => response.data)
        .then(users => (this.users = users))
    }
  }
}
</script>

<style scoped>
button {
  margin: 20px 5px;
}
img {
  width: 50px;
}
</style>
