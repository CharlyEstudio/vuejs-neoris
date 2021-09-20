import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import settings from './settings'

const firebaseApp = initializeApp(settings)
const db = getFirestore(firebaseApp)
export const boardsRef = collection(db, 'boards')
export const listRef = collection(db, 'lists')
export const tasksRef = collection(db, 'tasks')

export default firebaseApp
