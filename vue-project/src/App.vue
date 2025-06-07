<script setup>
import HeaderV from "./components/HeaderV.vue"
import Footer from "./components/FooterV.vue"
</script>

<template>
  <HeaderV class="TheHeader" />
  <main style="margin-top: 280px;">
    <router-view />
  </main>

  <Footer  />
</template>

<style>

h1 {
  font-size: 5.5rem;
  color: #004aad;
  margin-bottom: 0;

}
p {
  font-size: 1.8rem;
  line-height: 1.7;
  /* color: #555; */
  margin-bottom: 2.6rem;
  max-width: 900px;
  text-align: center;
}
</style>
