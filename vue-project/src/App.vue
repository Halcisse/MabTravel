<script setup>
import HeaderV from "./components/HeaderV.vue"
import Footer from "./components/FooterV.vue"
</script>

<template>
  <HeaderV class="TheHeader" />
  <main style="margin-top: 280px;">
    <router-view />
  </main>

  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Momo+Signature&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

h1 {

  font-size: 5.5rem;
  color: #004aad;
  margin-bottom: 0;
  width: 60%;
  text-align: right;

}

h2 {
  font-family: "Momo Signature", cursive;
  font-size: 2.9rem;
  color: #004aad;
  width: 80%;
  text-align: right;
}

h3 {
  color: #fff;
}

p {
  font-size: 1.8rem;
  line-height: 1.7;
  color: #fff;
  margin-bottom: 2.6rem;
  max-width: 900px;
  text-align: center;
}
</style>
