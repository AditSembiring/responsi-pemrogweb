<template>
    <section id="testimonials" class="testimonials">
      <div class="container">
        <h2>Testimonials</h2>
        <div class="testimonial">
          <div class="testimonial-text">
            <p>"it's actually so perfectly done as i asked for, and the quality is even better than i expected, i did not even have to revise once and it was already delivered perfectly. I will be coming back multiple times for sure! amazing service."</p>
            <p class="author">nocxde</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Testimonials'
  }
  </script>
  
  <style scoped>
  .testimonials {
    padding: 80px 0;
    background-color: #212121;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .testimonials h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .testimonial {
    margin-top: 50px;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  .testimonial p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
  }
  
  .testimonial .author {
    margin-top: 20px;
    font-style: italic;
    color: #777;
  }
  </style>
  