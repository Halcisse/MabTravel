<template>
  <div class="accueil" id="Accueil">

    <section>
      <div class="container">
        <h1>Bienvenue chez Les <font-awesome-icon icon="fa-solid fa-key" class="icon" /> Clés de Maby</h1>

        <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />

        <p>
          La conciergerie <strong>Les Clés de Maby</strong> vous ouvre les portes de l’excellence au Maroc. <br>
          Nous proposons des villas haut de gamme, soigneusement sélectionnées, avec des services personnalisés
          pour un séjour inoubliable. <br><br>
          Que ce soit pour un voyage de détente, une expérience culturelle ou une escapade de luxe, notre équipe
          s’assure que chaque moment dépasse vos attentes.
        </p>

        <img src="../../public/images/photo2.jpeg" alt="photo d'une villa ">


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

      <RouterLink to="/contact" class="button">CLIQUEZ ICI POUR OBTENIR UN DEVIS</RouterLink>
    </aside>

    <Hebergements />
    <Services />
    <Contact />

  </div>


</template>

<script setup>
import Hebergements from './Hebergements.vue';
import Services from './Services.vue';
import Contact from './Contact.vue'
</script>

<style scoped>
.accueil {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 100px 20px 40px; */
  background-color: rgb(158, 194, 240, 0.2);


}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 50px 0;
  margin-bottom: 70px;
  /* border: 2px solid #FF914D; */
}

.container p {
  text-align: left;
}

.content {
  display: flex;
  /* width: 80%; */
}

h1 {
  color: #004aad;
  text-align: right;
  width: 55%;
}

h2 {

  margin-bottom: 95px;
  width: 40%;
}

h3 {
 color: #004aad;
  font-size: 30px;
}

.dot {
  color: #FF914D;
  width: 50px;
  height: 50px;
}

img {
  max-height: 1000px;
  width: 100%;
  padding: 0;
  margin: 0;
}

.icon {
 color: #004aad;
  width: 80px;
  height: 80px;
  margin-top: 30px;

}

.container .icon {
  color: #FF914D;
}

.container p {
  color: #004aad;
}

aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px 40px 0;
  /* background-color: #FF914D;*/

}

.asideContent {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;

}

.card {

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 400px;
  /* background-image: url("../../public/images/palace12.jpg");
  background-size: contain; */
  background-color: #fff;

}

.btn-container {
  margin-bottom: 70px;
}

p {
  color: #004aad;
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
  margin: 70px 0;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #f9d3bc;
  color: #004aad;
}
</style>
