<template>
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>-ˏˋ⋆ ᴡ ᴇ ʟ ᴄ ᴏ ᴍ ᴇ ⋆ˊˎ-</h1>
          <p>Website Personal Adit.</p>
          <p>☝️🤓 erm actually</p>

          <a href="#contact" class="btn">Hubungi Saya</a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection'
  }
  </script>
  
  <style scoped>
  .hero {
    background: url('') no-repeat center center/cover;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
  }
  
  .container {
    max-width: 1200px;
    padding: 0 20px;
  }
  
  .hero-content {
    max-width: 600px;
    margin: auto;
  }
  
  .hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-content p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .btn {
    display: inline-block;
    background-color: #569bf1;
    color: #fff;
    padding: 12px 24px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    background-color: #345d90;
  }
  </style>
  