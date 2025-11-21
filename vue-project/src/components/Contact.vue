<template>
    <div class="contactContent" id="Contact">
        <section class="villa">
            <div class="container">
                <div class="title">
                    <h1>Contactez Les Clés de Maby</h1>
                    <p>
                        Pour organiser votre séjour sur mesure à Marrakech, nous sommes à votre écoute et disponibles
                        pour répondre à toutes vos questions. <br><br>
                        Vous pouvez nous contacter par e-mail, ou par téléphone. <br><br>
                        Afin de vous proposer un séjour parfaitement adapté à vos besoins, merci de nous préciser dans
                        votre
                        message : <br><br>

                    </p>
                </div>

                <div class="contactDetails">

                    <div class="contactTxt">
                        <p>

                            <font-awesome-icon icon="fa-solid fa-arrow-right" />Vos dates de séjour <br>

                            <font-awesome-icon icon="fa-solid fa-arrow-right" /> Le nombre de personnes<br>

                            <font-awesome-icon icon="fa-solid fa-arrow-right" /> L’âge des participants (obligatoire
                            pour adapter les activités)<br>

                            <font-awesome-icon icon="fa-solid fa-arrow-right" /> Le type de logement souhaité : villa,
                            Airbnb, riad, hôtel…<br>

                            <font-awesome-icon icon="fa-solid fa-arrow-right" /> Vos envies particulières (excursions,
                            détente, restaurants, événements…)<br>

                            <font-awesome-icon icon="fa-solid fa-arrow-right" /> Votre budget approximatif (optionnel
                            mais utile)<br><br>


                        </p>
                    </div>

                    <div class="contactCard">
                        <p>
                            <strong> <font-awesome-icon icon="fa-solid fa-at" bounce />
                                contact@clesdemaby.com
                                <br><br>
                                <font-awesome-icon icon="fa-solid fa-phone" flip />+212 6 12
                                34 56
                                78</strong>
                            <br><br> Nous reviendrons vers vous rapidement avec une proposition personnalisée et adaptée
                            à vos
                            attentes.
                        </p>
                        <br><br>


                    </div>
                </div>



            </div>


        </section>

    </div>

</template>


<style scoped>
.contactContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FF914D;
    width: 100%;
    padding-bottom: 50px;
}

.container h1 {
    font-family: "Momo Signature", cursive;
    font-size: 2.9rem;
    color: #fff;
    width: 80%;
    text-align: center;
    margin: 20px 0;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title p {
    color: #fff;
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

p {
    color: #004aad;
}

.contactTxt,
.contactCard {
    background-color: #fff;
    margin-right: 10px;
    padding: 0 20px;
    width: 100%;
    border: 8px double #FF914D;
}

.contactDetails {
    display: flex;
}
</style>