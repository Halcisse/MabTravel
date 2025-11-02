<template>
  <section class="servicesContent">
    <div class="container">
      <h1>De nombreux services pour une expérience unique </h1>
      <p class="servicesP">Nous vous proposons une large gamme de logements à louer, notre priorité étant la sécurité.
        <br><br>
        Solutions de séjour clé en main, avec lieu d'hébergement + planning d'activité excursions bien être + assistance
        24/7j <br>
        Selon vos besoins, nous pouvons vous proposer des AirBnb certifié de qualité, sécurisé et tout équipé, avec ou
        sans piscine ou des villa somptueuse comme la Villa The Palace.
      </p>
      <div class="servicesCard">

        <div class="card excursionsCard">
          <!-- icon excursions-->
          <font-awesome-icon icon="fa-solid fa-mountain-sun" class="icon" />
          <h3>Les excursions</h3>
          <p>Propose un planning pour <br> profiterpleinement de son séjour, activités, tourisme, etc..</p>
          <div class="imgCard">

            <img src="../../public/images/palace9.jpg" alt="image palace 9" class="img">
            <img src="../../public/images/palace10.jpg" alt="image palace 10" class="img">
          </div>

        </div>

        <div class="card restaurantsCard">
          <!-- icon restaurants-->
          <font-awesome-icon icon="fa-solid fa-utensils" class="icon" />
          <h3>Les Restaurants & Marchés</h3>
          <p>Propose un planning pour profiter <br> pleinement de son séjour, activités, tourisme, etc..</p>
          <div class="imgCard">

            <img src="../../public/images/palace9.jpg" alt="image palace 9" class="img">
            <img src="../../public/images/palace10.jpg" alt="image palace 10" class="img">
          </div>
        </div>

        <div class="card bienetreCard">
          <!-- icon bien-être-->
          <font-awesome-icon icon="fa-solid fa-hand-holding-heart" class="icon" />
          <h3>Les activités Bien-être</h3>
          <p>Propose un planning pour profiter <br> pleinement de son séjour, activités, tourisme, etc..</p>
          <div class="imgCard">

            <img src="../../public/images/palace9.jpg" alt="image palace 9" class="img">
            <img src="../../public/images/palace10.jpg" alt="image palace 10" class="img">
          </div>
        </div>

      </div>
    </div>


    <RouterLink to="/contact" class="button">Nous contacter</RouterLink>

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
  background-color: #f8f8f8;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FF914D;
  border: 6px solid #FF914D;
  /* background-color: #004aad; */
  width: 55%;
  margin-bottom: 40px;
}

h1 {
  width: 90%;
  color: #004aad;
}

h3 {
  font-size: 44px;
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
  padding: 60px 0;
  width: 75%;
}

.servicesP {
  color: #fff;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
  padding-top: 40px;
  margin-bottom: 50px;
  border-top: 9px solid #004aad;
  background-color: #fff;

}

.icon {
  color: #004aad;
  width: 90px;
  height: 90px;

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
