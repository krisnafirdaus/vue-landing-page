import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todos', () => {
  // State
  const todos = ref([])

  // Getters
  const completedCount = computed(() => {
    return todos.value.filter(todo => todo.completed).length
  })

  // Actions
  const loadTodos = () => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      todos.value = JSON.parse(savedTodos)
    }
  }

  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date()
    }
    todos.value.push(newTodo)
    saveTodos()
  }

  const removeTodo = (id) => {
    const index = todos.value.findIndex(todo => todo.id === id)
    if (index !== -1) {
      todos.value.splice(index, 1)
      saveTodos()
    }
  }

  const updateTodo = (id, text) => {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.text = text
      saveTodos()
    }
  }

  const toggleTodo = (id) => {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
      saveTodos()
    }
  }

  const clearCompleted = () => {
    todos.value = todos.value.filter(todo => !todo.completed)
    saveTodos()
  }

  return {
    todos,
    completedCount,
    loadTodos,
    addTodo,
    removeTodo,
    updateTodo,
    toggleTodo,
    clearCompleted
  }
})
