<template>
  <section class="villa">
    <div class="container">
      <h1>The Palace</h1>
      <div class="carousel-container">

        <p>
          Découvrez <strong>The Palace</strong>, une villa d’exception située au cœur du Maroc, alliant
          architecture contemporaine et élégance traditionnelle.
          Cette résidence de prestige vous offre un espace somptueux pour vos séjours en famille ou entre amis :
          piscine privée, jardin luxuriant, personnel de maison, et prestations haut de gamme.
        </p>

        <Carousel :itemsToShow="1" :wrapAround="true" :autoplay="4000">
          <Slide v-for="(img, index) in images" :key="index">
            <img :src="img.src" :alt="img.alt" class="carousel-img" />
          </Slide>
        </Carousel>
      </div>

    </div>

    <aside>
      <h2>Ajouter une gallerie et des arguments sur la villa</h2>
        <RouterLink to="/contact" class="button">Prenez contact avec nous tout de suite !</RouterLink>
    </aside>
  </section>
</template>

<script setup>

import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const images = ref([
  { src: './images/palace1.jpg', alt: 'Palace 1' },
  { src: './images/palace2.jpg', alt: 'Palace 2' },
  { src: './images/palace3.jpg', alt: 'Palace 3' },
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
