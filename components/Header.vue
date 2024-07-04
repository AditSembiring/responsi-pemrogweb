<template>
    <header class="header">
      <div class="container">
        <div class="logo">
          <img src="/static/logo_adit.png" alt="Logo">
        </div>
        <nav class="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #000;
    padding: 20px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .logo img {
    height: 50px;
  }
  
  .nav ul {
    display: flex;
    list-style: none;
  }
  
  .nav li {
    margin: 0 15px;
  }
  
  .nav a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;
  }
  
  .nav a:hover {
    color: #f39c12;
  }
  </style>
  