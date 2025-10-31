<template>
  <section class="villa">
    <div class="container">
      <h1>Villa Bonsai</h1>
      <div class="carousel-container">
        <p>
          Bienvenue à <strong>Villa Bonsai</strong>, un havre de paix et de sérénité niché au cœur du Maroc.
          Cette villa allie design épuré et nature luxuriante, idéale pour les amateurs de calme et de bien-être.
          Profitez d’un jardin zen, d’une piscine privée et d’un service sur mesure pour un séjour inoubliable.
        </p>
        <Carousel :itemsToShow="1" :wrapAround="true" :autoplay="3000">
          <Slide v-for="(img, index) in images" :key="index">
            <img :src="img.src" :alt="img.alt" class="carousel-img" />
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>

import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const images = ref([
  { src: './images/bonsai1.jpg', alt: 'Bonsai 1' },
  { src: './images/bonsai2.jpg', alt: 'Bonsai 2' },
  { src: './images/bonsai3.jpg', alt: 'Bonsai 3' },
  { src: './images/bonsai4.jpg', alt: 'Bonsai 4' },
])

</script>

<style scoped>
.villa {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px 40px;
  background-color: #f8f8f8;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FF914D;
  width: 55%;
}

.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding-bottom: 50px;
}

.carousel-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #FF914D;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
</style>
