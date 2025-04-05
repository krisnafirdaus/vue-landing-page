<script setup>
import { ref, onMounted } from 'vue'
import { useTodoStore } from './todoStore'

const todoStore = useTodoStore()
const newTodo = ref('')
const editingId = ref(null)
const editText = ref('')

onMounted(() => {
  todoStore.loadTodos()
})

const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value.trim())
    newTodo.value = ''
  }
}

const startEdit = (todo) => {
  editingId.value = todo.id
  editText.value = todo.text
}

const saveEdit = (id) => {
  if (editText.value.trim()) {
    todoStore.updateTodo(id, editText.value.trim())
    editingId.value = null
  }
}

const cancelEdit = () => {
  editingId.value = null
}
</script>

<template>
  <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <h2 class="text-2xl font-bold text-white">Todo App</h2>
      <p class="text-blue-100">A simple mobile-friendly todo application</p>
    </div>
    
    <!-- Add Todo Form -->
    <div class="p-6 border-b dark:border-gray-700">
      <form @submit.prevent="addTodo" class="flex gap-2">
        <input 
          v-model="newTodo" 
          type="text" 
          placeholder="Add a new task..."
          class="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
        />
        <button 
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add
        </button>
      </form>
    </div>
    
    <!-- Todo List -->
    <div class="p-6">
      <div v-if="todoStore.todos.length === 0" class="text-center py-6 text-gray-500 dark:text-gray-400">
        No tasks yet. Add one above!
      </div>
      
      <ul v-else class="space-y-3">
        <li 
          v-for="todo in todoStore.todos" 
          :key="todo.id"
          :class="[
            'p-4 rounded-lg transition-all',
            todo.completed ? 'bg-gray-50 dark:bg-gray-700/50' : 'bg-white dark:bg-gray-700'
          ]"
        >
          <!-- View Mode -->
          <div v-if="editingId !== todo.id" class="flex items-center gap-3">
            <input 
              type="checkbox" 
              :checked="todo.completed"
              @change="todoStore.toggleTodo(todo.id)"
              class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
            />
            
            <span 
              :class="[
                'flex-grow text-gray-800 dark:text-white',
                todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
              ]"
            >
              {{ todo.text }}
            </span>
            
            <div class="flex gap-1">
              <button 
                @click="startEdit(todo)"
                class="p-1 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-300"
                :disabled="todo.completed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button 
                @click="todoStore.removeTodo(todo.id)"
                class="p-1 rounded-md text-gray-500 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Edit Mode -->
          <div v-else class="flex items-center gap-2">
            <input 
              v-model="editText" 
              type="text"
              class="flex-grow px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
            />
            <button 
              @click="saveEdit(todo.id)"
              class="p-1 rounded-md text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button 
              @click="cancelEdit"
              class="p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </li>
      </ul>
      
      <!-- Task Stats -->
      <div v-if="todoStore.todos.length > 0" class="mt-6 text-sm text-gray-500 dark:text-gray-400 flex justify-between">
        <span>{{ todoStore.completedCount }} / {{ todoStore.todos.length }} tasks completed</span>
        <button 
          v-if="todoStore.completedCount > 0"
          @click="todoStore.clearCompleted" 
          class="text-red-500 hover:text-red-700"
        >
          Clear completed
        </button>
      </div>
    </div>
  </div>
</template>
