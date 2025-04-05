<script setup>
const props = defineProps({
  message: {
    type: String,
    default: 'Hello World!'
  }
})

const emit = defineEmits(['messageClicked'])

const handleClick = () => {
  console.log(props.message)
  emit('messageClicked', props.message)
}
</script>

<template>
  <div class="greeter-component">
    <button 
      @click="handleClick"
      class="greeter-button"
    >
      Click to display message
    </button>
  </div>
</template>

<style scoped>
.greeter-component {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.greeter-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.greeter-button:hover {
  background-color: #45a049;
}
</style>
