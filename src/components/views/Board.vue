<template>
  <section>
    <h3>
      <span>Mis Paneles</span> > {{name}}
    </h3>
    <input
      type="text"
      placeholder="Añade una lista"
      v-model="listName"
      @keyup.enter="add()"
    />
    <div class="container">
      <column
        v-for="(list, index) in boardList"
        :key="index"
        :listId="list.id"
        :name="list.name"
      ></column>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Column from '@/components/Column'

export default {
  name: 'board-view',
  components: {
    Column
  },
  props: {
    name: String,
    id: String
  },
  data () {
    return {
      listName: ''
    }
  },
  computed: {
    ...mapState([
      'fetchingData'
    ]),
    ...mapGetters([
      'getListByBoard'
    ]),
    boardList () {
      return this.getListByBoard(this.id)
    }
  },
  methods: {
    ...mapActions([
      'fetchLists',
      'addColumn'
    ]),
    add () {
      this.boardList.push({ name: this.listName })
    }
  },
  created () {
    this.fetchLists({ board: this.id })
  }
}
</script>

<style scoped>
  section {
    text-align: left;
  }

  h3 {
    color: #37474f;
    text-align: left;
    margin: 1.5rem;
  }

  h3 span {
    color: #546e7a;
  }

  input {
    box-sizing: border-box;
    background: #546e7a;
    border: 2px solid #546e7a;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;
  }

  input:focus,
  input:active {
    background: white;
    color: #546e7a;
  }

  input::placeholder {
    color: white;
  }
</style>
