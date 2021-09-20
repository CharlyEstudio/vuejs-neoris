import { boardsRef, listRef, tasksRef } from './firebase'
import { getDocs, addDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

export default {
  getBoardsByUser (userId) {
    return getDocs(boardsRef)
  },
  postBoard: async function (name, owner = 1) {
    const board = {
      id: uuidv4(),
      name,
      owner
    }

    const newBoard = await addDoc(boardsRef, board)
    return newBoard
  },
  getListsFromBoard (boardId) {
    const query = listRef.orderByChild('board').equalTo(boardId)
    return query.once('value')
  },
  postList (board, name) {
    const id = listRef.push().key
    const column = { id, name, board }

    return listRef.child(id).set(column)
      .then(() => column)
  },
  getTasksFromList (listId) {
    const query = tasksRef.orderByChild('list').equalTo(listId)
    return query.once('value')
  },
  postTask (list, title) {
    const id = tasksRef.push().key
    const task = { id, list, title, completed: false }

    return tasksRef.child(id).set(task)
      .then(() => task)
  },
  deleteTask (taskId) {
    return tasksRef.child(taskId).remove()
  },
  completedTask (taskId) {
    const query = tasksRef.child(taskId).child('completed')
    return query.once('value')
      .then(snap => snap.val())
      .then(data => query.set(!data))
  }
}
