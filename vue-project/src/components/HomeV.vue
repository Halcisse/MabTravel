<template>
  <div class="accueil" id="Accueil">

    <section>
      <div class="container">
        <h1>Les Clés de Maby <font-awesome-icon icon="fa-solid fa-bell" shake class="dot" /> – Conciergerie spécialisée
          dans l’organisation de voyages à Marrakech</h1>
        <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
        <p>
          Les Clés de Maby est une conciergerie dédiée à l’organisation de voyages sur mesure à Marrakech. <br><br> Nous
          créons pour vous des séjours entièrement personnalisés, pensés selon vos envies, votre budget et votre
          rythme.<br>
          <br>Un hébergement soigneusement sélectionné, des activités incontournables ou confidentielles, expériences
          uniques,
          transferts, tables d’exception… nous orchestrons chaque détail pour que votre séjour soit fluide, confortable
          et inoubliable. <br><br>

          Que vous veniez en couple, en famille, entre amis ou pour un événement spécial, nous élaborons un programme
          clé en main, tout en restant disponibles à chaque instant grâce à une assistance personnalisée. <br><br>Notre
          objectif : vous permettre de profiter pleinement de Marrakech sans contraintes, avec la tranquillité d’esprit
          d’un accompagnement professionnel et bienveillant.<br><br>

          Avec <strong>Les Clés de Maby</strong>, découvrez une nouvelle manière de voyager : simple, sereine et
          entièrement adaptée à vos besoins. <br><br>Bienvenue dans votre expérience sur-mesure à Marrakech.
        </p>
      </div>
    </section>

    <aside>
      <h2>L’excellence d’un service sur mesure pour votre voyage à Marrakech</h2>
      <div class="asideContent">

        <div class="card logementCard">
          <!-- icon logement-->
          <font-awesome-icon icon="fa-solid fa-house-chimney" class="icon" />

          <h3>Hébérgement</h3>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <h4>Nous sélectionnons pour vous les meilleurs hébergements selon vos envies et votre budget.</h4>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <p>Riads authentiques, villas privées, hôtels de charme ou établissements haut de gamme : nous trouvons le
            lieu idéal pour un séjour confortable et adapté à votre style.</p>
        </div>

        <div class="card assistanceCard">
          <!-- icon assistance-->
          <font-awesome-icon icon="fa-solid fa-handshake-angle" class="icon" />
          <h3>Assistance</h3>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <h4>Profitez d’un accompagnement personnalisé tout au long de votre séjour.</h4>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <p>Nous restons disponibles avant, pendant et après votre voyage pour répondre à vos besoins, ajuster votre
            programme ou gérer vos demandes en temps réel. Votre tranquillité est notre priorité.</p>
        </div>

        <div class="card activitesCard">
          <!-- icon activite-->

          <font-awesome-icon icon="fa-solid fa-map-location" class="icon" />
          <h3>Activités</h3>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <h4>Découvrez Marrakech à travers des activités soigneusement choisies pour vous.</h4>
          <font-awesome-icon icon="fa-solid fa-ellipsis" class="dot" />
          <p>Excursions, expériences culinaires, bien-être, aventures ou découvertes culturelles… Nous créons un
            programme sur mesure pour rendre votre voyage unique et mémorable.</p>
        </div>

      </div>

      <RouterLink :to="{ hash: '#Contact' }" class="button">CONTACTEZ-NOUS POUR OBTENIR UN DEVIS
      </RouterLink>
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
  background-image: url(../../public/images/palace12.jpg);

}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid rgb(158, 194, 240, 0.2);
  background-color: #fff;
  margin: 110px 0;
  width: 60%;
  align-content: center;
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
  width: 70%;
  margin-bottom: 45px;
  margin-top: 30px;
}

h2 {

  margin-bottom: 55px;
  width: 50%;
}

h3 {
  color: #004aad;
  font-size: 24px;
}

h4 {
  color: #004aad;
  font-size: 20px;
  font-style: italic;
  text-align: center;
  font-weight: bold;
  width: 60%;
  font-size: 23px;
}

.dot {
  color: #FF914D;
  width: 30px;
  height: 30px;
}

img {
  max-height: 1000px;
  width: 100%;
  padding: 0;
  margin: 0;
}

.icon {
  color: #004aad;
  width: 50px;
  height: 50px;
  margin-top: 30px;

}

.container .icon {
  color: #FF914D;
}

.container p {
  color: #004aad;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FF914D;

}

.asideContent {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;
  width: 80%;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: auto;
  /* background-image: url("../../public/images/palace12.jpg");
  background-size: contain; */
  background-color: #fff;
  overflow: hidden;
  padding: 15px 10px 25px 10px;
}

.btn-container {
  margin-bottom: 70px;
}

p {
  color: #004aad;

}

.card p {
  font-size: 22px;

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
