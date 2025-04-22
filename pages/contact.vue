<template>
    <div class="contact-wrapper">
      <div class="glass-form">
        <h2 class="glow-title">🌟 Contact Me 🌟</h2>
        <form @submit.prevent="submitForm">
          <div class="input-box">
            <label for="name">Name</label>
            <input v-model="form.name" type="text" id="name" required />
          </div>
  
          <div class="input-box">
            <label for="email">Email</label>
            <input v-model="form.email" type="email" id="email" required />
          </div>
  
          <div class="input-box">
            <label for="message">Message</label>
            <textarea v-model="form.message" id="message" rows="5" required></textarea>
          </div>
  
          <button class="submit-btn">✨ Blast Message 🚀</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contact",
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: ""
        }
      };
    },
    methods: {
      submitForm() {
        alert("💌 Message sent with power!");
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      }
    }
  };
  </script>
  
  <style scoped>
  /* Background Animation */
  .contact-wrapper {
    min-height: 100vh;
    background: linear-gradient(120deg, #0f0c29, #302b63, #24243e);
    background-size: 600% 600%;
    animation: neonGradient 18s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  
  /* Glass Form with Neon Glow */
  .glass-form {
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(25px);
    border-radius: 2rem;
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
    padding: 2.5rem;
    width: 100%;
    max-width: 700px;
    animation: fadeInDrop 1.2s ease-out;
    position: relative;
  }
  
  /* Glowing Title with Gradient */
  .glow-title {
    font-size: 2.8rem;
    text-align: center;
    background: linear-gradient(to right, #00ffe7, #00ff95, #00d0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: flicker 3s infinite alternate;
    margin-bottom: 2rem;
  }
  
  /* Input Fields */
  .input-box {
    margin-bottom: 1.8rem;
    display: flex;
    flex-direction: column;
  }
  
  .input-box label {
    color: #fff;
    margin-bottom: 0.5rem;
    font-weight: 600;
    text-shadow: 0 0 5px #00fff7;
  }
  
  /* Input & Textarea with Blinking Glow */
  .input-box input,
  .input-box textarea {
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 1rem;
    outline: none;
    box-shadow: 0 0 15px #00ffcc;
    animation: blinkShadow 2s infinite ease-in-out;
    transition: box-shadow 0.3s ease;
  }
  
  /* Input Focus Strong Glow */
  .input-box input:focus,
  .input-box textarea:focus {
    box-shadow: 0 0 25px #00ffd9, 0 0 50px #00ffe5;
  }
  
  /* Submit Button - Neon Glow with Pulse */
  .submit-btn {
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 1rem;
    background: linear-gradient(90deg, #00f0ff, #00ff85, #00f0ff);
    color: black;
    cursor: pointer;
    animation: pulseBtn 2s infinite;
    box-shadow: 0 0 20px #00ffe7;
    transition: transform 0.3s ease;
  }
  
  .submit-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px #00ffe7, 0 0 60px #00ffde;
  }
  
  /* Animations */
  @keyframes neonGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  @keyframes fadeInDrop {
    0% {
      opacity: 0;
      transform: translateY(-40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes blinkShadow {
    0% {
      box-shadow: 0 0 10px #00ffcc;
    }
    50% {
      box-shadow: 0 0 20px #00ffcc, 0 0 30px #00ffee;
    }
    100% {
      box-shadow: 0 0 10px #00ffcc;
    }
  }
  
  @keyframes flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      opacity: 1;
    }
    20%, 24%, 55% {
      opacity: 0.4;
    }
  }
  
  @keyframes pulseBtn {
    0% {
      box-shadow: 0 0 10px #00ffd9;
    }
    50% {
      box-shadow: 0 0 30px #00ffe2;
    }
    100% {
      box-shadow: 0 0 10px #00ffd9;
    }
  }
  
  /* Media Queries */
  @media (max-width: 768px) {
    .glass-form {
      padding: 2rem;
    }
  
    .glow-title {
      font-size: 2.2rem;
    }
  
    .submit-btn {
      font-size: 1rem;
    }
  }
  </style>
  