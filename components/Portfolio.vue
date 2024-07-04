<template>
    <section class="portfolio">
      <div class="container">
        <h2>Portofolio</h2>
        <div class="portfolio-grid">
          <div class="portfolio-item">
            <img src="/static/DigiArt episode 2.png" alt="Portfolio Item 1">
            <div class="overlay">
              <h3>"Dark Forest"</h3>
              <p>Digital Art</p>
            </div>
          </div>
          <div class="portfolio-item">
            <img src="/static/- HBD Nazu 2023 -.png" alt="Portfolio Item 2">
            <div class="overlay">
              <h3>"Prisoner"</h3>
              <p>Digital Art.</p>
            </div>
          </div>
          <div class="portfolio-item">
            <img src="/static/belum_kelar.png" alt="Portfolio Item 3">
            <div class="overlay">
              <h3>#Unfinished Art.</h3>
              <p>Coming Soon.</p>
            </div>
          </div>
          <!-- Add more portfolio items as needed -->
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Portfolio'
  }
  </script>
  
  <style scoped>
  .portfolio {
    padding: 80px 0;
    background-color: #181818;
    text-align: center;
  }
  
  .portfolio h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  
  .portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  
  .portfolio-item img {
    max-width: 100%;
    vertical-align: middle;
    transition: transform 0.3s ease;
  }
  
  .portfolio-item:hover img {
    transform: scale(1.1);
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 15px;
    transition: background-color 0.3s ease;
    opacity: 0;
  }
  
  .portfolio-item:hover .overlay {
    opacity: 1;
  }
  
  .overlay h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .overlay p {
    font-size: 1rem;
  }
  </style>
  