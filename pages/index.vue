<template>
  <div>
    <Header />
    <HeroSection />
    <About />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import HeroSection from '~/components/HeroSection.vue'
import About from '~/components/About.vue'
import Services from '~/components/Services.vue'
import Portfolio from '~/components/Portfolio.vue'
import Testimonials from '~/components/Testimonials.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    HeroSection,
    About,
    Services,
    Portfolio,
    Testimonials,
    Contact,
    Footer
  }
}
</script>

<style>
/* Reset CSS */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: 'Poppins', sans-serif;
  background-color: #181818;
  color: #ffffff;
  scroll-behavior: smooth;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

header, section, footer {
  padding: 60px 0;
}

.hero {
  background: url('') no-repeat center center/cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.services,
.portfolio,
.testimonials,
.contact {
  padding: 80px 0;
}

footer {
  background-color: #101010;
  color: #ccc;
  text-align: center;
  padding: 40px 0;
}

/* Add any additional global styles here */

/* Tambahkan gaya tambahan yang diperlukan */
.hero {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.hero p {
  font-size: 1.5rem;
}
</style>
