<template>
  <section>
    <header>
      <h3>{{name}}</h3>
    </header>
    <task-list
      :listId="listId"
      :tasks="taskList"
    ></task-list>
  </section>
</template>

<script>
import TaskList from './TaskList'

export default {
  name: 'column',
  components: {
    TaskList
  },
  props: {
    listId: String,
    name: String
  },
  data () {
    return {
      taskList: [
        { id: '1', title: 'Aprender Vue', completed: false },
        { id: '2', title: 'Aprender Vuex', completed: false }
      ]
    }
  }
}
</script>

<style scoped>
  section {
    box-sizing: border-box;
    background: #eceff1;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49, 49, 93, .03),
      0 2px 5px 0 rgba(49, 49, 93, .1),
      0 1px 2px 0 rgba(0, 0, 0, .08);
    margin: 1rem;
    padding: 1rem;
    width: 97%;
  }

  @media screen and (min-width: 600px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 33%;
  }

  @media screen and (min-width: 1200px) {
    width: 25%;
  }
</style>
