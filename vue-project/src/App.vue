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

h1 {
  font-size: 5.5rem;
  color: #004aad;
  margin-bottom: 0;
  width: 55%;
  text-align: right;

}

h2 {
  font-size: 2.9rem;
  color: #004aad;
  width: 60%;
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
