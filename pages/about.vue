<template>
  <div class="about-wrapper">
    <div class="particles"></div>
    <div class="about-card">
      <h1 class="glow-heading">👩‍🚀 About Me</h1>
      <p class="about-text">
        I am a passionate developer, exploring the infinite universe of code. With a love for clean UI and mind-blowing UX, my mission is to bring futuristic digital experiences to life.
      </p>
      <div class="skills">
        <div class="skill-card" v-for="skill in skills" :key="skill.name">
          <lord-icon
            :src="skill.icon"
            trigger="hover"
            style="width: 60px; height: 60px;"
          ></lord-icon>
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
  { name: 'Vue.js', icon: 'https://cdn.lordicon.com/lxotnbfa.json' },
  { name: 'CSS Wizardry', icon: 'https://cdn.lordicon.com/slkvcfos.json' },
  { name: 'JavaScript', icon: 'https://cdn.lordicon.com/zniqnylq.json' },
  { name: 'Animations', icon: 'https://cdn.lordicon.com/iltqorsz.json' }
]);
</script>

<style scoped>
@import url('https://cdn.lordicon.com/lordicon.css');

/* Main Wrapper */
.about-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f0c29);
  background-size: 300% 300%;
  animation: gradientAnimation 20s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 4rem;
}

/* Particles Background */
.particles {
  position: absolute;
  width: 300%;
  height: 300%;
  background: url('https://raw.githubusercontent.com/Kunal-878/starry-night/main/stars.png') repeat;
  animation: particleMovement 60s linear infinite;
  opacity: 0.3;
  z-index: 0;
}

/* Glassmorphism Card */
.about-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 4rem;
  box-shadow: 0 0 50px rgba(0, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  text-align: center;
  color: white;
  z-index: 1;
  max-width: 800px;
  animation: fadeIn 1s ease-in-out;
}

/* Glowing Heading */
.glow-heading {
  font-size: 3.5rem;
  background: linear-gradient(to right, #00fff7, #00ffe7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: flickerEffect 3s infinite;
  margin-bottom: 2rem;
}

/* Text Styling */
.about-text {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 3rem;
  line-height: 1.6;
  animation: slideUp 1s ease-out;
}

/* Skills Section */
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.skill-card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 0 30px #00ffe7;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  text-align: center;
  width: 160px;
  animation: popIn 1s ease-out;
}

/* Hover Effect on Skills */
.skill-card:hover {
  transform: scale(1.1);
  box-shadow: 0 0 50px #00fff7;
}

.skill-card p {
  color: white;
  font-weight: bold;
  margin-top: 1rem;
}

/* Keyframes for Animations */
@keyframes gradientAnimation {
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

@keyframes popIn {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@media (max-width: 768px) {
  .about-card {
    padding: 2rem;
  }
  .glow-heading {
    font-size: 2.5rem;
  }
  .about-text {
    font-size: 1rem;
  }
  .skill-card {
    width: 140px;
  }
}
</style>
