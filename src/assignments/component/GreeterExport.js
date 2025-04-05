import { createApp, h } from 'vue'
import Greeter from './Greeter.vue'

// This is the entry point for the standalone component
// It will be compiled into a UMD module that can be used in any website
export default {
  // Initialize the component with the given selector and options
  init(selector, options = {}) {
    const targetElement = document.querySelector(selector)
    
    if (!targetElement) {
      console.error(`Element with selector "${selector}" not found`)
      return
    }
    
    // Create a new Vue application
    const app = createApp({
      render() {
        // Render the Greeter component with the provided options
        return h(Greeter, {
          message: options.message || 'Default Message',
          onMessageClicked: (message) => {
            console.log(message)
            // Dispatch a custom event that can be listened to by the host page
            targetElement.dispatchEvent(
              new CustomEvent('greeter-message', { detail: message })
            )
          }
        })
      }
    })
    
    // Mount the application to the target element
    app.mount(selector)
    
    // Return a cleanup function
    return {
      destroy() {
        app.unmount()
      }
    }
  }
}
