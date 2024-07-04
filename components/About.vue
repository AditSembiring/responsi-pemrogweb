<template>
    <section class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Tentang Saya</h2>
            <p>Nama Saya Adit Pratama Sembiring</p>
            <p>Seorang Mahasiswa Amikom Yogyakarta yang memiliki hobi dalam industri kreatif seperti desain grafis, model 3d, serta digital art.</p>
            <a href="#contact" class="btn">Hubungi Saya</a>
          </div>
          <div class="about-image">
            <img src="/static/picture_wak.png" alt="About Image">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'About'
  }
  </script>
  
  <style scoped>
  .about {
    padding: 80px 0;
    background-color: #181818;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .about-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .about-text {
    max-width: 600px;
    text-align: left;
  }
  
  .about-text h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .about-text p {
    font-size: 1rem;
    color: #efefef;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  .about-image img {
    max-width: 100%;
    border-radius: 8px;
  }
  </style>
  