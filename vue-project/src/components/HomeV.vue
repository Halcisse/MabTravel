<template>
  <section class="accueil">
    <div class="container">
      <h1>Bienvenue chez Les Clés de Maby</h1>

      <p>
        La conciergerie <strong>Les Clés de Maby</strong> vous ouvre les portes de l’excellence au Maroc.
        Nous proposons des villas haut de gamme, soigneusement sélectionnées, avec des services personnalisés
        pour un séjour inoubliable. <br>
        Que ce soit pour un voyage de détente, une expérience culturelle ou une escapade de luxe, notre équipe
        s’assure que chaque moment dépasse vos attentes.
      </p>


      <Carousel :items-to-show="1" :wrap-around="true" :autoplay="6000" class="carousel">
        <Slide v-for="(img, index) in images" :key="index">
          <img :src="img.src" :alt="img.alt" class="carousel-img" />
        </Slide>
      </Carousel>



    </div>




  </section>
</template>

<script setup>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const images = ref([
  { src: '../../public/images/photo1.jpeg', alt: 'Villa 1' },
  { src: '../../public/images/photo2.jpeg', alt: 'Villa 2' },
  { src: '../../public/images/photo3.jpeg', alt: 'Villa 3' },
  { src: '../../public/images/photo4.jpeg', alt: 'Villa 4' },
  { src: '../../public/images/photo5.jpeg', alt: 'Villa 5' },
])


</script>

<style scoped>
.accueil {
  padding: 100px 20px 40px;
  background-color: #f8f8f8;

}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-width: 900px; */
  margin: 0 auto 40px;
}

.content {
  display: flex;
  width: 80%;
}

h1{
    width: 40%;
}



.carousel {
  max-width: 1000px;
  margin: 0 auto 40px;
}

.carousel-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
}

.btn-container {
  margin-bottom: 40px;
}

button {
  background-color: #052d58;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #052d58;
}
</style>
