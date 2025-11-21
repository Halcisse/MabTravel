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
      <h1>Des hébergements de luxe, fiables et entièrement sécurisés</h1>
      <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
      <p class="containerP">Nous vous proposons une sélection d’hébergements haut de gamme, choisis avec soin pour leur
        sécurité, leur confort et la qualité de leurs prestations. <br> <br>
        Selon vos besoins, nous vous orientons vers des logements certifiés de confiance : riads élégants, Airbnb
        entièrement équipés, villas modernes ou résidences d’exception comme la somptueuse Villa The Palace. <br> <br>
        Tous nos hébergements disposent du wifi, d’installations complètes et, selon vos envies, d’une piscine privée,
        d’un espace extérieur ou d’équipements premium. <br> <br>

        Pour vous inspirer, découvrez ci-dessous trois de nos villas les plus demandées. <br>
        Elles ne représentent qu’un aperçu de nos possibilités : chaque séjour étant unique, nous vous proposons
        toujours un logement sur mesure, parfaitement adapté à votre profil et à vos exigences, tout en garantissant un
        niveau de sécurité irréprochable.
        <br><br>
        Vous pourrez ensuite remplir notre formulaire afin de préciser vos attentes. Nous pourrons ainsi vous présenter
        l’hébergement idéal pour votre séjour à Marrakech.

      </p>

      <div class="gallery">

        <div class="palaceCard card">
          <h2>The Palace</h2>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <p class="cardP">
            Bienvenue à<strong> Villa The Palace </strong>, une adresse d’exception où élégance et confort se
            rencontrent au cœur de
            Marrakech. Cette villa somptueuse offre des espaces vastes, une décoration raffinée et des prestations haut
            de gamme pour un séjour inoubliable. Profitez d’une piscine majestueuse, de grands espaces extérieurs et
            d’un service premium pensé pour répondre à toutes vos envies.
          </p>
          <Carousel :items-to-show="1" :wrap-around="true" :autoplay="4000" class="carousel">
            <Slide v-for="(img, index) in imagesP" :key="index">
              <img :src="img.src" :alt="img.alt" class="carousel-img" />
            </Slide>
          </Carousel>

        </div>
        <div class="bonsaiCard card">
          <h2>La Villa Bonsaï</h2>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <p>
            Bienvenue à <strong>Villa Bonsaï</strong>, un havre de paix et de sérénité niché au cœur du Maroc.
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
            Bienvenue à <strong>Villa Targa,</strong> un véritable refuge moderne alliant style contemporain et
            atmosphère chaleureuse.
            Idéale pour les familles comme pour les groupes d’amis, cette villa offre des espaces lumineux, une piscine
            privée et un cadre reposant. Avec ses équipements complets et son service personnalisé, Villa Taga est le
            lieu parfait pour vivre une expérience authentique et sereine à Marrakech.
          </p>
          <Carousel :items-to-show="1" :wrap-around="true" :autoplay="4000" class="carousel">
            <Slide v-for="(img, index) in imagesT" :key="index">
              <img :src="img.src" :alt="img.alt" class="carousel-img" />
            </Slide>
          </Carousel>
        </div>
      </div>


    </section>

    <RouterLink :to="{ hash: '#Contact' }" class="button">Cliquez pour obtenir un devis ! </RouterLink>
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
  { src: './images/palace5.jpg', alt: 'Villa p5' },
  { src: './images/palace6.jpg', alt: 'Villa p6' },
  { src: './images/palace7.jpg', alt: 'Villa p7' },
  { src: './images/palace8.jpg', alt: 'Villa p8' },
  { src: './images/palace9.jpg', alt: 'Villa p9' },
  { src: './images/palace10.jpg', alt: 'Villa p10' },
  { src: './images/palace11.jpg', alt: 'Villa p11' },
  { src: './images/palace12.jpg', alt: 'Villa p12' },
  { src: './images/palace13.jpg', alt: 'Villa p13' },
  { src: './images/palace14.jpg', alt: 'Villa p14' },
  { src: './images/palace15.jpg', alt: 'Villa p15' },
])

const imagesB = ref([
  { src: './images/bonsai1.jpg', alt: 'Villa b1' },
  { src: './images/bonsai2.jpg', alt: 'Villa b2' },
  { src: './images/bonsai3.jpg', alt: 'Villa b3' },
  { src: './images/bonsai4.jpg', alt: 'Villa b4' },
  { src: './images/bonsai5.jpg', alt: 'Villa b5' },
  { src: './images/bonsai6.jpg', alt: 'Villa b6' },
  { src: './images/bonsai7.jpg', alt: 'Villa b7' },
  { src: './images/bonsai8.jpg', alt: 'Villa b8' },
  { src: './images/bonsai9.jpg', alt: 'Villa b9' },
  { src: './images/bonsai10.jpg', alt: 'Villa b10' },
  { src: './images/bonsai11.jpg', alt: 'Villa b11' },
  { src: './images/bonsai12.jpg', alt: 'Villa b12' },
  { src: './images/bonsai13.jpg', alt: 'Villa b13' },
  { src: './images/bonsai14.jpg', alt: 'Villa b14' },
])

const imagesT = ref([
  { src: './images/targa1.jpg', alt: 'Villa t1' },
  { src: './images/targa2.jpg', alt: 'Villa t2' },
  { src: './images/targa3.jpg', alt: 'Villa t3' },
  { src: './images/targa4.jpg', alt: 'Villa t4' },
  { src: './images/targa5.jpg', alt: 'Villa t5' },
  { src: './images/targa6.jpg', alt: 'Villa t6' },
  { src: './images/targa8.jpg', alt: 'Villa t8' },
  { src: './images/targa9.jpg', alt: 'Villa t9' },
  { src: './images/targa10.jpg', alt: 'Villa t10' },
  { src: './images/targa11.jpg', alt: 'Villa t11' },
  { src: './images/targa12.jpg', alt: 'Villa t12' },

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


.containerP {
  text-align: left;
}

.carousel {
  max-width: 1000px;
  margin: 0 auto 40px;
}

.carousel-img {
  width: 75%;
  height: 400px;
  object-fit: cover;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-bottom: 50px;
  background-color: rgb(158, 194, 240, 0.2);
  /* background-color: #004aad; */

}


p {
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
