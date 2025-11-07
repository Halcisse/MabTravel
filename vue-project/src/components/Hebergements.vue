<template>
  <!-- <section class="villa">
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
  </section> -->

  <div class="hebergContent" id="Hebergements">
    <section class="container">
      <h1>Des hébergements de luxe et sécurisés</h1>
      <font-awesome-icon icon="fa-solid fa-ellipsis" class="doth1" />
      <p class="containerP">Nous vous proposons une large gamme de logements à louer, notre priorité étant la sécurité.
        <br><br>
        Selon vos besoins, nous pouvons vous proposer des AirBnb certifié de qualité, sécurisé et tout équipé, avec ou
        sans piscine ou des villa somptueuse comme la Villa The Palace. <br>
        Les logements sont tous équipés du wifi, et avec toutes les installations nécéssaires. <br><br>
        Voici quelques photos de nos principaux partenaires, pour vous inspirer. <br>
        Vous pourrez ensuite remplir le formulaire afin de connaitre vos besoins précis, nous pourrons ainsi vous
        proposer le logement idéal.

      </p>

      <div class="gallery">

        <div class="palaceCard card">
          <h2>The Palace</h2>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <p class="cardP">
            Bienvenue à <strong>Villa Bonsai</strong>, un havre de paix et de sérénité niché au cœur du Maroc.
            Cette villa allie design épuré et nature luxuriante, idéale pour les amateurs de calme et de bien-être.
            Profitez d’un jardin zen, d’une piscine privée et d’un service sur mesure pour un séjour inoubliable.
          </p>
          <Carousel :items-to-show="1" :wrap-around="true" :autoplay="4000" class="carousel">
            <Slide v-for="(img, index) in imagesP" :key="index">
              <img :src="img.src" :alt="img.alt" class="carousel-img" />
            </Slide>
          </Carousel>

        </div>
        <div class="bonsaiCard card">
          <h2>La Villa Bonsai</h2>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <p>
            Bienvenue à <strong>Villa Bonsai</strong>, un havre de paix et de sérénité niché au cœur du Maroc.
            Cette villa allie design épuré et nature luxuriante, idéale pour les amateurs de calme et de bien-être.
            Profitez d’un jardin zen, d’une piscine privée et d’un service sur mesure pour un séjour inoubliable.
          </p>
          <Carousel :items-to-show="1" :wrap-around="true" :autoplay="4000" class="carousel">
            <Slide v-for="(img, index) in imagesB" :key="index">
              <img :src="img.src" :alt="img.alt" class="carousel-img" />
            </Slide>
          </Carousel>
        </div>

        <div class="TargaCard card">
          <h2>La Villa Targa</h2>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <p>
            Bienvenue à <strong>Villa Bonsai</strong>, un havre de paix et de sérénité niché au cœur du Maroc.
            Cette villa allie design épuré et nature luxuriante, idéale pour les amateurs de calme et de bien-être.
            Profitez d’un jardin zen, d’une piscine privée et d’un service sur mesure pour un séjour inoubliable.
          </p>
          <Carousel :items-to-show="1" :wrap-around="true" :autoplay="4000" class="carousel">
            <Slide v-for="(img, index) in imagesT" :key="index">
              <img :src="img.src" :alt="img.alt" class="carousel-img" />
            </Slide>
          </Carousel>
        </div>
      </div>


    </section>

    <RouterLink to="/contact" class="button">Cliquez pour remplir le formulaire!</RouterLink>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const imagesP = ref([
  { src: './images/palace1.jpg', alt: 'Villa p1' },
  { src: './images/palace2.jpg', alt: 'Villa p2' },
  { src: './images/palace3.jpg', alt: 'Villa p3' },
  { src: './images/palace4.jpg', alt: 'Villa p4' },
])

const imagesB = ref([
  { src: './images/bonsai1.jpg', alt: 'Villa b1' },
  { src: './images/bonsai2.jpg', alt: 'Villa b2' },
  { src: './images/bonsai3.jpg', alt: 'Villa b3' },
  { src: './images/bonsai4.jpg', alt: 'Villa b4' },
])

const imagesT = ref([
  { src: './images/photo1.jpeg', alt: 'Villa p1' },
  { src: './images/photo2.jpeg', alt: 'Villa p2' },
  { src: './images/photo3.jpeg', alt: 'Villa p3' },
  { src: './images/photo4.jpeg', alt: 'Villa p4' },
])

</script>

<style scoped>
.hebergContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px 40px;
  /* background-color: #f8f8f8; */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  margin: 40px;

}

h1 {
  width: 55%;

}

h2 {
  color: #fff;
}

.carousel {
  max-width: 1000px;
  margin: 0 auto 40px;
}

.carousel-img {
  width: 75%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #004aad;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10px 0 30px 0;
  border-radius: 10px;
  margin-bottom: 50px;
  border-bottom: 8px solid #fff;
  background-color: #004aad;

}


.containerP {
  color: #004aad;
}



.button {
  background-color: #004aad;
  color: white;
  border: none;
  padding: 14px 28px;
  margin: 60px 0;
  font-size: 26px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #79ade4;
}

.doth1 {
  color: #FF914D;
  width: 50px;
  height: 50px;

}

.dot {
  color: #FF914D;
  width: 30px;
  height: 30px;
  display: inline-block;
  text-align: right;
}
</style>
