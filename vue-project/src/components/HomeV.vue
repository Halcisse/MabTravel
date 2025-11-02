<template>
  <div class="accueil">

    <section>
      <div class="container">
        <h1>Bienvenue chez Les Clés de Maby</h1>

        <p>
          La conciergerie <strong>Les Clés de Maby</strong> vous ouvre les portes de l’excellence au Maroc. <br>
          Nous proposons des villas haut de gamme, soigneusement sélectionnées, avec des services personnalisés
          pour un séjour inoubliable. <br><br>
          Que ce soit pour un voyage de détente, une expérience culturelle ou une escapade de luxe, notre équipe
          s’assure que chaque moment dépasse vos attentes.
        </p>


        <Carousel :items-to-show="1" :wrap-around="true" :autoplay="4000" class="carousel">
          <Slide v-for="(img, index) in images" :key="index">
            <img :src="img.src" :alt="img.alt" class="carousel-img" />
          </Slide>
        </Carousel>

      </div>



    </section>

    <aside>
      <h2>Les clés de Maby vous assurent un service de qualité</h2>
      <div class="asideContent">

        <div class="card logementCard">
          <!-- icon logement-->
          <font-awesome-icon icon="fa-solid fa-house-chimney" class="icon" />

          <h3>Hébérgement</h3>
          <p>Propose un planning pour profiterpleinement de son séjour, activités, tourisme, etc..</p>
        </div>

        <div class="card assistanceCard">
          <!-- icon assistance-->
          <font-awesome-icon icon="fa-solid fa-handshake-angle" class="icon" />
          <h3>Assistance</h3>
          <p>Propose un planning pour profiterpleinement de son séjour, activités, tourisme, etc..</p>
        </div>

        <div class="card activitesCard">
          <!-- icon activite-->

          <font-awesome-icon icon="fa-solid fa-map-location" class="icon" />
          <h3>Activités</h3>
          <p>Propose un planning pour profiterpleinement de son séjour, activités, tourisme, etc..</p>
        </div>

      </div>

      <RouterLink to="/contact" class="button">Prenez contact avec nous tout de suite !</RouterLink>
    </aside>

  </div>


</template>

<script setup>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const images = ref([
  { src: './images/photo1.jpeg', alt: 'Villa 1' },
  { src: './images/photo2.jpeg', alt: 'Villa 2' },
  { src: './images/photo3.jpeg', alt: 'Villa 3' },
  { src: './images/photo4.jpeg', alt: 'Villa 4' },
  { src: './images/photo5.jpeg', alt: 'Villa 5' },
])


</script>

<style scoped>
.accueil {
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
  padding-bottom: 50px;
  margin-bottom: 70px;
  background-color: #004aad;

}

.content {
  display: flex;
  width: 80%;
}

h1 {
  color: #FF914D;
  text-align: right;

}

h2 {
  margin-bottom: 55px;
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
  border: 1px solid #004aad;
}

.icon {
  color: #004aad;
  width: 80px;
  height: 80px;

}

aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px 40px;
  background-color: #FF914D;
  width: 53%;
}

.asideContent {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;

}

.card {
  border: 3px solid white;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding-top: 40px;

}

.btn-container {
  margin-bottom: 40px;
}

.card p {
  color: #004aad;
}

.card h3 {
  color: #004aad;
  font-size: 30px;
}

.button {
  background-color: #004aad;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 26px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #79ade4;
}
</style>
