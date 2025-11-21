<template>
  <section class="servicesContent" id="Services">
    <h1>Des services sur mesure pour une expérience inoubliable à Marrakech</h1>

    <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
    <div class="container">

      <p class="servicesP">Nous vous proposons une gamme complète de services conçus pour simplifier votre séjour et
        sublimer votre expérience à Marrakech. <br><br>
        De l’hébergement sécurisé aux activités personnalisées, en passant par un accompagnement 24h/24, notre objectif
        est de vous offrir un voyage clé en main, fluide et totalement adapté à vos envies.
        <br><br>
        Selon vos besoins, nous sélectionnons pour vous des logements certifiés et équipés, allant des Airbnb de qualité
        aux villas de prestige comme The Palace. <br> <br>
        Nous élaborons ensuite votre planning d’activités : excursions, découvertes locales, expériences bien-être,
        restaurants, sorties culturelles… Tout est pensé pour que vous profitiez pleinement de votre séjour, sans aucune
        contrainte. <br><br>
      </p>
      <div class="servicesCard">

        <div class="card excursionsCard">
          <font-awesome-icon icon="fa-solid fa-mountain-sun" class="icon" />
          <h3>Excursions authentiques et expériences inoubliables</h3>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />

          <p>Explorez Marrakech et ses environs à travers des excursions soigneusement sélectionnées : désert d’Agafay,
            vallée de l’Ourika, balades en quad, visites guidées… Nous organisons chaque sortie selon vos envies pour
            vous offrir des moments mémorables.</p>
          <!-- <div class="imgCard">

            <img src="../../public/images/palace9.jpg" alt="image palace 9" class="img">
            <img src="../../public/images/palace10.jpg" alt="image palace 10" class="img">
          </div> -->

        </div>

        <div class="card restaurantsCard">
          <!-- icon restaurants-->
          <font-awesome-icon icon="fa-solid fa-utensils" class="icon" />
          <h3>Découvertes culinaires et immersion dans les marchés locaux</h3>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <p>Savourez le meilleur de la gastronomie marocaine grâce à nos recommandations personnalisées : restaurants
            raffinés, adresses secrètes, rooftops, souks et marchés authentiques. Nous vous guidons vers les lieux les
            plus adaptés à votre style et à vos envies.</p>
          <!--
          <div class="imgCard">

            <img src="../../public/images/palace9.jpg" alt="image palace 9" class="img">
            <img src="../../public/images/palace10.jpg" alt="image palace 10" class="img">
          </div> -->
        </div>

        <div class="card bienetreCard">
          <!-- icon bien-être-->
          <font-awesome-icon icon="fa-solid fa-hand-holding-heart" class="icon" />
          <h3>Moments bien-être : hammams, spas et relaxation</h3>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <p>Offrez-vous une parenthèse de détente avec nos expériences bien-être : hammam traditionnel, soins du corps,
            massages, spas haut de gamme… Nous vous réservons des espaces de qualité pour une pause apaisante pendant
            votre séjour.</p>
          <!-- <div class="imgCard">

            <img src="../../public/images/palace9.jpg" alt="image palace 9" class="img">
            <img src="../../public/images/palace10.jpg" alt="image palace 10" class="img">
          </div> -->
        </div>

      </div>
    </div>


    <RouterLink :to="{ hash: '#Contact' }" class="button">Nous contacter</RouterLink>

  </section>
</template>

<script setup>


</script>

<style scoped>
.servicesContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px 40px;
  background-color: #fff
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  /* width: 75%; */
  margin-bottom: 40px;
  margin-top: 35px;
  background-color: rgb(158, 194, 240, 0.2);
}

h1 {
  width: 60%;
  color: #004aad;
  margin-bottom: 15px;
}

.doth1 {
  color: #FF914D;
  width: 50px;
  height: 50px;

}

h3 {
  font-size: 44px;
  text-align: center;

}

p,
h3 {
  color: #004aad;
}

.servicesCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 75%;
}

.servicesP {
  text-align: left;
}
.restaurantsCard p {
  padding: 0 15px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
  padding: 60px 0;
  margin-bottom: 50px;
  background-color: #fff;

}

.icon {
  color: #004aad;
  width: 50px;
  height: 50px;

}

.dot {
  color: #FF914D;
  width: 30px;
  height: 30px;
}

.imgCard {
  display: flex;
  align-items: center;
  justify-content: center;

}

.img {
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 40px;
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
