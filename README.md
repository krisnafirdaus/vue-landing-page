# Vue.js Front-End Test Project

This project contains implementations for three assignments as part of a Vue.js Front-End Engineer take-home test.

## Project Overview

The project is built with:
- Vue 3 (Composition API)
- Vite as the build tool
- TailwindCSS for styling
- Pinia for state management
- Vitest for testing

## Assignments

### Assignment 1: Creative Landing Page
A one-page landing page design with:
- Modern and clean UI
- Responsive design for all device sizes
- Animations and transitions
- Gradient backgrounds and creative elements

### Assignment 2: Mobile-Friendly Todo App
A simple todo application with:
- Add, edit, delete, and mark tasks as complete
- Responsive and mobile-friendly design
- Local storage persistence
- Clean and intuitive UI using Tailwind CSS
- State management with Pinia

### Assignment 3: Vue.js Component for Third-Party Integration
A standalone Vue.js component that:
- Can be embedded in third-party applications
- Is self-contained with no style conflicts
- Accepts customizable props
- Renders a button that displays a message when clicked
- Unit tested with Vitest and Vue Test Utils

## Project Setup

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build the project
npm run build

# Build the standalone component
npm run build:component
```

## Assignment 3 Integration Example

The standalone component can be integrated into any application using the following code:

```html
<script src="compiled-greeter-component.js"></script>
<div id="my-component"></div>
<script>
  Greeter.init('#my-component', { message: 'Hello from the host app!' });
</script>
```

## Testing

The project includes unit tests for the standalone component. Run the tests with:

```sh
npm test
```

The tests verify:
- The component renders correctly
- The button appears as expected
- Clicking the button prints the expected message
- The component correctly handles different messages

## Virtual DOM Usage

For the standalone component (Assignment 3), Vue's Virtual DOM is used for rendering. This approach provides:

1. Efficient updates with minimal direct DOM manipulation
2. Component isolation in third-party applications
3. Clean integration without affecting the host application's DOM structure
4. Cross-browser compatibility with a single codebase
