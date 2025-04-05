# Vue.js Front-End Test Project

This project contains implementations for three assignments as part of a Vue.js Front-End Engineer take-home test.

## Project Overview

The project is built with:
- Vue 3 (Composition API)
- Vite as the build tool
- TailwindCSS for styling
- Pinia for state management
- Vitest for testing

## Setup dan Instalasi

```sh
# Clone repository
git clone https://github.com/krisnafirdaus/vue-landing-page.git
cd vue-landing-page

# Install dependencies
npm install

# Jalankan server development
npm run dev

# Build project
npm run build

# Jalankan test
npm test
```

## Struktur Proyek

Proyek ini terdiri dari 3 assignment yang terpisah, semua diimplementasikan dalam satu aplikasi Vue.js:

```
src/
├── assignments/
│   ├── landing-page/     # Assignment 1: Creative Landing Page
│   ├── todo-app/         # Assignment 2: Todo App
│   └── component/        # Assignment 3: Standalone Component
├── components/           # Shared components
└── assets/               # Global assets
```

## Assignments

### Assignment 1: Creative Landing Page
A one-page landing page design with:
- Modern and clean UI
- Responsive design for all device sizes
- Animations and transitions
- Gradient backgrounds and creative elements

### Fitur
- Desain modern dan bersih dengan gradients
- Fully responsive untuk semua ukuran layar
- Animations dan transitions
- Sections yang terstruktur dengan baik (hero, features, CTA)

### Cara Menjalankan
1. Jalankan `npm run dev`
2. Buka browser di http://localhost:5173/
3. Klik "Assignment 1" di navigasi

### Assignment 2: Mobile-Friendly Todo App
A simple todo application with:
- Add, edit, delete, and mark tasks as complete
- Responsive and mobile-friendly design
- Local storage persistence
- Clean and intuitive UI using Tailwind CSS
- State management with Pinia

### Fitur
- Tambah, edit, hapus, dan marking tugas sebagai selesai
- Responsive design untuk perangkat mobile
- Data persistent menggunakan local storage
- State management dengan Pinia

### Cara Menjalankan
1. Jalankan `npm run dev`
2. Buka browser di http://localhost:5173/
3. Klik "Assignment 2" di navigasi
4. Tambahkan task baru, edit, atau hapus task

### Struktur Todo Store
```javascript
// src/assignments/todo-app/todoStore.js
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', () => {
  // State, getters, dan actions...
})
```

### Assignment 3: Vue.js Component for Third-Party Integration
A standalone Vue.js component that:
- Can be embedded in third-party applications
- Is self-contained with no style conflicts
- Accepts customizable props
- Renders a button that displays a message when clicked
- Unit tested with Vitest and Vue Test Utils

### Fitur
- Komponen Vue.js standalone
- Self-contained dengan styling terisolasi
- Dapat diintegrasikan ke aplikasi pihak ketiga
- Menerima property yang dapat dikustomisasi
- Unit tests lengkap

### Cara Build Component Standalone
```sh
# Pastikan Node.js version 20 atau lebih tinggi digunakan
nvm use 20  # Jika menggunakan nvm

# Build component
npm run build:component

# Hasil build akan tersedia di folder 'dist'
```

### Integrasi dengan Aplikasi Pihak Ketiga
Setelah build, Anda dapat mengintegrasikan komponen ke aplikasi pihak ketiga:

```html
<script src="path/to/compiled-greeter-component.js"></script>
<div id="my-component"></div>
<script>
  Greeter.init('#my-component', { message: 'Hello from the host app!' });
</script>
```

### Testing Component
```sh
# Jalankan semua test
npm test

# Testing secara spesifik untuk component
npx vitest run src/assignments/component/__tests__/Greeter.test.js
```

Test memverifikasi bahwa:
- Komponen me-render dengan benar
- Tombol muncul seperti yang diharapkan
- Mengklik tombol menampilkan pesan yang diharapkan
- Komponen menangani pesan berbeda yang dikirim via props

### Penggunaan Virtual DOM

Komponen standalone menggunakan Virtual DOM dari Vue.js karena:

1. **Efisiensi:** Virtual DOM memungkinkan rendering yang efisien dengan hanya memperbarui DOM yang diperlukan
2. **Isolasi:** Memastikan komponen tidak mempengaruhi DOM host secara tidak diinginkan
3. **Kompatibilitas:** Bekerja secara konsisten di berbagai browser
4. **Pengelolaan state:** Memudahkan pengelolaan dan update state komponen

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

## Deployment

Untuk deployment produksi:

```sh
# Build untuk produksi
npm run build

# Preview build produksi
npm run preview
```

## Dependencies

- Vue.js 3.5+
- Pinia 2.1+
- TailwindCSS 3.4+
- Vitest 1.4+ (development)
