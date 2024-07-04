<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-logo">
            <img src="/static/logo_adit.png" alt="Footer Logo">
          </div>
          <div class="footer-social">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Adit Sembiring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0; /* Mengurangi padding atas dan bawah dari 30px menjadi 20px */
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-top {
    display: flex;
    align-items: center;
  }
  
  .footer-logo img {
    height: 40px; /* Mengurangi tinggi logo dari 50px menjadi 40px */
  }
  
  .footer-social {
    margin-left: 10px; /* Mengurangi margin kiri dari 20px menjadi 10px */
  }
  
  .footer-social a {
    color: #fff;
    font-size: 1.3rem; /* Mengurangi ukuran font ikon dari 1.5rem menjadi 1.3rem */
    margin-left: 8px; /* Mengurangi margin kiri ikon dari 10px menjadi 8px */
    transition: color 0.3s;
  }
  
  .footer-social a:hover {
    color: #f39c12;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 10px; /* Mengurangi margin atas dari 20px menjadi 10px */
    font-size: 0.9rem; /* Mengurangi ukuran font dari 1rem menjadi 0.9rem */
  }
  </style>
  