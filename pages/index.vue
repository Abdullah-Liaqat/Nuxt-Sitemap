<template>
  <ul class="navbar">
  <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
  <li><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>
</ul>  
  <div class="index-wrapper">
    <div class="particles"></div>
    <div class="index-card">
      <h1 class="glow-heading">Welcome to the Future</h1>
      <p class="intro-text">
        Experience a world where technology meets design. Navigate through a futuristic, high-performance UI with advanced animations.
      </p>
      <div class="input-section">
        <input type="text" placeholder="Enter your thoughts..." class="glowing-input" />
        <button class="glowing-button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputText = ref("");
</script>

<style scoped>
@import url('https://cdn.lordicon.com/lordicon.css');

/* Main Wrapper */
.index-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #2e2b5f, #1e3c72, #173e43);
  background-size: 400% 400%;
  animation: gradientShift 30s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 5rem;
}

/* Particles Background */
.particles {
  position: absolute;
  width: 300%;
  height: 300%;
  background: url('https://raw.githubusercontent.com/Kunal-878/starry-night/main/stars.png') repeat;
  animation: particleMovement 100s linear infinite;
  opacity: 0.25;
  z-index: 0;
}


/* Glassmorphism Card */
.index-card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2rem;
  padding: 4rem;
  box-shadow: 0 0 50px rgba(0, 255, 255, 0.5);
  backdrop-filter: blur(25px);
  text-align: center;
  color: white;
  z-index: 1;
  max-width: 900px;
  animation: fadeIn 1.5s ease-in-out;
}

/* Glowing Heading */
.glow-heading {
  font-size: 4rem;
  background: linear-gradient(to right, #00fff7, #00ffe7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: flickerEffect 3s infinite;
  margin-bottom: 3rem;
}

/* Intro Text Styling */
.intro-text {
  font-size: 1.5rem;
  color:#ccc;
  margin-bottom: 3rem;
  line-height: 1.6;
  animation: slideUp 1.5s ease-out;
}

/* Input Section */
.input-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}

/* Glowing Input Field */
.glowing-input {
  padding: 1.5rem;
  border: 2px solid #00fff7;
  background: rgba(0, 255, 255, 0.1);
  color: #fff;
  font-size: 1.2rem;
  border-radius: 1rem;
  outline: none;
  transition: all 0.3s ease;
  animation: inputGlow 2s infinite alternate;
}

.glowing-input::placeholder {
  color: #ccc;
}

.glowing-input:focus {
  border: 2px solid #00ffe7;
  box-shadow: 0 0 20px #00ffe7;
}

/* Glowing Button */
.glowing-button {
  padding: 1.2rem 2.5rem;
  background: linear-gradient(90deg, #00fff7, #00ffe7);
  border: none;
  color: white;
  font-size: 1.4rem;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: 0 0 15px #00fff7;
  transition: all 0.3s ease;
}

.glowing-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 35px #00ffe7;
}

.glowing-button:focus {
  outline: none;
  box-shadow: 0 0 40px #00fff7;
}

/* Keyframes for Animations */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes fadeIn {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes particleMovement {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-2000px, -2000px); }
}

@keyframes flickerEffect {
  0%, 100% { opacity: 1; }
  10%, 30%, 50%, 70% { opacity: 0.6; }
  20%, 40%, 60%, 80% { opacity: 0.8; }
}

@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes inputGlow {
  0% { border-color: #00fff7; box-shadow: 0 0 10px #00fff7; }
  50% { border-color: #00ffe7; box-shadow: 0 0 20px #00ffe7; }
  100% { border-color: #00fff7; box-shadow: 0 0 10px #00fff7; }
}

@media (max-width: 768px) {
  .index-card {
    padding: 2rem;
  }
  .glow-heading {
    font-size: 3rem;
  }
  .intro-text {
    font-size: 1.2rem;
  }
  .input-section {
    width: 100%;
  }
  .glowing-input, .glowing-button {
    width: 100%;
  }
}
/* General Reset for Navbar */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
}

/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  list-style: none;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar li {
  margin: 0 2rem;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 10px;
}

.nav-link:hover {
  color: #00ffe7;
  background-color: #444;
  transform: scale(1.1);
}

.nav-link.active {
  color: #00ffe7;
  font-weight: bold;
  text-shadow: 0 0 10px #00ffe7;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar li {
    margin-bottom: 1rem;
  }
}

</style>
