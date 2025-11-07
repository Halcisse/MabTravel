<template>

  <footer class="footer">
    <div class="footer-content">
      <div class="contact">
        <img src="../../public/images/logomabymini2.png" alt="Logo les clés de Maby" class="logo">
        <p>📍 Marrakech, Maroc</p>
        <p>📞 +212 6 12 34 56 78</p>
        <p>📧 contact@clesdemaby.com</p>
      </div>

      <div class="map">
        <iframe title="Plan Marrakech"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2434559230385!2d-7.988971124397827!3d31.62947257417424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee4b74ed4d2d%3A0x2a5c8f8a0a61bb4b!2sMarrakech!5e0!3m2!1sfr!2sma!4v1717768000000!5m2!1sfr!2sma"
          width="100%" height="200" style="border:0" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>



    </div>
    <div class="footer-bottom">
      © {{ new Date().getFullYear() }} Les Cléfs de Maby. Tous droits réservés.
    </div>
  </footer>

</template>

<style>
.footer {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 40px 20px 20px;
  font-size: 1.5rem;
}

.footer-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
}

.contact p {
  margin: 4px 0;
  color: #004aad;
}

.map iframe {
  width: 100%;
  border-radius: 8px;
}

.footer-bottom {
  text-align: center;
  font-size: 0.85rem;
  margin-top: 20px;
  border-top: 2px solid white;
  padding-top: 10px;
  color: #ff914d;
}

.logoFooter {
  width: 360px;
  height: 180px;
}

/* Responsive */
/* @media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  } */

/* .contact,
  .map {
    flex: 1;
  } */

/* .contact {
    padding-right: 20px;
  }
} */
</style>