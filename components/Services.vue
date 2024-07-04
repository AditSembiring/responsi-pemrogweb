<template>
  <section class="services">
    <div class="container">
      <h2>My Service</h2>
      <div class="services-grid">
        <div class="service-item">
          <i class="fas fa-laptop-code"></i>
          <h3>Graphic Design</h3>
          <p>I can create an eye-catching design for you.</p>
        </div>
        <div class="service-item">
          <i class="fas fa-mobile-alt"></i>
          <h3>Photo Manipulation</h3>
          <p>Manipulating photos to meet your needs.</p>
        </div>
        <div class="service-item">
          <i class="fas fa-chart-line"></i>
          <h3>Digital Art</h3>
          <p>Creating digital art according to your concept.</p>
        </div>
        <div class="service-item">
          <i class="fas fa-database"></i>
          <h3>3D Modeling</h3>
          <p>Creating the 3D models you need.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
.services {
  background-color: #212121;
  padding: 80px 0;
  text-align: center;
}

.services h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  justify-items: center;
}

.service-item {
  text-align: center;
  padding: 20px;
  background-color: #569bf1;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.service-item i {
  font-size: 3rem;
  color: #f39c12;
  margin-bottom: 1rem;
}

.service-item h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.service-item p {
  font-size: 1rem;
  color: #ffffff;
}

.service-item:hover {
  transform: translateY(-10px);
}
</style>
