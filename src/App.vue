<script setup>
import { ref } from 'vue'
import LandingPage from './assignments/landing-page/LandingPage.vue'
import TodoApp from './assignments/todo-app/TodoApp.vue'
import ComponentDemo from './assignments/component/ComponentDemo.vue'

const currentView = ref('home')

const setView = (view) => {
  currentView.value = view
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <!-- Navigation -->
    <header class="bg-white shadow dark:bg-gray-800 mb-8">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
            Vue.js Front-End Test
          </h1>
          <nav>
            <ul class="flex space-x-1 md:space-x-4">
              <li>
                <button 
                  @click="setView('home')" 
                  :class="[
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    currentView === 'home' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  ]"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  @click="setView('landing')" 
                  :class="[
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    currentView === 'landing' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  ]"
                >
                  Assignment 1
                </button>
              </li>
              <li>
                <button 
                  @click="setView('todo')" 
                  :class="[
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    currentView === 'todo' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  ]"
                >
                  Assignment 2
                </button>
              </li>
              <li>
                <button 
                  @click="setView('component')" 
                  :class="[
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    currentView === 'component' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  ]"
                >
                  Assignment 3
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 pb-12">
      <!-- Home View -->
      <div v-if="currentView === 'home'" class="max-w-3xl mx-auto">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">Vue.js Front-End Test</h2>
          
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Assignment 1: Creative Landing Page</h3>
              <p class="text-gray-600 dark:text-gray-300">A one-page landing page with creative, clean design.</p>
              <button @click="setView('landing')" class="mt-2 btn btn-primary">View Assignment</button>
            </div>
            
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Assignment 2: Todo App</h3>
              <p class="text-gray-600 dark:text-gray-300">A simple mobile-friendly todo app with local storage.</p>
              <button @click="setView('todo')" class="mt-2 btn btn-primary">View Assignment</button>
            </div>
            
            <div class="border-l-4 border-purple-500 pl-4">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Assignment 3: Vue.js Component</h3>
              <p class="text-gray-600 dark:text-gray-300">A standalone Vue.js component for third-party integration.</p>
              <button @click="setView('component')" class="mt-2 btn btn-primary">View Assignment</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Assignment Views -->
      <LandingPage v-if="currentView === 'landing'" />
      <TodoApp v-if="currentView === 'todo'" />
      <ComponentDemo v-if="currentView === 'component'" />
    </main>

    <footer class="bg-white dark:bg-gray-800 shadow-inner py-6">
      <div class="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; 2025 Vue.js Front-End Test
      </div>
    </footer>
  </div>
</template>
