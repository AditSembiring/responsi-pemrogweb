<template>
    <section id="contact" class="contact">
      <div class="container">
        <h2>Hubungi Saya</h2>
        <p>Kalian bisa cari saya disosial media berikut :</p>
        <div class="contact-links">
          <a href="https://www.instagram.com/evolve_artz/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
            Instagram
          </a>
          <a href="https://github.com/AditSembiring" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
            GitHub
          </a>
          <a href="https://linktr.ee/evolveartz" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-discord"></i>
            Linktree
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Contact'
  }
  </script>
  
  <style scoped>
  .contact {
    padding: 80px 0;
    background-color: #181818;
    color: #fff;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .contact h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .contact p {
    font-size: 1rem;
    color: #ccc;
    margin-bottom: 2rem;
  }
  
  .contact-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .contact-links a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    margin: 0 15px;
    transition: transform 0.3s ease;
  }
  
  .contact-links a i {
    font-size: 1.5rem;
    margin-right: 10px;
  }
  
  .contact-links a:hover {
    transform: translateY(-3px);
  }
  </style>
  