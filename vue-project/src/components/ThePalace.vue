<template>
  <section class="villa">
    <div class="container">
      <h1>Villa The Palace</h1>
      <p>
        Découvrez <strong>The Palace</strong>, une villa d’exception située au cœur du Maroc, alliant
        architecture contemporaine et élégance traditionnelle.
        Cette résidence de prestige vous offre un espace somptueux pour vos séjours en famille ou entre amis :
        piscine privée, jardin luxuriant, personnel de maison, et prestations haut de gamme.
      </p>
    </div>

    <div class="carousel-container">
      <Carousel :itemsToShow="1" :wrapAround="true" :autoplay="3000">
        <Slide v-for="n in 15" :key="n">
          <img :src="`/images/palace${n}.jpg`" :alt="`Image ${n}`" class="carousel-img" />
        </Slide>
      </Carousel>
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
  background-color: #fff;
}

.container {
  max-width: 900px;
  margin: 0 auto 40px;
}

h1 {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.7;
}

.carousel-container {
  max-width: 900px;
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
