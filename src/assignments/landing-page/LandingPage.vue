<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -inset-[10px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgaWQ9ImdyaWQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-20"></div>
      </div>
      
      <div class="relative z-10 container mx-auto px-6 text-center text-white">
        <div class="animate-fadeIn">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-slideUp">Digital Innovation</h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slideUp animation-delay-100">
            Transforming ideas into impactful digital experiences with cutting-edge technology and creative design.
          </p>
          <div class="flex flex-wrap justify-center gap-4 animate-slideUp animation-delay-200">
            <button class="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition">
              Get Started
            </button>
            <button class="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <!-- Animated Elements -->
      <div class="absolute -bottom-32 left-0 w-full overflow-hidden">
        <div class="w-full h-32 bg-gradient-to-b from-white/0 to-white/5"></div>
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional digital solutions that solve complex problems and drive business growth.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Feature 1 -->
          <div class="feature-card group">
            <div class="bg-gray-50 rounded-2xl p-8 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2">
              <div class="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-3">Web Development</h3>
              <p class="text-gray-600">
                Custom websites and web applications built with the latest technologies and best practices.
              </p>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="feature-card group">
            <div class="bg-gray-50 rounded-2xl p-8 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2">
              <div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-3">Mobile Apps</h3>
              <p class="text-gray-600">
                Intuitive and responsive mobile applications for iOS and Android platforms.
              </p>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="feature-card group">
            <div class="bg-gray-50 rounded-2xl p-8 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2">
              <div class="w-16 h-16 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-3">UI/UX Design</h3>
              <p class="text-gray-600">
                Beautiful and functional user interfaces that create exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-10 md:p-16 text-center text-white overflow-hidden relative">
          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let's transform your ideas into powerful digital experiences. Our team is ready to help.
            </p>
            <button class="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition">
              Contact Us
            </button>
          </div>
          <div class="absolute top-0 right-0 w-full h-full">
            <svg class="absolute right-0 top-0 h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 Z" fill="white"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slideUp {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 0.8s ease-out forwards;
}

.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIiBkPSJNMCwyMjRMNDAsNjRjNDAsLTE2MCwxMjAsLTU5MiwxODAsLTU5MmM2MCwwLDEyMCw0MzIsMTgwLDU3NmM2MCwxNDQsMTIwLC05OSwxODAsLTk5YzYwLDAsMTIwLDI0MCwxODAsMjU2YzYwLDE2LDEyMCwtMTI4LDE4MCwtMTI4YzYwLDAsMTIwLDE2MCwxODAsOTZjNjAsLTY0LDEyMCwtMzUyLDE4MCwtMzM2YzYwLDE2LDEyMCwzMzYsMTgwLDE2OGM0OSwtMTMzLDEwMCwtMTMzLDE0MCwwQzE0NDAsMiAxNDQwLDExNSAxNDQwLDIyNFoiPjwvcGF0aD48L3N2Zz4=') repeat-x;
  background-size: 1440px 100px;
}

.wave1 {
  animation: wave 30s linear infinite;
  z-index: 1;
  opacity: 0.5;
  animation-delay: 0s;
  bottom: 0;
}

.wave2 {
  animation: wave 15s linear infinite;
  z-index: 0;
  opacity: 0.2;
  animation-delay: -5s;
  bottom: 10px;
}

@keyframes wave {
  0% { background-position-x: 0; }
  100% { background-position-x: 1440px; }
}
</style>
