<template>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task.completed }"
    >{{ task.title }}</li>
    <input
      type="text"
      placeholder="Añade una nueva tarea"
      v-model="title"
      @keyup.enter="add()"
    />
  </ul>
</template>

<script>
export default {
  name: 'task-list',
  props: {
    listId: String,
    tasks: Array
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    add () {
      // TODO Implementar evento
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    background: #fafafa;
    padding: 1rem;
    border-radius: 3px;
    border-bottom: 1px solid #ccc;
    margin: 1rem;
  }

  ul li.completed {
    background: #cfd8dc;
    color: #90a4ae;
  }

  input {
    box-sizing: border-box;
    background: #eceff1;
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    margin: 0.5rem;
    outline: 0;
    padding: 0.75rem 0;
    transition: background-color 600ms ease;
    width: 100%;
  }

  input:focus,
  input:active {
    background: #fafafa;
    border-bottom: 1px solid #ccc;
    margin: 0.25rem 0;
    padding: 1rem;
  }

  input::placeholder {
    color: #90a4ae;
  }
</style>
