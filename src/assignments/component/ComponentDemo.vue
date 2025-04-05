<script setup>
import { ref } from 'vue'
import Greeter from './Greeter.vue'

const message = ref('Hello from the host app!')
const customMessage = ref('')
const displayMessage = ref('')

const updateMessage = () => {
  if (customMessage.value.trim()) {
    message.value = customMessage.value.trim()
    customMessage.value = ''
  }
}
</script>

<template>
  <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    <div class="bg-gradient-to-r from-green-500 to-teal-600 p-6">
      <h2 class="text-2xl font-bold text-white">Vue.js Component for Third-Party Integration</h2>
      <p class="text-green-100">A standalone component that can be embedded in any application</p>
    </div>
    
    <!-- Component Demo -->
    <div class="p-6">
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Component Demo</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          This demonstrates the Greeter component that can be embedded in third-party applications.
        </p>
        
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
          <h4 class="text-lg font-medium text-gray-800 dark:text-white mb-4">Component Preview</h4>
          <Greeter :message="message" @message-clicked="displayMessage = $event" />
          
          <div v-if="displayMessage" class="mt-4 p-3 bg-gray-100 dark:bg-gray-600 rounded-md text-gray-800 dark:text-gray-200">
            <p>Message displayed: <span class="font-medium">{{ displayMessage }}</span></p>
          </div>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <h4 class="text-lg font-medium text-gray-800 dark:text-white mb-4">Custom Message</h4>
          <div class="flex gap-2">
            <input 
              v-model="customMessage" 
              type="text" 
              placeholder="Enter a custom message"
              class="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
            />
            <button 
              @click="updateMessage"
              class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </div>
      
      <!-- Integration Example -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Integration Example</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          To use this component in your application, include the following code:
        </p>
        
        <div class="bg-gray-800 text-white rounded-lg p-4 overflow-x-auto">
          <pre class="text-sm">
&lt;script src="compiled-greeter-component.js"&gt;&lt;/script&gt;
&lt;div id="my-component"&gt;&lt;/div&gt;
&lt;script&gt;
  Greeter.init('#my-component', { message: 'Hello from the host app!' });
&lt;/script&gt;</pre>
        </div>
      </div>
      
      <!-- Testing Information -->
      <div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Testing</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          The component includes comprehensive unit tests to verify its functionality. Run the tests with:
        </p>
        
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4">
          <code class="text-sm">npm run test</code>
        </div>
        
        <p class="text-gray-600 dark:text-gray-300">
          The tests verify that the component renders correctly, displays the correct message, and triggers events properly when clicked.
        </p>
      </div>
    </div>
  </div>
</template>
