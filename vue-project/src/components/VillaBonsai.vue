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
          <Slide v-for="n in 15" :key="n">
            <img :src="`/images/bonsai${n}.jpg`" :alt="`Image ${n}`" class="carousel-img" />
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
</script>

<style scoped>
.villa {
  padding: 100px 20px 40px;
  background-color: #f8f8f8;
}

.container {
  max-width: 900px;
  margin: 0 auto 40px;
}

.carousel-container {
  max-width: 1100px;
  margin: 0 auto;
}

.carousel-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
</style>
