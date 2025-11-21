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

main{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {

  font-size: 3.5rem;
  color: #004aad;
  margin-bottom: 0;
  width: 40%;
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
