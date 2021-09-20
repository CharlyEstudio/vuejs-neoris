export default {
  getListByBoard: state => boardId => {
    return Object.values(state.lists)
      .filter(list => list.board === boardId)
  },
  getTasksFromList: state => listId => {
    return Object.values(state.tasks)
      .then(task => task.list === listId)
  }
}
